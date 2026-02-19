import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import { BLOG_POSTS_FULL } from "@/lib/blog-data";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function Blog() {
  return (
    <div>
      <SEOHead
        title="Blog - Infinite Rankers | AI Automation & Revenue Growth Insights"
        description="Expert insights on AI automation, lead generation, SEO, and digital marketing strategies. Actionable frameworks to help your business grow revenue faster."
        keywords="AI automation blog, digital marketing insights, lead generation strategies, SEO tips, business growth blog, marketing automation"
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Insights for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Revenue Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert strategies, AI automation insights, and proven growth frameworks to help your business scale faster and smarter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {BLOG_POSTS_FULL.length > 0 && (
            <Link href={`/${BLOG_POSTS_FULL[0].slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 cursor-pointer"
              >
                <Card className="overflow-hidden hover-elevate" data-testid="card-featured-post">
                  <div className="grid lg:grid-cols-2">
                    <img
                      src={BLOG_POSTS_FULL[0].image}
                      alt={BLOG_POSTS_FULL[0].imageAlt}
                      className="w-full h-[250px] lg:h-full object-cover"
                    />
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <Badge variant="secondary" className="self-start mb-3">{BLOG_POSTS_FULL[0].category}</Badge>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                        {BLOG_POSTS_FULL[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        {BLOG_POSTS_FULL[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" /> {BLOG_POSTS_FULL[0].date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" /> {BLOG_POSTS_FULL[0].readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Link>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS_FULL.slice(1).map((post, i) => (
              <Link key={post.id} href={`/${post.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full flex flex-col hover-elevate cursor-pointer" data-testid={`card-blog-${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5 flex flex-col flex-1">
                      <Badge variant="secondary" className="self-start mb-3 text-xs">{post.category}</Badge>
                      <h3 className="text-base font-semibold text-foreground mb-2 leading-snug line-clamp-2 flex-1">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-blue-600 flex items-center gap-1">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Apply These Strategies?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free strategy session and let our team build a custom AI revenue growth plan for your business.
            </p>
            <Link href="/book-demo">
              <Button variant="secondary" data-testid="button-blog-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
