"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <header className={styles.header}>
      {/* Menu */}
      <div className={styles.leftSection} ref={menuRef}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={showMenu}
        >
          <Image src="/images/menu.svg" alt="" width={28} height={28} />
        </button>
        {showMenu && (
          <nav className={styles.dropdownMenu}>
            <Link href="/" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Home
            </Link>
            <Link href="/category/wedding-cards" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Wedding Cards
            </Link>
            <Link href="/category/holiday-cards" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Holiday Cards
            </Link>
            <Link href="/category/birthday" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Birthday
            </Link>
            <Link href="/category/love" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Love
            </Link>
            <Link href="/category/mothers-day" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Mother&apos;s Day
            </Link>
            <Link href="/category/greeting-cards" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Other Cards
            </Link>
            <div className={styles.menuDivider} />
            <Link href="/category/help-section" className={styles.menuItem} onClick={() => setShowMenu(false)}>
              Help
            </Link>
          </nav>
        )}
      </div>

      {/* Logo */}
      <div className={styles.centerSection}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo2.png"
            alt="Rooted Canada"
            width={260}
            height={260}
            priority
          />
        </Link>
      </div>

      {/* Right spacer for symmetry */}
      <div className={styles.rightSection} />
    </header>
  );
}
