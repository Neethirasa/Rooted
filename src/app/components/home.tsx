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
    image: "/images/image1.jpeg",
    path: "/category/wedding-cards",
    description: "Elegant invitations that bloom",
  },
  {
    label: "Holiday Cards",
    image: "/images/image2.jpeg",
    path: "/category/holiday-cards",
    description: "Seasonal greetings with heart",
  },
  {
    label: "Birthday",
    image: "/images/B1.PNG",
    path: "/category/birthday",
    description: "Celebrate another trip around the sun",
  },
  {
    label: "Love",
    image: "/images/L2.PNG",
    path: "/category/love",
    description: "For the ones who hold your heart",
  },
  {
    label: "Mother's Day",
    image: "/images/M1.PNG",
    path: "/category/mothers-day",
    description: "Honor the amazing moms in your life",
  },
  {
    label: "Other Cards",
    image: "/images/image3.jpeg",
    path: "/category/greeting-cards",
    description: "For every special moment",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all animatable elements
    const animateEls = document.querySelectorAll(`.${styles.animateIn}`);
    animateEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
          <span className={styles.heroBadge}>🌱 Eco-Friendly</span>
          <h1 className={styles.heroTitle}>
            Cards That <em>Grow</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Beautiful seed paper cards that bloom into wildflowers when planted.
            Every card leaves a lasting, positive impact on the environment.
          </p>
          <Link href="/category/wedding-cards" className={styles.heroCta}>
            Explore Collections
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Category Grid */}
      <main className={styles.main}>
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
            Our seed paper products are handcrafted in partnership with
            communities in India, supporting the hearing and speech-impaired.
            After enjoying your card, simply plant it in soil, water it, and
            watch wildflowers bloom.
          </p>
          <Link href="/category/help-section" className={styles.missionLink}>
            Learn how it works →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Get in Touch</h3>
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
            <h3 className={styles.footerHeading}>Contact Us</h3>
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
                  alt=""
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