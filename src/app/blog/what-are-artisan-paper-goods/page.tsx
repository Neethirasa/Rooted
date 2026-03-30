import type { Metadata } from "next";
import Link from "next/link";
import articleStyles from "../article.module.css";

export const metadata: Metadata = {
  title: "What Are Artisan Paper Goods? The Rooted Canada Story",
  description:
    "Artisan paper goods are handcrafted stationery with soul. Discover how Rooted Canada's eco-friendly seed paper cards support artisan communities and Canadian values.",
  alternates: {
    canonical: "https://www.rootedcanada.com/blog/what-are-artisan-paper-goods",
  },
  openGraph: {
    title: "What Are Artisan Paper Goods? The Rooted Canada Story | Rooted Canada",
    description:
      "Learn how Rooted Canada's artisan paper goods — handcrafted seed paper cards — carry stories of community, sustainability, and Canadian craftsmanship.",
    url: "https://www.rootedcanada.com/blog/what-are-artisan-paper-goods",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ArtisanPaperGoodsArticle() {
  return (
    <div className={articleStyles.articleContainer}>
      <div className={articleStyles.articleHero}>
        <Link href="/blog" className={articleStyles.backLink}>← All Articles</Link>
        <span className={articleStyles.articleTag}>Artisan Craft</span>
        <h1 className={articleStyles.articleTitle}>
          What Are Artisan Paper Goods? The Rooted Canada Story
        </h1>
        <p className={articleStyles.articleMeta}>March 14, 2026 · 4 min read · Rooted Canada</p>
      </div>

      <article className={articleStyles.articleBody}>
        <p>
          <strong>Artisan paper goods</strong> are more than beautiful
          stationery. They are handcrafted objects made with intention —
          carrying the stories of the people who created them, the materials
          they were made from, and the values they represent. In Canada, a
          growing movement of consumers is choosing artisan paper goods over
          mass-produced alternatives. Rooted Canada was born from that movement.
        </p>

        <h2>The Definition of Artisan Paper Goods</h2>
        <p>
          Artisan paper goods include any paper-based product made by hand or
          in small batches with skilled craftsmanship: handmade greeting cards,
          letterpress stationery, pressed-flower journals, hand-bound notebooks,
          and — most innovatively — <strong>seed paper cards</strong>.
        </p>
        <p>
          Seed paper is a form of artisan paper good with an extraordinary twist:
          the paper itself contains seeds. When planted in soil and watered, it
          breaks down and the seeds germinate, growing into wildflowers, herbs,
          or vegetables. Every Rooted Canada card is a living artisan paper good.
        </p>

        <h2>The Rooted Canada Story</h2>
        <p>
          Rooted Canada&apos;s seed paper cards are handcrafted in partnership
          with artisan communities in India — specifically, workers who are
          hearing and speech-impaired. By sourcing from these communities, every
          purchase of a Rooted Canada artisan paper good directly supports their
          economic well-being.
        </p>
        <p>
          The result: eco-friendly paper goods with a double impact. Beautiful
          for you. Better for the planet. Better for the people who made them.
        </p>

        <h2>Why Canadians Are Choosing Artisan Paper Goods</h2>
        <p>
          The shift toward artisan paper goods in Canada reflects a broader
          cultural movement toward conscious consumption. Canadians are
          increasingly choosing:
        </p>
        <ul>
          <li>Products with transparent, ethical supply chains</li>
          <li>Zero-waste or minimal-waste packaging and materials</li>
          <li>Locally relevant brands with Canadian values</li>
          <li>Handcrafted goods that mass production cannot replicate</li>
        </ul>

        <h2>How to Incorporate Artisan Paper Goods into Your Life</h2>
        <p>
          Start simple. Replace conventional greeting cards with seed paper
          cards for your next birthday, holiday, or special occasion. Gift
          a Rooted Canada wedding card set to a couple who values sustainability.
          Send a seed paper Mother&apos;s Day card that doubles as a wildflower
          garden starter.
        </p>

        <div className={articleStyles.articleCta}>
          <h3>Discover Our Artisan Paper Goods Collection</h3>
          <p>
            Handcrafted seed paper cards — eco-friendly stationery shipped
            across Canada. Each card is a piece of artisan paper goods you
            can plant.
          </p>
          <Link href="/" className={articleStyles.ctaButton}>
            Shop Rooted Canada →
          </Link>
        </div>
      </article>
    </div>
  );
}
