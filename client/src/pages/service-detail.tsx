import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import { ALL_SERVICES, PRICING_TIERS } from "@/lib/constants";
import {
  ArrowRight, CheckCircle2, ArrowLeft, ChevronRight,
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck,
  CalendarCheck, MailCheck, TrendingUp, MessageSquare, Mail, Smartphone,
  Database, Workflow, Search, Megaphone, BarChart3, MapPin, Filter,
  MousePointer, Percent, Camera, ThumbsUp, FileText, Palette, Video,
  Monitor, Layout, Settings, Plug, PieChart, Code, Share2,
  Building2, ShoppingCart, Briefcase, Stethoscope, GraduationCap, Utensils,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck, CalendarCheck,
  MailCheck, TrendingUp, MessageSquare, Mail, Smartphone, Database,
  Workflow, Search, Megaphone, BarChart3, MapPin, Filter, MousePointer,
  Percent, Camera, ThumbsUp, FileText, Palette, Video, Monitor, Layout,
  Settings, Plug, PieChart, Code, Share2,
};

function getServiceContent(slug: string) {
  const features = [
    "24/7 automated operation",
    "Real-time analytics dashboard",
    "CRM integration ready",
    "Custom AI model training",
    "Multi-channel deployment",
    "A/B testing built-in",
    "Automated reporting",
    "Dedicated support team",
  ];

  const industries = [
    { icon: Building2, name: "Real Estate" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: Briefcase, name: "Professional Services" },
    { icon: ShoppingCart, name: "E-Commerce" },
    { icon: GraduationCap, name: "Education" },
    { icon: Utensils, name: "Restaurants" },
  ];

  const faqs = [
    { q: "How quickly can this be implemented?", a: "Most implementations are completed within 2-4 weeks, including custom configuration, testing, and optimization for your specific business needs." },
    { q: "Do I need technical knowledge to use this?", a: "No. We handle all the technical setup and provide a user-friendly dashboard. Our team manages ongoing optimization and you receive clear performance reports." },
    { q: "Can this integrate with my existing tools?", a: "Yes. Our systems integrate with all major CRMs, email platforms, scheduling tools, and business software. We'll map your current tech stack during onboarding." },
    { q: "What kind of results can I expect?", a: "Results vary by industry and current setup, but most clients see measurable improvements within the first 30 days, with significant ROI within 90 days." },
    { q: "Is there a minimum contract period?", a: "No long-term contracts required. We operate on a month-to-month basis because we're confident our results speak for themselves." },
  ];

  const workflowSteps = [
    { step: "Setup & Configuration", desc: "We configure the system to match your business processes and goals." },
    { step: "Integration & Testing", desc: "Connect with your existing tools and run comprehensive tests." },
    { step: "Launch & Optimization", desc: "Go live with ongoing monitoring and continuous improvement." },
    { step: "Scale & Grow", desc: "Expand capabilities and channels as your results compound." },
  ];

  return { features, industries, faqs, workflowSteps };
}

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Zap;
  const content = getServiceContent(service.slug);

  return (
    <div>
      <SEOHead
        title={`${service.title} - Infinite Rankers | AI Revenue Growth`}
        description={service.shortDesc}
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-white dark:from-blue-950/30 dark:via-purple-950/20 dark:to-background" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-6 cursor-pointer hover:text-foreground transition-colors" data-testid="link-back-services">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </span>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="secondary" className="mb-4">{service.category}</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.shortDesc}</p>
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
                <div className="relative bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-md border border-white/30 dark:border-white/10 p-10 text-center">
                  <div className="w-20 h-20 mx-auto rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">AI-Powered Revenue System</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-card dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeader align="left" label="The Problem" title="Why Businesses Struggle Without This System" />
              <div className="space-y-4">
                {[
                  "Leads slip through the cracks due to slow or no response",
                  "Manual processes waste time and limit scalability",
                  "Inconsistent follow-up leads to lost revenue opportunities",
                  "No visibility into what's working and what's not",
                ].map((problem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-md bg-red-50/50 dark:bg-red-500/5 border border-red-200/50 dark:border-red-500/10"
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
                {[
                  "Instant AI-powered response to every lead, 24/7/365",
                  "Fully automated workflows that scale without added headcount",
                  "Intelligent follow-up sequences that nurture every prospect",
                  "Real-time analytics and reporting for complete visibility",
                ].map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-md bg-blue-50/50 dark:bg-blue-500/5 border border-blue-200/50 dark:border-blue-500/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.workflowSteps.map((ws, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{ws.step}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ws.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-card dark:bg-card">
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
                className="flex items-center gap-3 p-4 rounded-md bg-white/60 dark:bg-white/5 border border-border/50"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
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
            {content.industries.map((ind, i) => (
              <GlassCard key={ind.name} delay={i * 0.05} className="text-center">
                <ind.icon className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-3" />
                <span className="text-sm font-medium text-foreground">{ind.name}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-card dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Pricing" title="Choose Your Plan" />
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <GlassCard key={tier.name} delay={i * 0.1} className={tier.popular ? "border-blue-500/50 relative" : ""}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo">
                  <Button className={`w-full ${tier.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" : ""}`} variant={tier.popular ? "default" : "outline"}>
                    {tier.cta}
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Implement {service.title}?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free strategy session and see how this system can be customized for your business.
            </p>
            <Link href="/book-demo">
              <Button className="bg-white text-blue-700 hover:bg-white/90 border-0">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
