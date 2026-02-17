import { motion } from "framer-motion";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import { SERVICE_CATEGORIES, CASE_STUDIES } from "@/lib/constants";
import { BLOG_POSTS_FULL } from "@/lib/blog-data";
import { MapPin, FileText, Briefcase, BookOpen, Globe, Handshake, Scale, ChevronRight } from "lucide-react";

const MAIN_PAGES = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
  { title: "Blog", href: "/blog" },
  { title: "Book Demo", href: "/book-demo" },
];

const LANDING_PAGES = [
  { slug: "ai-automation-new-york", title: "AI Automation New York" },
  { slug: "ai-automation-los-angeles", title: "AI Automation Los Angeles" },
  { slug: "ai-automation-chicago", title: "AI Automation Chicago" },
  { slug: "ai-revenue-growth-real-estate", title: "AI Revenue Growth for Real Estate" },
  { slug: "ai-revenue-growth-healthcare", title: "AI Revenue Growth for Healthcare" },
  { slug: "ai-revenue-growth-law-firms", title: "AI Revenue Growth for Law Firms" },
  { slug: "ai-revenue-growth-ecommerce", title: "AI Revenue Growth for E-Commerce" },
  { slug: "ai-revenue-growth-restaurants", title: "AI Revenue Growth for Restaurants" },
  { slug: "ai-lead-generation-usa", title: "AI Lead Generation USA" },
  { slug: "ai-marketing-automation-usa", title: "AI Marketing Automation USA" },
];

const PARTNER_PAGES = [
  { slug: "infinite-rankers-agency", title: "About Infinite Rankers Agency" },
  { slug: "infinite-rankers-seo-services", title: "SEO Services" },
  { slug: "infinite-rankers-paid-advertising", title: "Paid Advertising" },
  { slug: "infinite-rankers-ai-automation", title: "AI Automation Solutions" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SitemapSection({ title, icon: Icon, children, delay = 0 }: { title: string; icon: typeof MapPin; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="mb-10"
    >
      <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-gray-200">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function SitemapLink({ href, title, testId }: { href: string; title: string; testId: string }) {
  return (
    <Link href={href}>
      <span
        className="flex items-center gap-1.5 py-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer group"
        data-testid={testId}
      >
        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
        {title}
      </span>
    </Link>
  );
}

export default function SitemapPage() {
  return (
    <>
      <SEOHead
        title="Sitemap | Infinite Rankers"
        description="Browse all pages on infiniterankers.io. Find services, case studies, blog posts, and more."
        keywords="sitemap, infinite rankers, all pages"
      />

      <section className="relative pt-28 pb-12 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden" data-testid="sitemap-hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Site Navigation
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" data-testid="text-sitemap-title">
              Sitemap
            </h1>
            <p className="text-gray-600 text-base sm:text-lg" data-testid="text-sitemap-subtitle">
              Browse all pages on infiniterankers.io
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-16" data-testid="sitemap-content">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <SitemapSection title="Main Pages" icon={Globe} delay={0}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6">
              {MAIN_PAGES.map((page) => (
                <SitemapLink
                  key={page.href}
                  href={page.href}
                  title={page.title}
                  testId={`link-main-${page.title.toLowerCase().replace(/\s/g, "-")}`}
                />
              ))}
            </div>
          </SitemapSection>

          <SitemapSection title="Services" icon={Briefcase} delay={0.05}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICE_CATEGORIES.map((category) => (
                <div key={category.id}>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <div className="space-y-0.5">
                    {category.services.map((service) => (
                      <SitemapLink
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        title={service.title}
                        testId={`link-service-${service.slug}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SitemapSection>

          <SitemapSection title="Case Studies" icon={FileText} delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
              {CASE_STUDIES.map((cs) => (
                <SitemapLink
                  key={cs.id}
                  href={`/portfolio/${cs.id}`}
                  title={cs.title}
                  testId={`link-case-study-${cs.id}`}
                />
              ))}
            </div>
          </SitemapSection>

          <SitemapSection title="Blog Posts" icon={BookOpen} delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
              {BLOG_POSTS_FULL.map((post) => (
                <SitemapLink
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  testId={`link-blog-${post.slug}`}
                />
              ))}
            </div>
          </SitemapSection>

          <SitemapSection title="Landing Pages" icon={MapPin} delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
              {LANDING_PAGES.map((page) => (
                <SitemapLink
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.title}
                  testId={`link-landing-${page.slug}`}
                />
              ))}
            </div>
          </SitemapSection>

          <SitemapSection title="Partner Pages" icon={Handshake} delay={0.25}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6">
              {PARTNER_PAGES.map((page) => (
                <SitemapLink
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.title}
                  testId={`link-partner-${page.slug}`}
                />
              ))}
            </div>
          </SitemapSection>

          <SitemapSection title="Legal" icon={Scale} delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6">
              <SitemapLink href="/terms" title="Terms of Service" testId="link-legal-terms" />
              <SitemapLink href="/privacy" title="Privacy Policy" testId="link-legal-privacy" />
            </div>
          </SitemapSection>

        </div>
      </section>
    </>
  );
}
