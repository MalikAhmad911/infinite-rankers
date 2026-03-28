import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import { INDUSTRY_VERTICALS, ALL_SERVICES } from "@/lib/constants";
import {
  ArrowRight, ArrowLeft, CheckCircle2, XCircle, TrendingUp, Zap,
  Stethoscope, Hammer, Scale, Building2, Heart, ShoppingCart, Star,
  ChevronDown, ChevronUp,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, any> = {
  Stethoscope, Hammer, Scale, Building2, Heart, ShoppingCart, Zap, TrendingUp,
};

const PORTFOLIO_IMAGES: Record<string, string> = {
  "case-study-dental-practice-revenue-transformation": "/images/portfolio/project-1-dental.jpg",
  "case-study-home-services-plumbing-hvac-lead-machine": "/images/portfolio/project-10-homeservices.jpg",
  "case-study-law-firm-client-intake-automation": "/images/portfolio/project-5-lawfirm.jpg",
  "case-study-real-estate-ai-lead-generation": "/images/portfolio/project-3-realestate.jpg",
  "case-study-medical-clinic-patient-acquisition": "/images/portfolio/project-8-clinic.jpg",
  "case-study-ecommerce-cart-recovery-scaling": "/images/portfolio/project-2-ecommerce.jpg",
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden" data-testid={`faq-item-${q.slice(0, 20).toLowerCase().replace(/\s+/g, "-")}`}>
      <button
        type="button"
        className="flex items-start justify-between w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-900 pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-4 bg-white">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function IndustryVertical() {
  const params = useParams<{ slug: string }>();
  const vertical = INDUSTRY_VERTICALS.find((v) => v.slug === params.slug);

  if (!vertical) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry Page Not Found</h1>
          <Link href="/services">
            <Button data-testid="button-back-services">
              <ArrowLeft className="w-4 h-4 mr-1" /> View Our Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[vertical.icon] || Zap;
  const heroImage = PORTFOLIO_IMAGES[vertical.caseStudySlug];
  const primaryServices = vertical.primaryServices
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean) as typeof ALL_SERVICES;

  const otherVerticals = INDUSTRY_VERTICALS.filter((v) => v.slug !== vertical.slug).slice(0, 3);

  return (
    <div>
      <SEOHead
        title={`${vertical.name} AI Marketing & Lead Generation | Infinite Rankers`}
        description={`${vertical.subheadline} See proven results: ${vertical.caseStudyMetric}. Book a free strategy call.`}
        keywords={`AI marketing for ${vertical.name}, ${vertical.name} lead generation, ${vertical.name} digital marketing, AI ${vertical.name}`}
        canonical={`https://infiniterankers.io/${vertical.slug}`}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden" data-testid="industry-hero">
        <div className="absolute inset-0">
          {heroImage && (
            <img
              src={heroImage}
              alt={`${vertical.name} AI marketing results`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/services">
              <span className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white mb-6 cursor-pointer transition-colors" data-testid="link-back-services">
                <ArrowLeft className="w-4 h-4" /> All Services
              </span>
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className={`bg-gradient-to-r ${vertical.accentFrom} ${vertical.accentTo} text-white border-0`} data-testid="badge-industry-tagline">
                <Icon className="w-3.5 h-3.5 mr-1.5" />
                {vertical.tagline}
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                AI-Powered Growth System
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl" data-testid="text-industry-headline">
              {vertical.headline}
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mb-8 leading-relaxed" data-testid="text-industry-subheadline">
              {vertical.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-demo">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold" data-testid="button-industry-book-demo">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href="#case-study">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-industry-case-study">
                  See Proof of Results
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome Metrics */}
      <section className="py-10 sm:py-12 bg-white border-b border-gray-100" data-testid="section-outcomes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {vertical.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-center py-4" data-testid={`outcome-metric-${i}`}>
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${vertical.accentFrom} ${vertical.accentTo} bg-clip-text text-transparent mb-1`}>
                    {outcome.metric}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{outcome.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-14 sm:py-18 bg-gray-50" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-2 block">The Problem</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight" data-testid="text-problem-headline">
                Why Most {vertical.name} Struggle to Grow
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {vertical.problemStatement}
              </p>
              <div className="space-y-3">
                {vertical.painPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`pain-point-${i}`}>
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-6 sm:p-8 bg-white border-gray-200" data-testid="card-solution-overview">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vertical.accentFrom} ${vertical.accentTo} flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">The AI Growth System for {vertical.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  We build end-to-end revenue systems purpose-configured for {vertical.name} — combining AI automation, precision paid advertising, and organic growth to create predictable patient and client pipelines.
                </p>
                <div className="space-y-2.5">
                  {[
                    "Never miss a lead — AI answers and follows up instantly",
                    "Only pay for ad clicks from your ideal customer profile",
                    "Full pipeline visibility from first touch to closed deal",
                    "Live in 2–3 weeks with zero disruption to your operations",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-14 sm:py-18 bg-white" data-testid="section-primary-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">AI Systems Deployed</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              What We Build for {vertical.name}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Each system is purpose-configured for the specific sales cycle, compliance requirements, and growth bottlenecks of {vertical.name}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/${svc.slug}`}>
                  <Card className="p-6 h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-gray-200" data-testid={`service-card-${svc.slug}`}>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${vertical.accentFrom} ${vertical.accentTo} flex items-center justify-center mb-4`}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.shortDesc}</p>
                    <span className="text-xs text-blue-600 font-medium flex items-center gap-1">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 sm:py-20 relative overflow-hidden" id="case-study" data-testid="section-case-study">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                Real Client Result
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Proof It Works for {vertical.name}</h2>
            </div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-7 sm:p-9" data-testid="card-case-study">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-3 text-xs">
                    {vertical.name} Case Study
                  </Badge>
                  <h3 className="text-lg font-bold text-white mb-1">{vertical.caseStudyTitle}</h3>
                  <p className="text-sm text-white/60 mb-4">{vertical.caseStudyBusiness}</p>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${vertical.accentFrom} ${vertical.accentTo} bg-opacity-20 mb-5`}>
                    <TrendingUp className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">{vertical.caseStudyMetric}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-white/60 ml-1 mt-0.5">Verified Client Result</span>
                  </div>
                  <Link href={`/${vertical.caseStudySlug}`}>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-sm" data-testid="button-read-case-study">
                      Read Full Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-18 bg-white" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">Questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Common Questions from {vertical.name}
            </h2>
          </div>
          <div className="space-y-3">
            {vertical.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 bg-gradient-to-br from-blue-50 to-indigo-50" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block">Free Consultation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {vertical.ctaHeadline}
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a 30-minute strategy call. We'll show you exactly how many leads your current system is missing, what it would take to fix it, and what results you can expect in 90 days.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" data-testid="button-cta-book-demo">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" data-testid="button-cta-portfolio">
                  See All Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-12 sm:py-14 bg-gray-50 border-t border-gray-100" data-testid="section-other-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-base font-semibold text-gray-500 uppercase tracking-widest mb-6 text-center">Other Industries We Serve</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherVerticals.map((v) => {
              const OtherIcon = iconMap[v.icon] || Zap;
              return (
                <Link key={v.slug} href={`/${v.slug}`}>
                  <Card className="p-5 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-gray-200" data-testid={`other-industry-${v.slug}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${v.accentFrom} ${v.accentTo} flex items-center justify-center`}>
                        <OtherIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{v.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.tagline}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
