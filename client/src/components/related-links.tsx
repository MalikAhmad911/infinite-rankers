import { Link } from "wouter";
import { ArrowRight, BookOpen, Briefcase, Layers } from "lucide-react";
import { SERVICE_CATEGORIES, BLOG_POSTS, CASE_STUDIES } from "@/lib/constants";

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(cat => cat.services);

interface RelatedLinksProps {
  currentPath: string;
  type: "service" | "blog" | "portfolio" | "page";
}

export default function RelatedLinks({ currentPath, type }: RelatedLinksProps) {
  const relatedServices = ALL_SERVICES.filter(s => `/${s.slug}` !== currentPath).slice(0, 6);
  const relatedBlogs = BLOG_POSTS.filter(b => `/${b.slug}` !== currentPath).slice(0, 4);
  const relatedCases = CASE_STUDIES.filter(c => `/${c.id}` !== currentPath).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" data-testid="related-links">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Explore More</h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto">Discover our services, insights, and success stories to help grow your business.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-foreground text-base">
              {type === "service" ? "Related Services" : "Our Services"}
            </h3>
          </div>
          <ul className="space-y-1.5 mb-4">
            {relatedServices.map(s => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-blue-100/60 transition-colors"
                  data-testid={`related-service-${s.slug}`}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All 30+ Services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-foreground text-base">Latest Blog Posts</h3>
          </div>
          <ul className="space-y-1.5 mb-4">
            {relatedBlogs.map(b => (
              <li key={b.slug}>
                <Link
                  href={`/${b.slug}`}
                  className="group flex items-start gap-2 py-1.5 px-2 rounded-lg hover:bg-purple-100/60 transition-colors"
                  data-testid={`related-blog-${b.slug}`}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-purple-500 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors line-clamp-2">{b.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
          >
            Read All Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100 rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-foreground text-base">Success Stories</h3>
          </div>
          <ul className="space-y-1.5 mb-4">
            {relatedCases.map(c => (
              <li key={c.id}>
                <Link
                  href={`/${c.id}`}
                  className="group flex items-start gap-2 py-1.5 px-2 rounded-lg hover:bg-cyan-100/60 transition-colors"
                  data-testid={`related-case-${c.id}`}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-cyan-700 transition-colors line-clamp-2">{c.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-800 transition-colors"
          >
            View All Case Studies <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2 items-center justify-center">
        {[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
          { href: "/book-demo", label: "Book a Demo" },
          { href: "/sitemap", label: "Sitemap" },
        ].map(link => (
          <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
