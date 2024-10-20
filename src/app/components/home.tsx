// src/app/page.tsx
import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
          <div className={styles.icons}>
            <Image src="/images/search.svg" alt="Search Icon" width={40} height={40} />
            <Image src="/images/menu.svg" alt="Menu Icon" width={40} height={40} />
          </div>
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