import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { COMPANY, ACHIEVEMENTS } from "@/lib/constants";
import {
  ArrowRight, Target, Eye, Cpu, Globe, Shield, Users,
  Lightbulb, Rocket, CheckCircle2, Zap, Building2, Phone, Mail, MapPin, Award,
  Flag, Star, TrendingUp, BadgeCheck,
} from "lucide-react";

const TIMELINE = [
  {
    year: "2020",
    title: "Founded",
    desc: "Infinite Rankers LLC incorporated in Delaware, USA. Initial focus on SEO and Google Ads for service businesses.",
    icon: Flag,
    color: "from-blue-500 to-blue-600",
  },
  {
    year: "2021",
    title: "500 Clients Milestone",
    desc: "Reached 500 active clients across the US and UK. Expanded team to include dedicated AI specialists and automation engineers.",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    year: "2022",
    title: "Google Partner Status",
    desc: "Earned Certified Google Partner designation, validating our advertising expertise and campaign performance standards.",
    icon: BadgeCheck,
    color: "from-purple-500 to-purple-600",
  },
  {
    year: "2023",
    title: "AI Revenue System Launch",
    desc: "Launched our proprietary AI calling, lead qualification, and CRM automation systems. Onboarded 2,000+ clients.",
    icon: Rocket,
    color: "from-violet-500 to-violet-600",
  },
  {
    year: "2024",
    title: "$4.8M+ Revenue Generated",
    desc: "Crossed $4.8M in tracked client revenue generated across our portfolio. Expanded industry verticals to 15+ sectors.",
    icon: TrendingUp,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    year: "2025",
    title: "4,000+ Clients Worldwide",
    desc: "Serving 4,000+ businesses globally with AI-driven marketing automation and full-funnel revenue growth systems.",
    icon: Star,
    color: "from-emerald-500 to-emerald-600",
  },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <SEOHead
        title="About Infinite Rankers LLC | AI Revenue Growth Agency"
        description="Infinite Rankers LLC is a Delaware-registered AI Revenue Growth Agency helping service businesses automate lead capture, follow-up, and conversion. Google Partner. Est. 2020."
      />
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              About Us
            </span>
            <h1 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
              We're Not a Marketing Agency. We're a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revenue Growth Engine.
              </span>
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              {COMPANY.name} was founded on a simple belief: businesses shouldn't have to choose between growing revenue and managing complex technology. We combine AI automation with proven marketing systems to create predictable, scalable growth for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">{a.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden" data-testid="timeline-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Story"
            title="From Startup to 4,000+ Clients"
            description="A focused track record of delivering results — built one client at a time since 2020."
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 sm:-translate-x-px" />
            <div className="space-y-10 sm:space-y-12">
              {TIMELINE.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                    data-testid={`timeline-item-${item.year}`}
                  >
                    <div className={`hidden sm:flex flex-1 ${isLeft ? "justify-end pr-10" : "justify-start pl-10"}`}>
                      <div className={`max-w-xs ${isLeft ? "text-right" : "text-left"}`}>
                        <div className={`inline-block text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                          {item.year}
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-0 z-10">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="sm:hidden pl-12">
                      <div className={`inline-block text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                        {item.year}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>

                    <div className={`hidden sm:flex flex-1 ${isLeft ? "pl-10" : "pr-10 justify-end"}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
              Company Information
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">About the Agency</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Building2, label: "Legal Name", value: "Infinite Rankers LLC" },
                { icon: MapPin, label: "Registered Address", value: "203 N Caroline Pl, Dover, DE 19904, USA" },
                { icon: Phone, label: "Phone", value: "(703) 415-9373" },
                { icon: Mail, label: "Email", value: "contact@infiniterankers.io" },
                { icon: Award, label: "Certification", value: "Certified Google Partner" },
                { icon: Globe, label: "Website", value: "infiniterankers.io" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white/70">
                  <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <GlassCard>
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To empower every business with AI-driven automation systems that eliminate manual inefficiency and create predictable revenue growth. We believe that no business should lose customers because of slow response times, missed follow-ups, or outdated marketing approaches.
              </p>
            </GlassCard>
            <GlassCard delay={0.1}>
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To become the world's leading AI revenue growth agency, where every business — from local shops to global enterprises — has access to enterprise-grade AI automation that levels the playing field and drives exponential growth.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Us"
            title="Why Infinite Rankers Is Different"
            description="We don't just run ads or build websites. We engineer complete revenue systems powered by artificial intelligence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "AI-First Approach", desc: "Every solution we build is powered by artificial intelligence — from lead capture to appointment booking to follow-up." },
              { icon: Globe, title: "Global Reach, Local Focus", desc: "We serve businesses worldwide with a primary focus on USA and UK markets, understanding local consumer behavior and compliance." },
              { icon: Rocket, title: "Revenue-Focused Results", desc: "We measure success by one metric: your revenue growth. Everything we build is designed to directly impact your bottom line." },
              { icon: Shield, title: "Flexible Plans Available", desc: "We offer monthly, quarterly, and annual partnerships designed to fit your business needs. Choose the plan that works best for your growth goals." },
              { icon: Lightbulb, title: "Full-Stack Automation", desc: "From the first ad impression to closed deal, every touchpoint is automated and optimized for maximum conversion." },
              { icon: Zap, title: "Speed to Results", desc: "Most clients see measurable improvements within 30 days. Our proven frameworks are battle-tested across 4,000+ businesses." },
            ].map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.08}>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Philosophy"
            title="AI Automation Philosophy"
            description="We believe in building systems, not dependencies. Our approach creates lasting growth infrastructure for your business."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "We don't replace your team — we multiply their output with AI-powered tools and automation.",
              "Every system is built to be measurable. If we can't track the ROI, we don't build it.",
              "We prioritize speed-to-lead. In today's market, the first responder wins the customer.",
              "We build on proven, enterprise-grade technology that scales with your business.",
              "Our systems run 24/7 — nights, weekends, holidays — so you never miss an opportunity.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
              Ready to Transform Your Revenue?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              See how our AI systems can be customized for your business. Book a free strategy session with our team.
            </p>
            <Link href="/book-demo">
              <Button variant="secondary" className="w-full sm:w-auto" data-testid="button-about-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
