import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import ServiceHeroMockup from "@/components/service-mockups";
import { ProblemSolutionSection, FeaturesSection, WorkflowSection, FAQSection } from "@/components/service-sections";
import { ALL_SERVICES, CASE_STUDIES, SERVICE_CONTENT, SERVICE_VISUAL_THEMES, type ServiceVisualTheme, type ServiceContent, getServicePricing } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { GooglePartnerBadge } from "@/components/google-partner-badge";
import {
  ArrowRight, CheckCircle2, ArrowLeft,
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck,
  CalendarCheck, MailCheck, TrendingUp, MessageSquare, Mail, Smartphone,
  Database, Workflow, Search, Megaphone, BarChart3, MapPin, Filter,
  MousePointer, Percent, Camera, ThumbsUp, FileText, Palette, Video,
  Monitor, Layout, Settings, Plug, PieChart, Code, Share2,
  Building2, ShoppingCart, Briefcase, Stethoscope, GraduationCap, Utensils,
  Car, Hammer, Scale, Heart, Landmark, Dumbbell,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck, CalendarCheck,
  MailCheck, TrendingUp, MessageSquare, Mail, Smartphone, Database,
  Workflow, Search, Megaphone, BarChart3, MapPin, Filter, MousePointer,
  Percent, Camera, ThumbsUp, FileText, Palette, Video, Monitor, Layout,
  Settings, Plug, PieChart, Code, Share2,
  Building2, ShoppingCart, Briefcase, Stethoscope, GraduationCap, Utensils,
  Car, Hammer, Scale, Heart, Landmark, Dumbbell,
};

const SERVICE_PRIMARY_CASE_STUDY: Record<string, string> = {
  "ai-calling-agent": "case-study-dental-practice-revenue-transformation",
  "ai-receptionist": "case-study-law-firm-client-intake-automation",
  "ai-lead-qualification": "case-study-real-estate-ai-lead-generation",
  "ai-appointment-booking": "case-study-fitness-studio-membership-growth",
  "ai-follow-up": "case-study-insurance-agency-renewal-automation",
  "ai-chatbot": "case-study-auto-dealership-ai-sales-acceleration",
  "google-ads": "case-study-home-services-plumbing-hvac-lead-machine",
  "meta-ads": "case-study-online-coaching-enrollment-automation",
  "seo-authority": "case-study-commercial-contractor-brand-lead-growth",
  "crm-automation": "case-study-freight-brokerage-workflow-automation",
  "local-seo": "case-study-restaurant-chain-local-seo-transformation",
  "content-writing": "case-study-wealth-management-digital-lead-generation",
  "website-development": "case-study-saas-growth-acceleration",
};

const defaultTheme: ServiceVisualTheme = {
  heroMockup: "analytics-dashboard",
  accentFrom: "from-blue-500",
  accentTo: "to-purple-500",
  accentGlow: "blue-500",
  heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
  problemSolutionLayout: "A",
  featuresLayout: "A",
  workflowLayout: "A",
  faqLayout: "A",
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button variant="outline" data-testid="button-back-services">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Zap;
  const content = SERVICE_CONTENT[params.slug];
  const theme = SERVICE_VISUAL_THEMES[params.slug] || defaultTheme;

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Service Page Not Found</h1>
          <p className="text-muted-foreground mb-6">This service does not have a dedicated page yet.</p>
          <Link href="/services">
            <Button variant="outline" data-testid="button-back-services-404">
              <ArrowLeft className="w-4 h-4 mr-1" /> View All Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  const categoryId = service.categoryId;
  const pricing = getServicePricing(params.slug);

  const heroGradient = theme.heroGradient.includes("#")
    ? "from-gray-50/80 via-blue-50/30 to-white"
    : theme.heroGradient;

  const relatedServiceData = content.relatedServices
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof ALL_SERVICES)[number] => s !== undefined)
    .slice(0, 3);

  const primaryCaseStudySlug = SERVICE_PRIMARY_CASE_STUDY[service.slug];
  const primaryCaseStudy = primaryCaseStudySlug
    ? CASE_STUDIES.find((cs) => cs.slug === primaryCaseStudySlug)
    : undefined;
  const heuristicCaseStudies = CASE_STUDIES.filter((cs) =>
    cs.slug !== primaryCaseStudySlug &&
    cs.tags.some((tag) => {
      const categoryLower = service.category.toLowerCase();
      const tagLower = tag.toLowerCase();
      return categoryLower.includes(tagLower.split(" ")[0]) ||
        tagLower.includes(categoryLower.split(" ")[0]) ||
        tagLower.toLowerCase().includes("ai") && categoryLower.includes("ai") ||
        tagLower.toLowerCase().includes("seo") && categoryLower.includes("lead") ||
        tagLower.toLowerCase().includes("ads") && categoryLower.includes("lead") ||
        tagLower.toLowerCase().includes("social") && categoryLower.includes("social") ||
        tagLower.toLowerCase().includes("web") && categoryLower.includes("development");
    })
  );
  const relatedCaseStudies = [
    ...(primaryCaseStudy ? [primaryCaseStudy] : []),
    ...heuristicCaseStudies,
  ].slice(0, 3);

  return (
    <div>
      <SEOHead
        title={`${service.title} - Infinite Rankers | AI Revenue Growth`}
        description={service.shortDesc}
        canonical={`https://infiniterankers.io/${service.slug}`}
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${heroGradient}`} />

        {categoryId === "ai-automation" && (
          <>
            <div className="absolute top-16 right-16 w-64 h-64 opacity-[0.08]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-full animate-pulse-ring" />
                <div className="absolute inset-6 border border-cyan-500/50 rounded-full animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
                <div className="absolute inset-12 border border-cyan-500/30 rounded-full animate-pulse-ring" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-orbit" />
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-orbit" style={{ animationDelay: "2s", animationDuration: "6s" }} />
              </div>
            </div>
            <div className="absolute bottom-20 left-8 w-48 h-48 opacity-[0.06]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10 50 L30 30 L50 50 L70 20 L90 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-500" />
                <path d="M10 60 L30 70 L50 55 L70 65 L90 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-500" />
              </svg>
            </div>
          </>
        )}

        {categoryId === "lead-generation" && (
          <>
            <div className="absolute top-20 right-10 w-72 h-72 opacity-[0.07]">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {[0, 1, 2, 3, 4].map((i) => (
                  <rect key={i} x={20 + i * 35} y={200 - (40 + i * 30)} width="25" height={40 + i * 30} rx="3" fill="currentColor" className="text-emerald-500" opacity={0.3 + i * 0.15} />
                ))}
                <path d="M10 180 Q60 140 100 120 T200 60" stroke="currentColor" strokeWidth="2" fill="none" className="text-green-500" opacity="0.4" />
              </svg>
            </div>
            <div className="absolute bottom-16 left-12 opacity-[0.06]">
              <div className="w-32 h-32 border-2 border-dashed border-green-500 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </>
        )}

        {categoryId === "social-content" && (
          <>
            <div className="absolute top-24 right-12 opacity-[0.08]">
              <div className="flex gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-16 h-20 rounded-md border border-pink-400/30 bg-pink-50/50" style={{ transform: `rotate(${-5 + i * 5}deg)`, animationDelay: `${i * 0.3}s` }}>
                    <div className="w-4 h-4 bg-pink-200/40 rounded-full mx-auto mt-2" />
                    <div className="w-10 h-1 bg-pink-200/30 rounded-full mx-auto mt-2" />
                    <div className="w-8 h-1 bg-pink-200/20 rounded-full mx-auto mt-1" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-24 left-8 opacity-[0.06]">
              <div className="flex items-end gap-1">
                {[3, 5, 4, 7, 6, 8, 5, 7, 9, 6, 8, 7].map((h, i) => (
                  <div key={i} className="w-1.5 bg-orange-400 rounded-full animate-wave" style={{ height: `${h * 4}px`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </>
        )}

        {categoryId === "development" && (
          <>
            <div className="absolute top-20 right-8 opacity-[0.07] font-mono text-xs text-violet-500 leading-relaxed">
              <div>{"const deploy = async () => {"}</div>
              <div className="ml-4">{"await build();"}</div>
              <div className="ml-4">{"await optimize();"}</div>
              <div className="ml-4">{"return success;"}</div>
              <div>{"}"}</div>
            </div>
            <div className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.06]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="10" y="10" width="35" height="35" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-purple-500" />
                <rect x="55" y="10" width="35" height="35" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-violet-500" />
                <rect x="30" y="55" width="40" height="35" rx="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-500" />
                <line x1="27" y1="45" x2="27" y2="55" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
                <line x1="72" y1="45" x2="72" y2="55" stroke="currentColor" strokeWidth="0.5" className="text-violet-500" />
              </svg>
            </div>
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-6 cursor-pointer hover:text-foreground transition-colors" data-testid="link-back-services">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </span>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <Badge variant="secondary" data-testid="badge-service-category">{service.category}</Badge>
                <Badge variant="outline" className="text-xs text-muted-foreground">For USA Businesses</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight" data-testid="text-service-title">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">{service.shortDesc}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{content.longDesc}</p>
              {content.icp && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-5" data-testid="text-service-icp">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">Ideal For</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{content.icp}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Live in 2-4 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Month-to-month, no lock-in</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Results tracked daily</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={`/book-demo?service=${encodeURIComponent(service.title)}`}>
                  <Button data-testid="button-service-book-demo">
                    Book Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <a href="#service-pricing">
                  <Button variant="outline" data-testid="button-service-pricing">View Pricing</Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <ServiceHeroMockup
                type={theme.heroMockup}
                accentFrom={theme.accentFrom}
                accentTo={theme.accentTo}
              />
            </motion.div>
          </div>
          {relatedCaseStudies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-6"
              data-testid="hero-outcome-stats"
            >
              <div>
                <p className={`text-2xl font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{relatedCaseStudies[0].results.metric1}</p>
                <p className="text-xs text-muted-foreground mt-1">{relatedCaseStudies[0].results.label1}</p>
              </div>
              <div>
                <p className={`text-2xl font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{relatedCaseStudies[0].results.metric2}</p>
                <p className="text-xs text-muted-foreground mt-1">{relatedCaseStudies[0].results.label2}</p>
              </div>
              <div>
                <p className={`text-2xl font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{relatedCaseStudies[0].results.metric3}</p>
                <p className="text-xs text-muted-foreground mt-1">{relatedCaseStudies[0].results.label3}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4,000+</p>
                <p className="text-xs text-muted-foreground mt-1">Clients Served</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 2: Problem — Who this is for + pain points */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="The Problem"
            title={`What ${service.category} Teams Get Wrong`}
            description={`If your ${service.category.toLowerCase()} is underperforming, these are the patterns we see most often.`}
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {content.problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-5 border-l-4 border-l-red-200 bg-red-50/30" data-testid={`problem-item-${i}`}>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{problem}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: AI System — How it works / features */}
      <FeaturesSection
        features={content.features}
        accentFrom={theme.accentFrom}
        accentTo={theme.accentTo}
        variant={theme.featuresLayout}
      />

      {/* Section 4: Process — Implementation steps */}
      <WorkflowSection
        steps={content.workflowSteps}
        accentFrom={theme.accentFrom}
        accentTo={theme.accentTo}
        variant={theme.workflowLayout}
      />

      {/* Section 4b: Deliverables & Timeline */}
      {content.deliverables && content.deliverables.length > 0 && (
        <section className="py-14 sm:py-18 bg-white" data-testid="section-deliverables">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">What You Get & When</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Deliverables & Timeline</h2>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">Exact milestones you can hold us to — from kickoff to ongoing optimization.</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm" data-testid="table-deliverables">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-3 font-semibold text-gray-700 w-3/4">Deliverable</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-700 w-1/4">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {content.deliverables.map((d, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"} data-testid={`row-deliverable-${i}`}>
                      <td className="px-6 py-4 text-gray-800 leading-snug">{d.item}</td>
                      <td className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap">{d.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Proof — Case study with results + link */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-proof">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Client Results"
              title={`Proof: Real Businesses Using ${service.title}`}
              description="These results come from real client campaigns managed by our team."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.slice(0, 3).map((cs, i) => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/${cs.slug}`}>
                    <Card className="p-5 h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" data-testid={`proof-case-study-${cs.id}`}>
                      <Badge variant="secondary" className="mb-3 text-xs">{cs.industry}</Badge>
                      <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">{cs.title}</h3>
                      <p className="text-xs text-muted-foreground mb-4">{cs.business}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="p-2 rounded-md bg-blue-50/80 text-center">
                          <p className={`text-base font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{cs.results.metric1}</p>
                          <p className="text-xs text-muted-foreground leading-tight">{cs.results.label1}</p>
                        </div>
                        <div className="p-2 rounded-md bg-blue-50/80 text-center">
                          <p className={`text-base font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{cs.results.metric2}</p>
                          <p className="text-xs text-muted-foreground leading-tight">{cs.results.label2}</p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600 font-medium flex items-center gap-1">
                        Read full case study <ArrowRight className="w-3 h-3" />
                      </span>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5b: Industries */}
      <section className="py-14 sm:py-16" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Industries" title="Who Uses This System" description="Configured for your industry's specific sales cycle, qualification criteria, and compliance requirements." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {content.industries.map((ind, i) => {
              const IndIcon = iconMap[ind.icon] || Building2;
              return (
                <GlassCard key={ind.name} delay={i * 0.05} className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-md bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} flex items-center justify-center mb-3 opacity-80`}>
                    <IndIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{ind.name}</span>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5c: Pricing */}
      {pricing && (
        <section id="service-pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-service-pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Pricing"
              title={`${service.title} Pricing`}
              description={`Month-to-month, no long-term contracts.${pricing.combinedNote ? ` ${pricing.combinedNote}` : ""}`}
            />
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {pricing.tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`p-6 sm:p-8 h-full relative flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${i === 1 ? "border-primary ring-1 ring-primary/20" : ""}`} data-testid={`pricing-tier-${tier.name.toLowerCase()}`}>
                    {i === 1 && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge variant="secondary">Most Popular</Badge>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{tier.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-foreground">${tier.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground">{pricing.unit}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Month-to-month</p>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href={`/book-demo?service=${encodeURIComponent(service.title)}`}>
                        <Button className="w-full" variant={i === 1 ? "default" : "outline"} data-testid={`button-get-started-${tier.name.toLowerCase()}`}>
                          Get Started <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 6: FAQs */}
      <FAQSection
        faqs={content.faqs}
        accentFrom={theme.accentFrom}
        accentTo={theme.accentTo}
        variant={theme.faqLayout}
      />

      {/* Section 7: Related Services + CTA */}
      {relatedServiceData.length > 0 && (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-related-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Build Your Stack" title="Services That Work Well With This" description="Most clients combine 2-3 systems for compounding results." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServiceData.map((rs, i) => {
                if (!rs) return null;
                const RsIcon = iconMap[rs.icon] || Zap;
                return (
                  <Link key={rs.slug} href={`/${rs.slug}`}>
                    <GlassCard delay={i * 0.1} glow className="cursor-pointer h-full">
                      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                        <RsIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-2" data-testid={`text-related-service-${rs.slug}`}>{rs.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{rs.shortDesc}</p>
                    </GlassCard>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo}`} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Implement {service.title}?</h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Book a free strategy session and we'll show you exactly how this system works for your specific business and goals.
            </p>
            <Link href={`/book-demo?service=${encodeURIComponent(service.title)}`}>
              <Button variant="secondary" data-testid="button-cta-book-demo">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <div className="mt-6">
              <GooglePartnerBadge variant="compact" />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
