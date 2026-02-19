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
import NotFound from "@/pages/not-found";

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

  return (
    <div>
      <SEOHead
        title={page.seoTitle}
        description={page.seoDescription}
        keywords={page.seoKeywords}
        canonical={page.canonical}
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
              <Link href="/pricing">
                <Button variant="outline" className="w-full sm:w-auto" data-testid="button-hero-pricing">
                  View Pricing Plans
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
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 text-xs font-bold text-blue-600 flex items-center justify-center">
                      {step.step}
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

      {/* Section 5: Case Study Style Results */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Proven Results" title={page.results.title} description={page.results.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.results.cases.map((cs, i) => (
              <GlassCard key={i} delay={i * 0.1} glow>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {cs.industry}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base" data-testid={`result-business-${i}`}>{cs.business}</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {cs.metrics.map((m, j) => (
                    <div key={j} className="text-center p-2 rounded-lg bg-blue-50/60 border border-blue-100/40">
                      <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="relative pl-4 border-l-2 border-blue-200">
                  <Quote className="w-3 h-3 text-blue-300 absolute -left-1.5 -top-0.5 bg-white" />
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">{cs.quote}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-16 sm:py-20 lg:py-24" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Testimonials" title="What Our Clients Say" description="Real feedback from businesses using our AI automation systems." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.testimonials.map((test, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: test.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic" data-testid={`testimonial-quote-${i}`}>
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200/60">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{test.name}</div>
                    <div className="text-xs text-gray-500">{test.role}, {test.company}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

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
