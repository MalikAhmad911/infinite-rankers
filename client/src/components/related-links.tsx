import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SERVICE_CATEGORIES, BLOG_POSTS, CASE_STUDIES } from "@/lib/constants";

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(cat => cat.services);

interface RelatedLinksProps {
  currentPath: string;
  type: "service" | "blog" | "portfolio";
}

export default function RelatedLinks({ currentPath, type }: RelatedLinksProps) {
  const relatedServices = ALL_SERVICES.filter(s => `/services/${s.slug}` !== currentPath).slice(0, 6);
  const relatedBlogs = BLOG_POSTS.filter(b => `/blog/${b.slug}` !== currentPath).slice(0, 4);
  const relatedCases = CASE_STUDIES.filter(c => `/portfolio/${c.id}` !== currentPath).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border/50" data-testid="related-links">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {type !== "service" && (
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Explore Our Services</h3>
            <ul className="space-y-2">
              {relatedServices.slice(0, 6).map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1" data-testid={`related-service-${s.slug}`}>
                      <ArrowRight className="w-3 h-3 text-blue-500" /> {s.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services">
              <span className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-block cursor-pointer">View All 30+ Services</span>
            </Link>
          </div>
        )}

        {type === "service" && (
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Related Services</h3>
            <ul className="space-y-2">
              {relatedServices.slice(0, 8).map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1" data-testid={`related-service-${s.slug}`}>
                      <ArrowRight className="w-3 h-3 text-blue-500" /> {s.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="font-semibold text-foreground mb-3 text-sm">Latest Blog Posts</h3>
          <ul className="space-y-2">
            {relatedBlogs.map(b => (
              <li key={b.slug}>
                <Link href={`/blog/${b.slug}`}>
                  <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1 line-clamp-1" data-testid={`related-blog-${b.slug}`}>
                    <ArrowRight className="w-3 h-3 text-purple-500" /> {b.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog">
            <span className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-block cursor-pointer">Read All Articles</span>
          </Link>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-3 text-sm">Success Stories</h3>
          <ul className="space-y-2">
            {relatedCases.map(c => (
              <li key={c.id}>
                <Link href={`/portfolio/${c.id}`}>
                  <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1 line-clamp-1" data-testid={`related-case-${c.id}`}>
                    <ArrowRight className="w-3 h-3 text-cyan-500" /> {c.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/portfolio">
            <span className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-block cursor-pointer">View All Case Studies</span>
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
        <Link href="/">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Home</span>
        </Link>
        <Link href="/pricing">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Pricing</span>
        </Link>
        <Link href="/about">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">About Us</span>
        </Link>
        <Link href="/contact">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Contact</span>
        </Link>
        <Link href="/book-demo">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">Book a Demo</span>
        </Link>
      </div>
    </section>
  );
}
