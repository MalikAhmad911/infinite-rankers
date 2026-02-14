import { Link } from "wouter";
import { COMPANY, NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/constants";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GooglePartnerBadge } from "@/components/google-partner-badge";

export default function Footer() {
  const topServices = SERVICE_CATEGORIES.flatMap(cat => cat.services.slice(0, 2));

  return (
    <footer className="bg-[#0B1120] text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
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
            <GooglePartnerBadge variant="footer" />
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase()}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-2 mt-5 text-sm">Resources</h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/blog">
                  <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-blog">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/book-demo">
                  <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-resources-book-demo">Book Demo</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-resources-contact">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Services</h4>
            <ul className="space-y-1.5">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-service-${service.slug}`}>
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-white mb-3 text-sm">Partner Platform</h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/infinite-rankers-agency">
                  <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-ir-agency">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/infinite-rankers-seo-services">
                  <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-ir-seo">SEO Services</span>
                </Link>
              </li>
              <li>
                <Link href="/infinite-rankers-paid-advertising">
                  <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-ir-ads">Paid Ads</span>
                </Link>
              </li>
              <li>
                <Link href="/infinite-rankers-ai-automation">
                  <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-ir-automation">AI Automation</span>
                </Link>
              </li>
              <li>
                <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-com-home">
                  infiniterankers.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
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
