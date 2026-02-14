import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div>
      <SEOHead
        title="Portfolio & Case Studies - Infinite Rankers | Proven AI Growth Results"
        description="Explore real case studies showing how our AI automation and marketing systems have generated measurable growth for businesses across industries."
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-white dark:from-blue-950/30 dark:via-purple-950/20 dark:to-background" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Case Studies &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proven Results</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore how our AI automation and marketing systems have generated measurable growth for businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-lg rounded-md border border-white/20 dark:border-white/10 overflow-hidden">
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="outline" className="text-xs">{cs.label}</Badge>
                      {cs.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{cs.title}</h2>
                    <p className="text-muted-foreground mb-6">{cs.business}</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Results</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-md bg-blue-50 dark:bg-blue-500/10 text-center">
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{cs.results.metric1}</div>
                            <div className="text-xs text-muted-foreground">{cs.results.label1}</div>
                          </div>
                          <div className="p-3 rounded-md bg-purple-50 dark:bg-purple-500/10 text-center">
                            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{cs.results.metric2}</div>
                            <div className="text-xs text-muted-foreground">{cs.results.label2}</div>
                          </div>
                          <div className="p-3 rounded-md bg-blue-50 dark:bg-blue-500/10 text-center">
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{cs.results.metric3}</div>
                            <div className="text-xs text-muted-foreground">{cs.results.label3}</div>
                          </div>
                          <div className="p-3 rounded-md bg-purple-50 dark:bg-purple-500/10 text-center">
                            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{cs.results.metric4}</div>
                            <div className="text-xs text-muted-foreground">{cs.results.label4}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Want Results Like These?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free strategy session and we'll show you exactly how our AI systems can transform your business growth.
            </p>
            <Link href="/book-demo">
              <Button className="bg-white text-blue-700 hover:bg-white/90 border-0" data-testid="button-portfolio-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
