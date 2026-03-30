import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Eco-Friendly Stationery Blog — Sustainable Paper Goods Canada",
  description:
    "Rooted Canada's blog: guides on sustainable stationery Canada, artisan paper goods, eco-friendly wedding invitations, and how to plant your seed paper cards.",
  alternates: {
    canonical: "https://www.rootedcanada.com/blog",
  },
  openGraph: {
    title: "Eco-Friendly Stationery Blog | Rooted Canada",
    description:
      "Guides on sustainable stationery, artisan paper goods, and eco-friendly seed paper cards. Canada's plantable greeting card experts.",
    url: "https://www.rootedcanada.com/blog",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const posts = [
  {
    slug: "sustainable-stationery-canada-guide",
    title: "The Complete Guide to Sustainable Stationery in Canada",
    excerpt:
      "Discover why eco-friendly, plantable stationery is transforming how Canadians celebrate life's moments — from weddings to birthdays — without the environmental cost.",
    date: "March 20, 2026",
    readTime: "5 min read",
    tag: "Sustainability",
  },
  {
    slug: "what-are-artisan-paper-goods",
    title: "What Are Artisan Paper Goods? The Rooted Canada Story",
    excerpt:
      "Artisan paper goods are more than beautiful stationery — they carry stories. Learn how Rooted Canada's handcrafted seed paper cards support artisans and the planet.",
    date: "March 14, 2026",
    readTime: "4 min read",
    tag: "Artisan Craft",
  },
  {
    slug: "how-to-plant-seed-paper-cards",
    title: "How to Plant Your Seed Paper Card: A Complete Growing Guide",
    excerpt:
      "Step-by-step guide to planting your Rooted Canada seed paper card. Learn the best soil, sunlight, and watering tips to grow a beautiful wildflower garden from a greeting card.",
    date: "March 8, 2026",
    readTime: "6 min read",
    tag: "Planting Guide",
  },
];

export default function BlogPage() {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHero}>
        <span className={styles.blogBadge}>🌱 Rooted Canada</span>
        <h1 className={styles.blogTitle}>
          Sustainable Stationery & <em>Eco-Friendly</em> Living
        </h1>
        <p className={styles.blogSubtitle}>
          Guides, stories, and tips on sustainable stationery Canada, artisan
          paper goods, and plantable greeting cards.
        </p>
      </div>

      <main className={styles.postsGrid}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span className={styles.postTag}>{post.tag}</span>
              <span className={styles.postDate}>{post.date}</span>
            </div>
            <h2 className={styles.postTitle}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <div className={styles.postFooter}>
              <span className={styles.readTime}>⏱ {post.readTime}</span>
              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                Read Article →
              </Link>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
