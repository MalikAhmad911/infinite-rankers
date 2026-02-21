import { lazy, Suspense } from "react";
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
import NotFound from "@/pages/not-found";
import { ALL_SERVICES, CASE_STUDIES } from "@/lib/constants";
import { getBlogPostBySlug } from "@/lib/blog-data";

const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const ServiceDetail = lazy(() => import("@/pages/service-detail"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const CaseStudyDetail = lazy(() => import("@/pages/case-study-detail"));
const Pricing = lazy(() => import("@/pages/pricing"));
const Contact = lazy(() => import("@/pages/contact"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const BookDemo = lazy(() => import("@/pages/book-demo"));
const LandingPage = lazy(() => import("@/pages/landing-page"));
const Terms = lazy(() => import("@/pages/terms"));
const Privacy = lazy(() => import("@/pages/privacy"));
const SitemapPage = lazy(() => import("@/pages/sitemap-page"));
const AdminDashboard = lazy(() => import("@/pages/admin-dashboard"));
const InfiniteRankersAgency = lazy(() => import("@/pages/partner-pages").then(m => ({ default: m.InfiniteRankersAgency })));
const InfiniteRankersSEO = lazy(() => import("@/pages/partner-pages").then(m => ({ default: m.InfiniteRankersSEO })));
const InfiniteRankersAds = lazy(() => import("@/pages/partner-pages").then(m => ({ default: m.InfiniteRankersAds })));
const InfiniteRankersAutomation = lazy(() => import("@/pages/partner-pages").then(m => ({ default: m.InfiniteRankersAutomation })));

function SmartPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if (ALL_SERVICES.some(s => s.slug === slug)) return <ServiceDetail />;
  if (getBlogPostBySlug(slug)) return <BlogPost />;
  if (CASE_STUDIES.some(cs => cs.id === slug)) return <CaseStudyDetail />;
  return <LandingPage slug={slug} />;
}

function AppRouter() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
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
    </Suspense>
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
