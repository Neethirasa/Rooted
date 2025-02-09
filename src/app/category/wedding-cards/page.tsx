// src/app/category/wedding-cards/page.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';
import styles from '../category.module.css';

type Category = {
  name: string;
  path: string;
};

type CardDetail = {
  src: string;
  cost: string;
  sizes: string[];
};

const categories: Category[] = [
  { name: "Wedding Cards", path: "/category/wedding-cards" },
  { name: "Holiday Cards", path: "/category/holiday-cards" },
  { name: "Other Cards", path: "/category/greeting-cards" },
  //{ name: "Photo Cards", path: "/category/photo-cards" }
];

const cardDetails: CardDetail[] = [
  { src: "/images/w1.png", cost: "$10", sizes: ["4x6", "5x7", "8x10"] },
  { src: "/images/w2.png", cost: "$12", sizes: ["5x5", "6x6", "7x7"] },
  { src: "/images/w3.png", cost: "$15", sizes: ["4x4", "5x5", "6x6"] },
  { src: "/images/w4.png", cost: "$8", sizes: ["3x5", "4x6", "5x7"] },
  { src: "/images/w5.png", cost: "$9", sizes: ["4x6", "5x7", "6x8"] }
];

export default function WeddingCards() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wedding Cards");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);
  const [flippedCards, setFlippedCards] = useState<boolean[]>(Array(cardDetails.length).fill(false));
  const router = useRouter();

  const handleCategoryClick = (category: Category): void => {
    setSelectedCategory(category.name);
    router.push(category.path);
  };

  const toggleMenu = (): void => setShowMenu(!showMenu);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const matches = categories.filter((category) =>
      category.name.toLowerCase().includes(input)
    );
    setFilteredCategories(matches.length > 0 ? matches : categories);
  };

  const handleCardFlip = (index: number): void => {
    setFlippedCards((prev) => {
      const newFlippedCards = [...prev];
      newFlippedCards[index] = !newFlippedCards[index];
      return newFlippedCards;
    });
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
              <Link href="/category/help-section" className={styles.menuItem}>Help</Link>
            </div>
          )}
        </div>

        <div className={styles.centerSection}>
          <Link href="/" className={styles.logoContainer}>
            <Image src="/images/logo1.png" alt="Company Logo" width={260} height={260} />
            <span className={styles.companyName}></span>
          </Link>
        </div>

        <div className={styles.rightSection}>
          {/*
          <div className={styles.searchContainer}>
            <Image src="/images/search.svg" alt="Search Icon" width={50} height={50} />
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          */}
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
            {cardDetails.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${flippedCards[index] ? styles.flipped : ''}`}
                onClick={() => handleCardFlip(index)}
              >
                {flippedCards[index] ? (
                  <div className={styles.cardBack}>
                    <p>Cost: {card.cost}</p>
                    <p>Sizes: {card.sizes.join(", ")}</p>
                  </div>
                ) : (
                  <div className={styles.cardFront}>
                    <Image src={card.src} alt={`${selectedCategory} ${index + 1}`} width={150} height={150} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}