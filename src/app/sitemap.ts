// src/app/sitemap.ts
// Next.js App Router automatically serves this at /sitemap.xml
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rootedcanada.com";
  const now = new Date();

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

  // Blog posts — all three pages are live with full content.
  // Uncomment new slugs only when their pages are published.
  const publishedBlogPosts: string[] = [
    "how-to-plant-seed-paper-cards",        // live ✅
    "sustainable-stationery-canada-guide",   // live ✅
    "what-are-artisan-paper-goods",          // live ✅
  ];


  const categoryRoutes = categories.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: slug === "wedding-cards" ? 0.9 : 0.8,
  }));

  const blogPostRoutes = publishedBlogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...categoryRoutes,
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...blogPostRoutes,
  ];
}


