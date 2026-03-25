import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { getSEOForRoute, injectSEO } from "./seo";

function isKnownFrontendRoute(urlPath: string): boolean {
  if (urlPath === "/admin/indexing") {
    return true;
  }
  return getSEOForRoute(urlPath) !== null;
}

function buildNotFoundHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 - Page Not Found | Infinite Rankers</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <body>
    <h1>404 - Page Not Found</h1>
    <p><a href="/">Return to home</a></p>
  </body>
</html>`;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, { index: false }));

  let render: ((url: string) => { html: string; status: number }) | null = null;
  const ssrPath = path.resolve(__dirname, "ssr", "entry-server.cjs");
  if (fs.existsSync(ssrPath)) {
    try {
      const ssrModule = require(ssrPath);
      render = ssrModule.render;
      console.log("SSR module loaded successfully");
    } catch (e) {
      console.warn("SSR module failed to load, falling back to CSR:", e);
    }
  }

  const indexPath = path.resolve(distPath, "index.html");
  const template = fs.readFileSync(indexPath, "utf-8");

  app.use("/{*path}", (req, res) => {
    // Enforce one canonical URL style by removing trailing slashes (except root).
    if (req.path.length > 1 && req.path.endsWith("/")) {
      const normalizedPath = req.path.replace(/\/+$/, "");
      const redirectTo = req.url.replace(req.path, normalizedPath);
      return res.redirect(301, redirectTo || normalizedPath);
    }

    let html = template;
    let statusCode = 200;
    const urlPath = req.path;
    const routeExists = isKnownFrontendRoute(urlPath);

    if (render) {
      try {
        const result = render(req.originalUrl);
        html = html.replace("<!--ssr-outlet-->", result.html);
        statusCode = result.status ?? 200;
      } catch (e) {
        console.error("SSR render error for", req.originalUrl, e);
        if (!routeExists) {
          statusCode = 404;
          html = buildNotFoundHTML();
        }
      }
    } else if (!routeExists) {
      // If SSR is unavailable, prevent unknown routes from returning a 200 soft-404.
      statusCode = 404;
      html = buildNotFoundHTML();
    }

    if (statusCode === 200 && !routeExists) {
      statusCode = 404;
      html = buildNotFoundHTML();
    }

    if (statusCode === 200) {
      html = injectSEO(html, req.originalUrl);
    }
    (res as any).__seoInjected = true;
    res.status(statusCode).set({
      "Content-Type": "text/html",
      "Cache-Control": "no-cache",
    }).end(html);
  });
}
