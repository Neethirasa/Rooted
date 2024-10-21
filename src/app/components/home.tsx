// src/app/page.tsx
import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Left Section: Menu Icon */}
        <div className={styles.leftSection}>
          <Image src="/images/menu.svg" alt="Menu Icon" width={50} height={50} />
        </div>

        {/* Center Section: Logo */}
        <div className={styles.centerSection}>
          <div className={styles.logoContainer}>
            <Image src="/images/logo.png" alt="Company Logo" width={120} height={120} />
            <span className={styles.companyName}></span>
          </div>
        </div>

        {/* Right Section: Search */}
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
          <div className={styles.imageItem}>
            <Image src="/images/image1.jpeg" alt="Sample 1" width={325} height={425} />
          </div>
          <div className={styles.imageItem}>
            <Image src="/images/image2.jpeg" alt="Sample 2" width={325} height={425} />
          </div>
          <div className={styles.imageItem}>
            <Image src="/images/image3.jpeg" alt="Sample 3" width={325} height={425} />
          </div>
          <div className={styles.imageItem}>
            <Image src="/images/image4.jpeg" alt="Sample 4" width={325} height={425} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}></div>
      </footer>
    </div>
  );
}