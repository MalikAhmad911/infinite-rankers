import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_PILLARS, COMPANY, INDUSTRY_VERTICALS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Who We Serve", href: "/services", hasIndustryMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [industryMenuOpen, setIndustryMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  const [location] = useLocation();
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industryMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
    setIndustryMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustryOpen(false);
    setMobileExpandedCategory(null);
  }, [location]);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout.current) {
      clearTimeout(megaMenuTimeout.current);
      megaMenuTimeout.current = null;
    }
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const closeMegaMenu = () => {
    setMegaMenuOpen(false);
  };

  const handleIndustryMenuEnter = () => {
    if (industryMenuTimeout.current) {
      clearTimeout(industryMenuTimeout.current);
      industryMenuTimeout.current = null;
    }
    setIndustryMenuOpen(true);
  };

  const handleIndustryMenuLeave = () => {
    industryMenuTimeout.current = setTimeout(() => {
      setIndustryMenuOpen(false);
    }, 150);
  };

  const closeIndustryMenu = () => {
    setIndustryMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
            : "bg-white/60 backdrop-blur-md"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
            <Link href="/" data-testid="link-home-logo">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <img src="/images/logo-icon.png" alt="Infinite Rankers" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
                <span className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">
                  {COMPANY.name}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.hasMegaMenu ? (
                  <div
                    key={`mega-${link.href}`}
                    className="relative"
                    onMouseEnter={handleMegaMenuEnter}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        location.startsWith("/services")
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setMegaMenuOpen((prev) => !prev)}
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="true"
                      data-testid="link-nav-services"
                    >
                      {link.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : link.hasIndustryMenu ? (
                  <div
                    key={`industry-${link.label}`}
                    className="relative"
                    onMouseEnter={handleIndustryMenuEnter}
                    onMouseLeave={handleIndustryMenuLeave}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        INDUSTRY_VERTICALS.some(v => location === `/${v.slug}`)
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setIndustryMenuOpen((prev) => !prev)}
                      aria-expanded={industryMenuOpen}
                      aria-haspopup="true"
                      data-testid="link-nav-who-we-serve"
                    >
                      {link.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          industryMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        location === link.href
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link href="/book-demo">
                <Button
                  className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0"
                  data-testid="button-book-demo-nav"
                >
                  Book Demo
                </Button>
              </Link>
              <Button
                size="icon"
                variant="ghost"
                className="lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                data-testid="button-mobile-menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-0 right-0 z-40 hidden lg:block"
            style={{ top: "5rem" }}
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
            data-testid="mega-menu"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/95 backdrop-blur-xl border border-gray-200/80 rounded-lg p-6 shadow-xl shadow-gray-200/40">
                <div className="mb-4">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">AI Revenue Systems — 7 Core Service Pillars</p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {SERVICE_PILLARS.map((pillar) => (
                    <Link
                      key={pillar.id}
                      href={`/${pillar.slug}`}
                      onClick={closeMegaMenu}
                    >
                      <div
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50/60 transition-colors cursor-pointer"
                        data-testid={`link-mega-${pillar.slug}`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                            {pillar.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-1">
                            {pillar.tagline}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200/60">
                  <Link href="/services" onClick={closeMegaMenu}>
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer" data-testid="link-mega-view-all">
                      Explore All 7 AI Revenue Systems →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {industryMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-0 right-0 z-40 hidden lg:block"
            style={{ top: "5rem" }}
            onMouseEnter={handleIndustryMenuEnter}
            onMouseLeave={handleIndustryMenuLeave}
            data-testid="industry-menu"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/95 backdrop-blur-xl border border-gray-200/80 rounded-lg p-6 shadow-xl shadow-gray-200/40">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">Industries We Serve</p>
                <div className="grid grid-cols-3 gap-4">
                  {INDUSTRY_VERTICALS.map((vertical) => (
                    <Link key={vertical.slug} href={`/${vertical.slug}`} onClick={closeIndustryMenu}>
                      <div className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${vertical.accentFrom} ${vertical.accentTo} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className="text-white text-xs font-bold">{vertical.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{vertical.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{vertical.tagline}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) =>
                link.hasMegaMenu ? (
                  <div key={`mobile-mega-${link.href}`}>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        location.startsWith("/services")
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600"
                      }`}
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      aria-expanded={mobileServicesOpen}
                      data-testid="link-mobile-services"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-0.5">
                            {SERVICE_PILLARS.map((pillar) => (
                              <Link key={pillar.id} href={`/${pillar.slug}`}>
                                <span
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50/60 rounded-md transition-colors cursor-pointer font-medium"
                                  data-testid={`link-mobile-service-${pillar.slug}`}
                                >
                                  {pillar.title}
                                </span>
                              </Link>
                            ))}
                            <Link href="/services">
                              <span className="block px-3 py-2 text-sm font-semibold text-blue-600 mt-1">
                                Explore All 7 AI Systems →
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.hasIndustryMenu ? (
                  <div key={`mobile-industry-${link.label}`}>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-3 rounded-md text-sm font-medium transition-colors text-gray-600"
                      onClick={() => setMobileIndustryOpen((prev) => !prev)}
                      aria-expanded={mobileIndustryOpen}
                      data-testid="link-mobile-who-we-serve"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileIndustryOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileIndustryOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-0.5">
                            {INDUSTRY_VERTICALS.map((vertical) => (
                              <Link key={vertical.slug} href={`/${vertical.slug}`}>
                                <span className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" data-testid={`link-mobile-industry-${vertical.slug}`}>
                                  {vertical.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={`mobile-link-${link.href}-${link.label}`} href={link.href}>
                    <span
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        location === link.href
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600"
                      }`}
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                )
              )}
              <Link href="/book-demo">
                <Button
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0"
                  data-testid="button-book-demo-mobile"
                >
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
