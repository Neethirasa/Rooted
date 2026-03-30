// src/app/sitemap.ts
// Next.js App Router automatically serves this at /sitemap.xml
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rootedcanada.com";

  const categories = [
    { slug: "wedding-cards",  lastMod: "2026-03-20", priority: 0.9 },
    { slug: "holiday-cards",  lastMod: "2026-03-15", priority: 0.8 },
    { slug: "birthday",       lastMod: "2026-03-15", priority: 0.8 },
    { slug: "love",           lastMod: "2026-03-10", priority: 0.8 },
    { slug: "mothers-day",    lastMod: "2026-03-10", priority: 0.8 },
    { slug: "greeting-cards", lastMod: "2026-03-10", priority: 0.8 },
    { slug: "photo-cards",    lastMod: "2026-03-10", priority: 0.8 },
    { slug: "help-section",   lastMod: "2026-03-01", priority: 0.6 },
  ];

  // Blog posts — add new slugs here only when their pages are published.
  const blogPosts = [
    { slug: "how-to-plant-seed-paper-cards",       lastMod: "2026-03-08", priority: 0.8 },
    { slug: "sustainable-stationery-canada-guide",  lastMod: "2026-03-20", priority: 0.9 },
    { slug: "what-are-artisan-paper-goods",         lastMod: "2026-03-14", priority: 0.8 },
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...categories.map(({ slug, lastMod, priority }) => ({
      url: `${baseUrl}/category/${slug}`,
      lastModified: new Date(lastMod),
      changeFrequency: "weekly" as const,
      priority,
    })),
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...blogPosts.map(({ slug, lastMod, priority }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(lastMod),
      changeFrequency: "monthly" as const,
      priority,
    })),
  ];
}
