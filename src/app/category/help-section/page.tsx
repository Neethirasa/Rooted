"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './help-section.module.css';

export default function HelpSection() {
  return (
    <div className={styles.helpContainer}>
      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <Link href="/">
          <button className={styles.backButton}>← Back</button>
        </Link>
      </div>

      {/* Logo in the middle */}
      <div className={styles.logoContainer}>
        <Image src="/images/logo1.png" alt="Company Logo" width={300} height={300} />
      </div>

      {/* Help Section Text */}
      <div className={styles.textContainer}>
      <br />
        <p>
          We create eco-friendly Seed Paper products that bring sustainability and meaning to every occasion. 
          From holiday cards to wedding invitations, our items are designed to grow into wildflowers when planted, 
          leaving a lasting, positive impact on the environment.
        </p>
        <br />
        <p>
          Watch the video below to see how to plant your seed card! For the best results, keep it in sunlight for 
          at least 22 days and watch it bloom into wildflowers.
        </p>
      </div>

      {/* Help Video */}
      <div className={styles.videoContainer}>
        <video controls width="800" height="450">
          <source src="/videos/help-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Supplier Section */}
      <div className={styles.supplierContainer}>
        <h1>About the Supplier</h1>
        <p>
          Our suppliers are based in India, and this seed card has helped support the hearing and speech-impaired community by contributing to their growth and well-being!
        </p>
      </div>
    </div>
  );
}
