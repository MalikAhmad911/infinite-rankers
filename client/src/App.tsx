import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import Portfolio from "@/pages/portfolio";
import CaseStudyDetail from "@/pages/case-study-detail";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import BookDemo from "@/pages/book-demo";
import LandingPage from "@/pages/landing-page";
import { InfiniteRankersAgency, InfiniteRankersSEO, InfiniteRankersAds, InfiniteRankersAutomation } from "@/pages/partner-pages";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import SitemapPage from "@/pages/sitemap-page";
import AdminDashboard from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:id" component={CaseStudyDetail} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/book-demo" component={BookDemo} />
      <Route path="/infinite-rankers-agency" component={InfiniteRankersAgency} />
      <Route path="/infinite-rankers-seo-services" component={InfiniteRankersSEO} />
      <Route path="/infinite-rankers-paid-advertising" component={InfiniteRankersAds} />
      <Route path="/infinite-rankers-ai-automation" component={InfiniteRankersAutomation} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/sitemap" component={SitemapPage} />
      <Route path="/admin/indexing" component={AdminDashboard} />
      <Route path="/:slug">{(params) => <LandingPage slug={params.slug} />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <ScrollToTop />
            <Navbar />
            <main>
              <Breadcrumbs />
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
