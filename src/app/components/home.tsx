// src/app/page.tsx
import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.icons}>
          {/* Search icon and search bar together */}
          <div className={styles.searchContainer}>
            <Image src="/images/search.svg" alt="Search Icon" width={40} height={40} />
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          {/* Menu icon */}
          <Image src="/images/menu.svg" alt="Menu Icon" width={40} height={40} />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            <Image src="/images/image1.jpeg" alt="Sample 1" width={300} height={400} />
          </div>
          <div className={styles.imageItem}>
            <Image src="/images/image2.jpeg" alt="Sample 2" width={300} height={400} />
          </div>
          <div className={styles.imageItem}>
            <Image src="/images/image3.jpeg" alt="Sample 3" width={300} height={400} />
          </div>
          <div className={styles.imageItem}>
            <Image src="/images/image4.jpeg" alt="Sample 4" width={300} height={400} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}></div>
      </footer>
    </div>
  );
}