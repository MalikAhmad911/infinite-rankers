import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import { useSSRStatus } from "@/lib/ssr-status";
import {
  ArrowRight, Home, Briefcase, BarChart3, Phone, Search,
  Bot, Target, Globe, BookOpen, AlertTriangle,
} from "lucide-react";

const TOP_SERVICES = [
  { href: "/ai-calling-agent", label: "AI Calling Agent", icon: Bot },
  { href: "/google-ads", label: "Google Ads Revenue Engine", icon: Target },
  { href: "/seo-authority", label: "SEO Authority Growth System", icon: Search },
  { href: "/ai-chatbot", label: "AI Chatbot", icon: Globe },
  { href: "/crm-automation", label: "CRM Automation", icon: Briefcase },
];

export default function NotFound() {
  const ssrStatus = useSSRStatus();
  if (ssrStatus) {
    ssrStatus.set(404);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-white px-4 py-20">
      <SEOHead
        title="Page Not Found - Infinite Rankers"
        description="The page you are looking for does not exist. Browse our AI Revenue Growth services, portfolio, or contact us."
      />

      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <AlertTriangle className="w-8 h-8 text-blue-500" />
        </div>

        <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase">
          404 — Page Not Found
        </Badge>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
          This page doesn't exist
        </h1>
        <p className="text-base text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          It may have moved, been renamed, or the URL might be incorrect. Here are some helpful starting points.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          <Link href="/">
            <Button className="w-full sm:w-auto" data-testid="button-404-home">
              <Home className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" className="w-full sm:w-auto" data-testid="button-404-portfolio">
              <BarChart3 className="w-4 h-4 mr-2" /> View Case Studies
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto" data-testid="button-404-contact">
              <Phone className="w-4 h-4 mr-2" /> Contact Us
            </Button>
          </Link>
        </div>

        <div className="border border-border/60 rounded-xl p-6 bg-white/70 text-left">
          <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Popular Services
          </h2>
          <ul className="space-y-2.5">
            {TOP_SERVICES.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link href={href}>
                  <span
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer group"
                    data-testid={`link-404-service-${href.replace("/", "")}`}
                  >
                    <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors shrink-0" />
                    {label}
                    <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-border/40">
              <Link href="/services">
                <span className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer" data-testid="link-404-all-services">
                  View All Services <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
