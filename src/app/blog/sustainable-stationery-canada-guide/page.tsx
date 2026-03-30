import type { Metadata } from "next";
import Link from "next/link";
import articleStyles from "../article.module.css";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  // ✅ Was 71 chars (Google truncates at ~60) — now 52 chars
  title: "Sustainable Stationery in Canada: The Complete Guide",
  description:
    "Rooted Canada's guide to sustainable stationery Canada: why eco-friendly, plantable paper goods are transforming how Canadians celebrate life's special moments.",
  alternates: {
    canonical:
      "https://www.rootedcanada.com/blog/sustainable-stationery-canada-guide",
  },
  openGraph: {
    title: "Sustainable Stationery in Canada: The Complete Guide | Rooted Canada",
    description:
      "Why eco-friendly, plantable stationery is transforming how Canadians celebrate — from weddings to birthdays — without the environmental cost.",
    url: "https://www.rootedcanada.com/blog/sustainable-stationery-canada-guide",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SustainableStationeryGuide() {
  return (
    <>
      <ArticleJsonLd
        title="Sustainable Stationery in Canada: The Complete Guide"
        description="Rooted Canada's guide to sustainable stationery Canada: why eco-friendly, plantable paper goods are transforming how Canadians celebrate life's special moments."
        url="https://www.rootedcanada.com/blog/sustainable-stationery-canada-guide"
        datePublished="2026-03-20"
        dateModified="2026-03-20"
      />
      <div className={articleStyles.articleContainer}>
        <div className={articleStyles.articleHero}>
          <Link href="/blog" className={articleStyles.backLink}>← All Articles</Link>
          <span className={articleStyles.articleTag}>Sustainability</span>
          <h1 className={articleStyles.articleTitle}>
            Sustainable Stationery in Canada: The Complete Guide
          </h1>
          <p className={articleStyles.articleMeta}>March 20, 2026 · 5 min read · Rooted Canada</p>
        </div>

        <article className={articleStyles.articleBody}>
          <p>
            Canadians send millions of greeting cards every year — and the vast
            majority of them end up in landfill within weeks. <strong>Sustainable
            stationery Canada</strong> is changing that. From eco-friendly wedding
            invitations to plantable birthday cards, a new wave of artisan paper
            goods is letting Canadians celebrate life&apos;s moments without the
            environmental guilt.
          </p>

          <h2>What Makes Stationery &ldquo;Sustainable&rdquo;?</h2>
          <p>
            True sustainable stationery goes beyond recycled paper. The gold
            standard is <strong>seed paper</strong> — handcrafted sheets embedded
            with wildflower, herb, or vegetable seeds. After you&apos;ve read the
            card, you plant it. Within weeks, a wildflower garden emerges where a
            piece of paper once existed. Zero waste. Net positive impact.
          </p>
          <p>
            At Rooted Canada, every card is made from seed paper sourced in
            partnership with artisan communities in India — supporting
            hearing and speech-impaired workers while delivering the most
            eco-friendly stationery available in Canada.
          </p>

          <h2>Why Sustainable Stationery Matters for Canada</h2>
          <p>
            Canada produces over 9 million tonnes of paper waste annually.
            Switching to plantable greeting cards and sustainable stationery
            is one of the simplest steps consumers can take. A single Rooted
            Canada seed paper card replaces a conventional card <em>and</em>{" "}
            actively adds biodiversity to a garden.
          </p>

          <h2>The Best Occasions for Eco-Friendly Stationery</h2>
          <ul>
            <li>
              <strong>Weddings:</strong> Seed paper wedding invitations are the
              most popular sustainable stationery choice in Canada — guests keep
              and plant them as a living memento.
            </li>
            <li>
              <strong>Birthdays:</strong> Plantable birthday cards double as a
              gardening gift. No wrapping paper needed.
            </li>
            <li>
              <strong>Holidays:</strong> Eco-friendly holiday cards replace the
              hundreds of conventional cards sent each Christmas season.
            </li>
            <li>
              <strong>Mother&apos;s Day:</strong> Seed paper Mother&apos;s Day
              cards grow into wildflowers — a gift that keeps blooming.
            </li>
          </ul>

          <h2>How to Choose the Right Sustainable Stationery in Canada</h2>
          <p>
            Look for stationery brands that are transparent about their supply
            chain, use genuine seed paper (not just recycled stock), and ship
            with minimal plastic packaging. Rooted Canada ships all orders in
            compostable or recyclable packaging, Canada-wide.
          </p>

          <div className={articleStyles.articleCta}>
            <h3>Shop Canada&apos;s Sustainable Seed Paper Cards</h3>
            <p>
              Every Rooted Canada card is eco-friendly stationery that plants
              into wildflowers. Handcrafted, Canada-wide shipping.
            </p>
            {/* ✅ SEO FIX: keyword-anchor internal links to category pages */}
            <p style={{ marginBottom: "16px", fontSize: "15px", lineHeight: "1.7" }}>
              Browse our{" "}
              <Link href="/category/wedding-cards">
                plantable seed paper wedding cards
              </Link>
              ,{" "}
              <Link href="/category/birthday">
                eco-friendly birthday cards
              </Link>
              ,{" "}
              <Link href="/category/holiday-cards">
                sustainable holiday cards
              </Link>
              , and{" "}
              <Link href="/category/mothers-day">
                seed paper Mother&apos;s Day cards
              </Link>{" "}
              — all shipped across Canada.
            </p>
            <Link href="/" className={articleStyles.ctaButton}>
              Explore All Collections →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
