import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import SEOHead from "@/components/seo-head";
import {
  ArrowRight, CheckCircle2, Shield, Clock, DollarSign,
  ChevronDown, ChevronUp, Zap, TrendingUp, Bot, CalendarCheck,
  Database, Headphones, Star, Code, Plus,
} from "lucide-react";
import { SERVICE_PILLARS } from "@/lib/constants";

const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter System",
    tagline: "Your first AI system, installed and running",
    setupFee: 1500,
    monthlyPrice: 997,
    pillarsIncluded: 2,
    pillars: ["ai-lead-capture", "reviews-reactivation-retention"],
    pillarsNote: "Choose any 2 of the 7 AI Revenue Pillars",
    whoItsFor: "Solo operators and small service businesses taking their first step into AI revenue systems.",
    features: [
      "2 AI Revenue Pillars (your choice)",
      "Initial strategy & audit session",
      "Full AI system setup & configuration",
      "2–3 week go-live timeline",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Start Your First System",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth System",
    tagline: "Full AI revenue stack for growing teams",
    setupFee: 2500,
    monthlyPrice: 2497,
    pillarsIncluded: 4,
    pillars: ["ai-lead-capture", "ai-appointment-agents", "crm-pipeline-automation", "reviews-reactivation-retention"],
    pillarsNote: "Choose any 4 of the 7 AI Revenue Pillars",
    whoItsFor: "Businesses at $500K–$5M generating leads but leaking revenue from slow follow-up and manual processes.",
    features: [
      "4 AI Revenue Pillars (your choice)",
      "Full revenue audit & strategy sprint",
      "All systems setup, integrated & tested",
      "2–4 week go-live timeline",
      "Weekly performance dashboard",
      "Bi-weekly strategy calls",
      "Priority support (< 4hr response)",
    ],
    cta: "Get the Growth System",
    popular: true,
  },
  {
    id: "revenue-os",
    name: "Revenue OS",
    tagline: "End-to-end AI revenue operating system",
    setupFee: 4500,
    monthlyPrice: 4997,
    pillarsIncluded: 7,
    pillars: ["ai-lead-capture", "ai-appointment-agents", "crm-pipeline-automation", "customer-support-ai", "reviews-reactivation-retention", "custom-saas-tools", "revenue-automation-consulting"],
    pillarsNote: "All 7 AI Revenue Pillars, fully deployed",
    whoItsFor: "Established businesses wanting a fully automated revenue engine — capture, close, retain — without adding headcount.",
    features: [
      "All 7 AI Revenue Pillars deployed",
      "Full tech stack audit & roadmap",
      "Custom integrations with your existing tools",
      "4–6 week phased go-live",
      "Live revenue attribution dashboard",
      "Weekly 1:1 strategy calls",
      "Dedicated account manager",
      "Slack channel access",
      "48-hr emergency escalation line",
    ],
    cta: "Build Your Revenue OS",
    popular: false,
  },
];

const ADDONS = [
  {
    name: "Additional Industry Vertical",
    description: "Add a second or third industry targeting system (e.g., HVAC + dental).",
    price: "+$497/mo",
  },
  {
    name: "Priority Implementation",
    description: "Compress go-live from 2–3 weeks to 1 week with dedicated sprint team.",
    price: "+$1,000 setup",
  },
  {
    name: "Custom Software / SaaS Build",
    description: "Fully custom dashboard, internal tool, or white-label SaaS product for your exact workflow.",
    price: "From $8,000 project",
  },
  {
    name: "Performance Bonus Tier",
    description: "Commission-based component on AI-attributed revenue — we only win when you do.",
    price: "Custom",
  },
  {
    name: "White-Label Partner Program",
    description: "Resell our AI systems under your own brand to your clients.",
    price: "Contact us",
  },
];

const PRICING_FAQS = [
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. The monthly retainer is month-to-month — cancel with 30 days notice. The setup fee covers your AI system build, which you own regardless of whether you continue the retainer. There are no lock-in clauses, no annual commitments, and no cancellation penalties.",
  },
  {
    q: "How long until my AI systems are live and generating leads?",
    a: "Starter and Growth systems go live in 2–3 weeks. Revenue OS is phased over 4–6 weeks to avoid disrupting your existing operations. Within the first week of go-live, you'll already have AI answering calls and capturing leads. Most clients see measurable impact by the end of week two.",
  },
  {
    q: "How quickly will I see ROI?",
    a: "Most clients see measurable revenue impact within 2–4 weeks of go-live — primarily from captured leads that would previously have gone unanswered. The ROI calculator below gives you a conservative estimate based on industry averages: businesses that respond to leads within 5 minutes convert 23% more of them than those that respond within 30 minutes or more.",
  },
];

const PILLAR_ICON_MAP: Record<string, typeof Zap> = {
  "ai-lead-capture": Bot,
  "ai-appointment-agents": CalendarCheck,
  "crm-pipeline-automation": Database,
  "customer-support-ai": Headphones,
  "reviews-reactivation-retention": Star,
  "custom-saas-tools": Code,
  "revenue-automation-consulting": TrendingUp,
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        className="flex items-start justify-between w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-testid={`faq-pricing-${q.slice(0, 20).toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span className="text-sm font-semibold text-gray-900 pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState([80]);
  const [avgDealValue, setAvgDealValue] = useState([1500]);

  const capturedLeads = Math.round(monthlyLeads[0] * 0.23);
  const additionalRevenue = capturedLeads * avgDealValue[0];
  const annualUplift = additionalRevenue * 12;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/60 to-white" data-testid="roi-calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">ROI Estimator</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            How Much Revenue Are You Leaving on the Table?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Industry data shows businesses that respond within 5 minutes convert <strong>23% more leads</strong> than those responding in 30+ minutes. AI responds instantly, every time.
          </p>
        </div>
        <Card className="p-7 sm:p-10" data-testid="roi-calculator-card">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Label className="text-sm font-medium text-gray-700">Monthly Leads Received</Label>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">{monthlyLeads[0]} leads</span>
                </div>
                <Slider
                  value={monthlyLeads}
                  onValueChange={setMonthlyLeads}
                  min={10}
                  max={500}
                  step={5}
                  data-testid="slider-monthly-leads"
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>10</span><span>500</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Label className="text-sm font-medium text-gray-700">Average Deal / Job Value</Label>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">${avgDealValue[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={avgDealValue}
                  onValueChange={setAvgDealValue}
                  min={100}
                  max={25000}
                  step={100}
                  data-testid="slider-deal-value"
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>$100</span><span>$25K</span>
                </div>
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-lg">
                <p className="text-xs text-amber-700 leading-relaxed">
                  <strong>Assumption:</strong> 23% of your leads are currently lost to slow or no follow-up — industry average from a 2023 Harvard Business Review lead-response study.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Leads Lost Monthly (No AI)</div>
                <div className="text-3xl font-extrabold text-gray-700">{capturedLeads}</div>
                <div className="text-xs text-gray-500 mt-1">out of {monthlyLeads[0]} leads — lost to voicemail or slow response</div>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1.5">Additional Revenue Per Month</div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  +${additionalRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">{capturedLeads} recovered leads × ${avgDealValue[0].toLocaleString()} avg deal</div>
              </div>
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200/60">
                <div className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1.5">Annual Revenue Uplift</div>
                <div className="text-3xl font-extrabold text-emerald-600">
                  +${annualUplift.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">Conservative estimate. Does not include review/reactivation lift.</div>
              </div>
              <Link href="/book-demo">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" data-testid="button-roi-cta">
                  Get Your Custom Revenue Plan <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <div>
      <SEOHead
        title="Pricing — AI Revenue Systems | Infinite Rankers"
        description="Transparent, outcome-driven pricing for AI revenue systems. Setup fee + monthly retainer. 3 tiers: Starter ($997/mo), Growth ($2,497/mo), Revenue OS ($4,997/mo). No contracts."
        keywords="AI revenue system pricing, AI automation pricing, Infinite Rankers pricing, AI agency cost"
        canonical="https://infiniterankers.io/pricing"
      />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-xs" data-testid="badge-pricing-hero">
              <DollarSign className="w-3 h-3 mr-1" /> Transparent Pricing
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" data-testid="text-pricing-headline">
              Pricing That Shows You{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exactly What You Get</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              Most AI agencies hide their pricing behind a sales call. We don't. Every tier shows the setup fee, monthly retainer, and which AI Revenue Pillars are included — so you know your investment before we ever speak.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-blue-500" /> No Long-Term Contracts</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" /> Live in 2–6 Weeks</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-500" /> You Own What We Build</span>
              <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-blue-500" /> Month-to-Month Retainer</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-16 sm:pb-20" data-testid="section-pricing-tiers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex"
                data-testid={`pricing-tier-${tier.id}`}
              >
                <div className={`relative flex flex-col w-full rounded-2xl border ${
                  tier.popular
                    ? "bg-gradient-to-b from-blue-600 to-indigo-700 border-blue-500 shadow-xl shadow-blue-200/50"
                    : "bg-white border-gray-200 shadow-sm"
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <Badge className="bg-white text-blue-700 border border-blue-200 shadow-sm text-xs font-semibold px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="p-6 sm:p-8 flex-1">
                    <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${tier.popular ? "text-blue-200" : "text-blue-600"}`}>
                      {tier.tagline}
                    </div>
                    <h2 className={`text-xl font-bold mb-4 ${tier.popular ? "text-white" : "text-gray-900"}`} data-testid={`tier-name-${tier.id}`}>
                      {tier.name}
                    </h2>

                    <div className={`mb-1 ${tier.popular ? "text-white/70" : "text-gray-500"}`}>
                      <span className="text-xs">One-time setup fee</span>
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${tier.popular ? "text-white" : "text-gray-900"}`} data-testid={`tier-setup-${tier.id}`}>
                      ${tier.setupFee.toLocaleString()}
                    </div>

                    <div className={`mt-4 mb-1 ${tier.popular ? "text-white/70" : "text-gray-500"}`}>
                      <span className="text-xs">Monthly retainer</span>
                    </div>
                    <div className={`text-4xl font-extrabold leading-none mb-1 ${tier.popular ? "text-white" : "text-gray-900"}`} data-testid={`tier-price-${tier.id}`}>
                      ${tier.monthlyPrice.toLocaleString()}
                      <span className={`text-base font-normal ml-1 ${tier.popular ? "text-white/70" : "text-gray-500"}`}>/mo</span>
                    </div>
                    <div className={`text-xs mb-6 ${tier.popular ? "text-white/60" : "text-gray-400"}`}>No lock-in · cancel with 30-day notice</div>

                    <Link href="/book-demo">
                      <Button
                        className={`w-full font-semibold ${
                          tier.popular
                            ? "bg-white text-blue-700 hover:bg-blue-50"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                        data-testid={`button-pricing-${tier.id}`}
                      >
                        {tier.cta} <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>

                    <div className={`mt-6 pt-6 border-t ${tier.popular ? "border-white/20" : "border-gray-100"}`}>
                      <div className={`text-xs font-semibold uppercase tracking-wide mb-3 ${tier.popular ? "text-blue-200" : "text-gray-500"}`}>
                        AI Revenue Pillars Included
                      </div>
                      <div className={`text-xs mb-3 ${tier.popular ? "text-white/70" : "text-gray-500"}`}>{tier.pillarsNote}</div>
                      <div className="space-y-2 mb-5">
                        {SERVICE_PILLARS.map((pillar) => {
                          const PillarIcon = PILLAR_ICON_MAP[pillar.slug] || Zap;
                          const isIncluded = tier.pillarsIncluded === 7 || tier.pillars.includes(pillar.slug);
                          return (
                            <div key={pillar.slug} className={`flex items-center gap-2 text-xs ${
                              isIncluded
                                ? tier.popular ? "text-white" : "text-gray-700"
                                : tier.popular ? "text-white/30" : "text-gray-300"
                            }`}>
                              <PillarIcon className={`w-3.5 h-3.5 flex-shrink-0 ${isIncluded ? "" : "opacity-30"}`} />
                              <span className={isIncluded ? "" : "line-through"}>{pillar.title}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className={`text-xs font-semibold uppercase tracking-wide mb-3 ${tier.popular ? "text-blue-200" : "text-gray-500"}`}>
                        What's Included
                      </div>
                      <div className="space-y-2">
                        {tier.features.map((feature, fi) => (
                          <div key={fi} className={`flex items-start gap-2 text-xs ${tier.popular ? "text-white/90" : "text-gray-700"}`}>
                            <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${tier.popular ? "text-blue-200" : "text-emerald-500"}`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`mt-5 pt-5 border-t ${tier.popular ? "border-white/20" : "border-gray-100"}`}>
                      <div className={`text-xs font-semibold mb-1 ${tier.popular ? "text-blue-200" : "text-gray-500"}`}>Best for:</div>
                      <p className={`text-xs leading-relaxed ${tier.popular ? "text-white/80" : "text-gray-600"}`}>{tier.whoItsFor}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Build Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6"
            data-testid="pricing-custom-build"
          >
            <Card className="p-6 sm:p-8 bg-gray-900 border-gray-800 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Enterprise / Custom</div>
                <h3 className="text-lg font-bold text-white mb-2">Custom Build</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Building a custom SaaS product, white-label AI platform, or a fully bespoke revenue system for a unique workflow? We scope and price custom builds as fixed-fee projects starting at $8,000.
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <div className="text-2xl font-extrabold text-white">Custom</div>
                <div className="text-xs text-gray-500">Project-based pricing</div>
                <Link href="/book-demo">
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 mt-1" data-testid="button-custom-build">
                    Let's Talk <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-14 sm:py-18 bg-gray-50 border-t border-gray-100" data-testid="section-addons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">Optional Add-Ons</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Extend Any Plan</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Add-ons can be layered onto any tier. Mix and match based on where your biggest revenue gaps are.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="p-5 h-full bg-white border-gray-200 hover:shadow-sm transition-shadow" data-testid={`addon-card-${i}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plus className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-sm font-semibold text-gray-900">{addon.name}</h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded flex-shrink-0">{addon.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{addon.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* FAQ */}
      <section className="py-14 sm:py-18 bg-white" data-testid="section-pricing-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">Pricing Questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Common Pricing Objections — Answered</h2>
          </div>
          <div className="space-y-3">
            {PRICING_FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden" data-testid="section-pricing-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Not Sure Which System Is Right for You?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Book a 30-minute strategy call. We'll audit your current revenue gaps, show you which AI pillars have the highest ROI for your specific business, and give you a custom implementation plan — no commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-demo">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold" data-testid="button-pricing-final-cta">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-pricing-explore-services">
                  Explore All 7 AI Systems
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
