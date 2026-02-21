import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Users, TrendingUp, Zap, Star } from "lucide-react";

const PORTFOLIO_IMAGES: Record<string, string> = {
  "1": "/images/portfolio/project-1-dental.jpg",
  "2": "/images/portfolio/project-2-ecommerce.jpg",
  "3": "/images/portfolio/project-3-realestate.jpg",
  "4": "/images/portfolio/project-4-saas.jpg",
  "5": "/images/portfolio/project-5-lawfirm.jpg",
  "6": "/images/portfolio/project-6-fitness.jpg",
  "7": "/images/portfolio/project-7-restaurant.jpg",
  "8": "/images/portfolio/project-8-clinic.jpg",
  "9": "/images/portfolio/project-9-finance.jpg",
  "10": "/images/portfolio/project-10-homeservices.jpg",
  "11": "/images/portfolio/project-11-dealership.jpg",
  "12": "/images/portfolio/project-12-coaching.jpg",
  "13": "/images/portfolio/project-13-hotel.jpg",
  "14": "/images/portfolio/project-14-insurance.jpg",
  "15": "/images/portfolio/project-15-construction.jpg",
  "16": "/images/portfolio/project-16-accounting.jpg",
  "17": "/images/portfolio/project-17-salon.jpg",
  "18": "/images/portfolio/project-18-immigration.jpg",
  "19": "/images/portfolio/project-19-logistics.jpg",
  "20": "/images/portfolio/project-20-manufacturing.jpg",
  "21": "/images/portfolio/project-21-veterinary.jpg",
};

const METRIC_GRADIENTS = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-indigo-500 to-indigo-600",
  "from-cyan-500 to-cyan-600",
];

export default function CaseStudyDetail() {
  const params = useParams<{ slug: string }>();
  const id = params.slug;
  const csIndex = CASE_STUDIES.findIndex((cs) => cs.id === id);
  const cs = CASE_STUDIES[csIndex];

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/portfolio">
            <Button data-testid="button-back-portfolio">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedStudies = CASE_STUDIES.filter(
    (s) => s.id !== cs.id && s.tags.some((t) => cs.tags.includes(t))
  ).slice(0, 3);

  const metrics = [
    { value: cs.results.metric1, label: cs.results.label1 },
    { value: cs.results.metric2, label: cs.results.label2 },
    { value: cs.results.metric3, label: cs.results.label3 },
    { value: cs.results.metric4, label: cs.results.label4 },
  ];

  return (
    <div>
      <SEOHead
        title={`${cs.title} - Case Study | Infinite Rankers`}
        description={`${cs.business}: ${cs.challenge.slice(0, 150)}`}
        keywords={cs.tags.join(", ")}
        canonical={`https://infiniterankers.io/${cs.id}`}
      />

      <section className="relative pt-28 pb-16 overflow-hidden" data-testid="case-hero">
        <div className="absolute inset-0">
          <img
            src={PORTFOLIO_IMAGES[cs.id] || "/images/portfolio/project-1-dental.jpg"}
            alt={cs.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/portfolio">
              <span className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white mb-6 cursor-pointer transition-colors" data-testid="link-back-portfolio">
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
              </span>
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" data-testid="badge-industry">{cs.industry}</Badge>
              {cs.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-white/10 text-white border-white/20" data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl" data-testid="text-case-title">
              {cs.title}
            </h1>
            <p className="text-lg text-white/80 max-w-3xl" data-testid="text-case-business">
              {cs.business}
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {cs.duration}</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {cs.teamSize}</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> {cs.services.length} Services</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="metrics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-5 text-center" data-testid={`metric-card-${i}`}>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${METRIC_GRADIENTS[i]} bg-clip-text text-transparent mb-1`}>
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{m.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="problem-solution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-6 sm:p-8 h-full" data-testid="card-challenge">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-md bg-red-50 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">The Challenge</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-6 sm:p-8 h-full" data-testid="card-solution">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-md bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Our Solution</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="services-used">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-foreground mb-6">Services Deployed</h3>
            <div className="flex flex-wrap gap-2">
              {cs.services.map((svc) => (
                <Badge key={svc} variant="secondary" className="text-sm px-3 py-1.5" data-testid={`badge-svc-${svc.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-green-500" />
                  {svc}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50/60" data-testid="workflow-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-foreground mb-8">Implementation Workflow</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cs.workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-5 h-full" data-testid={`workflow-step-${i}`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold mb-3">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.step}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="before-after">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-foreground mb-8">Before vs After</h3>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {cs.beforeAfter.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-5" data-testid={`before-after-${i}`}>
                  <h4 className="text-sm font-semibold text-foreground mb-4">{item.metric}</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1">Before</div>
                      <div className="text-lg font-bold text-red-500">{item.before}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 text-right">
                      <div className="text-xs text-muted-foreground mb-1">After</div>
                      <div className="text-lg font-bold text-green-500">{item.after}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden" data-testid="testimonial-section">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                Client Testimonial
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">What Our Client Says</h3>
            </div>

            <div className="rounded-md border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 lg:p-12" data-testid="card-testimonial">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="flex-shrink-0 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mx-auto mb-4">
                    {cs.testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <p className="font-semibold text-white text-lg">{cs.testimonial.author}</p>
                  <p className="text-sm text-white/60 mt-0.5">{cs.testimonial.role}</p>
                  <div className="flex items-center justify-center gap-0.5 mt-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <svg className="w-10 h-10 text-blue-400/30 mb-4 hidden sm:block" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                  </svg>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light italic">
                    "{cs.testimonial.quote}"
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Verified Client
                    </Badge>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">
                      {cs.industry}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {relatedStudies.length > 0 && (
        <section className="py-12 sm:py-16" data-testid="related-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-foreground mb-8">Related Case Studies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedStudies.map((related, i) => {
                return (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="overflow-visible hover-elevate" data-testid={`related-${related.id}`}>
                      <div className="relative h-40 overflow-hidden rounded-t-md">
                        <img
                          src={PORTFOLIO_IMAGES[related.id] || "/images/portfolio/project-1-dental.jpg"}
                          alt={related.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Badge variant="secondary" className="absolute bottom-2 left-2 text-xs">
                          {related.industry}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-foreground mb-1 line-clamp-1">{related.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{related.business}</p>
                        <Link href={`/${related.id}`}>
                          <Button variant="outline" size="sm" className="w-full" data-testid={`button-related-${related.id}`}>
                            View Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 relative overflow-hidden" data-testid="case-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Get Similar Results?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Book a free strategy session and discover how our AI systems can transform your {cs.industry.toLowerCase()} business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/book-demo">
                <Button className="w-full sm:w-auto bg-white text-blue-700 border-0" data-testid="button-case-cta-demo">
                  Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="w-full sm:w-auto backdrop-blur bg-white/90 text-gray-900 border-white" data-testid="button-case-cta-portfolio">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
