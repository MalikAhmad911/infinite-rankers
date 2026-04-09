import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import { getLandingPage, ALL_LANDING_PAGES } from "@/lib/landing-pages";
import { ALL_SERVICES } from "@/lib/constants";
import { GooglePartnerBadge } from "@/components/google-partner-badge";
import {
  ArrowRight, CheckCircle2, Star, ExternalLink,
  Bot, Target, Globe, Zap, Phone, TrendingUp, BarChart3, Search,
  MapPin, Shield, Clock, DollarSign, Users, Building2, Stethoscope,
  Scale, ShoppingCart, Utensils, Brain, Rocket, Award, Mail,
  MessageSquare, Database, Workflow, Cpu, Activity, LineChart,
  Layers, Network, Settings, Plug, PieChart, Code, Share2,
  Calendar, Heart, Briefcase, ChevronDown, Quote,
} from "lucide-react";
import { useState } from "react";
import CaseStudiesMarquee from "@/components/case-studies-marquee";
import TestimonialsMarquee from "@/components/testimonials-marquee";
import NotFound from "@/pages/not-found";
import { LiveServiceWidget } from "@/components/live-service-widget";

const iconMap: Record<string, any> = {
  Bot, Target, Globe, Zap, Phone, TrendingUp, BarChart3, Search,
  MapPin, Shield, Clock, DollarSign, Users, Building2, Stethoscope,
  Scale, ShoppingCart, Utensils, Brain, Rocket, Award, CheckCircle2,
  Mail, MessageSquare, Database, Workflow, Cpu, Activity, LineChart,
  Layers, Network, Settings, Plug, PieChart, Code, Share2, Calendar,
  Star, Heart, Briefcase,
};

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-200/60 rounded-md"
      data-testid={`faq-item-${index}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-medium text-sm sm:text-base text-gray-900">{q}</span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className="grid transition-all duration-200"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
            <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function buildLandingNarrative(page: any) {
  const painLine = page.painPoints.points.slice(0, 3).map((p: any) => p.title).join(", ");
  const capabilityLine = page.aiSystem.capabilities.slice(0, 4).map((c: any) => c.title).join(", ");
  const featureLine = page.features.items.slice(0, 4).map((f: any) => f.title).join(", ");
  const pipelineLine = page.pipeline.steps.map((s: any) => s.title).join(" → ");
  const faqLine = page.faqs.slice(0, 2).map((f: any) => f.q).join(" | ");
  const resultLine = page.results.cases.slice(0, 2).map((c: any) => `${c.business} (${c.industry})`).join(" and ");
  const firstCase = page.results.cases[0];
  const firstPain = page.painPoints.points[0];
  
  
  const hash = Array.from(page.slug as string).reduce((acc: number, ch: string) => acc + ch.charCodeAt(0), 0);
  const variant = hash % 3;

  const pageType: string = page.type || "service";

  if (pageType === "location") {
    const locationName = page.hero.titleHighlight || "your area";
    const locationVariants = [
      [
        `Every market has its own pace — and ${locationName} is no exception. Businesses competing for attention here face ${firstPain?.title || painLine} alongside rising customer expectations and shrinking margins for error. The window to capture a qualified lead and turn it into booked revenue is shorter than most owners realize.`,
        `Infinite Rankers builds AI Revenue Systems specifically calibrated for local market dynamics. Instead of generic automation, our systems account for local search behavior, response timing patterns, and industry-specific buyer intent signals. The result is a pipeline that grows without proportional headcount increases.`,
        `The system activates through a staged deployment: ${pipelineLine}. Each stage is validated before the next begins — protecting your existing customer relationships while introducing new automation layers. Most ${locationName} clients see qualified lead volume increase within the first 30 days of go-live.`,
        `Core capabilities powering the system include ${capabilityLine}. These are not disconnected point solutions — they operate as one coordinated revenue engine. When a lead enters from any source, every subsequent touchpoint is automated, tracked, and attributed to real business outcomes.`,
        `Businesses like ${resultLine} have used this system to capture market share in competitive local environments. Their results reflect what happens when speed and consistency are engineered into the lead management process rather than left to individual effort.`,
        `Common questions from ${locationName} business owners cover: ${faqLine}. These questions get answered directly on this page because informed buyers convert faster and stay longer. Clarity at the decision stage is not just good content — it is a conversion asset.`,
      ],
      [
        `${locationName} businesses are leaving revenue on the table every time an after-hours lead goes unanswered or a follow-up sequence stalls. The data is clear: the first business to respond with context and competence wins the deal. Speed alone is not enough — you need speed plus qualification plus booking, all running automatically.`,
        `Three critical gaps we see consistently in ${locationName}: ${painLine}. Each gap represents a revenue leak. Individually they are manageable. Combined, they compound into a significant cap on growth — one that more marketing spend cannot fix without first solving the operational layer underneath.`,
        `What changes when you deploy Infinite Rankers: ${capabilityLine} starts running in the background 24 hours a day. Every lead is captured, scored, and routed. Every follow-up fires on schedule. Every appointment is booked and confirmed. Your team handles conversations and closings — the system handles everything else.`,
        `Implementation is structured as: ${pipelineLine}. This structure is non-negotiable. Rushing deployment creates performance risk and undermines the trust required for AI-assisted customer communication. We treat launch quality as a prerequisite, not an afterthought.`,
        `${featureLine} — these features matter because they directly reduce the time between a prospect's first signal and a signed contract. Less friction, faster decisions, higher close rates. That is the formula ${locationName} businesses use to compound revenue without compounding overhead.`,
        `Before committing, most owners ask: ${faqLine}. These questions reflect real concerns about implementation risk, ROI timeline, and operational fit. We address them here so that your evaluation is based on complete information rather than assumptions.`,
      ],
      [
        `What separates thriving ${locationName} businesses from those stuck at a revenue plateau is rarely marketing budget — it is execution infrastructure. Without systems that capture, qualify, and convert leads consistently, even the best advertising spend underperforms.`,
        `The problems that stall growth are predictable: ${painLine}. Each problem has a specific system-level solution. Infinite Rankers does not sell software that requires your team to change behavior — we build infrastructure that changes outcomes while your team keeps operating naturally.`,
        `Deployed capabilities for this market include ${capabilityLine}. Each is configured specifically for ${locationName} buyer behavior and industry expectations. The configuration process takes the first two weeks of engagement, followed by a monitored launch and iterative performance improvement.`,
        `The go-live process: ${pipelineLine}. Every business that has followed this sequence has launched with a stable, tested system. No surprises, no ramp period of "let's see what happens." Performance is validated before we consider launch complete.`,
        `From a feature perspective, ${featureLine} handles the heavy lifting of lead conversion. Each feature was selected because it addresses a documented failure mode in traditional lead management — the kind of failure that costs real appointments and real revenue every week.`,
        `${resultLine} are among the ${locationName} businesses that have used this system to build predictable pipelines. Their growth is not an accident — it is the output of a process that runs whether or not any single team member is available on a given day.`,
      ],
    ];
    return locationVariants[variant];
  }

  if (pageType === "industry") {
    const industryName = page.hero.titleHighlight || "your industry";
    const industryVariants = [
      [
        `${industryName} businesses operate with a specific set of customer expectations, compliance requirements, and competitive dynamics that generic marketing tools simply do not account for. Lead management in this sector requires speed, specificity, and the kind of follow-up discipline that most teams cannot sustain manually.`,
        `The three operational gaps costing ${industryName} businesses the most revenue right now: ${painLine}. These are not abstract inefficiencies — they translate directly into lost appointments, stalled pipelines, and competitors closing deals that should have been yours.`,
        `Infinite Rankers builds systems for exactly this situation. Capabilities like ${capabilityLine} are configured around the real workflows of ${industryName} operations. Not templated automation that requires you to adapt your process — purpose-built infrastructure that adapts to yours.`,
        `Deployment follows a validated sequence: ${pipelineLine}. Each phase includes quality checkpoints designed to protect patient, client, or customer relationships from automation errors. We treat industry-specific context as a core design constraint, not an afterthought.`,
        `The feature set — ${featureLine} — directly targets the conversion gaps that keep ${industryName} businesses stuck. Each tool was selected based on what the data shows drives the most significant improvement in qualified appointment volume and close rate within this sector.`,
        `${resultLine} demonstrate that systematic, AI-powered growth is achievable in ${industryName} without overhauling existing operations. The system layers in under your current workflow, not over it.`,
      ],
      [
        `There is a reason top-performing ${industryName} businesses look different from average ones: they treat lead capture and follow-up as engineered systems, not team-dependent tasks. When a qualified prospect reaches out, every second of response delay reduces conversion probability — and most ${industryName} businesses have significant, measurable delays baked into their operations.`,
        `Five years of ${industryName} client engagements have surfaced the same friction points again and again: ${painLine}. These are the exact problems that cause capable businesses to underperform their actual market opportunity. Solving them is not a talent question — it is an infrastructure question.`,
        `The AI capabilities we deploy for ${industryName}: ${capabilityLine}. These work together as an integrated system. A prospect who contacts you at 11pm gets an immediate, intelligent response that qualifies their need, answers common questions, and schedules a consultation — all before your team arrives the next morning.`,
        `System activation: ${pipelineLine}. This sequence is tested across dozens of ${industryName} businesses and refined based on what actually drives faster ROI. The order matters — each stage creates the data and process stability required for the next.`,
        `${featureLine} are the specific mechanics that close the gap between lead volume and booked revenue. Business owners who have deployed these features consistently report a step-change in appointment rate — not a gradual improvement, but a structural increase that compounds month over month.`,
        `If you are still evaluating, the questions worth considering first are: ${faqLine}. These reflect the exact concerns that matter most for ${industryName} buyers making a technology decision with real operational implications.`,
      ],
      [
        `${industryName} runs on trust — and trust is built through consistent, professional communication from first contact through service delivery. The problem is that most ${industryName} businesses have inconsistent first-contact experiences because they depend on human availability rather than systematic processes.`,
        `The gap between your current first-contact experience and best-in-class costs you ${painLine}. These are not hypothetical losses. They are measurable in missed appointments, unconverted estimates, and customers who called your competitor because you did not pick up.`,
        `Infinite Rankers closes this gap using ${capabilityLine}. Each capability is mapped to a specific moment in the ${industryName} customer journey — from first contact through post-service review. The system handles every touchpoint so your team can focus on delivering excellent service rather than managing the surrounding logistics.`,
        `Implementation sequence: ${pipelineLine}. This is how we consistently deliver live, performing systems in under 30 days for ${industryName} businesses without disrupting their existing operations.`,
        `The tools — ${featureLine} — generate measurable output: more bookings from the same lead volume, faster response times, higher review ratings, and stronger Google rankings. The improvements are interrelated and compound over time.`,
        `${resultLine} show what is achievable when these systems run inside ${industryName} operations that are already good at their craft. The AI does not replace expertise — it ensures that expertise gets in front of more qualified buyers.`,
      ],
    ];
    return industryVariants[variant];
  }

  if (pageType === "comparison") {
    const competitorName = (page.hero.title || "").split(" vs ")[1] || "legacy platforms";
    const comparisonVariants = [
      [
        `Businesses switching from ${competitorName} to Infinite Rankers are not looking for a different version of the same product. They are looking for something the incumbent cannot deliver: a system that converts leads into revenue instead of a platform that manages contacts and sends requests.`,
        `The core limitation of ${competitorName} is architectural. It was designed as a communication and review tool, not a revenue system. That means critical capabilities — ${capabilityLine} — are either absent, bolted on, or require separate tools that add cost and complexity.`,
        `What the switch actually changes: ${painLine} get solved rather than managed. The distinction matters because managing problems requires ongoing human effort. Solving them means the system handles the workload while your team focuses on higher-value work.`,
        `The implementation path to a fully operational alternative: ${pipelineLine}. Most businesses complete this transition without downtime or contact list disruption. Data migration from ${competitorName} is handled as part of the onboarding process.`,
        `Features that ${competitorName} lacks or charges extra for — ${featureLine} — are included in a single Infinite Rankers deployment. There is no modular pricing that inflates the total as you add functionality. One system, full capability, one monthly cost.`,
        `The businesses that have made this switch — including ${resultLine} — report that the decision accelerated revenue in ways their previous platform never could. That outcome is the point. Not feature parity. Revenue.`,
      ],
      [
        `${competitorName} built a business on being first — but first-mover advantages erode when the market matures and buyers start demanding outcomes instead of features. The question businesses are asking now is not "does this platform send review requests?" — it is "does this platform generate measurable revenue?"`,
        `Side by side, the gaps are significant. ${competitorName} offers contact management and basic automation. Infinite Rankers deploys ${capabilityLine} — a complete revenue infrastructure that captures leads, qualifies them, books appointments, and tracks everything to a revenue outcome.`,
        `Where ${competitorName} requires manual intervention for: ${painLine} — Infinite Rankers automates every touchpoint. The operational difference is not marginal. It is the difference between a tool your team uses and a system that works without your team.`,
        `Migration is straightforward: ${pipelineLine}. We have migrated hundreds of businesses off incumbent platforms without service interruption. Your customer data, review history, and contact lists transfer cleanly.`,
        `Concrete feature advantages: ${featureLine}. Each of these capabilities solves a specific problem that ${competitorName} users report as a friction point in their current workflow. They are not edge cases — they are the daily operation of running a growing service business.`,
        `Before switching, most businesses ask: ${faqLine}. These are fair questions with clear answers. We answer them here so that your evaluation is complete before you commit to a call.`,
      ],
      [
        `The reason businesses leave ${competitorName} is rarely price. It is capability. Specifically: ${competitorName} does not have an answer to ${painLine}. These are the gaps that accumulate into real revenue loss over time.`,
        `Infinite Rankers was built to solve exactly what ${competitorName} cannot. ${capabilityLine} are not feature additions — they are the foundation of how the system captures and converts demand that existing platforms let slip through.`,
        `Functionally, the difference shows up in the numbers: ${resultLine} generated results that were not achievable on their previous platforms. Not because of magic — because of systematic lead capture, qualification, and follow-up that replaced manual processes with reliable automation.`,
        `The transition process: ${pipelineLine}. This is fast, structured, and low-risk. You will not spend three months in implementation before seeing value. Most businesses are fully live within two weeks of kickoff.`,
        `The features your ${competitorName} contract does not include — ${featureLine} — are standard in every Infinite Rankers deployment. No add-ons. No tier upgrades required to access the automation that actually moves revenue.`,
        `If you are actively evaluating this switch, the first questions worth answering are: ${faqLine}. Understanding these answers will make the path forward clear before you spend another month on a platform that cannot get you where you are trying to go.`,
      ],
    ];
    return comparisonVariants[variant];
  }

  const serviceVariants = [
    [
      `${page.hero.title} ${page.hero.titleHighlight} exists to solve a problem that most businesses feel but cannot precisely diagnose: qualified leads are reaching you, but the conversion rate between first contact and closed revenue is lower than it should be. The cause is almost always infrastructure — specifically, the absence of systems that capture, qualify, and follow up with consistency.`,
      `The three operational constraints that limit growth in this area: ${painLine}. Each constraint has a clear system-level solution. Infinite Rankers does not address these problems with advice or templates — we build the infrastructure that eliminates them from your daily operation.`,
      `The AI layer powering this system includes ${capabilityLine}. These capabilities work together rather than in isolation. A lead that enters through any channel gets the same intelligent, timely response — whether that channel is your website, a phone call, a missed contact form, or a referral text.`,
      `System deployment follows: ${pipelineLine}. The sequence is validated across hundreds of business deployments and refined based on what produces the fastest time to measurable revenue improvement. Shortcuts in this process introduce risk — we do not take them.`,
      `Execution features include ${featureLine}. Each feature was selected because it directly addresses a documented failure mode in traditional lead management. Removing those failure modes has a compounding effect on conversion rate, appointment volume, and revenue consistency.`,
      `${resultLine} illustrate what becomes possible when these systems are deployed correctly. Their results are not exceptional — they reflect what most service businesses can achieve when lead management is treated as an engineered system rather than a team-dependent activity.`,
    ],
    [
      `Most businesses grow to a point where individual effort can no longer drive the next stage of revenue expansion. The ceiling is not market size or service quality — it is operational throughput. How many leads can your current process handle without degradation in response time, follow-up consistency, or customer experience?`,
      `The specific bottlenecks we address: ${painLine}. These show up in different ways across different businesses, but the root cause is the same — revenue-critical touchpoints are dependent on human availability rather than systematic execution.`,
      `Infinite Rankers removes that dependency. Capabilities like ${capabilityLine} run continuously, requiring no supervision after deployment. Every lead is handled. Every follow-up fires. Every appointment is confirmed. The system does not have sick days, training gaps, or capacity limits.`,
      `The activation process: ${pipelineLine}. Each stage builds the foundation for the next. Businesses that follow this sequence launch with systems that are already calibrated to their specific buyer behavior and service delivery workflow.`,
      `${featureLine} are the tools that close deals. Not by replacing human judgment — by ensuring human judgment gets applied only when it actually moves the opportunity forward. Everything before that moment is automated, tracked, and optimized.`,
      `${firstCase?.business || "Client businesses"} and others have used this system to build revenue pipelines that operate independently of any single team member's effort. That kind of operational resilience is what makes growth sustainable rather than exhausting.`,
    ],
    [
      `The gap between marketing activity and revenue outcomes in most businesses is not a demand problem. Businesses generating strong traffic and lead volume still plateau because the conversion infrastructure between first contact and signed contract is unreliable. Fixing that infrastructure is the highest-leverage action available.`,
      `Three common infrastructure gaps: ${painLine}. Each gap has a compounding effect. A delayed response reduces close probability. A missed follow-up loses a warm prospect. An unbooked callback is revenue that goes directly to a competitor who picked up. These are not hypothetical — they happen daily in most service businesses.`,
      `The system that closes these gaps operates through ${capabilityLine}. The configuration process maps these capabilities to your specific customer journey — not a generic workflow, but one built around how your actual prospects behave and what they expect at each stage.`,
      `Implementation path: ${pipelineLine}. This is not a rushed launch — it is a validated deployment that tests each automation layer before it goes live with real customers. The discipline is intentional: one error in a customer-facing automation undermines the trust the entire system depends on.`,
      `Features like ${featureLine} generate the specific outcomes that matter: more booked appointments from the same lead volume, faster response times, higher review velocity, and compounding improvement in local search rankings. Each outcome feeds the next, creating a growth loop rather than a linear increase.`,
      `If you are deciding whether to move forward, the questions most commonly asked at this stage are: ${faqLine}. These questions get answered here — not deferred to a sales call — because businesses that make informed decisions become better long-term clients.`,
    ],
  ];
  return serviceVariants[variant];
}

export default function LandingPage({ slug }: { slug?: string }) {
  const page = slug ? getLandingPage(slug) : null;

  if (!page) {
    return <NotFound />;
  }

  const relatedPages = page.relatedLandingPages
    .map((slug) => ALL_LANDING_PAGES.find((p) => p.slug === slug))
    .filter(Boolean);

  const relatedServiceData = page.relatedServices
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);
  const landingNarrative = buildLandingNarrative(page);

  const ogImageMap: Record<string, string> = {
    comparison: "/images/og-competitor.png",
    location: "/images/og-location.png",
    industry: "/images/og-industry.png",
    service: "/images/og-service.png",
  };
  const ogImage = ogImageMap[page.type] || "/images/logo-full.png";

  const quickAnswer = (() => {
    const sentences = (page.aiSystem.description || "").split(/(?<=[.!?])\s+/);
    return sentences.slice(0, 2).join(" ");
  })();

  const geoPhrase = (page.aiSystem.title || "").replace(/^(AI|The)\s+/i, "").toLowerCase();

  return (
    <div>
      <SEOHead
        title={page.seoTitle}
        description={page.seoDescription}
        keywords={page.seoKeywords}
        canonical={page.canonical}
        ogImage={ogImage}
      />

      {/* Section 1: Conversion Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-indigo-50/30" />
        <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 sm:mb-5" data-testid="badge-hero">
              {page.hero.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" data-testid="text-hero-title">
              {page.hero.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {page.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
              {page.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
              <Link href="/book-demo">
                <Button className="w-full sm:w-auto" data-testid="button-hero-cta">
                  Get Your Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto" data-testid="button-hero-pricing">
                  Contact for Pricing
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {page.hero.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white/60 backdrop-blur border border-gray-200/40"
                  data-testid={`stat-hero-${i}`}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Answer Box — AIO/AEO signal for Googlebot and AI crawlers */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-100" data-testid="section-quick-answer">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 p-5 rounded-xl border-l-4 border-blue-500 bg-blue-50/60">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">Quick Answer</p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{quickAnswer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1.5: Live Widget — See the AI System in Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50/40" data-testid="section-live-widget">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">See It Work — Live</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Your AI Revenue System,<br />Running Right Now
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                While you're reading this, AI systems like the one we build for you are capturing leads, booking appointments, and following up — without a single person lifting a finger.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Every lead captured — even at 2 AM",
                  "Follow-ups sent automatically until they respond",
                  "Appointments booked without human involvement",
                  "Revenue tracked, reported, and optimized weekly",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/book-demo">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0" data-testid="button-live-widget-cta">
                  Get This Built for Your Business <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
            <div>
              <LiveServiceWidget
                slug={page.relatedServices?.[0] ?? "ai-lead-capture"}
                accentGradient="bg-gradient-to-r from-blue-600 to-indigo-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: USA Market Pain Points */}
      <section className="py-16 sm:py-20 lg:py-24" data-testid="section-pain-points">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="The Challenge" title={page.painPoints.title} description={page.painPoints.subtitle} />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {page.painPoints.points.map((point, i) => {
              const Icon = iconMap[point.icon] || Zap;
              return (
                <GlassCard key={i} delay={i * 0.08} data-testid={`pain-point-${i}`}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center flex-shrink-0 border border-red-100/50">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{point.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: AI Revenue Growth System Explanation */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-ai-system">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="The Solution" title={page.aiSystem.title} description={page.aiSystem.subtitle} />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base"
          >
            {page.aiSystem.description}
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {page.aiSystem.capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon] || Zap;
              return (
                <GlassCard key={i} delay={i * 0.08} glow>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-blue-200/30">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cap.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Service Process Pipeline Visualization */}
      <section className="py-16 sm:py-20 lg:py-24" data-testid="section-pipeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Process" title={page.pipeline.title} description={page.pipeline.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {page.pipeline.steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Zap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                  data-testid={`pipeline-step-${i}`}
                >
                  {i < page.pipeline.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-blue-300 to-indigo-300/30" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-200/30 mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 text-xs font-bold text-blue-600 flex items-center justify-center leading-none">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Case Study Style Results — Scrolling Marquee */}
      <CaseStudiesMarquee
        cases={page.results.cases.map((cs: any) => ({
          badge: cs.industry,
          title: cs.business,
          business: "",
          metrics: cs.metrics,
          quote: cs.quote,
        }))}
        label="Proven Results"
        title={page.results.title}
        description={page.results.subtitle}
        animationDuration="50s"
        fallbackHref="/portfolio"
      />

      {/* Section 6: Service Features & Automation Tools */}
      <section className="py-16 sm:py-20 lg:py-24" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Features" title={page.features.title} description={page.features.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {page.features.items.map((feat, i) => {
              const Icon = iconMap[feat.icon] || Zap;
              return (
                <GlassCard key={i} delay={i * 0.06}>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center flex-shrink-0 border border-blue-100/40">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{feat.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
          {relatedServiceData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-10 text-center"
            >
              <p className="text-sm text-gray-500 mb-3">Explore related services on our platform:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {relatedServiceData.map((s) => s && (
                  <Link key={s.slug} href={`/${s.slug}`}>
                    <Badge variant="outline" className="cursor-pointer text-xs" data-testid={`link-related-service-${s.slug}`}>
                      {s.title}
                    </Badge>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 7: Why Infinite Rankers Ecosystem */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-ecosystem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Ecosystem" title={page.ecosystem.title} description={page.ecosystem.subtitle} />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base"
          >
            {page.ecosystem.description}
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <GlassCard glow>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">infiniterankers.io</h3>
                  <p className="text-xs text-gray-500">AI Infrastructure & Automation</p>
                </div>
              </div>
              <ul className="space-y-3">
                {page.ecosystem.ioFeatures.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">{f.title}</span>
                      <p className="text-xs text-gray-500">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard glow>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">infiniterankers.com</h3>
                  <p className="text-xs text-gray-500">Marketing Authority & Content</p>
                </div>
              </div>
              <ul className="space-y-3">
                {page.ecosystem.comFeatures.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">{f.title}</span>
                      <p className="text-xs text-gray-500">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-gray-200/60">
                <p className="text-xs text-gray-500 mb-2">Explore on infiniterankers.com:</p>
                <div className="flex flex-wrap gap-2">
                  {page.ecosystem.comLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 hover:text-purple-700 transition-colors"
                      data-testid={`link-com-ecosystem-${i}`}
                    >
                      {link.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
          {page.comLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200/60"
            >
              <p className="text-sm text-gray-600 mb-3">
                Both platforms work together as one unified agency ecosystem to maximize your growth.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {page.comLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    data-testid={`link-com-${i}`}
                  >
                    {link.label} <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <TestimonialsMarquee
        testimonials={page.testimonials.map((t) => ({
          name: t.name,
          role: `${t.role}, ${t.company}`,
          text: t.quote,
          rating: t.rating,
        }))}
        label="Testimonials"
        title="What Our Clients Say"
        description="Real feedback from businesses using our AI automation systems."
      />

      {/* Section 9: FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="FAQ" title="Frequently Asked Questions" description="Get answers to the most common questions about our AI automation systems." />
          <div className="space-y-3">
            {page.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* GEO Entity Statement — visible text for AI crawlers (ChatGPT, Perplexity, Gemini) */}
      <section className="py-10 sm:py-12 bg-gray-50/80 border-t border-b border-gray-200/60" data-testid="section-geo-entity">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
            <strong className="text-gray-800">Infinite Rankers</strong> is a USA-based AI Revenue Systems Agency that {geoPhrase}. We serve businesses across the United States from our headquarters in Orlando, FL.{" "}
            <span className="whitespace-nowrap">Call: <a href="tel:+17034159373" className="text-blue-600 hover:underline">(703) 415-9373</a></span>
            {" · "}
            <a href="mailto:contact@infiniterankers.io" className="text-blue-600 hover:underline">contact@infiniterankers.io</a>
          </p>
        </div>
      </section>

      {/* Related Landing Pages - Cross Linking */}
      {relatedPages.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24" data-testid="section-related-pages">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Related" title="Explore More Solutions" description="Discover how our AI systems serve other markets and industries." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedPages.map((rp, i) => rp && (
                <Link key={rp.slug} href={`/${rp.slug}`}>
                  <GlassCard delay={i * 0.08} glow className="cursor-pointer h-full">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {rp.type === "location" ? "Location" : rp.type === "industry" ? "Industry" : "Service"}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base" data-testid={`related-page-${rp.slug}`}>
                      {rp.hero.title} {rp.hero.titleHighlight}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">{rp.hero.subtitle}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 mt-3">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 sm:py-16" data-testid="section-growth-playbook-depth">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Growth Playbook"
              title={`How We Scale ${page.hero.titleHighlight} Campaigns Across USA Markets`}
              description="A page-specific execution framework generated from this market's own pain points, capabilities, pipeline, and proof data."
            />

            <div className="grid lg:grid-cols-3 gap-6">
              <GlassCard className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-foreground mb-3">Strategy and Execution Model</h3>
                <div className="space-y-3">
                  {landingNarrative.map((paragraph: string, idx: number) => (
                    <p key={idx} className="text-sm text-muted-foreground leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold text-foreground mb-3">What This Improves</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Higher visibility for commercial-intent searches.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Better conversion rates from landing page visits.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Faster response workflows that reduce lead leakage.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Clear reporting for decision-makers and sales leadership.</span></li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>
      {/* Section 10: Strong Conversion CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6" data-testid="text-cta-title">
              {page.cta.title}
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {page.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/book-demo">
                <Button variant="secondary" className="w-full sm:w-auto" data-testid="button-cta-main">
                  {page.cta.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto backdrop-blur bg-white/90 text-gray-900 border-white" data-testid="button-cta-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center mt-8">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/60 text-xs sm:text-sm">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Free Strategy Session</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Flexible Plans Available</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Results in 30 Days</span>
              </div>
              <div className="mt-4">
                <GooglePartnerBadge variant="compact" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
