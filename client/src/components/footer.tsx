import { Link } from "wouter";
import { COMPANY } from "@/lib/constants";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GooglePartnerBadge } from "@/components/google-partner-badge";

const QUICK_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "All AI Systems" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const RESOURCES = [
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/book-demo", label: "Book Free Strategy Call" },
  { href: "/blog", label: "AI Automation Blog" },
  { href: "/pricing", label: "Transparent Pricing" },
  { href: "/content-methodology", label: "Content Methodology" },
  { href: "/sitemap", label: "Sitemap" },
];

const AI_SYSTEMS = [
  { slug: "ai-lead-capture", title: "AI Lead Capture" },
  { slug: "ai-appointment-agents", title: "AI Appointment Agents" },
  { slug: "crm-pipeline-automation", title: "CRM & Pipeline Automation" },
  { slug: "customer-support-ai", title: "Customer Support AI" },
  { slug: "reviews-reactivation-retention", title: "Reviews & Retention" },
  { slug: "custom-saas-tools", title: "Custom SaaS & Tools" },
  { slug: "revenue-automation-consulting", title: "Revenue Consulting" },
];

const INDUSTRIES = [
  { slug: "dental-ai", label: "Dental & Healthcare" },
  { slug: "hvac-ai", label: "HVAC & Home Services" },
  { slug: "law-firm-ai", label: "Law Firms" },
  { slug: "real-estate-ai", label: "Real Estate" },
  { slug: "medical-ai", label: "Medical Practices" },
  { slug: "ecommerce-ai", label: "E-Commerce" },
  { slug: "home-services-ai", label: "Home Services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 mb-10 sm:mb-12">

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <img src="/images/logo-icon-white.png" alt="Infinite Rankers" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
              <span className="font-bold text-sm sm:text-base text-white">{COMPANY.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed max-w-xs">
              AI Revenue Systems Agency. We design, build, and run the AI systems that capture every lead, automate follow-up, and close more sales — without adding headcount.
            </p>
            <div className="space-y-2 mb-5">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" aria-label={`Email us at ${COMPANY.email}`} data-testid="link-footer-email">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" /> {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" aria-label={`Call us at ${COMPANY.phone}`} data-testid="link-footer-phone">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" /> {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" /> {COMPANY.address}
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
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">Company</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">AI Systems</h4>
            <ul className="space-y-2">
              {AI_SYSTEMS.map((service) => (
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
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">Industries</h4>
            <ul className="space-y-2">
              {INDUSTRIES.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-industry-${item.slug}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">Resources</h4>
            <ul className="space-y-2">
              {RESOURCES.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-res-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-partner-site">
                  infiniterankers.com <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. AI Revenue Systems Agency.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors" data-testid="link-footer-terms">Terms of Service</Link>
            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-white transition-colors" data-testid="link-footer-sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
