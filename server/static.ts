import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectSEO } from "./seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, { index: false }));

  let render: ((url: string) => string) | null = null;
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
    let html = template;

    if (render) {
      try {
        const appHtml = render(req.originalUrl);
        html = html.replace("<!--ssr-outlet-->", appHtml);
      } catch (e) {
        console.error("SSR render error for", req.originalUrl, e);
      }
    }

    html = injectSEO(html, req.originalUrl);
    (res as any).__seoInjected = true;
    res.status(200).set({
      "Content-Type": "text/html",
      "Cache-Control": "no-cache",
    }).end(html);
  });
}
