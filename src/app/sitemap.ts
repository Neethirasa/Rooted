// src/app/sitemap.ts
// Next.js App Router automatically serves this at /sitemap.xml
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rootedcanada.com";

  const categories = [
    "wedding-cards",
    "holiday-cards",
    "birthday",
    "love",
    "mothers-day",
    "greeting-cards",
    "photo-cards",
    "help-section",
  ];

  const staticRoutes = [
    { url: `${baseUrl}/blog`, priority: 0.7 },
  ];

  const categoryRoutes = categories.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...categoryRoutes,
    ...staticRoutes.map((r) => ({
      url: r.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
  ];
}
