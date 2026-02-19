import { Link } from "wouter";
import { COMPANY } from "@/lib/constants";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GooglePartnerBadge } from "@/components/google-partner-badge";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Sitemap" },
];

const RESOURCES = [
  { href: "/blog", label: "Blog" },
  { href: "/book-demo", label: "Book Demo" },
  { href: "/contact", label: "Contact" },
];

const KEY_SERVICES = [
  { slug: "ai-calling-agent", title: "AI Calling Agent" },
  { slug: "ai-receptionist", title: "AI Receptionist" },
  { slug: "google-ads", title: "Google Ads Revenue Engine" },
  { slug: "meta-ads", title: "Meta Ads Growth Engine" },
  { slug: "social-media-marketing", title: "Social Media Marketing" },
  { slug: "instagram-growth", title: "Instagram Growth & Posting" },
  { slug: "website-development", title: "Website Development" },
  { slug: "landing-page-development", title: "Landing Page Development" },
];

const PARTNER_LINKS = [
  { href: "/infinite-rankers-agency", label: "About Us", external: false },
  { href: "/infinite-rankers-seo-services", label: "SEO Services", external: false },
  { href: "/infinite-rankers-paid-advertising", label: "Paid Ads", external: false },
  { href: "/infinite-rankers-ai-automation", label: "AI Automation", external: false },
  { href: "https://infiniterankers.com", label: "infiniterankers.com", external: true },
  { href: "https://infiniterankers.com/blog", label: "Marketing Blog", external: true },
  { href: "https://infiniterankers.com/resources", label: "Content Hub", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <img src="/images/logo-icon-white.png" alt="Infinite Rankers" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
              <span className="font-bold text-sm sm:text-base text-white">{COMPANY.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed max-w-xs">
              AI Revenue Growth Agency. Automated systems that generate customers and revenue for businesses worldwide.
            </p>
            <div className="space-y-2 mb-5">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-email">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" /> {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-phone">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" /> {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" /> {COMPANY.address}
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 mb-4">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-400 font-medium whitespace-nowrap">24/7 Support — Weekends too</span>
            </div>
            <GooglePartnerBadge variant="footer" />
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase()}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Resources</h4>
            <ul className="space-y-1.5">
              {RESOURCES.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-res-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Services</h4>
            <ul className="space-y-1.5">
              {KEY_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-service-${service.slug}`}>
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Partner Platform</h4>
            <ul className="space-y-1.5">
              {PARTNER_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" data-testid={`link-footer-partner-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-partner-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors" data-testid="link-footer-terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
