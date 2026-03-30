// src/app/robots.ts
// Next.js App Router automatically serves this at /robots.txt
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://www.rootedcanada.com/sitemap.xml",
    host: "https://www.rootedcanada.com",
  };
}
