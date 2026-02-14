import { Link } from "wouter";
import { COMPANY, NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  // Get top 2 services from each category for direct links
  const getTopServicesFromCategory = (categoryId: string, limit: number = 2) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.id === categoryId);
    return category ? category.services.slice(0, limit) : [];
  };

  // Map service names to slugs for the AI Solutions section
  const serviceSlugMap: Record<string, string> = {
    "AI Calling Agent": "ai-calling-agent",
    "AI Chatbot": "ai-chatbot",
    "AI Lead Qualification": "ai-lead-qualification",
    "CRM Automation": "crm-automation",
    "Google Ads Engine": "google-ads",
    "SEO Growth System": "seo-authority"
  };

  return (
    <footer className="bg-[#040810] text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IR</span>
              </div>
              <span className="font-bold text-lg">{COMPANY.name}</span>
            </div>
            <p className="text-sm opacity-70 mb-6 leading-relaxed">
              AI Revenue Growth Agency. We build automated systems that generate customers and revenue for businesses worldwide.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity" data-testid="link-footer-email">
                <Mail className="w-4 h-4 flex-shrink-0" /> {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity" data-testid="link-footer-phone">
                <Phone className="w-4 h-4 flex-shrink-0" /> {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> {COMPANY.address}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase()}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services with direct links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.flatMap((cat) =>
                getTopServicesFromCategory(cat.id, 2).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>
                      <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer" data-testid={`link-footer-service-${service.slug}`}>
                        {service.title}
                      </span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">
                  <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer" data-testid="link-footer-blog">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/book-demo">
                  <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer" data-testid="link-footer-resources-book-demo">
                    Book Demo
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer" data-testid="link-footer-resources-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm opacity-60 cursor-pointer hover:opacity-100 transition-opacity">Privacy Policy</span>
            <span className="text-sm opacity-60 cursor-pointer hover:opacity-100 transition-opacity">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
