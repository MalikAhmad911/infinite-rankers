import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import ServiceHeroMockup from "@/components/service-mockups";
import { ProblemSolutionSection, FeaturesSection, WorkflowSection, FAQSection } from "@/components/service-sections";
import { ALL_SERVICES, CASE_STUDIES, SERVICE_CONTENT, SERVICE_VISUAL_THEMES, type ServiceVisualTheme, getServicePricing } from "@/lib/constants";
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

const defaultContent = {
  longDesc: "Our AI-powered system is designed to automate and optimize your business processes, delivering measurable results from day one.",
  problems: [
    "Leads slip through the cracks due to slow or no response",
    "Manual processes waste time and limit scalability",
    "Inconsistent follow-up leads to lost revenue opportunities",
    "No visibility into what's working and what's not",
  ],
  solutions: [
    "Instant AI-powered response to every lead, 24/7/365",
    "Fully automated workflows that scale without added headcount",
    "Intelligent follow-up sequences that nurture every prospect",
    "Real-time analytics and reporting for complete visibility",
  ],
  features: [
    "24/7 automated operation",
    "Real-time analytics dashboard",
    "CRM integration ready",
    "Custom AI model training",
    "Multi-channel deployment",
    "A/B testing built-in",
    "Automated reporting",
    "Dedicated support team",
  ],
  workflowSteps: [
    { step: "Setup & Configuration", desc: "We configure the system to match your business processes and goals." },
    { step: "Integration & Testing", desc: "Connect with your existing tools and run comprehensive tests." },
    { step: "Launch & Optimization", desc: "Go live with ongoing monitoring and continuous improvement." },
    { step: "Scale & Grow", desc: "Expand capabilities and channels as your results compound." },
  ],
  industries: [
    { name: "Real Estate", icon: "Building2" },
    { name: "Healthcare", icon: "Stethoscope" },
    { name: "Professional Services", icon: "Briefcase" },
    { name: "E-Commerce", icon: "ShoppingCart" },
    { name: "Education", icon: "GraduationCap" },
    { name: "Restaurants", icon: "Utensils" },
  ],
  faqs: [
    { q: "How quickly can this be implemented?", a: "Most implementations are completed within 2-4 weeks, including custom configuration, testing, and optimization for your specific business needs." },
    { q: "Do I need technical knowledge to use this?", a: "No. We handle all the technical setup and provide a user-friendly dashboard. Our team manages ongoing optimization and you receive clear performance reports." },
    { q: "Can this integrate with my existing tools?", a: "Yes. Our systems integrate with all major CRMs, email platforms, scheduling tools, and business software." },
    { q: "What kind of results can I expect?", a: "Most clients see measurable improvements within the first 30 days, with significant ROI within 90 days." },
    { q: "Is there a minimum contract period?", a: "No long-term contracts required. We operate on a month-to-month basis because we're confident our results speak for themselves." },
  ],
  relatedServices: [] as string[],
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

function buildServiceNarrative(service: { slug: string; title: string; category: string }, content: typeof defaultContent) {
  const featureLine = content.features.slice(0, 4).join(", ");
  const problemLine = content.problems.slice(0, 3).join("; ");
  const solutionLine = content.solutions.slice(0, 3).join("; ");
  const industriesLine = content.industries.slice(0, 4).map((i) => i.name).join(", ");
  const workflowLine = content.workflowSteps.map((s) => s.step).join(" -> ");
  const hash = Array.from(service.slug).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  const positioningAngles = [
    "revenue operations and speed-to-lead optimization",
    "demand generation with stronger qualification and conversion control",
    "pipeline stability through automation-first execution",
    "commercial intent capture with full-funnel attribution",
  ];

  const operatingModelAngles = [
    "centralized standards with local execution flexibility",
    "high-intent segmentation and lifecycle orchestration",
    "always-on response infrastructure with clear escalation paths",
    "automation plus human handoff for close-ready opportunities",
  ];

  const angleA = positioningAngles[hash % positioningAngles.length];
  const angleB = operatingModelAngles[(hash + 1) % operatingModelAngles.length];

  return [
    `${service.title} is structured around ${angleA}. Instead of treating growth as separate channel tasks, we design one operating layer that connects acquisition, qualification, conversion, and retention. For teams competing in crowded USA markets, this model creates consistency in execution and helps reduce the revenue volatility that happens when campaigns are managed as disconnected experiments.`,
    `During discovery, we focus on core revenue constraints: ${problemLine}. These issues often appear across both enterprise and local operators, even when budget levels differ. The difference is in scale, not in logic. If response times are slow and follow-up is inconsistent, paid and organic traffic both underperform. That is why implementation starts with conversion mechanics before volume expansion.`,
    `The deployment sequence follows a practical workflow: ${workflowLine}. This sequence keeps performance stable while new automation is introduced. It prevents the common pattern where teams launch tools quickly but lose operational control. In our system, each stage has clear ownership, measurable outcomes, and weekly optimization checkpoints tied to business goals rather than vanity dashboards.`,
    `Execution quality is driven by specific capabilities such as ${featureLine}. These are not presented as standalone features. They are configured as one coordinated engine that improves lead handling, qualification quality, and close velocity. For larger organizations, this supports multi-team consistency. For local businesses, it removes missed opportunities and makes daily pipeline more predictable.`,
    `This service is especially effective for industries including ${industriesLine}. In each vertical, buyer behavior, trust signals, and sales cycles are different, so we adapt scripts, routing rules, and follow-up pacing accordingly. The objective is not only to increase inquiry counts but to improve qualified opportunity flow so sales teams spend more time on deals likely to close.`,
    `Our strategic response to those constraints is clear: ${solutionLine}. When these systems are aligned, the business sees faster first response, lower cost per qualified lead, and better visibility from first touch to booked revenue. Over time, this creates a compounding advantage because decisions are based on clean performance data rather than assumptions.`,
    `For most accounts, ${service.title} also becomes the foundation for adjacent systems such as CRM automation, paid acquisition, and retention workflows. That layered approach strengthens attribution and shortens learning cycles. As a result, leadership can scale budgets with confidence, knowing that operational infrastructure can absorb more demand without sacrificing customer experience.`
  ];
}

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
  const content = SERVICE_CONTENT[params.slug] || defaultContent;
  const theme = SERVICE_VISUAL_THEMES[params.slug] || defaultTheme;
  const categoryId = service.categoryId;
  const pricing = getServicePricing(params.slug);

  const heroGradient = theme.heroGradient.includes("#")
    ? "from-gray-50/80 via-blue-50/30 to-white"
    : theme.heroGradient;

  const relatedServiceData = content.relatedServices
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)
    .slice(0, 4);
  const serviceNarrative = buildServiceNarrative(service, content);

  const relatedCaseStudies = CASE_STUDIES.filter((cs) =>
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
  ).slice(0, 3);

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
              <Badge variant="secondary" className="mb-4" data-testid="badge-service-category">{service.category}</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="text-service-title">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">{service.shortDesc}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">{content.longDesc}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={`/book-demo?service=${encodeURIComponent(service.title)}`}>
                  <Button data-testid="button-service-book-demo">
                    Book Demo <ArrowRight className="w-4 h-4 ml-1" />
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
        </div>
      </section>

      <ProblemSolutionSection
        problems={content.problems}
        solutions={content.solutions}
        serviceTitle={service.title}
        accentFrom={theme.accentFrom}
        accentTo={theme.accentTo}
        variant={theme.problemSolutionLayout}
      />

      <WorkflowSection
        steps={content.workflowSteps}
        accentFrom={theme.accentFrom}
        accentTo={theme.accentTo}
        variant={theme.workflowLayout}
      />

      <FeaturesSection
        features={content.features}
        accentFrom={theme.accentFrom}
        accentTo={theme.accentTo}
        variant={theme.featuresLayout}
      />

      <section className="py-14 sm:py-16 bg-gradient-to-b from-white to-gray-50/70" data-testid="section-usa-service-intent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="USA Strategy"
            title={`${service.title} for Enterprise and Local Business Growth`}
            description={`This system is designed for USA companies that need predictable pipeline growth, operational efficiency, and clear revenue attribution from marketing.`}
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Enterprise Use Case</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise teams use {service.title} to unify demand generation, qualification, and follow-up across multiple teams and locations.
                This reduces response lag, improves lead quality, and gives leadership a clearer path from spend to revenue.
              </p>
            </GlassCard>

            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Local Business Use Case</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Local businesses use {service.title} to capture demand quickly, reduce missed opportunities, and convert more calls,
                form submissions, and chats into booked appointments and paying customers.
              </p>
            </GlassCard>
          </div>

          {relatedServiceData.length > 0 && (
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              To improve ROI further, most clients combine this service with
              {relatedServiceData.slice(0, 3).map((rs, idx) => (
                <span key={rs!.slug}>
                  {idx === 0 ? " " : idx === relatedServiceData.slice(0, 3).length - 1 ? " and " : ", "}
                  <Link href={`/${rs!.slug}`}>
                    <span className="text-blue-600 hover:underline cursor-pointer">{rs!.title}</span>
                  </Link>
                </span>
              ))}
              . This connected system typically improves conversion quality and shortens sales cycles.
            </p>
          )}
        </div>
      </section>

      <section className="py-14 sm:py-16" data-testid="section-seo-expanded-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Implementation Depth"
            title={`How ${service.title} Drives Measurable Revenue Outcomes`}
            description="This section provides page-specific strategy, operating model, and commercial execution detail for stronger indexing quality."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            <GlassCard className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-3">Execution Framework</h3>
              <div className="space-y-3">
                {serviceNarrative.map((paragraph, index) => (
                  <p key={index} className="text-sm text-muted-foreground leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold text-foreground mb-3">ROI Benchmarks</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Faster response times and better lead conversion efficiency.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Lower cost per qualified lead through tighter funnel control.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Clear attribution from channel spend to booked opportunities.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /><span>Scalable systems for both local service teams and enterprise operations.</span></li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {pricing && (
        <section id="service-pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="section-service-pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Pricing"
              title={`${service.title} Pricing`}
              description={`Choose the plan that fits your needs. All plans are month-to-month with no long-term contracts.${pricing.combinedNote ? ` ${pricing.combinedNote}` : ""}`}
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

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Industries" title="Industry Use Cases" description="Our systems are trusted across industries with tailored configurations for each." />
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

      {relatedCaseStudies.length > 0 && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Results" title="Related Case Studies" description="See how businesses like yours have achieved real results with our systems." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((cs, i) => (
                <GlassCard key={cs.id} delay={i * 0.1} glow>
                  <Badge variant="secondary" className="mb-3">{cs.label}</Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-case-study-title-${cs.id}`}>{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cs.business}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 rounded-md bg-blue-50/80 text-center">
                      <p className={`text-lg font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{cs.results.metric1}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label1}</p>
                    </div>
                    <div className="p-2 rounded-md bg-blue-50/80 text-center">
                      <p className={`text-lg font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{cs.results.metric2}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label2}</p>
                    </div>
                    <div className="p-2 rounded-md bg-blue-50/80 text-center">
                      <p className={`text-lg font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{cs.results.metric3}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label3}</p>
                    </div>
                    <div className="p-2 rounded-md bg-blue-50/80 text-center">
                      <p className={`text-lg font-bold bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} bg-clip-text text-transparent`}>{cs.results.metric4}</p>
                      <p className="text-xs text-muted-foreground">{cs.results.label4}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cs.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection
        faqs={content.faqs}
        accentFrom={theme.accentFrom}
        accentTo={theme.accentTo}
        variant={theme.faqLayout}
      />

      {relatedServiceData.length > 0 && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Explore More" title="Related Services" description="Complement your growth strategy with these related systems." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServiceData.map((rs, i) => {
                if (!rs) return null;
                const RsIcon = iconMap[rs.icon] || Zap;
                return (
                  <Link key={rs.slug} href={`/${rs.slug}`}>
                    <GlassCard delay={i * 0.1} glow className="cursor-pointer h-full">
                      <div className={`w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4`}>
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
              Book a free strategy session and see how this system can be customized for your business.
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
