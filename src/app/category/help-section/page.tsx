import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./help-section.module.css";

export const metadata: Metadata = {
  title: "How to Plant Your Seed Paper Card",
  description:
    "Learn how to plant your Rooted Canada seed paper card and grow wildflowers. Step-by-step guide to planting eco-friendly stationery — Canada's plantable greeting cards.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/help-section",
  },
  openGraph: {
    title: "How to Plant Your Seed Paper Card | Rooted Canada",
    description:
      "Step-by-step guide to planting your eco-friendly seed paper card from Rooted Canada. Watch it grow into beautiful wildflowers.",
    url: "https://www.rootedcanada.com/category/help-section",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HelpSection() {
  return (
    <div className={styles.helpContainer}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.glassCard}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Image
              src="/images/logo2.png"
              alt="Rooted Canada"
              width={280}
              height={280}
              priority
              className={styles.pageLogo}
            />
          </div>

          <div className={styles.textContent}>
            <section className={styles.textSection}>
              <h1 className={styles.title}>
                How to Plant Your Seed Paper Card — Rooted Canada
              </h1>
              <p>
                We create eco-friendly seed paper cards and sustainable stationery
                that bring meaning to every occasion. From holiday cards to
                wedding invitations, our plantable greeting cards are designed to
                grow into wildflowers when planted, leaving a lasting, positive
                impact on the environment.
              </p>
            </section>

            <section className={styles.textSection}>
              <p>
                Watch the video below to see how to plant your seed card! For the
                best results, keep it in sunlight for at least 22 days and watch it
                bloom into beautiful wildflowers.
              </p>
            </section>

            {/* Video */}
            <div className={styles.videoContainer}>
              <video
                controls
                poster="/images/video-thumbnail.png"
                className={styles.video}
              >
                <source src="/videos/help-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Supplier */}
            <section className={styles.supplierSection}>
              <h2>About the Supplier</h2>
              <p>
                Our suppliers are based in India, and this seed card has helped
                support the hearing and speech-impaired community by contributing to
                their growth and well-being!
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

