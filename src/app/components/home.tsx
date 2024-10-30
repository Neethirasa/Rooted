// src/app/Home.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';

const categories = {
  A: { label: 'Wedding Cards', images: ['/images/image1.jpeg', '/images/image2.jpeg', '/images/image3.jpeg'], path: '/category/wedding-cards' },
  B: { label: 'Greeting Cards', images: ['/images/image2.jpeg', '/images/image5.jpeg', '/images/image6.jpeg'], path: '/category/greeting-cards' },
  C: { label: 'Wishing Cards', images: ['/images/image3.jpeg', '/images/image8.jpeg', '/images/image9.jpeg'], path: '/category/wishing-cards' },
  D: { label: 'Post Cards', images: ['/images/image4.jpeg', '/images/image11.jpeg', '/images/image12.jpeg'], path: '/category/post-cards' }
};

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <Image src="/images/menu.svg" alt="Menu Icon" width={50} height={50} />
        </div>

        <div className={styles.centerSection}>
          <div className={styles.logoContainer}>
            <Image src="/images/logo1.png" alt="Company Logo" width={260} height={260} />
            <span className={styles.companyName}></span>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <Image src="/images/search.svg" alt="Search Icon" width={50} height={50} />
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.imageGrid}>
          {Object.keys(categories).map((category) => (
            <Link
              key={category}
              href={categories[category].path}
              className={styles.imageItem}
            >
              <Image src={categories[category].images[0]} alt={`${categories[category].label} Category`} width={325} height={300} />
              <span className={styles.imageLabel}>{categories[category].label}</span>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}></div>
      </footer>
    </div>
  );
}