import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Our Story — Eco-Friendly Seed Paper Cards",
  description:
    "Rooted Canada was founded on one idea: a card should leave the world better than it found it. Learn about our mission, our artisan partners in India, and why we make seed paper cards.",
  alternates: {
    canonical: "https://www.rootedcanada.com/about",
  },
  openGraph: {
    title: "Our Story — Eco-Friendly Seed Paper Cards",
    description:
      "Rooted Canada was founded on one idea: a card should leave the world better than it found it. Learn about our mission, our artisan partners, and why we make plantable seed paper cards.",
    url: "https://www.rootedcanada.com/about",
    images: [
      {
        url: "/images/artisan-paper-goods-canada.jpeg",
        width: 1200,
        height: 630,
        alt: "Rooted Canada artisan seed paper cards — handcrafted in India",
      },
    ],
  },
};

// ─── JSON-LD: BreadcrumbList + AboutPage schema ──────────────────────────────
function AboutJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rootedcanada.com" },
      { "@type": "ListItem", position: 2, name: "Our Story", item: "https://www.rootedcanada.com/about" },
    ],
  };

  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Story — Rooted Canada",
    url: "https://www.rootedcanada.com/about",
    description:
      "Rooted Canada crafts eco-friendly seed paper cards and sustainable stationery handcrafted in partnership with artisan communities in India, supporting hearing and speech-impaired workers. Every card is plantable and blooms into wildflowers.",
    isPartOf: {
      "@type": "WebSite",
      name: "Rooted Canada",
      url: "https://www.rootedcanada.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
      />
    </>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <div className={styles.container}>
        <Header />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.tag}>🌱 Our Story</span>
            <h1 className={styles.heading}>
              A Card That Leaves the World <em>Better.</em>
            </h1>
            <p className={styles.subheading}>
              Rooted Canada was born from a simple belief: a greeting card
              shouldn&apos;t end its life in a landfill. It should grow.
            </p>
          </div>
        </section>

        <main id="main-content" className={styles.main}>

          {/* Mission */}
          <section className={styles.section}>
            <div className={styles.textBlock}>
              <h2>Why We Started</h2>
              <p>
                Canadians send hundreds of millions of cards every year — and
                the vast majority are discarded within days. We asked a
                different question: <strong>what if the card itself was a gift
                to the planet?</strong>
              </p>
              <p>
                Rooted Canada&apos;s seed paper cards are embedded with a mix of
                Canadian wildflower seeds. When your recipient is done reading,
                they plant the card in soil, water it, and watch it bloom into
                wildflowers. Zero waste. Net positive impact. A greeting that
                keeps growing long after the occasion has passed.
              </p>
            </div>
          </section>

          {/* Artisan Partnership */}
          <section className={styles.section + " " + styles.imageSplit}>
            <div className={styles.imageBlock}>
              <Image
                src="/images/artisan-paper-goods-canada.jpeg"
                alt="Artisan craftspeople handmaking seed paper cards — Rooted Canada's partner community in India"
                width={640}
                height={480}
                className={styles.photo}
              />
            </div>
            <div className={styles.textBlock}>
              <h2>Handcrafted with Purpose</h2>
              <p>
                Every Rooted Canada card is handcrafted in partnership with
                artisan communities in India, specifically supporting{" "}
                <strong>hearing and speech-impaired workers</strong>. This
                partnership is central to who we are — our cards don&apos;t just
                reduce environmental waste, they actively create dignified,
                skilled employment.
              </p>
              <p>
                Each card is made using traditional paper-making techniques,
                with wildflower seeds pressed directly into the recycled
                pulp. The result is a piece of sustainable stationery that is
                both beautiful and fully biodegradable.
              </p>
            </div>
          </section>

          {/* Sustainability */}
          <section className={styles.section}>
            <div className={styles.textBlock}>
              <h2>Our Commitment to Canada</h2>
              <p>
                We ship across all of Canada — from British Columbia to
                Newfoundland — in compostable or recyclable packaging.
                We believe eco-friendly stationery shouldn&apos;t require an
                eco-unfriendly supply chain.
              </p>
              <p>
                Canada produces over 9 million tonnes of paper waste annually.
                Every Rooted Canada card sold is one conventional card
                diverted from landfill, replaced by a living wildflower garden.
              </p>
            </div>
          </section>

          {/* Values grid */}
          <section className={styles.valuesSection}>
            <h2 className={styles.valuesSectionTitle}>What We Stand For</h2>
            <div className={styles.valuesGrid}>
              {[
                {
                  icon: "🌱",
                  title: "Zero Waste",
                  text: "Every card is 100% plantable and biodegradable. No landfill. No guilt.",
                },
                {
                  icon: "🤝",
                  title: "Community First",
                  text: "Handcrafted with artisan partners in India, supporting hearing and speech-impaired workers.",
                },
                {
                  icon: "🇨🇦",
                  title: "Proudly Canadian",
                  text: "Designed for Canadian occasions, shipped Canada-wide in eco-friendly packaging.",
                },
                {
                  icon: "🌸",
                  title: "Wildflower Positive",
                  text: "Each card contains seeds suited to Canadian growing zones — plant it and watch nature bloom.",
                },
              ].map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className={styles.cta}>
            <h2>Ready to Send a Card That Grows?</h2>
            <p>
              Browse our full collection of plantable{" "}
              <Link href="/category/wedding-cards">seed paper wedding cards</Link>,{" "}
              <Link href="/category/birthday">eco-friendly birthday cards</Link>,{" "}
              <Link href="/category/holiday-cards">sustainable holiday cards</Link>,
              and more — all shipped across Canada.
            </p>
            <Link href="/" className={styles.ctaButton}>
              Explore All Collections →
            </Link>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Rooted Canada. All rights reserved.</p>
          <p>
            <a href="mailto:support@rootedcanada.com">support@rootedcanada.com</a>
          </p>
        </footer>
      </div>
    </>
  );
}
