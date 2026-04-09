import { Link } from "wouter";
import { COMPANY } from "@/lib/constants";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SiLinkedin, SiFacebook } from "react-icons/si";
import { GooglePartnerBadge } from "@/components/google-partner-badge";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#ffd879" />
          <stop offset="20%" stopColor="#f9a849" />
          <stop offset="40%" stopColor="#f2683c" />
          <stop offset="60%" stopColor="#e94080" />
          <stop offset="80%" stopColor="#a044bf" />
          <stop offset="100%" stopColor="#4168c9" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
}

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "All AI Systems" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
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
];

const RESOURCES = [
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/book-demo", label: "Book Free Strategy Call" },
  { href: "/blog", label: "AI Automation Blog" },
  { href: "/contact", label: "Get a Custom Quote" },
  { href: "/content-methodology", label: "Content Methodology" },
  { href: "/google-partner", label: "Google Partner" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/infinite-rankers",
    label: "LinkedIn",
    icon: SiLinkedin,
    color: "#0A66C2",
    bg: "hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40",
  },
  {
    href: "https://web.facebook.com/profile.php?id=61587996643238",
    label: "Facebook",
    icon: SiFacebook,
    color: "#1877F2",
    bg: "hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40",
  },
  {
    href: "https://www.instagram.com/infiniterankers",
    label: "Instagram",
    icon: null,
    color: null,
    bg: "hover:bg-pink-600/20 hover:border-pink-500/40",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080E1C] text-gray-300" data-testid="footer">

      <div className="border-t border-white/5 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg sm:text-xl mb-1">Ready to grow your revenue with AI?</p>
            <p className="text-sm text-gray-400">Book a free 30-min strategy call — no pitch, just a custom growth plan.</p>
          </div>
          <Link href="/book-demo">
            <span className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5" data-testid="button-footer-cta">
              Book Free Strategy Call <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo-icon-white.png" alt="Infinite Rankers" className="w-8 h-8 object-contain" />
              <span className="font-bold text-base text-white">{COMPANY.name}</span>
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed max-w-xs">
              AI Revenue Systems Agency. We design, build, and run the AI systems that capture every lead, automate follow-up, and close more sales — without adding headcount.
            </p>

            <div className="space-y-2.5 mb-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
                aria-label={`Email us at ${COMPANY.email}`}
                data-testid="link-footer-email"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                </span>
                {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
                aria-label={`Call us at ${COMPANY.phone}`}
                data-testid="link-footer-phone"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 group-hover:bg-blue-600/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                </span>
                {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" />
                </span>
                {COMPANY.address}
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 mb-5">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">24/7 Support — Weekends too</span>
            </div>

            <div className="flex items-center gap-2 mb-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-testid={`link-footer-social-${s.label.toLowerCase()}`}
                  className={`flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/8 transition-all duration-200 ${s.bg}`}
                >
                  {s.icon ? (
                    <s.icon className="w-4 h-4" style={{ color: s.color ?? undefined }} />
                  ) : (
                    <InstagramIcon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>

            <GooglePartnerBadge variant="footer" />
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-blue-500 inline-block"></span>
              Company
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 inline-block transition-transform duration-150"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-violet-500 inline-block"></span>
              AI Systems
            </h4>
            <ul className="space-y-2.5">
              {AI_SYSTEMS.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`}>
                    <span
                      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 inline-block transition-transform duration-150"
                      data-testid={`link-footer-service-${service.slug}`}
                    >
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-emerald-500 inline-block"></span>
              Industries
            </h4>
            <ul className="space-y-2.5">
              {INDUSTRIES.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`}>
                    <span
                      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 inline-block transition-transform duration-150"
                      data-testid={`link-footer-industry-${item.slug}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-amber-500 inline-block"></span>
              Resources
            </h4>
            <ul className="space-y-2.5">
              {RESOURCES.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 inline-block transition-transform duration-150"
                      data-testid={`link-footer-res-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Florida LLC · AI Revenue Systems Agency.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" data-testid="link-footer-terms">Terms of Service</Link>
            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" data-testid="link-footer-sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
