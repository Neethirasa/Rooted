"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import styles from "../category.module.css";

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
  { name: "Photo Cards", path: "/category/photo-cards" },
  { name: "Birthday", path: "/category/birthday" },
  { name: "Love", path: "/category/love" },
  { name: "Mother's Day", path: "/category/mothers-day" },
  { name: "Other Cards", path: "/category/greeting-cards" },
];

const cardDetails: CardDetail[] = [
  { src: "/images/w1.png", cost: "$2.50", sizes: ["5x7", "A6"] },
  { src: "/images/w2.png", cost: "$2.50", sizes: ["5x7", "A6"] },
  { src: "/images/w3.png", cost: "$2.50", sizes: ["5x7", "A6"] },
  { src: "/images/w4.png", cost: "$2.50", sizes: ["5x7", "A6"] },
  { src: "/images/w5.png", cost: "$2.50", sizes: ["5x7", "A6"] },
];

export default function WeddingCards() {
  const [selectedCategory, setSelectedCategory] = useState("Wedding Cards");
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    Array(cardDetails.length).fill(false)
  );
  const router = useRouter();

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category.name);
    router.push(category.path);
  };

  const handleCardFlip = (index: number) => {
    setFlippedCards((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  useEffect(() => {
    const activeItem = document.querySelector(`.${styles.activeCategory}`);
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, []);

  return (
    <div className={styles.categoryContainer}>
      <Header />

      <div className={styles.contentWrapper}>
        {/* Sidebar / Tabs */}
        <aside className={styles.sidebar}>
          <ul className={styles.categoryList}>
            {categories.map((cat) => (
              <li
                key={cat.name}
                className={`${styles.categoryItem} ${selectedCategory === cat.name ? styles.activeCategory : ""
                  }`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Cards grid */}
        <main className={styles.mainContent}>
          <div className={styles.imageGrid}>
            {cardDetails.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${flippedCards[index] ? styles.flipped : ""
                  }`}
                onClick={() => handleCardFlip(index)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image
                      src={card.src}
                      alt={`Wedding Card ${index + 1}`}
                      width={400}
                      height={500}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <span className={styles.cardBackTitle}>Wedding Card</span>
                    <p>Cost: {card.cost}</p>
                    <p>Sizes: {card.sizes.join(", ")}</p>
                    <span className={styles.cardBackHint}>
                      Click to flip back
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}