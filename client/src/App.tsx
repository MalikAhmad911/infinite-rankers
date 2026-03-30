import React, { useState, useEffect } from "react";
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
import ServicePillarPage from "@/pages/service-pillar-page";
import Portfolio from "@/pages/portfolio";
import CaseStudyDetail from "@/pages/case-study-detail";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import BookDemo from "@/pages/book-demo";
import LandingPage from "@/pages/landing-page";
import IndustryVertical from "@/pages/industry-vertical";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import ContentMethodology from "@/pages/content-methodology";
import SitemapPage from "@/pages/sitemap-page";
import AdminDashboard from "@/pages/admin-dashboard";
import CompetitorAnalysis from "@/pages/competitor-analysis";
import ROICalculator from "@/pages/roi-calculator";
import PodiumCompetitiveAnalysis from "@/pages/podium-competitive-analysis";
import NotFound from "@/pages/not-found";
import GooglePartnerPage from "@/pages/google-partner-page";
import { ALL_SERVICES, CASE_STUDIES, INDUSTRY_VERTICALS } from "@/lib/constants";
import { getBlogPostBySlug } from "@/lib/blog-data";

function SmartPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if (ALL_SERVICES.some(s => s.slug === slug)) return <ServicePillarPage />;
  if (getBlogPostBySlug(slug)) return <BlogPost />;
  if (CASE_STUDIES.some(cs => cs.slug === slug || cs.id === slug)) return <CaseStudyDetail />;
  if (INDUSTRY_VERTICALS.some(v => v.slug === slug)) return <IndustryVertical />;
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
      <Route path="/google-partner" component={GooglePartnerPage} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/content-methodology" component={ContentMethodology} />
      <Route path="/sitemap" component={SitemapPage} />
      <Route path="/admin/indexing" component={AdminDashboard} />
      <Route path="/competitor-analysis" component={CompetitorAnalysis} />
      <Route path="/roi-calculator" component={ROICalculator} />
      <Route path="/competitive-analysis/podium" component={PodiumCompetitiveAnalysis} />
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const content = (
    <ThemeProvider>
      <QueryClientProvider client={qc}>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              <Breadcrumbs />
              <AppRouter />
            </main>
            <Footer />
          </div>
          {mounted && <ScrollToTop />}
          {mounted && <Toaster />}
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
