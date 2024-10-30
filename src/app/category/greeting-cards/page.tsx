// src/app/category/wedding-cards/page.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../category.module.css';

const categories = [
  { name: "Wedding Cards", path: "/category/wedding-cards" },
  { name: "Holiday Cards", path: "/category/holiday-cards" },
  { name: "Greeting Cards", path: "/category/greeting-cards" },
  { name: "Photo Cards", path: "/category/photo-cards" }
];

export default function WeddingCards() {
  const [selectedCategory, setSelectedCategory] = useState("Greeting Cards");
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const router = useRouter();

  const handleCategoryClick = (category: { name: string, path: string }) => {
    setSelectedCategory(category.name);
    router.push(category.path); // Navigate to the selected category page
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSearchChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const matches = categories.filter((category) =>
      category.name.toLowerCase().includes(input)
    );
    setFilteredCategories(matches.length > 0 ? matches : categories);
  };

  return (
    <div className={styles.categoryContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div
          className={styles.leftSection}
          onMouseEnter={toggleMenu}
          onMouseLeave={() => setShowMenu(false)}
        >
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

      {/* Main Content Wrapper */}
      <div className={styles.contentWrapper}>
        {/* Sidebar for Categories */}
        <aside className={styles.sidebar}>
          <ul className={styles.categoryList}>
            {filteredCategories.map((category) => (
              <li
                key={category.name}
                className={`${styles.categoryItem} ${
                  selectedCategory === category.name ? styles.activeCategory : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right side - Display Images in a Grid */}
        <main className={styles.mainContent}>
          <div className={styles.imageGrid}>
            <Image src="/images/image3.jpeg" alt={`${selectedCategory} 1`} width={150} height={150} />
            <Image src="/images/image2.jpeg" alt={`${selectedCategory} 2`} width={150} height={150} />
            <Image src="/images/image3.jpeg" alt={`${selectedCategory} 3`} width={150} height={150} />
            <Image src="/images/image4.jpeg" alt={`${selectedCategory} 4`} width={150} height={150} />
            <Image src="/images/image5.jpeg" alt={`${selectedCategory} 5`} width={150} height={150} />
            <Image src="/images/image6.jpeg" alt={`${selectedCategory} 6`} width={150} height={150} />
          </div>
        </main>
      </div>
    </div>
  );
}