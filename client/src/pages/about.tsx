import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { COMPANY, ACHIEVEMENTS } from "@/lib/constants";
import {
  ArrowRight, Target, Eye, Cpu, Globe, Shield, Users,
  Lightbulb, Rocket, CheckCircle2, Zap,
} from "lucide-react";

export default function About() {
  return (
    <div>
      <SEOHead
        title="About Us - Infinite Rankers | AI Revenue Growth Agency"
        description="We're not a marketing agency. We're a revenue growth engine powered by AI automation. Learn about our mission, vision, and approach."
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              We're Not a Marketing Agency. We're a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revenue Growth Engine.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {COMPANY.name} was founded on a simple belief: businesses shouldn't have to choose between growing revenue and managing complex technology. We combine AI automation with proven marketing systems to create predictable, scalable growth for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{a.value}</div>
                <div className="text-sm text-white/80">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard>
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower every business with AI-driven automation systems that eliminate manual inefficiency and create predictable revenue growth. We believe that no business should lose customers because of slow response times, missed follow-ups, or outdated marketing approaches.
              </p>
            </GlassCard>
            <GlassCard delay={0.1}>
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading AI revenue growth agency, where every business — from local shops to global enterprises — has access to enterprise-grade AI automation that levels the playing field and drives exponential growth.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Us"
            title="Why Infinite Rankers Is Different"
            description="We don't just run ads or build websites. We engineer complete revenue systems powered by artificial intelligence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "AI-First Approach", desc: "Every solution we build is powered by artificial intelligence — from lead capture to appointment booking to follow-up." },
              { icon: Globe, title: "Global Reach, Local Focus", desc: "We serve businesses worldwide with a primary focus on USA and UK markets, understanding local consumer behavior and compliance." },
              { icon: Rocket, title: "Revenue-Focused Results", desc: "We measure success by one metric: your revenue growth. Everything we build is designed to directly impact your bottom line." },
              { icon: Shield, title: "Flexible Plans Available", desc: "We offer monthly, quarterly, and annual partnerships designed to fit your business needs. Choose the plan that works best for your growth goals." },
              { icon: Lightbulb, title: "Full-Stack Automation", desc: "From the first ad impression to closed deal, every touchpoint is automated and optimized for maximum conversion." },
              { icon: Zap, title: "Speed to Results", desc: "Most clients see measurable improvements within 30 days. Our proven frameworks are battle-tested across 9,500+ businesses." },
            ].map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.08}>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
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
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Revenue?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              See how our AI systems can be customized for your business. Book a free strategy session with our team.
            </p>
            <Link href="/book-demo">
              <Button variant="secondary" data-testid="button-about-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
