import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Users, Bot, Settings } from "lucide-react";

export default function ContentMethodology() {
  return (
    <div>
      <SEOHead
        title="Our AI System Methodology | Infinite Rankers"
        description="How Infinite Rankers designs, builds, and deploys AI Revenue Systems. Our implementation methodology, quality standards, and client accountability process."
        canonical="https://infiniterankers.io/content-methodology"
      />

      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-white" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="secondary" className="mb-4">Implementation Methodology</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              How We Build AI Revenue Systems
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Every AI system we deploy follows a structured, accountable process — from discovery to go-live. Here's exactly how we build, test, and hand off revenue-generating AI for your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-14 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">1) Discovery & Revenue Gap Analysis</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We start by mapping your current lead flow, sales process, and customer lifecycle to identify exactly where revenue is leaking — missed calls, slow follow-up, manual tasks, unworked leads. This becomes the blueprint for your AI system.
            </p>
            <ul className="space-y-2">
              {["Full audit of lead sources and conversion rates", "Sales and follow-up workflow review", "Identification of top 3–5 automation opportunities", "ROI projection for each AI system recommended"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">2) AI System Design & Configuration</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We design the AI system around your specific business — your tone, your offers, your sales process. No generic templates. Every workflow, script, and automation trigger is built to match how your best salespeople would respond.
            </p>
            <ul className="space-y-2">
              {["Custom AI conversation flows trained on your business", "CRM and calendar integration setup", "Multi-channel configuration (SMS, email, voice)", "Human handoff protocols and escalation rules"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">3) Testing & Quality Control</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before any AI system goes live with real leads, we run it through a staged testing protocol — simulated leads, edge cases, objection handling, and multi-step sequences. We don't release until performance benchmarks are met.
            </p>
            <ul className="space-y-2">
              {["End-to-end simulation with test leads", "Objection and fallback scenario testing", "CRM data accuracy and pipeline stage verification", "Response time and delivery rate checks"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">4) Go-Live & Ramp Period</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We launch with a controlled ramp — monitoring every interaction, response, and conversion signal in real time. Our team stays close during the first 30 days to tune performance and catch anything unexpected before it costs you leads.
            </p>
            <ul className="space-y-2">
              {["Controlled lead volume ramp during week 1", "Daily performance reviews for first 2 weeks", "Real-time conversation monitoring and adjustment", "30-day post-launch performance report"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">5) Ongoing Optimization & Reporting</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI systems improve over time — but only if someone is actively optimizing them. Every active client gets monthly performance reviews, conversion rate analysis, and system updates as AI capabilities evolve.
            </p>
            <ul className="space-y-2">
              {["Monthly performance dashboard and revenue attribution", "Conversion rate optimization recommendations", "A/B testing of messaging and sequences", "Quarterly system expansion planning"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8 bg-blue-50/50 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">Our Accountability Standards</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every system we build is tracked against clearly defined KPIs agreed upon before launch. If we fall short during the first 60 days, we work at no additional cost until benchmarks are hit.
            </p>
            <ul className="space-y-2">
              {[
                "Pre-agreed KPIs documented before go-live",
                "No black-box reporting — full data visibility always",
                "Month-to-month contracts — no lock-in after setup",
                "Human oversight on every AI conversation thread",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E1B4B]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to See the Process in Action?</h2>
            <p className="text-white/70 mb-8">Book a free strategy call and we'll walk you through exactly what your AI Revenue System would look like — and what it would take to build it.</p>
            <Link href="/book-demo">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" data-testid="button-book-call">
                Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
