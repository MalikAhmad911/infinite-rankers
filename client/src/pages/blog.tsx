import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function Blog() {
  return (
    <div>
      <SEOHead
        title="Blog - Infinite Rankers | AI Automation & Growth Insights"
        description="Actionable strategies, AI automation insights, and growth frameworks to help your business scale faster."
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B1A] via-[#0D1B2A] to-background" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
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
              Actionable strategies, AI automation insights, and growth frameworks to help your business scale faster.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <GlassCard key={post.id} delay={i * 0.08} className="flex flex-col">
                <div className="h-40 rounded-md bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600/20 to-purple-600/20 bg-clip-text text-transparent">
                    IR
                  </span>
                </div>
                <Badge variant="secondary" className="self-start mb-3 text-xs">{post.category}</Badge>
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug flex-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-400 flex items-center gap-1 cursor-pointer">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </GlassCard>
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
              <Button className="bg-white text-blue-700 hover:bg-white/90 border-0" data-testid="button-blog-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
