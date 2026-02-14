import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { CASE_STUDIES, COMPANY } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const ALL_TAGS = Array.from(new Set(CASE_STUDIES.flatMap((cs) => cs.tags)));

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filteredStudies =
    selectedTag === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.tags.includes(selectedTag));

  return (
    <div>
      <SEOHead
        title="Portfolio & Case Studies - Infinite Rankers | Proven AI Growth Results"
        description="Explore real case studies showing how our AI automation and marketing systems have generated measurable growth for businesses across industries."
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl animate-float" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Case Studies &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore how our AI automation and marketing systems have generated
              measurable growth for businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 mb-12 gap-2 scrollbar-hide" data-testid="filter-tabs-container">
            <button
              onClick={() => setSelectedTag("All")}
              data-testid="filter-tab-all"
              className={`flex-shrink-0 px-5 py-2 rounded-md text-sm font-medium transition-all ${
                selectedTag === "All"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-white border border-gray-200/60 text-muted-foreground hover-elevate"
              }`}
            >
              All
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                data-testid={`filter-tab-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex-shrink-0 px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white border border-gray-200/60 text-muted-foreground hover-elevate"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            <AnimatePresence mode="wait">
              {filteredStudies.map((cs, i) => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  data-testid={`case-study-card-${cs.id}`}
                >
                  <GlassCard className="p-0">
                    <div className="p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {cs.label}
                        </Badge>
                        {cs.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, "-")}-${cs.id}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {cs.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {cs.business}
                      </p>

                      <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Challenge
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Solution
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {cs.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Results
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-md bg-blue-50 text-center">
                              <div className="text-lg font-bold text-blue-600">
                                {cs.results.metric1}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {cs.results.label1}
                              </div>
                            </div>
                            <div className="p-3 rounded-md bg-indigo-50 text-center">
                              <div className="text-lg font-bold text-purple-600">
                                {cs.results.metric2}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {cs.results.label2}
                              </div>
                            </div>
                            <div className="p-3 rounded-md bg-blue-50 text-center">
                              <div className="text-lg font-bold text-blue-600">
                                {cs.results.metric3}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {cs.results.label3}
                              </div>
                            </div>
                            <div className="p-3 rounded-md bg-indigo-50 text-center">
                              <div className="text-lg font-bold text-purple-600">
                                {cs.results.metric4}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {cs.results.label4}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Want Results Like These?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free strategy session and we'll show you exactly how our AI
              systems can transform your business growth.
            </p>
            <Link href="/book-demo">
              <Button
                className="bg-white text-blue-700 border-0"
                data-testid="button-portfolio-cta"
              >
                Book Free Strategy Session{" "}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
