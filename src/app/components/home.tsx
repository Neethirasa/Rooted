// src/app/Home.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './home.module.css';

const categories = {
  A: { label: 'Wedding Cards', images: ['/images/image1.jpeg', '/images/image2.jpeg', '/images/image3.jpeg'], path: '/category/wedding-cards' },
  B: { label: 'Holiday Cards', images: ['/images/image2.jpeg', '/images/image5.jpeg', '/images/image6.jpeg'], path: '/category/holiday-cards' },
  C: { label: 'Greeting Cards', images: ['/images/image3.jpeg', '/images/image8.jpeg', '/images/image9.jpeg'], path: '/category/greeting-cards' },
  D: { label: 'Photo Cards', images: ['/images/image4.jpeg', '/images/image11.jpeg', '/images/image12.jpeg'], path: '/category/photo-cards' }
};

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(Object.keys(categories));

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    // Filter categories based on search input or show all if input is empty or has no matches
    if (input) {
      const matches = Object.keys(categories).filter((key) =>
        categories[key].label.toLowerCase().includes(input)
      );
      setFilteredCategories(matches.length > 0 ? matches : Object.keys(categories));
    } else {
      setFilteredCategories(Object.keys(categories)); // Reset to all categories
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftSection} onMouseEnter={toggleMenu} onMouseLeave={() => setShowMenu(false)}>
          <Image src="/images/menu.svg" alt="Menu Icon" width={50} height={50} onClick={toggleMenu} />
          {showMenu && (
            <div className={styles.dropdownMenu}>
              <Link href="/help" className={styles.menuItem}>Help</Link>
              <Link href="/contact" className={styles.menuItem}>Contact</Link>
            </div>
          )}
        </div>

        <div className={styles.centerSection}>
          <Link href="/" className={styles.logoContainer}> {/* Make logo clickable */}
            <Image src="/images/logo1.png" alt="Company Logo" width={260} height={260} />
            <span className={styles.companyName}></span>
          </Link>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <Image src="/images/search.svg" alt="Search Icon" width={50} height={50} />
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchChange} // Update search input
              />
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.imageGrid}>
          {filteredCategories.map((category) => (
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