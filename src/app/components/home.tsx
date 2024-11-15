"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./home.module.css";

// Define category types
type Category = {
  label: string;
  images: string[];
  path: string;
};

// Define categories data
const categories: Record<string, Category> = {
  A: { label: "Wedding Cards", images: ["/images/image1.jpeg", "/images/image2.jpeg", "/images/image3.jpeg"], path: "/category/wedding-cards" },
  B: { label: "Holiday Cards", images: ["/images/image2.jpeg", "/images/image5.jpeg", "/images/image6.jpeg"], path: "/category/holiday-cards" },
  C: { label: "Other Cards", images: ["/images/image3.jpeg", "/images/image8.jpeg", "/images/image9.jpeg"], path: "/category/greeting-cards" },
};

export default function Home() {
  const [showMenu, setShowMenu] = useState(false); // State for dropdown menu
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [filteredCategories, setFilteredCategories] = useState<string[]>(Object.keys(categories)); // Filtered categories

  // Toggle dropdown menu visibility
  const toggleMenu = () => setShowMenu(!showMenu);

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const matches = Object.keys(categories).filter((key) =>
      categories[key].label.toLowerCase().includes(input)
    );
    setFilteredCategories(matches.length > 0 ? matches : Object.keys(categories));
  };

  // Form submission handler
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Inquiry submitted! We'll get back to you soon.");
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        {/* Left Section - Menu Icon */}
        <div className={styles.leftSection} onMouseEnter={toggleMenu} onMouseLeave={() => setShowMenu(false)}>
          <Image src="/images/menu.svg" alt="Menu Icon" width={50} height={50} onClick={toggleMenu} />
          {showMenu && (
            <div className={styles.dropdownMenu}>
              <Link href="/help" className={styles.menuItem}>Help</Link>
              <Link href="/contact" className={styles.menuItem}>Contact</Link>
            </div>
          )}
        </div>

        {/* Center Section - Logo */}
        <div className={styles.centerSection}>
          <Link href="/" className={styles.logoContainer}>
            <Image src="/images/logo1.png" alt="Company Logo" width={260} height={260} />
            <span className={styles.companyName}></span>
          </Link>
        </div>

        {/* Right Section - Search Bar */}
        <div className={styles.rightSection}>
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
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.imageGrid}>
          {filteredCategories.map((categoryKey) => (
            <Link
              key={categoryKey}
              href={categories[categoryKey].path}
              className={styles.imageItem}
            >
              <Image src={categories[categoryKey].images[0]} alt={`${categories[categoryKey].label} Category`} width={325} height={300} />
              <span className={styles.imageLabel}>{categories[categoryKey].label}</span>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h3>Contact Us for Pricing</h3>
          <div className={styles.contactWrapper}>
            {/* Inquiry Form */}
            <form className={styles.inquiryForm} onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Message:
                <textarea name="message" rows={3} required placeholder="Let us know which cards you're interested in." />
              </label>
              <button type="submit">Submit Inquiry</button>
            </form>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h4>Contact Dhanu</h4>
              <p>Phone: +1 423 234 234</p>
              <p>Email: <a href="mailto:dhanupaper@gmail.com">dhanupaper@gmail.com</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}