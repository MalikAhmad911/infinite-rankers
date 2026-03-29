import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { SERVICE_PILLARS } from "@/lib/constants";
import {
  ArrowRight, Bot, CalendarCheck, Database, Headphones, Star,
  Code, TrendingUp, CheckCircle2, MapPin, Users, Zap, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot, CalendarCheck, Database, Headphones, Star, Code, TrendingUp,
};

export default function Services() {
  const enterpriseUseCases = [
    "Multi-location lead routing and SLA-based follow-up automation",
    "CRM, pipeline, and reporting integration for board-level visibility",
    "AI-assisted sales workflows for large inbound and outbound teams",
  ];

  const localBusinessUseCases = [
    "AI lead capture systems that never miss an inquiry or missed call",
    "Appointment booking agents for local service and healthcare businesses",
    "Review generation and reactivation campaigns that drive repeat revenue",
  ];

  return (
    <div className="overflow-x-hidden">
      <SEOHead
        title="AI Revenue Systems — Infinite Rankers | 7 Core Service Pillars"
        description="Explore Infinite Rankers' 7 AI Revenue Systems — from lead capture and appointment agents to CRM automation, customer support AI, and custom SaaS tools."
      />

      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              AI Revenue Systems Agency
            </span>
            <h1 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
              7 AI Revenue Systems —{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Built to Grow Your Business</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              We don't sell software — we build and deploy AI revenue systems that capture leads, book appointments, automate your pipeline, and retain customers, without adding headcount.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white" data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_PILLARS.map((pillar, i) => {
              const Icon = iconMap[pillar.icon] || Bot;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link href={`/${pillar.slug}`}>
                    <GlassCard className="cursor-pointer h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
                      data-testid={`pillar-card-${pillar.id}`}
                    >
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 flex-shrink-0 shadow-md shadow-blue-200/50">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-snug" data-testid={`pillar-title-${pillar.id}`}>
                        {pillar.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{pillar.shortDesc}</p>
                      <ul className="space-y-1.5 mb-4">
                        {pillar.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-auto group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gradient-to-b from-white to-blue-50/30" data-testid="section-usa-focus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="USA Market Focus"
            title="Built for Enterprise Teams and Local Businesses"
            description="Infinite Rankers is an AI Revenue Systems Agency focused on the United States market. We build and deploy systems that help enterprise organizations scale operations and local businesses grow qualified leads predictably."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Enterprise Revenue Automation</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                For larger teams, we combine AI lead capture, CRM automation, and custom tools into a unified operating layer that improves response speed,
                sales efficiency, and revenue attribution across departments.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {enterpriseUseCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Local Business AI Systems</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                For local service brands, we focus on rapid lead capture, better booking rates, stronger reputation, and retention systems so each
                marketing dollar delivers measurable pipeline impact.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {localBusinessUseCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Popular entry points for USA clients include{" "}
            <Link href="/ai-lead-capture"><span className="text-blue-600 hover:underline cursor-pointer">AI Lead Capture Systems</span></Link>,{" "}
            <Link href="/ai-appointment-agents"><span className="text-blue-600 hover:underline cursor-pointer">AI Appointment Agents</span></Link>,{" "}
            <Link href="/crm-pipeline-automation"><span className="text-blue-600 hover:underline cursor-pointer">CRM & Pipeline Automation</span></Link>, and{" "}
            <Link href="/reviews-reactivation-retention"><span className="text-blue-600 hover:underline cursor-pointer">Reviews & Reactivation</span></Link>.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">Explore More</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">Find the Right AI System for Your Situation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">Browse by industry, use case, location, or business type — every page shows exactly how AI automation applies to your specific situation.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                label: "By Industry",
                links: [
                  { href: "/ai-revenue-growth-real-estate", text: "Real Estate" },
                  { href: "/ai-revenue-growth-healthcare", text: "Healthcare" },
                  { href: "/ai-revenue-growth-law-firms", text: "Law Firms" },
                  { href: "/ai-revenue-growth-restaurants", text: "Restaurants" },
                  { href: "/ai-revenue-growth-ecommerce", text: "E-Commerce" },
                ],
              },
              {
                icon: Zap,
                label: "By AI System",
                links: [
                  { href: "/ai-receptionist", text: "AI Receptionist" },
                  { href: "/ai-booking-agent", text: "AI Booking Agent" },
                  { href: "/missed-call-text-back", text: "Missed-Call Text-Back" },
                  { href: "/crm-automation", text: "CRM Automation" },
                  { href: "/ai-sales-agent", text: "AI Sales Agent" },
                ],
              },
              {
                icon: MapPin,
                label: "By Location",
                links: [
                  { href: "/ai-automation-new-york", text: "New York" },
                  { href: "/ai-automation-los-angeles", text: "Los Angeles" },
                  { href: "/ai-automation-chicago", text: "Chicago" },
                  { href: "/ai-automation-agency-texas", text: "Texas" },
                  { href: "/ai-automation-agency-florida", text: "Florida" },
                ],
              },
              {
                icon: Bot,
                label: "By Problem",
                links: [
                  { href: "/stop-missing-leads-after-hours", text: "Missing After-Hours Leads" },
                  { href: "/automate-appointment-booking", text: "Manual Booking Process" },
                  { href: "/reactivate-old-leads", text: "Inactive Lead Database" },
                  { href: "/automate-customer-follow-up", text: "Slow Follow-Up" },
                  { href: "/improve-lead-response-time", text: "Slow Lead Response" },
                ],
              },
            ].map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-lg border border-gray-200/70 p-5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{group.label}</span>
                  </div>
                  <ul className="space-y-2">
                    {group.links.map(link => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-blue-600 hover:underline transition-colors flex items-center gap-1">
                          <ArrowRight className="w-3 h-3 flex-shrink-0 opacity-50" />
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
              Not Sure Which AI System You Need?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              Book a free Revenue Automation Audit — we'll map your revenue gaps and recommend the 1–3 systems that will generate the fastest ROI for your business.
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
