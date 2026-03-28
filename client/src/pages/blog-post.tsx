import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { ALL_SERVICES, CASE_STUDIES } from "@/lib/constants";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2, Zap, BarChart3 } from "lucide-react";

type ServiceItem = (typeof ALL_SERVICES)[number];

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
};

const CATEGORY_SERVICE_MAP: Record<string, string[]> = {
  "AI Automation": ["ai-calling-agent", "ai-chatbot"],
  "Lead Generation": ["google-ads", "seo-authority"],
  "Sales Automation": ["ai-follow-up", "crm-automation"],
  "Local Marketing": ["local-seo", "google-ads"],
  "Strategy": ["conversion-funnels", "landing-page-optimization"],
  "Social Media": ["social-media-marketing", "meta-ads"],
  "Web Development": ["website-development", "landing-page-development"],
  "Content Marketing": ["content-writing", "seo-authority"],
  "E-Commerce": ["conversion-rate-optimization", "meta-ads"],
  "Healthcare": ["ai-receptionist", "ai-appointment-booking"],
  "Real Estate": ["ai-lead-qualification", "google-ads"],
  "Branding": ["branding-design", "content-writing"],
};

const POST_SERVICE_MAP: Record<string, { services: string[]; caseStudySlug: string }> = {
  "ai-automation-revenue-growth-2025": {
    services: ["ai-calling-agent", "ai-chatbot"],
    caseStudySlug: "case-study-dental-practice-revenue-transformation",
  },
  "google-ads-roi-local-business": {
    services: ["google-ads", "local-seo"],
    caseStudySlug: "case-study-home-services-plumbing-hvac-lead-machine",
  },
  "ai-chatbot-lead-conversion": {
    services: ["ai-chatbot", "ai-lead-qualification"],
    caseStudySlug: "case-study-auto-dealership-ai-sales-acceleration",
  },
  "crm-automation-sales-pipeline": {
    services: ["crm-automation", "ai-follow-up"],
    caseStudySlug: "case-study-saas-growth-acceleration",
  },
  "seo-vs-paid-ads-strategy": {
    services: ["seo-authority", "google-ads"],
    caseStudySlug: "case-study-cnc-manufacturer-digital-lead-generation",
  },
  "ai-follow-up-sequences": {
    services: ["ai-follow-up", "ai-email-automation"],
    caseStudySlug: "case-study-saas-growth-acceleration",
  },
  "social-media-marketing-strategy-2025": {
    services: ["social-media-marketing", "meta-ads"],
    caseStudySlug: "case-study-luxury-salon-ai-booking-instagram-growth",
  },
  "local-business-digital-marketing": {
    services: ["local-seo", "google-ads"],
    caseStudySlug: "case-study-restaurant-chain-local-seo-transformation",
  },
  "lead-generation-strategies-2025": {
    services: ["ai-lead-qualification", "google-ads"],
    caseStudySlug: "case-study-real-estate-ai-lead-generation",
  },
  "website-conversion-optimization": {
    services: ["conversion-rate-optimization", "landing-page-optimization"],
    caseStudySlug: "case-study-ecommerce-cart-recovery-scaling",
  },
  "content-marketing-seo-guide": {
    services: ["content-writing", "seo-authority"],
    caseStudySlug: "case-study-commercial-contractor-brand-lead-growth",
  },
  "ecommerce-growth-strategies": {
    services: ["meta-ads", "crm-automation"],
    caseStudySlug: "case-study-ecommerce-cart-recovery-scaling",
  },
  "brand-identity-business-growth": {
    services: ["branding-design", "content-writing"],
    caseStudySlug: "case-study-luxury-salon-ai-booking-instagram-growth",
  },
  "healthcare-marketing-patient-acquisition": {
    services: ["ai-receptionist", "google-ads"],
    caseStudySlug: "case-study-medical-clinic-patient-acquisition",
  },
  "real-estate-lead-generation-ai": {
    services: ["ai-lead-qualification", "ai-calling-agent"],
    caseStudySlug: "case-study-real-estate-ai-lead-generation",
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you are looking for does not exist.</p>
          <Link href="/blog">
            <Button data-testid="button-back-blog">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedPosts(post.relatedPosts);

  const postMap = POST_SERVICE_MAP[post.slug];
  const relatedServiceSlugs = postMap?.services || CATEGORY_SERVICE_MAP[post.category] || ["ai-chatbot", "seo-authority"];
  const relatedServices: ServiceItem[] = relatedServiceSlugs
    .map((s) => ALL_SERVICES.find((svc) => svc.slug === s))
    .filter((s): s is ServiceItem => s !== undefined)
    .slice(0, 2);

  const relatedCaseStudy = postMap?.caseStudySlug
    ? CASE_STUDIES.find((cs) => cs.slug === postMap.caseStudySlug) || CASE_STUDIES[0]
    : CASE_STUDIES.find((cs) =>
        cs.tags.some((t) => t.toLowerCase().includes(post.category.toLowerCase().split(" ")[0]))
      ) || CASE_STUDIES[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div>
      <SEOHead
        title={post.seoTitle}
        description={post.seoDescription}
        keywords={post.seoKeywords}
        ogImage={post.image}
        canonical={`https://infiniterankers.io/${post.slug}`}
      />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-6 cursor-pointer" data-testid="link-back-blog">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </span>
            </Link>
            <Badge variant="secondary" className="mb-4" data-testid="badge-category">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="text-blog-title">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
              <Button variant="ghost" size="sm" onClick={handleShare} data-testid="button-share">
                <Share2 className="w-4 h-4 mr-1" /> Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-[250px] sm:h-[350px] lg:h-[420px] object-cover rounded-md"
              data-testid="img-blog-hero"
            />
          </motion.div>
        </div>
      </section>

      <article className="pb-12 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
            data-testid="blog-content"
          >
            {post.content.map((section, i) => {
              switch (section.type) {
                case "heading":
                  return (
                    <h2 key={i} className="text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4">
                      {section.text}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
                      {section.text}
                    </p>
                  );
                case "list":
                  return (
                    <ul key={i} className="space-y-2.5 mb-6 pl-1">
                      {section.items?.map((item, j) => (
                        <li key={j} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote key={i} className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50/50 rounded-r-md">
                      <p className="text-base sm:text-lg text-foreground italic mb-2 leading-relaxed">
                        "{section.text}"
                      </p>
                      {section.author && (
                        <cite className="text-sm text-muted-foreground not-italic font-medium">
                          — {section.author}
                        </cite>
                      )}
                    </blockquote>
                  );
                case "cta":
                  return (
                    <div key={i} className="my-10 p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-center">
                      <p className="text-white text-base sm:text-lg font-medium mb-5 leading-relaxed">
                        {section.text}
                      </p>
                      <Link href="/book-demo">
                        <Button variant="secondary" data-testid="button-blog-cta">
                          Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{post.author.charAt(0)}</span>
              </div>
              <div>
                <div className="font-semibold text-foreground" data-testid="text-author">{post.author}</div>
                <div className="text-sm text-muted-foreground">{post.authorRole}</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedServices.length > 0 && (
        <section className="py-12 sm:py-16 bg-gray-50/60" data-testid="related-services-section">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedServices.map((svc) => (
                <Link key={svc.slug} href={`/${svc.slug}`}>
                  <Card className="p-5 hover-elevate cursor-pointer" data-testid={`related-service-${svc.slug}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-1">{svc.title}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{svc.shortDesc}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center text-xs font-medium text-blue-600 gap-1">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedCaseStudy && (
        <section className="py-12 sm:py-16" data-testid="related-case-study-section">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              Related Case Study
            </h2>
            <Link href={`/${relatedCaseStudy.slug}`}>
              <Card className="overflow-hidden hover-elevate cursor-pointer" data-testid="related-case-study-card">
                <div className="grid sm:grid-cols-2">
                  <img
                    src={PORTFOLIO_IMAGES[relatedCaseStudy.id] || "/images/portfolio/project-1-dental.jpg"}
                    alt={relatedCaseStudy.title}
                    className="w-full h-44 sm:h-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{relatedCaseStudy.industry}</Badge>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{relatedCaseStudy.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{relatedCaseStudy.business}</p>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-semibold text-blue-600 gap-1">
                      View Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.id} href={`/${rp.slug}`}>
                  <Card className="overflow-hidden cursor-pointer hover-elevate" data-testid={`card-related-${rp.id}`}>
                    <img
                      src={rp.image}
                      alt={rp.imageAlt}
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-5">
                      <Badge variant="secondary" className="mb-2 text-xs">{rp.category}</Badge>
                      <h3 className="text-base font-semibold text-foreground mb-2 leading-snug line-clamp-2">{rp.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {rp.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {rp.readTime}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
            Ready to Grow Your Business?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free strategy session and get a custom AI revenue growth plan tailored to your business.
          </p>
          <Link href="/book-demo">
            <Button variant="secondary" data-testid="button-blog-bottom-cta">
              Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
