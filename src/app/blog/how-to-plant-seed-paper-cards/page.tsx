import type { Metadata } from "next";
import Link from "next/link";
import articleStyles from "../article.module.css";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "How to Plant Your Seed Paper Card: A Complete Growing Guide",
  description:
    "Step-by-step guide to planting your Rooted Canada seed paper card. Best soil, sunlight tips, and watering guide to grow wildflowers from a plantable greeting card.",
  alternates: {
    canonical: "https://www.rootedcanada.com/blog/how-to-plant-seed-paper-cards",
  },
  openGraph: {
    title: "How to Plant Your Seed Paper Card: A Complete Growing Guide | Rooted Canada",
    description:
      "Learn the best tips for planting your Rooted Canada seed paper card and growing a wildflower garden from your eco-friendly greeting card.",
    url: "https://www.rootedcanada.com/blog/how-to-plant-seed-paper-cards",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PlantingGuideArticle() {
  return (
    <>
      <ArticleJsonLd
        title="How to Plant Your Seed Paper Card: A Complete Growing Guide"
        description="Step-by-step guide to planting your Rooted Canada seed paper card and growing a wildflower garden from your eco-friendly greeting card."
        url="https://www.rootedcanada.com/blog/how-to-plant-seed-paper-cards"
        datePublished="2026-03-08"
        dateModified="2026-03-08"
      />
      <div className={articleStyles.articleContainer}>
        <div className={articleStyles.articleHero}>
        <Link href="/blog" className={articleStyles.backLink}>← All Articles</Link>
        <span className={articleStyles.articleTag}>Planting Guide</span>
        <h1 className={articleStyles.articleTitle}>
          How to Plant Your Seed Paper Card: A Complete Growing Guide
        </h1>
        <p className={articleStyles.articleMeta}>March 8, 2026 · 6 min read · Rooted Canada</p>
      </div>

      <article className={articleStyles.articleBody}>
        <p>
          Your Rooted Canada <strong>seed paper card</strong> is one of the
          most satisfying eco-friendly objects you&apos;ll ever own — because
          unlike any other card, this one grows. Here&apos;s everything you
          need to know to successfully plant your seed paper card and grow a
          beautiful wildflower garden from it.
        </p>

        <h2>What You&apos;ll Need</h2>
        <ul>
          <li>Your Rooted Canada seed paper card</li>
          <li>A small pot or garden bed with loose, well-draining soil</li>
          <li>Water (a spray bottle works well)</li>
          <li>Sunlight — a south-facing window or outdoor spot</li>
        </ul>

        <h2>Step 1: Prepare Your Soil</h2>
        <p>
          Fill a small pot with potting soil or garden soil. Seed paper works
          best in loose, well-aerated soil that holds moisture without
          waterlogging. If planting outdoors in Canada, choose a spot with
          at least 4–6 hours of sunlight daily.
        </p>

        <h2>Step 2: Place the Seed Paper</h2>
        <p>
          Tear or cut your seed paper card into smaller pieces (about 2×2 cm
          pieces work well). Press each piece gently into the soil surface
          — you want the paper to sit just on top of, or barely below, the
          soil. Do <em>not</em> bury it deeply.
        </p>

        <h2>Step 3: Water Gently</h2>
        <p>
          Mist the soil and seed paper with water until evenly damp. The paper
          needs consistent moisture to begin breaking down and for the seeds to
          germinate. Use a spray bottle to avoid disturbing the paper.
          Keep the soil moist (not soaking) over the coming weeks.
        </p>

        <h2>Step 4: Give It Sunlight</h2>
        <p>
          Place your pot in a bright, sunny location. For best results across
          Canada&apos;s variable climate, a south-facing windowsill is ideal
          from October to April. In summer, an outdoor garden bed works
          beautifully.
        </p>

        <h2>What to Expect: Week by Week</h2>
        <ul>
          <li><strong>Week 1–2:</strong> The paper begins to break down. You may see the first tiny green shoots emerge.</li>
          <li><strong>Week 2–4:</strong> Seedlings become visible. Keep watering consistently.</li>
          <li><strong>Week 4–8:</strong> Wildflower seedlings grow taller. If multiple seedlings cluster, thin gently.</li>
          <li><strong>Week 8–22:</strong> Wildflowers bloom! The full bloom depends on the species embedded in your card.</li>
        </ul>

        <h2>Tips for Canadian Gardeners</h2>
        <p>
          Canada&apos;s climate varies widely. In colder provinces (Ontario,
          Quebec, Alberta), start seed paper indoors in late winter and
          transplant outdoors after last frost (typically May). In British
          Columbia and coastal regions, outdoor planting may be possible
          year-round.
        </p>

        <div className={articleStyles.articleCta}>
          <h3>Ready to Grow? Shop Rooted Canada Seed Paper Cards</h3>
          <p>
            Canada&apos;s best plantable greeting cards. Plant them, grow
            wildflowers, and give the planet a gift with every card.
          </p>
          <Link href="/" className={articleStyles.ctaButton}>
            Shop Now →
          </Link>
        </div>
      </article>
      </div>
    </>
  );
}
