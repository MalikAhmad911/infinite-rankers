import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import {
  SERVICE_PILLARS,
  SERVICE_CONTENT,
  SERVICE_VISUAL_THEMES,
  CASE_STUDIES,
  type ServiceVisualTheme,
} from "@/lib/constants";
import {
  ArrowRight, CheckCircle2, ArrowLeft, Zap, ChevronDown,
  Bot, CalendarCheck, Database, Headphones, Star, Code, TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  Bot, CalendarCheck, Database, Headphones, Star, Code, TrendingUp, Zap,
};

const PILLAR_HERO_HEADLINES: Record<string, { headline: string; subheadline: string }> = {
  "ai-lead-capture": {
    headline: "Stop Losing Leads After Hours.\nCapture Every Inquiry, Automatically.",
    subheadline: "Most businesses lose 40–60% of inbound leads to missed calls, slow website response, and no after-hours coverage. We fix that with AI systems that capture, qualify, and route every lead — 24/7, across every channel.",
  },
  "ai-appointment-agents": {
    headline: "Fill Your Calendar on Autopilot —\nWithout Lifting a Finger.",
    subheadline: "AI agents that reach out to new leads within 60 seconds, follow up relentlessly across SMS, email, and voice, and book appointments directly into your calendar — no human required.",
  },
  "crm-pipeline-automation": {
    headline: "Turn Your CRM Into a\nSelf-Managing Revenue Machine.",
    subheadline: "Every lead automatically entered, tagged, scored, and moved through your pipeline based on real behavior — with real-time reporting that gives your leadership team full visibility, always.",
  },
  "customer-support-ai": {
    headline: "Handle Every Support Request,\n24/7 — Without Adding Headcount.",
    subheadline: "AI agents that resolve tier-1 support instantly, route complex cases to the right human, and give your team time back for the work that actually requires them — around the clock.",
  },
  "reviews-reactivation-retention": {
    headline: "Turn Past Customers Into\nYour Best Growth Engine.",
    subheadline: "Automated systems that request reviews at the perfect moment, reactivate cold leads with proven sequences, and bring past customers back before they forget you — without manual effort.",
  },
  "custom-saas-tools": {
    headline: "Software Built for Your Exact\nWorkflow — Not the Other Way Around.",
    subheadline: "Custom dashboards, internal automation portals, and mini SaaS products designed around how your business actually operates — not how an off-the-shelf tool assumes you do.",
  },
  "revenue-automation-consulting": {
    headline: "Map Your Fastest Path to\nRevenue Automation ROI.",
    subheadline: "A strategic audit of your revenue gaps, lead leakage, and automation opportunities — with a clear 90-day implementation roadmap that prioritizes the highest-return systems first.",
  },
};

const PILLAR_CASE_STUDY_MAP: Record<string, string> = {
  "ai-lead-capture": "case-study-dental-practice-revenue-transformation",
  "ai-appointment-agents": "case-study-real-estate-ai-lead-generation",
  "crm-pipeline-automation": "case-study-saas-growth-acceleration",
  "customer-support-ai": "case-study-law-firm-client-intake-automation",
  "reviews-reactivation-retention": "case-study-dental-practice-revenue-transformation",
  "custom-saas-tools": "case-study-ecommerce-cart-recovery-scaling",
  "revenue-automation-consulting": "case-study-wealth-management-digital-lead-generation",
};

const PILLAR_WHO_ITS_FOR: Record<string, string[]> = {
  "ai-lead-capture": [
    "Service businesses missing 30%+ of inbound calls and inquiries",
    "Healthcare practices losing patients to slow intake processes",
    "Real estate brokerages with no after-hours lead coverage",
    "Law firms and agencies where every new inquiry is high-value",
    "Any business where speed-to-lead directly impacts close rates",
  ],
  "ai-appointment-agents": [
    "Medical, dental, and wellness practices booking appointments daily",
    "Law firms and financial advisors with high-value consultation flows",
    "Home service companies with multi-step estimate-to-booking cycles",
    "Sales teams spending too much time on manual follow-up",
    "Coaching and consulting businesses where every booked call matters",
  ],
  "crm-pipeline-automation": [
    "Sales teams using HubSpot, Salesforce, GoHighLevel, or Pipedrive",
    "Agencies managing leads and deals for multiple clients or verticals",
    "Financial services firms with complex, multi-touch deal cycles",
    "SaaS companies needing CRM data quality for forecasting and reporting",
    "Any business where deals stall because follow-up is manual",
  ],
  "customer-support-ai": [
    "SaaS companies handling high volumes of repetitive support tickets",
    "E-commerce brands fielding order status and return inquiries daily",
    "Healthcare practices managing appointment questions and FAQs",
    "Multi-location service businesses with no after-hours support staff",
    "Any team where tier-1 support is consuming too much human time",
  ],
  "reviews-reactivation-retention": [
    "Local service businesses where reputation drives referrals",
    "Healthcare and dental practices that depend on Google reviews",
    "E-commerce brands with large email lists and low repeat purchase rates",
    "Home service companies with seasonal customers who don't rebook",
    "Any business with a cold lead database that has never been reactivated",
  ],
  "custom-saas-tools": [
    "Agencies that need white-label tools to deliver under their own brand",
    "Franchises requiring custom operational dashboards across locations",
    "Businesses that have outgrown every off-the-shelf software option",
    "Teams with manual reporting processes that should be fully automated",
    "Organizations with unique workflows that no standard tool accommodates",
  ],
  "revenue-automation-consulting": [
    "Growth-stage businesses unsure where AI automation will move the needle",
    "Leadership teams burned by past automation investments that didn't deliver ROI",
    "Agencies and operators overwhelmed by tool options and vendor noise",
    "Companies with existing automation that's underperforming or misaligned",
    "Any business that wants strategy before spending on implementation",
  ],
};

const defaultTheme: ServiceVisualTheme = {
  heroMockup: "analytics-dashboard",
  accentFrom: "from-blue-500",
  accentTo: "to-purple-500",
  accentGlow: "blue-500",
  heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
  problemSolutionLayout: "A",
  featuresLayout: "A",
  workflowLayout: "A",
  faqLayout: "A",
};

function FAQAccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-200/60 rounded-xl bg-white overflow-hidden"
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-gray-50/60 transition-colors"
        aria-expanded={open}
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-medium text-gray-900 text-sm sm:text-base leading-snug">{q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 pt-3" data-testid={`faq-answer-${index}`}>
          {a}
        </div>
      )}
    </motion.div>
  );
}

export default function ServicePillarPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const pillar = SERVICE_PILLARS.find((p) => p.slug === slug);
  const content = SERVICE_CONTENT[slug];
  const theme: ServiceVisualTheme = SERVICE_VISUAL_THEMES[slug] ?? defaultTheme;
  const heroCopy = PILLAR_HERO_HEADLINES[slug];
  const whoItsFor = PILLAR_WHO_ITS_FOR[slug] ?? [];

  const caseStudySlug = PILLAR_CASE_STUDY_MAP[slug];
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === caseStudySlug);

  const heroGradient = theme.heroGradient.includes("#")
    ? "from-gray-50/80 via-blue-50/30 to-white"
    : theme.heroGradient;

  if (!pillar || !content || !heroCopy) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
          <Link href="/services">
            <Button variant="outline" data-testid="button-back-services">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[pillar.icon] ?? Zap;
  const processSteps = content.workflowSteps.slice(0, 3);
  const accentGradient = `bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo}`;

  return (
    <div className="overflow-x-hidden">
      <SEOHead
        title={`${pillar.title} — Infinite Rankers | AI Revenue Systems`}
        description={pillar.shortDesc}
        canonical={`https://infiniterankers.io/${slug}`}
      />

      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="section-hero">
        <div className={`absolute inset-0 bg-gradient-to-br ${heroGradient}`} />
        <div className="absolute top-20 right-10 w-72 h-72 opacity-[0.06] pointer-events-none">
          <div className={`w-full h-full rounded-full ${accentGradient} blur-3xl`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <span
              className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-8 cursor-pointer hover:text-foreground transition-colors"
              data-testid="link-back-services"
            >
              <ArrowLeft className="w-4 h-4" /> All AI Revenue Systems
            </span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <div className={`w-9 h-9 rounded-lg ${accentGradient} flex items-center justify-center shadow-md`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <Badge variant="secondary" data-testid="badge-pillar-category">AI Revenue Systems</Badge>
                <Badge variant="outline" className="text-xs text-muted-foreground">USA Businesses</Badge>
              </div>

              <h1
                className="font-bold text-foreground mb-5 leading-tight whitespace-pre-line"
                style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}
                data-testid="text-pillar-headline"
              >
                {heroCopy.headline}
              </h1>

              <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontSize: "clamp(0.938rem, 1.8vw, 1.0625rem)" }}>
                {heroCopy.subheadline}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Live in 2–4 weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Month-to-month, no lock-in</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Results tracked from day one</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href={`/book-demo?service=${encodeURIComponent(pillar.title)}`}>
                  <Button size="lg" className={`${accentGradient} text-white border-0`} data-testid="button-hero-cta-primary">
                    Book a Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/book-demo?audit=true">
                  <Button size="lg" variant="outline" data-testid="button-hero-cta-secondary">
                    Get an Automation Audit
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Outcome stats panel */}
            {caseStudy && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="hidden lg:block"
              >
                <GlassCard className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Sample Client Result</p>
                  <p className="text-sm font-medium text-foreground mb-6">{caseStudy.business}</p>
                  <div className="grid grid-cols-2 gap-5 mb-6">
                    {[
                      { value: caseStudy.results.metric1, label: caseStudy.results.label1 },
                      { value: caseStudy.results.metric2, label: caseStudy.results.label2 },
                      { value: caseStudy.results.metric3, label: caseStudy.results.label3 },
                      { value: caseStudy.results.metric4, label: caseStudy.results.label4 },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className={`text-2xl font-bold ${accentGradient} bg-clip-text text-transparent`} data-testid={`stat-${stat.label}`}>
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-2 border-blue-200 pl-4">
                    <p className="text-sm text-muted-foreground italic leading-relaxed">&ldquo;{caseStudy.testimonial.quote}&rdquo;</p>
                    <footer className="mt-2 text-xs font-medium text-foreground">{caseStudy.testimonial.author}</footer>
                    <footer className="text-xs text-muted-foreground">{caseStudy.testimonial.role}</footer>
                  </blockquote>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 2: What's Included ──────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" data-testid="section-whats-included">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What's Included"
            title={`Everything in Your ${pillar.title} System`}
            description="Every component is built, configured, and optimized for your business — not a generic template you have to figure out yourself."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard className="h-full flex items-start gap-3 p-5" data-testid={`feature-card-${i}`}>
                  <div className={`w-7 h-7 rounded-md ${accentGradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">{feature}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Who It's For ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-who-its-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Who It's For"
                title="Is This System Right for Your Business?"
                description={content.icp}
                align="left"
              />
            </div>
            <div className="space-y-3 lg:pt-6">
              {whoItsFor.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                  data-testid={`who-item-${i}`}
                >
                  <div className={`w-5 h-5 rounded-full ${accentGradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
              <div className="pt-4">
                <Link href={`/book-demo?service=${encodeURIComponent(pillar.title)}`}>
                  <Button variant="outline" data-testid="button-who-cta">
                    See if this fits your business <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How It Works"
            title="From Kickoff to Revenue in Weeks, Not Months"
            description="Every engagement follows a proven deployment process — built to get you live fast and optimized continuously."
          />
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full relative overflow-hidden" data-testid={`process-step-${i}`}>
                  <div
                    className="text-7xl font-black leading-none mb-4 select-none"
                    style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1px rgba(99,102,241,0.15)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Case Study / Proof ───────────────────────────── */}
      {caseStudy && (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-proof">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Client Results"
              title="Real Businesses. Real Revenue Growth."
              description="This is a representative sample of the results our AI Revenue Systems have generated for businesses like yours."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Stats side */}
                  <div className={`lg:col-span-2 ${accentGradient} p-8 flex flex-col justify-between`}>
                    <div>
                      <Badge className="bg-white/20 text-white border-0 text-xs mb-4" data-testid="badge-case-study-label">
                        {caseStudy.label}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-1">{caseStudy.title}</h3>
                      <p className="text-white/80 text-sm mb-6">{caseStudy.business}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: caseStudy.results.metric1, label: caseStudy.results.label1 },
                        { value: caseStudy.results.metric2, label: caseStudy.results.label2 },
                        { value: caseStudy.results.metric3, label: caseStudy.results.label3 },
                        { value: caseStudy.results.metric4, label: caseStudy.results.label4 },
                      ].map((s) => (
                        <div key={s.label}>
                          <p className="text-2xl font-bold text-white">{s.value}</p>
                          <p className="text-white/70 text-xs mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial side */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">What They Said</p>
                      <blockquote className="text-foreground text-base leading-relaxed mb-6 font-medium" data-testid="text-testimonial-quote">
                        &ldquo;{caseStudy.testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-9 h-9 rounded-full ${accentGradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {caseStudy.testimonial.author[0]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{caseStudy.testimonial.author}</p>
                          <p className="text-xs text-muted-foreground">{caseStudy.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={`/${caseStudy.slug}`}>
                        <Button variant="outline" size="sm" data-testid="button-read-case-study">
                          Read Full Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </Link>
                      <Link href="/portfolio">
                        <Button variant="ghost" size="sm" data-testid="button-view-more-results">
                          View More Results
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Section 6: FAQ ──────────────────────────────────────────── */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-white" data-testid="section-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="FAQ"
              title="Frequently Asked Questions"
              description="Common questions about how this AI system works and what to expect."
            />
            <div className="space-y-3">
              {content.faqs.map((faq, i) => (
                <FAQAccordionItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Section 7: Related Systems ───────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50/60 to-white border-t border-gray-100" data-testid="section-related">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Also in the AI Revenue System Stack</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICE_PILLARS.filter(p => p.slug !== slug).slice(0, 6).map((p) => {
              const PIcon = iconMap[p.icon] ?? Zap;
              return (
                <Link key={p.slug} href={`/${p.slug}`}>
                  <div className="group flex items-start gap-2 p-3 rounded-lg border border-gray-200/60 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-colors cursor-pointer" data-testid={`related-pillar-${p.slug}`}>
                    <PIcon className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700 group-hover:text-blue-700 font-medium leading-snug">{p.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" data-testid="section-cta">
        <div className={`absolute inset-0 ${accentGradient}`} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 mb-3">
              Ready to Build Your AI Revenue System?
            </span>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
              {pillar.tagline} — Let&apos;s Build It.
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.938rem, 2vw, 1.0625rem)" }}>
              Book a free strategy session. We&apos;ll audit your current setup, identify your biggest revenue gaps, and show you exactly how to fix them with AI.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={`/book-demo?service=${encodeURIComponent(pillar.title)}`}>
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-white/90 font-semibold"
                  data-testid="button-cta-book-strategy"
                >
                  Book a Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/book-demo?audit=true">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                  data-testid="button-cta-audit"
                >
                  Get an Automation Audit
                </Button>
              </Link>
            </div>
            <p className="text-white/60 text-xs mt-6">No commitments. No pressure. Just clarity on your fastest path to ROI.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
