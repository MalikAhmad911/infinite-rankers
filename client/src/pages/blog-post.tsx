import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2 } from "lucide-react";

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

      <article className="pb-16 lg:pb-24">
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
                    <h2
                      key={i}
                      className="text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4"
                    >
                      {section.text}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p
                      key={i}
                      className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5"
                    >
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
                    <blockquote
                      key={i}
                      className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50/50 rounded-r-md"
                    >
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
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <div className="font-semibold text-foreground" data-testid="text-author">{post.author}</div>
                <div className="text-sm text-muted-foreground">{post.authorRole}</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`}>
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
