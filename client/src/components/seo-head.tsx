import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonical?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  keywords,
  canonical 
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Standard meta tags
    setMeta("description", description);
    if (keywords) {
      setMeta("keywords", keywords);
    }

    // Open Graph tags
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Infinite Rankers", true);
    setMeta("og:url", canonical || window.location.href, true);

    // Twitter Card tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);

    // Canonical URL
    if (canonical) {
      setLink("canonical", canonical);
    }
  }, [title, description, ogTitle, ogDescription, keywords, canonical]);

  return null;
}
