import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import { ALL_SERVICES, CASE_STUDIES, SERVICE_CONTENT } from "@/lib/constants";
import {
  ArrowRight, CheckCircle2, ArrowLeft,
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck,
  CalendarCheck, MailCheck, TrendingUp, MessageSquare, Mail, Smartphone,
  Database, Workflow, Search, Megaphone, BarChart3, MapPin, Filter,
  MousePointer, Percent, Camera, ThumbsUp, FileText, Palette, Video,
  Monitor, Layout, Settings, Plug, PieChart, Code, Share2,
  Building2, ShoppingCart, Briefcase, Stethoscope, GraduationCap, Utensils,
  Car, Hammer, Scale, Heart, Landmark, Dumbbell,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck, CalendarCheck,
  MailCheck, TrendingUp, MessageSquare, Mail, Smartphone, Database,
  Workflow, Search, Megaphone, BarChart3, MapPin, Filter, MousePointer,
  Percent, Camera, ThumbsUp, FileText, Palette, Video, Monitor, Layout,
  Settings, Plug, PieChart, Code, Share2,
  Building2, ShoppingCart, Briefcase, Stethoscope, GraduationCap, Utensils,
  Car, Hammer, Scale, Heart, Landmark, Dumbbell,
};

const defaultContent = {
  longDesc: "Our AI-powered system is designed to automate and optimize your business processes, delivering measurable results from day one.",
  problems: [
    "Leads slip through the cracks due to slow or no response",
    "Manual processes waste time and limit scalability",
    "Inconsistent follow-up leads to lost revenue opportunities",
    "No visibility into what's working and what's not",
  ],
  solutions: [
    "Instant AI-powered response to every lead, 24/7/365",
    "Fully automated workflows that scale without added headcount",
    "Intelligent follow-up sequences that nurture every prospect",
    "Real-time analytics and reporting for complete visibility",
  ],
  features: [
    "24/7 automated operation",
    "Real-time analytics dashboard",
    "CRM integration ready",
    "Custom AI model training",
    "Multi-channel deployment",
    "A/B testing built-in",
    "Automated reporting",
    "Dedicated support team",
  ],
  workflowSteps: [
    { step: "Setup & Configuration", desc: "We configure the system to match your business processes and goals." },
    { step: "Integration & Testing", desc: "Connect with your existing tools and run comprehensive tests." },
    { step: "Launch & Optimization", desc: "Go live with ongoing monitoring and continuous improvement." },
    { step: "Scale & Grow", desc: "Expand capabilities and channels as your results compound." },
  ],
  industries: [
    { name: "Real Estate", icon: "Building2" },
    { name: "Healthcare", icon: "Stethoscope" },
    { name: "Professional Services", icon: "Briefcase" },
    { name: "E-Commerce", icon: "ShoppingCart" },
    { name: "Education", icon: "GraduationCap" },
    { name: "Restaurants", icon: "Utensils" },
  ],
  faqs: [
    { q: "How quickly can this be implemented?", a: "Most implementations are completed within 2-4 weeks, including custom configuration, testing, and optimization for your specific business needs." },
    { q: "Do I need technical knowledge to use this?", a: "No. We handle all the technical setup and provide a user-friendly dashboard. Our team manages ongoing optimization and you receive clear performance reports." },
    { q: "Can this integrate with my existing tools?", a: "Yes. Our systems integrate with all major CRMs, email platforms, scheduling tools, and business software." },
    { q: "What kind of results can I expect?", a: "Most clients see measurable improvements within the first 30 days, with significant ROI within 90 days." },
    { q: "Is there a minimum contract period?", a: "No long-term contracts required. We operate on a month-to-month basis because we're confident our results speak for themselves." },
  ],
  relatedServices: [] as string[],
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button variant="outline" data-testid="button-back-services">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Zap;
  const content = SERVICE_CONTENT[params.slug] || defaultContent;

  const relatedServiceData = content.relatedServices
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  const relatedCaseStudies = CASE_STUDIES.filter((cs) =>
    cs.tags.some((tag) => {
      const categoryLower = service.category.toLowerCase();
      const tagLower = tag.toLowerCase();
      return categoryLower.includes(tagLower.split(" ")[0]) ||
        tagLower.includes(categoryLower.split(" ")[0]) ||
        tagLower.toLowerCase().includes("ai") && categoryLower.includes("ai") ||
        tagLower.toLowerCase().includes("seo") && categoryLower.includes("lead") ||
        tagLower.toLowerCase().includes("ads") && categoryLower.includes("lead") ||
        tagLower.toLowerCase().includes("social") && categoryLower.includes("social") ||
        tagLower.toLowerCase().includes("web") && categoryLower.includes("development");
    })
  ).slice(0, 3);

  return (
    <div>
      <SEOHead
        title={`${service.title} - Infinite Rankers | AI Revenue Growth`}
        description={service.shortDesc}
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B1A] via-[#0D1B2A] to-background" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-6 cursor-pointer hover:text-foreground transition-colors" data-testid="link-back-services">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </span>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="secondary" className="mb-4" data-testid="badge-service-category">{service.category}</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="text-service-title">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">{service.shortDesc}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">{content.longDesc}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-demo">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" data-testid="button-service-book-demo">
                    Book Demo <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" data-testid="button-service-pricing">View Pricing</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md blur-2xl" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white/[0.03] backdrop-blur-xl rounded-md border border-white/[0.06] p-10 text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">AI-Powered Revenue System</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeader align="left" label="The Problem" title="Why Businesses Struggle Without This System" />
              <div className="space-y-4">
                {content.problems.map((problem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-md bg-red-500/5 border border-red-500/10"
                  >
                    <span className="text-red-500 font-bold text-sm mt-0.5">x</span>
                    <p className="text-sm text-muted-foreground">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader align="left" label="The Solution" title={`How ${service.title} Fixes This`} />
              <div className="space-y-4">
                {content.solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-md bg-blue-500/5 border border-blue-500/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="How It Works" title="Implementation Workflow" description="Our proven 4-step process gets you from setup to results in record time." />
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 origin-left"
              />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.workflowSteps.map((ws, i) => (
                <GlassCard key={i} delay={i * 0.15}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 relative z-10">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">{ws.step}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ws.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Features" title="What's Included" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-md bg-white/[0.03] border border-white/[0.06]"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-foreground">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Industries" title="Industry Use Cases" description="Our systems are trusted across industries with tailored configurations for each." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {content.industries.map((ind, i) => {
              const IndIcon = iconMap[ind.icon] || Building2;
              return (
                <GlassCard key={ind.name} delay={i * 0.05} className="text-center">
                  <IndIcon className="w-8 h-8 mx-auto text-blue-400 mb-3" />
                  <span className="text-sm font-medium text-foreground">{ind.name}</span>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {relatedCaseStudies.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Results" title="Related Case Studies" description="See how businesses like yours have achieved real results with our systems." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((cs, i) => (
                <GlassCard key={cs.id} delay={i * 0.1} glow>
                  <Badge variant="secondary" className="mb-3">{cs.label}</Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-case-study-title-${cs.id}`}>{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cs.business}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 rounded-md bg-white/[0.03] text-center">
                      <p className="text-lg font-bold text-blue-400">{cs.results.metric1}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label1}</p>
                    </div>
                    <div className="p-2 rounded-md bg-white/[0.03] text-center">
                      <p className="text-lg font-bold text-blue-400">{cs.results.metric2}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label2}</p>
                    </div>
                    <div className="p-2 rounded-md bg-white/[0.03] text-center">
                      <p className="text-lg font-bold text-blue-400">{cs.results.metric3}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label3}</p>
                    </div>
                    <div className="p-2 rounded-md bg-white/[0.03] text-center">
                      <p className="text-lg font-bold text-blue-400">{cs.results.metric4}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label4}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cs.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="FAQ" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-4">
            {content.faqs.map((faq, i) => (
              <GlassCard key={i} delay={i * 0.05}>
                <h3 className="text-sm font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {relatedServiceData.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Explore More" title="Related Services" description="Complement your growth strategy with these related systems." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServiceData.map((rs, i) => {
                if (!rs) return null;
                const RsIcon = iconMap[rs.icon] || Zap;
                return (
                  <Link key={rs.slug} href={`/services/${rs.slug}`}>
                    <GlassCard delay={i * 0.1} glow className="cursor-pointer h-full">
                      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                        <RsIcon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-2" data-testid={`text-related-service-${rs.slug}`}>{rs.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{rs.shortDesc}</p>
                    </GlassCard>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Implement {service.title}?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free strategy session and see how this system can be customized for your business.
            </p>
            <Link href="/book-demo">
              <Button className="bg-white text-blue-700 border-0" data-testid="button-cta-book-demo">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
