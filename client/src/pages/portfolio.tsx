import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import { CASE_STUDIES, COMPANY } from "@/lib/constants";
import { ArrowRight, BarChart3, TrendingUp, Users, Award } from "lucide-react";

const PORTFOLIO_IMAGES = [
  "/images/portfolio/real-analytics-dashboard.jpg",
  "/images/portfolio/real-seo-work.jpg",
  "/images/portfolio/real-ads-campaign.jpg",
  "/images/portfolio/real-social-media-work.jpg",
  "/images/portfolio/real-web-development.jpg",
  "/images/portfolio/real-crm-pipeline.jpg",
  "/images/portfolio/real-email-automation.jpg",
  "/images/portfolio/real-revenue-growth.jpg",
  "/images/portfolio/real-ai-chatbot.jpg",
  "/images/portfolio/real-ecommerce-dashboard.jpg",
  "/images/portfolio/real-marketing-strategy.jpg",
];

const ALL_TAGS = Array.from(new Set(CASE_STUDIES.flatMap((cs) => cs.tags)));

const STATS = [
  { icon: BarChart3, target: 2500, suffix: "+", label: "Projects" },
  { icon: Users, target: 9500, suffix: "+", label: "Clients" },
  { icon: TrendingUp, target: 12, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { icon: Award, target: 98, suffix: "%", label: "Client Satisfaction" },
];

const METRIC_COLORS = [
  "bg-blue-50 dark:bg-blue-950/30",
  "bg-indigo-50 dark:bg-indigo-950/30",
  "bg-purple-50 dark:bg-purple-950/30",
  "bg-violet-50 dark:bg-violet-950/30",
];

const METRIC_TEXT_COLORS = [
  "text-blue-600 dark:text-blue-400",
  "text-indigo-600 dark:text-indigo-400",
  "text-purple-600 dark:text-purple-400",
  "text-violet-600 dark:text-violet-400",
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

function StatCounter({ icon: Icon, target, suffix, prefix, label }: {
  icon: typeof BarChart3;
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const count = useCountUp(target);
  return (
    <div className="flex flex-col items-center gap-2" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <Icon className="w-6 h-6 text-blue-400" />
      <span className="text-2xl sm:text-3xl font-bold text-white">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-white/70">{label}</span>
    </div>
  );
}

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

      <section className="relative pt-32 pb-20 overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-title">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-16" data-testid="hero-subtitle">
              Explore how our AI automation and marketing systems have generated
              measurable growth for businesses across industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
            data-testid="stats-row"
          >
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28" data-testid="portfolio-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Case Studies"
            title="Proven Results Across Industries"
            description="Filter by category to see how we've helped businesses like yours achieve extraordinary growth."
          />

          <div className="flex overflow-x-auto pb-4 mb-12 gap-2 scrollbar-hide" data-testid="filter-tabs-container">
            <button
              onClick={() => setSelectedTag("All")}
              data-testid="filter-tab-all"
              className={`flex-shrink-0 px-5 py-2 rounded-md text-sm font-medium transition-all toggle-elevate ${
                selectedTag === "All"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white toggle-elevated"
                  : "bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700 text-muted-foreground"
              }`}
            >
              All
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                data-testid={`filter-tab-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex-shrink-0 px-5 py-2 rounded-md text-sm font-medium transition-all toggle-elevate ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white toggle-elevated"
                    : "bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700 text-muted-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={selectedTag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-testid="portfolio-grid"
            >
              {filteredStudies.map((cs, i) => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  data-testid={`case-study-card-${cs.id}`}
                >
                  <Card className="overflow-visible hover-elevate h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden rounded-t-md">
                      <img
                        src={PORTFOLIO_IMAGES[i % PORTFOLIO_IMAGES.length]}
                        alt={cs.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        data-testid={`card-image-${cs.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-1.5">
                        <Badge variant="secondary" className="text-xs" data-testid={`badge-industry-${cs.id}`}>
                          {cs.industry}
                        </Badge>
                        {cs.services.slice(0, 2).map((svc) => (
                          <Badge
                            key={svc}
                            variant="outline"
                            className="text-xs bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
                            data-testid={`badge-service-${svc.toLowerCase().replace(/\s+/g, "-")}-${cs.id}`}
                          >
                            {svc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1" data-testid={`card-title-${cs.id}`}>
                        {cs.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3" data-testid={`card-business-${cs.id}`}>
                        {cs.business}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`card-challenge-${cs.id}`}>
                        {cs.challenge}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {[
                          { metric: cs.results.metric1, label: cs.results.label1 },
                          { metric: cs.results.metric2, label: cs.results.label2 },
                          { metric: cs.results.metric3, label: cs.results.label3 },
                          { metric: cs.results.metric4, label: cs.results.label4 },
                        ].map((r, idx) => (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-md text-center ${METRIC_COLORS[idx]}`}
                            data-testid={`metric-${idx}-${cs.id}`}
                          >
                            <div className={`text-base font-bold ${METRIC_TEXT_COLORS[idx]}`}>
                              {r.metric}
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">
                              {r.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Link href={`/portfolio/${cs.id}`}>
                          <Button variant="outline" className="w-full" data-testid={`button-view-case-${cs.id}`}>
                            View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="dashboard-showcase">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Analytics
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-testid="dashboard-title">
              AI-Powered Results Dashboard
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real-time insights powering data-driven decisions for every client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="animate-float"
              data-testid="panel-revenue"
            >
              <div className="rounded-md border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Revenue Growth
                </h3>
                <div className="flex items-end gap-2 h-40">
                  {[35, 50, 45, 70, 60, 85, 95].map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-blue-600 to-blue-400"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-white/40">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="animate-float"
              style={{ animationDelay: "1s" }}
              data-testid="panel-pipeline"
            >
              <div className="rounded-md border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Lead Pipeline
                </h3>
                <div className="space-y-5 py-2">
                  {[
                    { label: "Qualified", pct: 85, color: "from-purple-600 to-purple-400" },
                    { label: "Contacted", pct: 65, color: "from-blue-600 to-blue-400" },
                    { label: "Converted", pct: 42, color: "from-indigo-600 to-indigo-400" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white/80">{item.label}</span>
                        <span className="text-white/60">{item.pct}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="animate-float"
              style={{ animationDelay: "2s" }}
              data-testid="panel-funnel"
            >
              <div className="rounded-md border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  Conversion Funnel
                </h3>
                <div className="space-y-3 py-2">
                  {[
                    { label: "Visitors", value: "12,480", width: "100%" },
                    { label: "Leads", value: "3,120", width: "75%" },
                    { label: "Qualified", value: "1,560", width: "50%" },
                    { label: "Customers", value: "624", width: "30%" },
                  ].map((step, idx) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.15, duration: 0.5 }}
                      style={{ width: step.width, originX: 0 }}
                      className="bg-gradient-to-r from-green-600/80 to-emerald-500/60 rounded-sm px-3 py-2 flex justify-between items-center"
                    >
                      <span className="text-xs text-white/90">{step.label}</span>
                      <span className="text-xs font-semibold text-white">{step.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="cta-section">
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
