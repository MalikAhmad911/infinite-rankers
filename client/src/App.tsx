import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import SitemapPage from "@/pages/sitemap-page";
import AdminDashboard from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";
import { InfiniteRankersAgency, InfiniteRankersSEO, InfiniteRankersAds, InfiniteRankersAutomation } from "@/pages/partner-pages";
import { ALL_SERVICES, CASE_STUDIES } from "@/lib/constants";
import { getBlogPostBySlug } from "@/lib/blog-data";

function SmartPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if (ALL_SERVICES.some(s => s.slug === slug)) return <ServiceDetail />;
  if (getBlogPostBySlug(slug)) return <BlogPost />;
  if (CASE_STUDIES.some(cs => cs.id === slug)) return <CaseStudyDetail />;
  return <LandingPage slug={slug} />;
}

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/book-demo" component={BookDemo} />
      <Route path="/infinite-rankers-agency" component={InfiniteRankersAgency} />
      <Route path="/infinite-rankers-seo-services" component={InfiniteRankersSEO} />
      <Route path="/infinite-rankers-paid-advertising" component={InfiniteRankersAds} />
      <Route path="/infinite-rankers-ai-automation" component={InfiniteRankersAutomation} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/sitemap" component={SitemapPage} />
      <Route path="/admin/indexing" component={AdminDashboard} />
      <Route path="/:slug">{(params) => <SmartPage params={params} />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

const isServer = typeof window === "undefined";

const defaultQueryClient = isServer ? new QueryClient() : new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App({ ssrUrl, queryClient }: { ssrUrl?: string; queryClient?: QueryClient }) {
  const qc = queryClient || defaultQueryClient;
  const content = (
    <ThemeProvider>
      <QueryClientProvider client={qc}>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            {!isServer && <ScrollToTop />}
            <Navbar />
            <main>
              <Breadcrumbs />
              <AppRouter />
            </main>
            <Footer />
          </div>
          {!isServer && <Toaster />}
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );

  if (ssrUrl) {
    return <WouterRouter ssrPath={ssrUrl}>{content}</WouterRouter>;
  }

  return content;
}

export default App;
