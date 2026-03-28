import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { ALL_SERVICES } from "@/lib/constants";
import {
  ArrowRight, Bot, Target, Globe, Zap, Phone, Headphones, UserCheck,
  CalendarCheck, MailCheck, TrendingUp, MessageSquare, Mail, Smartphone,
  Database, Workflow, Search, Megaphone, BarChart3, MapPin, Filter,
  MousePointer, Percent, Camera, ThumbsUp, FileText, Palette, Video,
  Monitor, Layout, Settings, Plug, PieChart, Code, Share2,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck, CalendarCheck,
  MailCheck, TrendingUp, MessageSquare, Mail, Smartphone, Database,
  Workflow, Search, Megaphone, BarChart3, MapPin, Filter, MousePointer,
  Percent, Camera, ThumbsUp, FileText, Palette, Video, Monitor, Layout,
  Settings, Plug, PieChart, Code, Share2,
};

const POPULAR_SLUGS = new Set([
  "ai-calling-agent", "google-ads", "seo-authority",
]);

const SERVICE_CLUSTERS = [
  {
    id: "ai-automation",
    label: "AI & Automation",
    displayTitle: "AI & Automation Systems",
    displayDesc: "Intelligent automation that captures, qualifies, and converts leads 24/7 — without adding headcount.",
    icon: Bot,
    slugs: ["ai-calling-agent", "ai-receptionist", "ai-lead-qualification", "ai-appointment-booking", "ai-follow-up", "ai-chatbot", "crm-automation"],
  },
  {
    id: "search-seo",
    label: "Search & SEO",
    displayTitle: "Search & SEO Growth",
    displayDesc: "Dominate search results and build sustainable organic traffic that compounds over time.",
    icon: Search,
    slugs: ["seo-authority", "local-seo", "content-writing", "conversion-rate-optimization", "landing-page-optimization", "conversion-funnels"],
  },
  {
    id: "paid-ads",
    label: "Paid Ads",
    displayTitle: "Paid Advertising Systems",
    displayDesc: "Data-driven ad campaigns on Google and Meta that generate predictable, qualified leads at scale.",
    icon: Target,
    slugs: ["google-ads", "meta-ads", "social-media-marketing", "instagram-growth", "facebook-growth", "video-marketing"],
  },
  {
    id: "web-creative",
    label: "Web & Creative",
    displayTitle: "Web Development & Creative",
    displayDesc: "High-performance websites, landing pages, and brand assets built to convert visitors into customers.",
    icon: Monitor,
    slugs: ["website-development", "landing-page-development", "branding-design", "crm-setup", "marketing-automation-setup", "analytics-dashboard"],
  },
];

const CLUSTER_NAV = SERVICE_CLUSTERS.map(({ id, label, icon }) => ({ id, label, icon }));

export default function Services() {
  const enterpriseUseCases = [
    "Multi-location lead routing and SLA-based follow-up automation",
    "CRM, ads, and reporting integration for board-level visibility",
    "AI-assisted sales workflows for large inbound and outbound teams",
  ];

  const localBusinessUseCases = [
    "Google Business Profile optimization and local SEO growth",
    "AI receptionist and booking systems for missed-call recovery",
    "Cost-efficient lead generation for local service businesses",
  ];

  return (
    <div className="overflow-x-hidden">
      <SEOHead
        title="Services - Infinite Rankers | AI Automation & Revenue Growth"
        description="Explore our complete suite of AI automation, lead generation, social media, and development services designed to grow your revenue."
      />
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Our Services
            </span>
            <h1 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
              Complete AI Revenue{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Growth Systems</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              From AI automation to lead generation, social media to custom development — every system is designed to generate customers and grow your revenue.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gradient-to-b from-white to-blue-50/30" data-testid="section-usa-focus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="USA Market Focus"
            title="Built for Enterprise Teams and Local Businesses"
            description="Infinite Rankers is an AI revenue growth agency focused on the United States market. We build systems that help enterprise organizations scale operations and local businesses grow qualified leads predictably."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Enterprise Growth Systems</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                For larger teams, we combine automation, paid media, and SEO into a unified operating layer that improves response speed,
                sales efficiency, and revenue attribution across departments.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {enterpriseUseCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Local Business Revenue Growth</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                For local service brands, we focus on rapid lead capture, better booking rates, and stronger local search visibility so each
                marketing dollar delivers measurable pipeline impact.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {localBusinessUseCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Popular entry points for USA clients include 
            <Link href="/ai-calling-agent"><span className="text-blue-600 hover:underline cursor-pointer"> AI Calling Agent</span></Link>,
            <Link href="/local-seo"><span className="text-blue-600 hover:underline cursor-pointer"> Local SEO</span></Link>,
            <Link href="/google-ads"><span className="text-blue-600 hover:underline cursor-pointer"> Google Ads Revenue Engine</span></Link>, and
            <Link href="/crm-automation"><span className="text-blue-600 hover:underline cursor-pointer"> CRM Automation</span></Link>.
          </p>
        </div>
      </section>

      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm" aria-label="Service cluster navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {CLUSTER_NAV.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
                data-testid={`nav-cluster-${id}`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {SERVICE_CLUSTERS.map((cluster, clusterIndex) => {
        const CatIcon = cluster.icon;
        const clusterServices = cluster.slugs
          .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
          .filter((s): s is (typeof ALL_SERVICES)[number] => s !== undefined);
        return (
          <section
            key={cluster.id}
            id={cluster.id}
            className={`py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-28 ${clusterIndex % 2 === 1 ? "bg-gradient-to-b from-gray-50/60 to-white" : ""}`}
            data-testid={`section-${cluster.id}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <CatIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.25rem, 3vw, 1.875rem)" }}>{cluster.displayTitle}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">{cluster.displayDesc}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clusterServices.map((service, i) => {
                  const Icon = iconMap[service.icon] || Zap;
                  const isPopular = POPULAR_SLUGS.has(service.slug);
                  return (
                    <Link key={service.slug} href={`/${service.slug}`}>
                      <GlassCard delay={i * 0.05} className="cursor-pointer h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
                        {isPopular && (
                          <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            Most Popular
                          </span>
                        )}
                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 pr-24" data-testid={`service-title-${service.slug}`}>{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{service.shortDesc}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-auto">
                          Explore Service <ArrowRight className="w-3 h-3" />
                        </span>
                      </GlassCard>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
              Not Sure Which System You Need?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              Book a free strategy session and we'll build a custom AI revenue plan for your business.
            </p>
            <Link href="/book-demo">
              <Button variant="secondary" className="w-full sm:w-auto" data-testid="button-services-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
