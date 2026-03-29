import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { SERVICE_PILLARS } from "@/lib/constants";
import {
  ArrowRight, Bot, CalendarCheck, Database, Headphones, Star,
  Code, TrendingUp, CheckCircle2, type LucideIcon,
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
