import { Link } from "wouter";
import { COMPANY, NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/constants";
import { ALL_LANDING_PAGES } from "@/lib/landing-pages";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GooglePartnerBadge } from "@/components/google-partner-badge";

const LOCATION_PAGES = ALL_LANDING_PAGES.filter(p => p.type === "location");
const INDUSTRY_PAGES = ALL_LANDING_PAGES.filter(p => p.type === "industry");
const SERVICE_LP_PAGES = ALL_LANDING_PAGES.filter(p => p.type === "service");

export default function Footer() {
  const getTopServicesFromCategory = (categoryId: string, limit: number = 2) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.id === categoryId);
    return category ? category.services.slice(0, limit) : [];
  };

  return (
    <footer className="bg-[#0B1120] text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-4">
              <img src="/images/logo-icon-white.png" alt="Infinite Rankers" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
              <span className="font-bold text-sm sm:text-base lg:text-lg text-white">{COMPANY.name}</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              AI Revenue Growth Agency. We build automated systems that generate customers and revenue for businesses worldwide.
            </p>
            <div className="space-y-3 mb-6">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-email">
                <Mail className="w-4 h-4 flex-shrink-0" /> {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-phone">
                <Phone className="w-4 h-4 flex-shrink-0" /> {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> {COMPANY.address}
              </div>
            </div>
            <GooglePartnerBadge variant="footer" />
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase()}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.flatMap((cat) =>
                getTopServicesFromCategory(cat.id, 2).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>
                      <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-service-${service.slug}`}>
                        {service.title}
                      </span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">AI Solutions</h4>
            <ul className="space-y-2">
              {LOCATION_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-lp-${page.slug}`}>
                      AI in {page.hero.titleHighlight}
                    </span>
                  </Link>
                </li>
              ))}
              {INDUSTRY_PAGES.slice(0, 3).map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-lp-${page.slug}`}>
                      AI for {page.hero.titleHighlight}
                    </span>
                  </Link>
                </li>
              ))}
              {SERVICE_LP_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-lp-${page.slug}`}>
                      {page.hero.titleHighlight}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">
                  <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-blog">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/book-demo">
                  <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-resources-book-demo">
                    Book Demo
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-resources-contact">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-footer-resources-pricing">
                    Pricing
                  </span>
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold text-white mb-3 mt-6 text-sm sm:text-base">Partner Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-com-home">
                  infiniterankers.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://infiniterankers.com/services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-com-services">
                  Marketing Services <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://infiniterankers.com/blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors" data-testid="link-footer-com-blog">
                  Marketing Blog <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <span className="text-sm text-gray-500 cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-sm text-gray-500 cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
