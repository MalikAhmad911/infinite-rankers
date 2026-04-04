import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Bot, Zap, Target, TrendingUp, ArrowRight, CheckCircle2, Star,
  Phone, BarChart3, CalendarCheck, DollarSign, Users,
  Sparkles, Shield, Clock, ChevronRight, Activity, Cpu, Database,
  MessageSquare, Mail, ArrowUpRight, Rocket,
  Workflow, Building2, Headphones, Code, Search, Settings,
} from "lucide-react";
import {
  ACHIEVEMENTS, HOW_IT_WORKS_STEPS,
  TESTIMONIALS, CASE_STUDIES, BLOG_POSTS,
} from "@/lib/constants";
import { GooglePartnerBadge } from "@/components/google-partner-badge";
import TestimonialsMarquee from "@/components/testimonials-marquee";

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (inView && numericValue) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) { setCount(numericValue); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, numericValue]);

  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffixStr = value.match(/[^0-9]*$/)?.[0] || "";
  return <span ref={ref}>{prefix}{inView ? count.toLocaleString() : "0"}{suffixStr}</span>;
}

function LiveDashboard() {
  const [revenue, setRevenue] = useState(12450);
  const [leads, setLeads] = useState(187);
  const [conversion, setConversion] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 50 + 10));
      setLeads(prev => prev + Math.floor(Math.random() * 3));
      setConversion(prev => Math.min(15, prev + (Math.random() * 0.1 - 0.03)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sparklinePoints = [32, 28, 35, 31, 38, 33, 40, 36, 42, 39, 44, 41, 46, 43, 48, 45, 50, 47, 52, 49];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -5 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-blue-200/30 via-indigo-200/20 to-purple-200/30 rounded-2xl blur-2xl" />
      <div className="relative bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-2xl shadow-indigo-200/20 p-4 sm:p-6 overflow-hidden">
        <div className="flex items-center gap-2 mb-3 sm:mb-5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="text-xs sm:text-sm font-semibold text-gray-800">AI Revenue Pipeline</div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-medium text-emerald-600">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-5">
          {[
            { label: "Revenue", value: `$${revenue.toLocaleString()}`, change: "+23%", color: "text-blue-600" },
            { label: "Leads", value: leads.toLocaleString(), change: "+18%", color: "text-indigo-600" },
            { label: "Conversion", value: `${conversion.toFixed(1)}%`, change: "+5.2%", color: "text-purple-600" },
          ].map((metric) => (
            <div key={metric.label} className="bg-gray-50/80 rounded-lg p-2 sm:p-3 border border-gray-100" data-testid={`metric-${metric.label.toLowerCase()}`}>
              <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">{metric.label}</div>
              <div className={`text-sm sm:text-lg font-bold ${metric.color} tabular-nums`}>{metric.value}</div>
              <div className="text-[10px] sm:text-xs text-emerald-600 font-medium mt-0.5">{metric.change}</div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50/80 rounded-lg p-3 sm:p-4 border border-gray-100 mb-3 sm:mb-4">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs font-medium text-gray-500">Revenue Growth</span>
            <span className="text-[10px] sm:text-xs text-emerald-600 font-medium">+34% MoM</span>
          </div>
          <svg viewBox="0 0 200 60" className="w-full h-10 sm:h-12">
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path d={`M0,${60 - sparklinePoints[0]} ${sparklinePoints.map((p, i) => `L${(i / 19) * 200},${60 - p}`).join(" ")} L200,60 L0,60 Z`} fill="url(#sparkGrad)" />
            <path d={`M0,${60 - sparklinePoints[0]} ${sparklinePoints.map((p, i) => `L${(i / 19) * 200},${60 - p}`).join(" ")}`} fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          {[
            { label: "Missed Call", action: "AI text-back sent", status: "captured" },
            { label: "Lead Qualified", action: "Routed to CRM", status: "booked" },
            { label: "Follow-up #3", action: "Appointment booked", status: "closed" },
            { label: "Review Request", action: "5-star review received", status: "retained" },
          ].map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + i * 0.12 }}
              className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2.5 rounded-lg bg-white/60 border border-gray-100"
              data-testid={`pipeline-step-${i}`}
            >
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-[9px] sm:text-xs font-bold">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-gray-700">{step.label}</span>
                <span className="text-[10px] sm:text-xs text-gray-400 mx-1.5">→</span>
                <span className="text-[10px] sm:text-xs text-gray-600">{step.action}</span>
              </div>
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[10px] sm:text-xs text-gray-500">Projected Monthly Revenue Uplift</span>
            <span className="text-xs sm:text-sm font-bold text-blue-700">+$12,500</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/40" />
      <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-indigo-500/[0.08] blur-[80px]" />
      <div className="absolute top-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-violet-500/[0.07] blur-[90px]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <Badge variant="secondary" className="mb-4 sm:mb-6" data-testid="badge-hero-agency">
              <Sparkles className="w-3 h-3 mr-1" /> AI Revenue Systems Agency
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.12] mb-4 sm:mb-6" style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }} data-testid="text-hero-headline">
              We Build AI Systems That{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Capture Leads, Follow Up, and Close Sales
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl" style={{ fontSize: "clamp(0.938rem, 2vw, 1.25rem)" }} data-testid="text-hero-subhead">
              Infinite Rankers is an AI Revenue Systems Agency. We design, build, and run the AI systems that capture every lead, follow up automatically, and book more appointments — without adding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-demo">
                <Button className="w-full sm:w-auto" data-testid="button-hero-book-demo">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="outline" className="w-full sm:w-auto" data-testid="button-hero-roi">
                  Estimate Your Revenue Uplift
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-5">
              <span className="text-xs text-gray-500 mr-1">Top systems:</span>
              {[
                { slug: "ai-lead-capture", label: "AI Lead Capture" },
                { slug: "ai-appointment-agents", label: "AI Appointment Agents" },
                { slug: "crm-pipeline-automation", label: "CRM Automation" },
              ].map((s) => (
                <Link key={s.slug} href={`/${s.slug}`}>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 hover:bg-blue-100 transition-colors cursor-pointer" data-testid={`hero-service-${s.slug}`}>
                    <Zap className="w-2.5 h-2.5" /> {s.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
              {[
                { icon: Shield, text: "No Long-Term Contracts" },
                { icon: Clock, text: "Live in 2–6 Weeks" },
                { icon: Users, text: "You Own What We Build" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500" data-testid={`trust-${item.text.toLowerCase().replace(/\s/g, "-")}`}>
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="mt-4 lg:mt-0">
            <LiveDashboard />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function AchievementsSection() {
  const icons = [Building2, DollarSign, Users, Shield];
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden" data-testid="achievements-section">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={a.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: i * 0.1 }} className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1]" data-testid={`achievement-${i}`}>
                <div className="w-8 h-8 rounded-lg bg-white/[0.12] flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-4 h-4 text-white/90" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 tracking-tight">
                  <AnimatedCounter value={a.value} />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium">{a.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PRIORITY_SERVICES = [
  {
    slug: "ai-lead-capture", label: "AI Systems", title: "AI Lead Capture Systems",
    pitch: "Capture every inbound lead automatically — website chat, missed-call text-back, SMS, and WhatsApp — routed to your CRM before they contact a competitor.",
    icon: Bot,
    iconColor: "#3b82f6",
    cardBg: "linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)",
    borderColor: "#bfdbfe",
    tagBg: "#dbeafe", tagText: "#1d4ed8",
    statColor: "#2563eb",
    stat: "100% leads captured",
  },
  {
    slug: "ai-appointment-agents", label: "AI Systems", title: "AI Appointment & Sales Agents",
    pitch: "AI agents that qualify prospects, book meetings, and follow up until they respond — without your team lifting a finger. Average client books 3x more appointments in 60 days.",
    icon: CalendarCheck,
    iconColor: "#7c3aed",
    cardBg: "linear-gradient(135deg, #f5f3ff 0%, #faf5ff 100%)",
    borderColor: "#ddd6fe",
    tagBg: "#ede9fe", tagText: "#5b21b6",
    statColor: "#6d28d9",
    stat: "3x more bookings",
  },
  {
    slug: "crm-pipeline-automation", label: "Automation", title: "CRM & Pipeline Automation",
    pitch: "Turn your CRM into a self-managing revenue machine. Automatic lead entry, deal-stage movement, and reporting — no more manual data entry or missed follow-ups.",
    icon: Database,
    iconColor: "#059669",
    cardBg: "linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 100%)",
    borderColor: "#a7f3d0",
    tagBg: "#d1fae5", tagText: "#065f46",
    statColor: "#047857",
    stat: "Zero manual entry",
  },
  {
    slug: "customer-support-ai", label: "AI Systems", title: "Customer Support & Operations AI",
    pitch: "AI agents that handle customer questions, route tickets, and resolve issues 24/7 — freeing your team for high-value conversations and complex work.",
    icon: Headphones,
    iconColor: "#ea580c",
    cardBg: "linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)",
    borderColor: "#fed7aa",
    tagBg: "#ffedd5", tagText: "#9a3412",
    statColor: "#c2410c",
    stat: "24/7 always on",
  },
  {
    slug: "reviews-reactivation-retention", label: "Retention", title: "Reviews, Reactivation & Retention",
    pitch: "Automate review requests to protect your reputation, reactivate old leads with proven sequences, and bring past customers back before they forget you.",
    icon: Star,
    iconColor: "#db2777",
    cardBg: "linear-gradient(135deg, #fdf2f8 0%, #fff1f2 100%)",
    borderColor: "#fbcfe8",
    tagBg: "#fce7f3", tagText: "#9d174d",
    statColor: "#be185d",
    stat: "4.8★ avg rating",
  },
  {
    slug: "custom-saas-tools", label: "Development", title: "Custom SaaS & Internal Tools",
    pitch: "Purpose-built dashboards, internal portals, and mini SaaS products designed for your exact workflow — no off-the-shelf compromises, no wasted seats.",
    icon: Code,
    iconColor: "#4f46e5",
    cardBg: "linear-gradient(135deg, #eef2ff 0%, #eff6ff 100%)",
    borderColor: "#c7d2fe",
    tagBg: "#e0e7ff", tagText: "#3730a3",
    statColor: "#4338ca",
    stat: "Built for your stack",
  },
];

function ServicesSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-50/60" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-3">
            <Zap className="w-3.5 h-3.5 text-blue-600" /> 6 Core AI Revenue Systems
          </span>
          <h2 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            Each System Fixes a Specific Revenue Gap
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1.0625rem)" }}>
            We build and run complete AI systems — from workflow design to go-live. No software subscriptions, no DIY.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PRIORITY_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="h-full"
              >
                <Link href={`/${service.slug}`} className="block h-full">
                  <div
                    className="group relative rounded-2xl p-5 sm:p-6 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col overflow-hidden"
                    style={{ background: service.cardBg, borderColor: service.borderColor }}
                    data-testid={`service-card-${service.slug}`}
                  >
                    <div
                      className="absolute top-0 right-0 w-28 h-28 rounded-full -translate-y-8 translate-x-8 opacity-[0.12]"
                      style={{ backgroundColor: service.iconColor }}
                    />

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: service.iconColor }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span
                        className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: service.tagBg, color: service.tagText }}
                      >
                        {service.label}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1">{service.pitch}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80"
                        style={{ color: service.statColor }}
                      >
                        {service.stat}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 group-hover:gap-2 transition-all">
                        See How It Works <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/services">
            <Button variant="outline" className="border-gray-300 text-gray-700 w-full sm:w-auto" data-testid="button-view-all-services">
              Explore All 7 AI Revenue Systems <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="/revenue-automation-consulting">
            <Button variant="ghost" className="text-gray-500 hover:text-gray-900 w-full sm:w-auto text-sm" data-testid="button-consulting">
              <TrendingUp className="w-4 h-4 mr-1.5" /> Revenue Automation Consulting
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const WORKFLOW_EXAMPLES = [
  {
    trigger: "Missed Call",
    color: "from-blue-500 to-blue-600",
    steps: [
      { icon: Phone, label: "Call goes unanswered" },
      { icon: MessageSquare, label: "AI sends text-back instantly" },
      { icon: CalendarCheck, label: "Booking link sent" },
      { icon: Database, label: "CRM updated automatically" },
    ],
    result: "Lead captured. Appointment booked. Zero staff effort.",
  },
  {
    trigger: "Website Lead",
    color: "from-indigo-500 to-indigo-600",
    steps: [
      { icon: Zap, label: "Visitor submits form" },
      { icon: Bot, label: "AI qualifies via SMS/email" },
      { icon: ArrowRight, label: "Routed to right team member" },
      { icon: CalendarCheck, label: "Follow-up sequence fires" },
    ],
    result: "Qualified lead in CRM within 60 seconds of form submission.",
  },
  {
    trigger: "Old Lead Reactivation",
    color: "from-purple-500 to-purple-600",
    steps: [
      { icon: Database, label: "90-day dormant leads pulled" },
      { icon: Mail, label: "AI reactivation campaign fires" },
      { icon: MessageSquare, label: "Re-engagement texts sent" },
      { icon: CalendarCheck, label: "Appointments booked" },
    ],
    result: "Revenue recovered from leads you had already written off.",
  },
  {
    trigger: "Support Question",
    color: "from-emerald-500 to-emerald-600",
    steps: [
      { icon: MessageSquare, label: "Customer sends question" },
      { icon: Bot, label: "AI responds within seconds" },
      { icon: Workflow, label: "Resolves or escalates" },
      { icon: Star, label: "Review request sent post-resolution" },
    ],
    result: "24/7 support coverage. Higher satisfaction. More reviews.",
  },
];

function WorkflowExamplesSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-gray-100" data-testid="workflow-examples-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Automation in Action
          </span>
          <h2 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            What Happens When a Lead Touches Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>
            These are real automation flows we build for clients. Every step is designed to capture revenue that currently leaks out of your business.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {WORKFLOW_EXAMPLES.map((flow, i) => (
            <motion.div key={flow.trigger} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="p-5 sm:p-6 h-full" data-testid={`workflow-${flow.trigger.toLowerCase().replace(/\s/g, "-")}`}>
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 bg-gradient-to-r ${flow.color} mb-4`}>
                  <span className="text-white text-xs font-semibold">{flow.trigger}</span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap mb-4">
                  {flow.steps.map((step, si) => (
                    <div key={si} className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                        <step.icon className="w-3 h-3 text-gray-500 flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs text-gray-700 whitespace-nowrap">{step.label}</span>
                      </div>
                      {si < flow.steps.length - 1 && <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-emerald-800">{flow.result}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const IMPLEMENTATION_POINTS = [
  { icon: Search, title: "We map your revenue gaps", desc: "Audit your full lead flow — calls, forms, SMS, chat — to find exactly where money is leaking." },
  { icon: Workflow, title: "We design the AI workflow", desc: "Every automation is purpose-built for your business, your tools, and your sales process." },
  { icon: Settings, title: "We build and configure", desc: "We handle all setup, integration, testing, and go-live — you don't touch a single technical setting." },
  { icon: Database, title: "We connect your existing tools", desc: "AI systems plug into your CRM, calendar, phone system, and communication stack seamlessly." },
  { icon: BarChart3, title: "We optimize week over week", desc: "Weekly performance reviews, message tuning, and conversion improvements — continuously, not just at launch." },
  { icon: TrendingUp, title: "We report on revenue", desc: "You see calls captured, appointments booked, deals closed — real outcomes, not vanity metrics." },
];

function ImplementationSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden" style={{ background: "#0B1120" }} data-testid="implementation-section">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-indigo-700/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">Implementation, not software</span>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
              We Don't Hand You a Tool and Wish You Luck
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6" style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>
              Most automation platforms sell you a subscription and a help doc. We design the workflow, build the system, integrate your existing tools, and run optimization cycles every week — until you're generating measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-demo">
                <Button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100" data-testid="button-implementation-cta">
                  See How We Work <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700/50" data-testid="button-implementation-proof">
                  See Client Results
                </Button>
              </Link>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IMPLEMENTATION_POINTS.map((point, i) => (
              <motion.div key={point.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.05] border border-white/[0.08] h-full" data-testid={`implementation-point-${i}`}>
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <point.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">{point.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const WHO_WE_SERVE_FEATURED = [
  { label: "Healthcare & Dental", desc: "AI booking agents, patient follow-up, and reputation automation for clinics and practices.", icon: "🏥", href: "/dental-ai" },
  { label: "Real Estate", desc: "24/7 lead capture, AI showing schedulers, and CRM automation for agents and brokerages.", icon: "🏠", href: "/real-estate-ai" },
  { label: "Law Firms", desc: "Automated intake, consultation booking, and client follow-up for legal practices.", icon: "⚖️", href: "/law-firm-ai" },
  { label: "Home Services", desc: "Missed-call text-back, estimate follow-up, and review generation for contractors.", icon: "🔧", href: "/home-services-ai" },
  { label: "Medical Clinics", desc: "Patient acquisition, recall automation, and AI scheduling for medical practices.", icon: "💊", href: "/medical-ai" },
  { label: "E-Commerce & Retail", desc: "Cart recovery, repeat purchase campaigns, and support AI for online stores.", icon: "🛒", href: "/ecommerce-ai" },
];

const WHO_WE_SERVE_MORE = [
  { label: "Restaurants & Food", icon: "🍽️" },
  { label: "Auto Services", icon: "🚗" },
  { label: "Beauty & Salons", icon: "💈" },
  { label: "Pet Services", icon: "🐾" },
  { label: "Fitness & Gyms", icon: "🏋️" },
  { label: "Cleaning Services", icon: "🧹" },
  { label: "Financial Services", icon: "💰" },
  { label: "Education & Tutoring", icon: "📚" },
  { label: "Moving & Storage", icon: "🚚" },
  { label: "Landscaping & Lawn Care", icon: "🌿" },
  { label: "Bars & Entertainment", icon: "🎭" },
  { label: "Contractors & Construction", icon: "🏗️" },
];

function WhoWeServeSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white" data-testid="who-we-serve-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">Who We Serve</span>
          <h2 className="font-bold text-gray-900 mb-3" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>AI Revenue Systems for Every Local Business</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1.05rem)" }}>If you run a local service business in the USA, we build and run the AI systems that capture leads, follow up automatically, and fill your calendar — regardless of your industry.</p>
        </motion.div>

        {/* Featured 6 — full cards with descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
          {WHO_WE_SERVE_FEATURED.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <Link href={item.href}>
                <div className="group bg-white rounded-xl p-5 sm:p-6 border border-gray-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex gap-4 items-start h-full" data-testid={`industry-card-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">{item.label}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-snug">{item.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All other industries — infinite marquee carousel */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white border border-gray-200/60 rounded-2xl py-4 sm:py-5 overflow-hidden">
          <style>{`
            @keyframes ir-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .ir-marquee-track { animation: ir-marquee 28s linear infinite; }
            .ir-marquee-track:hover { animation-play-state: paused; }
          `}</style>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-5 sm:px-6">We also serve</p>
          <div style={{ position: "relative", overflow: "hidden", width: "100%", paddingBottom: 4 }}>
            {/* Left fade */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 48, background: "linear-gradient(to right, white, transparent)", zIndex: 10, pointerEvents: "none" }} />
            {/* Right fade */}
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 48, background: "linear-gradient(to left, white, transparent)", zIndex: 10, pointerEvents: "none" }} />
            <div
              className="ir-marquee-track"
              style={{ display: "flex", width: "max-content", flexWrap: "nowrap", gap: 12, willChange: "transform" }}
            >
              {[...WHO_WE_SERVE_MORE, ...WHO_WE_SERVE_MORE].map((item, i) => (
                <Link key={`${item.label}-${i}`} href="/services">
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors cursor-pointer border border-indigo-100"
                    style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                    data-testid={i < WHO_WE_SERVE_MORE.length ? `industry-pill-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}` : undefined}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-50/60 border-t border-gray-100" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">Client Results</span>
          <h2 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>Real Businesses. Measurable Outcomes.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>Every case study shows the specific problem, what we built, and the revenue impact — not general praise.</p>
        </motion.div>
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {CASE_STUDIES.slice(0, 3).map((cs, i) => (
            <motion.div key={cs.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden group" data-testid={`case-study-card-${cs.id}`}>
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <div className="p-4 sm:p-6">
                <Badge variant="secondary" className="mb-2 sm:mb-3 text-xs">{cs.industry}</Badge>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2" data-testid={`case-study-title-${cs.id}`}>{cs.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-1 italic">"{cs.testimonial.quote.slice(0, 80)}…"</p>
                <p className="text-xs text-gray-400 mb-4">— {cs.testimonial.author}, {cs.testimonial.role}</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-blue-50/80 border border-blue-100/50">
                    <div className="text-base sm:text-lg font-bold text-blue-700" data-testid={`case-study-metric1-${cs.id}`}>{cs.results.metric1}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">{cs.results.label1}</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-indigo-50/80 border border-indigo-100/50">
                    <div className="text-base sm:text-lg font-bold text-indigo-700" data-testid={`case-study-metric2-${cs.id}`}>{cs.results.metric2}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">{cs.results.label2}</div>
                  </div>
                </div>
                <Link href={`/${cs.slug}`}>
                  <p className="text-xs font-medium text-blue-600 mt-4 hover:underline">Read Full Case Study →</p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link href="/portfolio">
            <Button variant="outline" className="border-gray-300 text-gray-700 w-full sm:w-auto" data-testid="button-view-portfolio">View All Case Studies <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


function HomeROITeaser() {
  return (
    <section className="py-14 sm:py-20 bg-white" data-testid="roi-teaser-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-3 block">ROI Calculator</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">How Much Revenue Are You Losing Monthly?</h2>
              <p className="text-blue-100 leading-relaxed mb-6 text-sm sm:text-base">
                Industry data: businesses that respond to leads within 5 minutes convert <strong>23% more</strong> than those that take 30+ minutes. AI responds in seconds, every time.
              </p>
              <Link href="/roi-calculator">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold" data-testid="button-roi-teaser-cta">
                  Calculate My Revenue Uplift <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: "Leads lost to slow follow-up", value: "23%" },
                { label: "Revenue recovery from AI response speed", value: "+$8–40K/mo" },
                { label: "Additional appointments from missed-call AI", value: "avg. 3x" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3 border border-white/10" data-testid={`roi-stat-${i}`}>
                  <span className="text-xs sm:text-sm text-blue-100">{stat.label}</span>
                  <span className="text-sm sm:text-base font-bold text-white ml-4 flex-shrink-0">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const iconMap: Record<string, any> = { Target, Cpu, TrendingUp };
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/80 to-white" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">How It Works</span>
          <h2 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            Audit. Build. Optimize.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>
            Three phases. Every client. No shortcuts.
          </p>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-200/0 via-blue-300 to-purple-200/0" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] || Target;
              return (
                <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative" data-testid={`how-it-works-step-${step.step}`}>
                  <div className="relative inline-flex mb-4 sm:mb-5">
                    <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl" />
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col items-center justify-center mx-auto shadow-lg shadow-blue-200/40">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide">Step {step.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-10 sm:mt-14">
          <Link href="/book-demo">
            <Button data-testid="button-how-it-works-cta">Book a Free Audit Call <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingTeaserSection() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50/60 border-t border-gray-100" data-testid="pricing-teaser-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — text */}
            <div className="p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-3">Investment</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Pricing Customised to<br /> Your Business &amp; Goals
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                Every system is scoped to your industry, deal size, and growth targets. Contact us and we'll send a custom investment breakdown — no commitment required.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Shield, text: "No long-term contracts — month-to-month" },
                  { icon: CheckCircle2, text: "You own everything we build" },
                  { icon: Clock, text: "Live and generating ROI in 2–6 weeks" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-indigo-500" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — CTAs */}
            <div className="p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-indigo-50/60 to-blue-50/40 flex flex-col justify-center gap-4">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-700 mb-1">Ready to get a custom quote?</p>
                <p className="text-xs text-gray-500">Tell us about your business and we'll scope the exact system you need.</p>
              </div>
              <Link href="/contact">
                <Button size="lg" className="w-full font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm" data-testid="button-contact-for-pricing">
                  Contact for Pricing <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/book-demo">
                <Button size="lg" variant="outline" className="w-full border-indigo-200 text-indigo-700 hover:bg-white" data-testid="button-book-call-pricing">
                  Book a Free Strategy Call
                </Button>
              </Link>
              <div className="flex justify-center pt-2">
                <GooglePartnerBadge variant="inline" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/80 to-white" data-testid="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">Insights</span>
          <h2 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>AI Automation Resources</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, i) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <Link href={`/${post.slug}`}>
                <Card className="overflow-hidden cursor-pointer h-full hover:shadow-md transition-shadow" data-testid={`blog-card-${post.slug}`}>
                  <img src={post.image} alt={post.title} className="w-full h-40 sm:h-44 object-cover" loading="lazy" />
                  <div className="p-4 sm:p-5">
                    <Badge variant="secondary" className="mb-2 text-xs">{post.category}</Badge>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-snug line-clamp-2">{post.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{post.date}</span><span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link href="/blog">
            <Button variant="outline" className="border-gray-300 text-gray-700 w-full sm:w-auto" data-testid="button-view-all-blog">Read All Articles <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E1B4B]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-600/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-600/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-6 sm:mb-8 border border-white/10">
            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-blue-200">Limited onboarding spots each month</span>
          </div>
          <h2 className="font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
            Ready to Stop Losing Revenue to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Missed Calls and Slow Follow-Up?</span>
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>
            Book a 30-minute strategy call. We'll audit your current revenue gaps, show you which AI systems will have the highest ROI for your business, and give you an implementation plan — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/book-demo">
              <Button className="w-full sm:w-auto" data-testid="button-cta-book-demo">Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" /></Button>
            </Link>
            <Link href="/roi-calculator">
              <Button variant="outline" className="w-full sm:w-auto backdrop-blur bg-white/90 text-gray-900 border-white" data-testid="button-cta-roi">Estimate My Revenue Uplift</Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            {[
              { icon: Shield, text: "No Contracts" },
              { icon: Clock, text: "Live in 2–6 Weeks" },
              { icon: CheckCircle2, text: "You Own Everything We Build" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <SEOHead
        title="Infinite Rankers | AI Revenue Systems Agency — Capture Leads, Automate Follow-Up, Close More Sales"
        description="We build AI systems that help service businesses capture every lead, automate follow-up, and book more appointments — without adding headcount. AI Revenue Systems Agency."
        keywords="AI revenue systems, AI lead capture, AI appointment agents, CRM automation, AI automation agency, missed call text back"
        canonical="https://infiniterankers.io"
      />
      <HeroSection />
      <AchievementsSection />
      <ServicesSection />
      <WorkflowExamplesSection />
      <ImplementationSection />
      <WhoWeServeSection />
      <PortfolioSection />
      <TestimonialsMarquee testimonials={TESTIMONIALS} />
      <HomeROITeaser />
      <HowItWorksSection />
      <PricingTeaserSection />
      <BlogSection />
      <FinalCTASection />
    </div>
  );
}
