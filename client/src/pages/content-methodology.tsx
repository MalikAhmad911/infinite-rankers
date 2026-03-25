import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import { ArrowRight, CheckCircle2, ShieldCheck, FileCheck2, SearchCheck, Users } from "lucide-react";

export default function ContentMethodology() {
  return (
    <div>
      <SEOHead
        title="How We Create Content | Infinite Rankers"
        description="Learn how Infinite Rankers creates website content using expert-led research, editorial review, factual verification, and responsible AI assistance."
        canonical="https://infiniterankers.io/content-methodology"
      />

      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-white" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="secondary" className="mb-4">Editorial Transparency</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              How We Create and Maintain Content
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We use a hybrid workflow that combines human strategy expertise with responsible automation support.
              Every public page is reviewed for factual accuracy, user value, and search quality before publication.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-14 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <SearchCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">1) Research and Original Framing</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We begin with topic research, intent mapping, and business context from real client scenarios.
              Our team defines the angle, structure, and claims before any drafting step.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">2) Human Editorial Oversight</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Subject-matter editors review language quality, clarity, and relevance for the intended audience.
              We remove low-value repetition, generic filler, and unsupported claims.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck2 className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">3) Responsible Automation Assistance</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We may use automation tools to support outlining, summarization, and drafting efficiency.
              Automation does not replace editorial responsibility. Final publication decisions and quality checks are performed by humans.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-foreground">4) Accuracy and Policy Checks</h2>
            </div>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-1" /><span>Metadata quality checks for title, description, canonical, and image alt text.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-1" /><span>Structured data validation and route-level indexability controls.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-1" /><span>Periodic updates to keep content accurate, relevant, and useful.</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Questions About Our Content Standards?</h2>
          <p className="text-white/85 mb-7 max-w-2xl mx-auto">
            Contact our team if you want clarification on page updates, factual corrections, or editorial practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact">
              <Button variant="secondary" data-testid="button-content-methodology-contact">
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="bg-white/90 text-gray-900 border-white" data-testid="button-content-methodology-blog">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
