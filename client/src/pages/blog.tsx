import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import { BLOG_POSTS_FULL } from "@/lib/blog-data";
import { ArrowRight, Clock, Calendar, BookOpen, Zap } from "lucide-react";

const CATEGORY_SERVICE_LINK: Record<string, { slug: string; label: string }> = {
  "AI Automation": { slug: "ai-calling-agent", label: "AI Calling Agent" },
  "Lead Generation": { slug: "google-ads", label: "Google Ads" },
  "Sales Automation": { slug: "ai-follow-up", label: "AI Follow-Up" },
  "Local Marketing": { slug: "local-seo", label: "Local SEO" },
  "Strategy": { slug: "conversion-funnels", label: "Conversion Funnels" },
  "Social Media": { slug: "social-media-marketing", label: "Social Media Marketing" },
  "Web Development": { slug: "website-development", label: "Website Development" },
  "Content Marketing": { slug: "content-writing", label: "Content Writing" },
  "E-Commerce": { slug: "conversion-rate-optimization", label: "CRO" },
  "Healthcare": { slug: "ai-receptionist", label: "AI Receptionist" },
  "Real Estate": { slug: "ai-lead-qualification", label: "AI Lead Qualification" },
};

const BLOG_CLUSTERS = [
  {
    label: "AI & Automation",
    value: "AI Automation",
    desc: "How AI-powered systems capture, qualify, and convert leads automatically.",
    serviceSlug: "ai-calling-agent",
    serviceLabel: "AI Calling Agent",
    categories: ["AI Automation", "Sales Automation"],
  },
  {
    label: "SEO & Content",
    value: "SEO & Content",
    desc: "Authority-building SEO and content strategies that generate organic traffic and trust.",
    serviceSlug: "seo-authority",
    serviceLabel: "SEO Authority",
    categories: ["Content Marketing", "Local Marketing"],
  },
  {
    label: "Paid Ads & Growth",
    value: "Paid Ads & Growth",
    desc: "Data-driven advertising and lead generation tactics to scale faster.",
    serviceSlug: "google-ads",
    serviceLabel: "Google Ads",
    categories: ["Lead Generation", "E-Commerce"],
  },
  {
    label: "Growth Strategy",
    value: "Growth Strategy",
    desc: "Agency frameworks and blueprints used by our top-performing clients.",
    serviceSlug: "conversion-funnels",
    serviceLabel: "Conversion Funnels",
    categories: ["Strategy", "Social Media", "Web Development"],
  },
];

const TOPIC_CLUSTERS = [
  { label: "All Topics", value: "all" },
  ...BLOG_CLUSTERS.map(({ label, value }) => ({ label, value })),
];

const CLUSTER_DESCRIPTIONS: Record<string, string> = Object.fromEntries(
  BLOG_CLUSTERS.map((c) => [c.value, c.desc])
);

export default function Blog() {
  const [activeCluster, setActiveCluster] = useState("all");
  const [, navigate] = useLocation();

  const filteredPosts = activeCluster === "all"
    ? BLOG_POSTS_FULL
    : BLOG_POSTS_FULL.filter((p) =>
        BLOG_CLUSTERS.find((c) => c.value === activeCluster)?.categories.includes(p.category) ?? false
      );

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const clusterGroups = activeCluster === "all"
    ? BLOG_CLUSTERS.map((cluster) => ({
        cluster,
        posts: BLOG_POSTS_FULL.filter((p) => cluster.categories.includes(p.category)),
      })).filter((g) => g.posts.length > 0)
    : null;

  return (
    <div className="overflow-x-hidden">
      <SEOHead
        title="Blog - Infinite Rankers | AI Automation & Revenue Growth Insights"
        description="Expert insights on AI automation, lead generation, SEO, and digital marketing strategies. Actionable frameworks to help your business grow revenue faster."
        keywords="AI automation blog, digital marketing insights, lead generation strategies, SEO tips, business growth blog, marketing automation"
      />
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Blog
            </span>
            <h1 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
              Insights for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Revenue Growth</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              Expert strategies, AI automation insights, and proven growth frameworks to help your business scale faster and smarter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 sm:mb-12" data-testid="cluster-filters">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-foreground">Topic Clusters</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOPIC_CLUSTERS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveCluster(value)}
                  data-testid={`cluster-tab-${value.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    activeCluster === value
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm"
                      : "bg-white border border-gray-200/60 text-muted-foreground hover:border-blue-300 hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {activeCluster !== "all" && CLUSTER_DESCRIPTIONS[activeCluster] && (
              <motion.p
                key={activeCluster}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-muted-foreground max-w-xl"
                data-testid="cluster-description"
              >
                {CLUSTER_DESCRIPTIONS[activeCluster]}
              </motion.p>
            )}
          </div>

          {clusterGroups ? (
            <div data-testid="cluster-grouped-sections">
              {BLOG_POSTS_FULL[0] && (
                <Link href={`/${BLOG_POSTS_FULL[0].slug}`}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14 cursor-pointer">
                    <Card className="overflow-hidden hover-elevate" data-testid="card-featured-post">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <img src={BLOG_POSTS_FULL[0].image} alt={BLOG_POSTS_FULL[0].imageAlt} className="w-full h-[200px] sm:h-[260px] lg:h-full object-cover" loading="lazy" />
                        <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge variant="secondary" className="self-start">{BLOG_POSTS_FULL[0].category}</Badge>
                            {CATEGORY_SERVICE_LINK[BLOG_POSTS_FULL[0].category] && (
                              <button
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/${CATEGORY_SERVICE_LINK[BLOG_POSTS_FULL[0].category].slug}`); }}
                                className="flex items-center gap-1 text-xs border border-border rounded-full px-2 py-0.5 text-muted-foreground hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                                data-testid="badge-service-featured"
                              >
                                <Zap className="w-2.5 h-2.5 text-blue-500" />
                                {CATEGORY_SERVICE_LINK[BLOG_POSTS_FULL[0].category].label}
                              </button>
                            )}
                          </div>
                          <h2 className="font-bold text-foreground mb-4 leading-tight" style={{ fontSize: "clamp(1.125rem, 3vw, 1.875rem)" }}>{BLOG_POSTS_FULL[0].title}</h2>
                          <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">{BLOG_POSTS_FULL[0].excerpt}</p>
                          <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-5">
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {BLOG_POSTS_FULL[0].date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {BLOG_POSTS_FULL[0].readTime}</span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">Read Article <ArrowRight className="w-4 h-4" /></span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              )}
              <div className="space-y-16">
              {clusterGroups.map(({ cluster, posts }) => (
                <div key={cluster.value} data-testid={`cluster-section-${cluster.value.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-foreground">{cluster.label}</h2>
                      <p className="text-sm text-muted-foreground mt-0.5">{cluster.desc}</p>
                    </div>
                    <button
                      onClick={() => setActiveCluster(cluster.value)}
                      className="flex items-center gap-1 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 whitespace-nowrap shrink-0"
                      data-testid={`link-view-cluster-${cluster.value.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      View all <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.slice(0, 3).map((post, i) => (
                      <Link key={post.id} href={`/${post.slug}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                          className="h-full"
                        >
                          <Card className="overflow-hidden h-full flex flex-col hover-elevate cursor-pointer" data-testid={`card-blog-${post.id}`}>
                            <img src={post.image} alt={post.imageAlt} className="w-full h-44 object-cover" loading="lazy" />
                            <div className="p-4 sm:p-5 flex flex-col flex-1">
                              <div className="flex items-center gap-2 mb-3 flex-wrap">
                                <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                                <button
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/${cluster.serviceSlug}`); }}
                                  className="flex items-center gap-1 text-xs border border-border rounded-full px-2 py-0.5 text-muted-foreground hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                                  data-testid={`badge-service-${post.id}`}
                                >
                                  <Zap className="w-2.5 h-2.5 text-blue-500" />
                                  {cluster.serviceLabel}
                                </button>
                              </div>
                              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 leading-snug line-clamp-2 flex-1">{post.title}</h3>
                              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                              <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-border/50">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                                <span className="text-xs font-medium text-blue-600 flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </div>
          ) : (
            <motion.div
              key={activeCluster}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {featuredPost && (
                <Link href={`/${featuredPost.slug}`}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 cursor-pointer">
                    <Card className="overflow-hidden hover-elevate" data-testid="card-featured-post">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <img src={featuredPost.image} alt={featuredPost.imageAlt} className="w-full h-[200px] sm:h-[250px] lg:h-full object-cover" loading="lazy" />
                        <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge variant="secondary" className="self-start">{featuredPost.category}</Badge>
                            {CATEGORY_SERVICE_LINK[featuredPost.category] && (
                              <button
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/${CATEGORY_SERVICE_LINK[featuredPost.category].slug}`); }}
                                className="flex items-center gap-1 text-xs border border-border rounded-full px-2 py-0.5 text-muted-foreground hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                                data-testid="badge-service-featured"
                              >
                                <Zap className="w-2.5 h-2.5 text-blue-500" />
                                {CATEGORY_SERVICE_LINK[featuredPost.category].label}
                              </button>
                            )}
                          </div>
                          <h2 className="font-bold text-foreground mb-4 leading-tight" style={{ fontSize: "clamp(1.125rem, 3vw, 1.875rem)" }}>{featuredPost.title}</h2>
                          <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">{featuredPost.excerpt}</p>
                          <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-5">
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">Read Article <ArrowRight className="w-4 h-4" /></span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              )}
              {remainingPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post, i) => (
                    <Link key={post.id} href={`/${post.slug}`}>
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="h-full">
                        <Card className="overflow-hidden h-full flex flex-col hover-elevate cursor-pointer" data-testid={`card-blog-${post.id}`}>
                          <img src={post.image} alt={post.imageAlt} className="w-full h-48 object-cover" loading="lazy" />
                          <div className="p-4 sm:p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                              <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                              {CATEGORY_SERVICE_LINK[post.category] && (
                                <button
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/${CATEGORY_SERVICE_LINK[post.category].slug}`); }}
                                  className="flex items-center gap-1 text-xs border border-border rounded-full px-2 py-0.5 text-muted-foreground hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                                  data-testid={`badge-service-${post.id}`}
                                >
                                  <Zap className="w-2.5 h-2.5 text-blue-500" />
                                  {CATEGORY_SERVICE_LINK[post.category].label}
                                </button>
                              )}
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 leading-snug line-clamp-2 flex-1">{post.title}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-border/50">
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                              </div>
                              <span className="text-xs sm:text-sm font-medium text-blue-600 flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground" data-testid="empty-cluster">
                  <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No articles in this topic yet. Check back soon.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
              Ready to Apply These Strategies?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              Book a free strategy session and let our team build a custom AI revenue growth plan for your business.
            </p>
            <Link href="/book-demo">
              <Button variant="secondary" className="w-full sm:w-auto" data-testid="button-blog-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
