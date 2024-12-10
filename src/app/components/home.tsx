"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import styles from "./home.module.css";

type Category = {
  label: string;
  images: string[];
  path: string;
};

const categories: Record<string, Category> = {
  A: { label: "Wedding Cards", images: ["/images/image1.jpeg", "/images/image2.jpeg", "/images/image3.jpeg"], path: "/category/wedding-cards" },
  B: { label: "Holiday Cards", images: ["/images/image2.jpeg", "/images/image5.jpeg", "/images/image6.jpeg"], path: "/category/holiday-cards" },
  C: { label: "Other Cards", images: ["/images/image3.jpeg", "/images/image8.jpeg", "/images/image9.jpeg"], path: "/category/greeting-cards" },
};

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false); // State for dropdown menu
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [filteredCategories, setFilteredCategories] = useState<string[]>(Object.keys(categories)); // Filtered categories
  const [isSearchActive, setIsSearchActive] = useState(false); // State to manage header visibility

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const matches = Object.keys(categories).filter((key) =>
      categories[key].label.toLowerCase().includes(input)
    );
    setFilteredCategories(matches.length > 0 ? matches : Object.keys(categories));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");

    window.location.href = `mailto:support@rootedcanada.com?subject=Contact Form Submission&body=Message from: ${email}%0A%0A${message}`;
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={`${styles.header} ${isSearchActive ? styles.hidden : ""}`}>
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

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Search Bar commented out */}
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

      {/* Footer */}
      <footer className={styles.footer}>
  <div className={styles.footerContainer}>
    {/* Contact Form */}
    <div className={styles.contactSection}>
      <h3>Get in Touch</h3>
      <form onSubmit={handleFormSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>

      {/* Contact Details */}
      <div className={styles.contactDetails}>
        <h3>Contact Us</h3>
        <p>
          <strong>Email:</strong> <a href="mailto:support@rootedcanada.com">support@rootedcanada.com</a>
        </p>
        <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/rooted_canada?igsh=MTZsYmVjdmp1b3Y4cw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
           <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}