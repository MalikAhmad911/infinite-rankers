import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

function getBreadcrumbs(path: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  if (path === "/") return crumbs;

  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "services") {
    crumbs.push({ label: "Services", href: "/services" });
    if (segments[1]) {
      const name = segments[1].split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      crumbs.push({ label: name });
    }
  } else if (segments[0] === "blog") {
    crumbs.push({ label: "Blog", href: "/blog" });
    if (segments[1]) {
      const name = segments[1].split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      crumbs.push({ label: name.length > 50 ? name.substring(0, 50) + "..." : name });
    }
  } else if (segments[0] === "portfolio") {
    crumbs.push({ label: "Portfolio", href: "/portfolio" });
    if (segments[1]) {
      crumbs.push({ label: `Case Study #${segments[1]}` });
    }
  } else {
    const name = segments[0].split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    crumbs.push({ label: name });
  }

  return crumbs;
}

export default function Breadcrumbs() {
  const [location] = useLocation();

  if (location === "/") return null;

  const crumbs = getBreadcrumbs(location);

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-2" data-testid="breadcrumbs">
      <ol className="flex items-center gap-1 flex-wrap text-xs sm:text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map((crumb, i) => (
          <li
            key={i}
            className="flex items-center gap-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {i > 0 && <ChevronRight className="w-3 h-3 text-muted-foreground/50" />}
            {crumb.href ? (
              <Link href={crumb.href}>
                <span
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                  itemProp="item"
                  data-testid={`breadcrumb-${crumb.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {i === 0 && <Home className="w-3 h-3" />}
                  <span itemProp="name">{crumb.label}</span>
                </span>
              </Link>
            ) : (
              <span className="text-foreground font-medium" itemProp="name" data-testid={`breadcrumb-current`}>
                {crumb.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
