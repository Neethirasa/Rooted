"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import styles from "./home.module.css";

type Category = {
  label: string;
  image: string;
  path: string;
  description: string;
};

const categories: Category[] = [
  {
    label: "Wedding Cards",
    image: "/images/seed-paper-wedding-cards-canada.jpeg",
    path: "/category/wedding-cards",
    description: "Elegant invitations that bloom",
  },
  {
    label: "Holiday Cards",
    image: "/images/eco-friendly-holiday-cards-rooted-canada.jpeg",
    path: "/category/holiday-cards",
    description: "Seasonal greetings with heart",
  },
  {
    label: "Birthday",
    image: "/images/seed-paper-birthday-card-canada.png",
    path: "/category/birthday",
    description: "Celebrate another trip around the sun",
  },
  {
    label: "Love",
    image: "/images/eco-friendly-love-card-rooted-canada.png",
    path: "/category/love",
    description: "For the ones who hold your heart",
  },
  {
    label: "Mother's Day",
    image: "/images/mothers-day-seed-paper-card-canada.png",
    path: "/category/mothers-day",
    description: "Honor the amazing moms in your life",
  },
  {
    label: "Other Cards",
    image: "/images/handmade-greeting-cards-canada.jpeg",
    path: "/category/greeting-cards",
    description: "For every special moment",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Add .willAnimate FIRST — this hides elements via JS only,
    //    so the page is always visible for SSR, crawlers, and no-JS users.
    const animateEls = document.querySelectorAll(`.${styles.animateIn}`);
    animateEls.forEach((el) => el.classList.add(styles.willAnimate));

    // 2. Then observe — IntersectionObserver adds .visible to trigger the reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      // rootMargin bottom was -50px — too aggressive on small viewports (375px).
      // Reduced to 0px so any card touching the viewport edge triggers the reveal.
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );

    animateEls.forEach((el) => observer.observe(el));

    // Safety fallback: if any items haven't become visible after 1.5s
    // (e.g. observer blocked by overflow clipping on mobile), force them visible.
    const fallbackTimer = setTimeout(() => {
      animateEls.forEach((el) => {
        if (!el.classList.contains(styles.visible)) {
          el.classList.add(styles.visible);
        }
      });
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>🌱 Eco-Friendly Stationery · Canada</span>
          <h1 className={styles.heroTitle}>
            Cards that <em>grow.</em>
          </h1>
          {/* ✅ SEO FIX: injects "Stationery" into semantic context below H1 */}
          <p className={styles.heroKeywordSubline}>
            Seed Paper Cards &amp; Eco-Friendly Stationery
          </p>
          <p className={styles.heroSubtitle}>
            Plantable seed paper cards &amp; eco-friendly stationery, shipped
            across Canada. Every card blooms into wildflowers when planted.
          </p>
          <div className={styles.heroButtonGroup}>
            <Link href="/category/wedding-cards" className={styles.heroCta}>
              Explore Collections
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/custom-card" className={styles.heroSecondaryCta}>
              Design Custom Card
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <main className={styles.main} id="main-content" role="main" tabIndex={-1}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.animateIn}`}>
            Our Collections
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.animateIn}`}>
            Handcrafted with love, designed to grow
          </p>
        </div>
        <div className={styles.imageGrid} ref={gridRef}>
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.path}
              className={`${styles.imageItem} ${styles.animateIn}`}
              style={{ animationDelay: `${i * 0.15}s` } as React.CSSProperties}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={cat.image}
                  alt={`${cat.label} — ${cat.description}`}
                  width={600}
                  height={750}
                  priority={i === 0}
                  className={styles.categoryImage}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.imageLabel}>{cat.label}</span>
                  <span className={styles.imageDescription}>
                    {cat.description}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* About / Mission Strip */}
      <section className={`${styles.missionStrip} ${styles.animateIn}`}>
        <div className={styles.missionContent}>
          <h2>Plant It. Watch It Grow.</h2>
          <p>
            Our artisan paper goods and sustainable stationery for Canada are
            handcrafted in partnership with communities in India, supporting the
            hearing and speech-impaired. Each card is a piece of sustainable
            stationery — shop eco-friendly paper goods in Canada that give back
            to both people and the planet. Simply plant your card in soil, water
            it, and watch wildflowers bloom.
          </p>
          <Link href="/category/help-section" className={styles.missionLink}>
            Learn how it works →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} role="contentinfo">
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
          {/* ✅ SEO FIX: p instead of h3 — footer labels are not content headings */}
          <p className={styles.footerHeading}>Get in Touch</p>
            <form onSubmit={handleFormSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Enter your message"
                />
              </div>
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus.type === 'success' && (
                <p className={styles.successMessage}>{submitStatus.message}</p>
              )}
              {submitStatus.type === 'error' && (
                <p className={styles.errorMessage}>{submitStatus.message}</p>
              )}
            </form>
          </div>

          <div className={styles.footerColumn}>
            {/* ✅ SEO FIX: p instead of h3 — footer labels are not content headings */}
            <p className={styles.footerHeading}>Contact Us</p>
            <p className={styles.contactEmail}>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@rootedcanada.com">
                support@rootedcanada.com
              </a>
            </p>
            <div className={styles.socialMedia}>
              <a
                href="https://www.instagram.com/rooted_canada?igsh=MTZsYmVjdmp1b3Y4cw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Image
                  src="/images/instagram-icon.svg"
                  alt="Follow Rooted Canada on Instagram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} Rooted Canada. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}