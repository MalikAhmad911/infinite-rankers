import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_CATEGORIES, COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  const [location] = useLocation();
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
    setMobileServicesOpen(false);
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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
            : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
            <Link href="/" data-testid="link-home-logo">
              <div className="flex items-center gap-2 flex-shrink-0">
                <img src="/images/logo-icon.png" alt="Infinite Rankers" className="w-8 h-8 rounded-md object-contain" />
                <span className="font-bold text-lg text-gray-900 hidden sm:block">
                  {COMPANY.name}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.hasMegaMenu ? (
                  <div
                    key={link.href}
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
                      data-testid="link-nav-services"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180" : ""
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
                      data-testid={`link-nav-${link.label.toLowerCase()}`}
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
                data-testid="button-mobile-menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

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
                <div className="grid grid-cols-4 gap-6">
                  {SERVICE_CATEGORIES.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                        {category.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {category.services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={closeMegaMenu}
                            >
                              <span
                                className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer block py-0.5"
                                data-testid={`link-mega-${service.slug}`}
                              >
                                {service.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60">
                  <Link href="/services" onClick={closeMegaMenu}>
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer" data-testid="link-mega-view-all">
                      View All Services →
                    </span>
                  </Link>
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
                  <div key={link.href}>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        location.startsWith("/services")
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600"
                      }`}
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
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
                          <div className="pl-4 py-2 space-y-2">
                            {SERVICE_CATEGORIES.map((category) => (
                              <div key={category.id}>
                                <button
                                  type="button"
                                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-blue-600 uppercase tracking-wider"
                                  onClick={() =>
                                    setMobileExpandedCategory((prev) =>
                                      prev === category.id ? null : category.id
                                    )
                                  }
                                  data-testid={`button-mobile-category-${category.id}`}
                                >
                                  <span>{category.title}</span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      mobileExpandedCategory === category.id
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {mobileExpandedCategory === category.id && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.15 }}
                                      className="overflow-hidden"
                                    >
                                      <ul className="pl-3 py-1 space-y-0.5">
                                        {category.services.map((service) => (
                                          <li key={service.slug}>
                                            <Link
                                              href={`/services/${service.slug}`}
                                            >
                                              <span
                                                className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                                                data-testid={`link-mobile-service-${service.slug}`}
                                              >
                                                {service.title}
                                              </span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                            <Link href="/services">
                              <span className="block px-3 py-2 text-sm font-medium text-blue-600">
                                View All Services →
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        location === link.href
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600"
                      }`}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
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
