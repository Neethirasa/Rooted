"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const shopContainerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  // Close mobile drawer on outside click
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

  // Close dropdown on Escape key from anywhere
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        setShowShopDropdown(false);
      }
    };
    if (showShopDropdown) {
      document.addEventListener("keydown", handleEscape, true);
      document.addEventListener("keyup", handleEscape, true);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape, true);
      document.removeEventListener("keyup", handleEscape, true);
    };
  }, [showShopDropdown]);

  // Keyboard handler for Shop Cards button
  const handleShopKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowShopDropdown((prev) => !prev);
    }
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setShowShopDropdown(false);
    }
  };

  // Close dropdown when focus leaves the shop container entirely
  const handleShopBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!shopContainerRef.current?.contains(e.relatedTarget as Node)) {
      setShowShopDropdown(false);
    }
  };

  return (
    <header className={styles.header} role="banner">
      {/* Left Section (Mobile: Menu Toggle, Desktop: Spacer for centering) */}
      <div className={styles.leftSection}>
        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={showMenu}
        >
          <Image src="/images/menu.svg" alt="Open navigation menu" width={28} height={28} />
        </button>
      </div>

      {/* Center Section (Logo) - strictly centered */}
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

      {/* Right Section (Desktop: Nav, Mobile: Spacer) */}
      <div className={styles.rightSection}>
        <nav className={styles.desktopRightNav} role="navigation" aria-label="Primary">
          <Link href="/" className={styles.desktopNavItem}>
            Home
          </Link>
          <div 
            className={styles.shopDropdownContainer}
            ref={shopContainerRef}
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
            onBlur={handleShopBlur}
          >
            <button
              className={`${styles.desktopNavItem} ${styles.shopButton}`}
              aria-haspopup="true"
              aria-expanded={showShopDropdown}
              onClick={() => setShowShopDropdown((prev) => !prev)}
              onKeyDown={handleShopKeyDown}
            >
              Shop Cards{" "}
              <span
                className={styles.chevron}
                style={{ display: "inline-block", transform: showShopDropdown ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              >▾</span>
            </button>
            {showShopDropdown && (
              <div className={styles.shopDropdownMenu} role="menu">
                <Link href="/category/wedding-cards" className={styles.shopDropdownItem} role="menuitem" onClick={() => setShowShopDropdown(false)}>
                  Wedding Cards
                </Link>
                <Link href="/category/holiday-cards" className={styles.shopDropdownItem} role="menuitem" onClick={() => setShowShopDropdown(false)}>
                  Holiday Cards
                </Link>
                <Link href="/category/birthday" className={styles.shopDropdownItem} role="menuitem" onClick={() => setShowShopDropdown(false)}>
                  Birthday
                </Link>
                <Link href="/category/love" className={styles.shopDropdownItem} role="menuitem" onClick={() => setShowShopDropdown(false)}>
                  Love
                </Link>
                <Link href="/category/mothers-day" className={styles.shopDropdownItem} role="menuitem" onClick={() => setShowShopDropdown(false)}>
                  Mother&apos;s Day
                </Link>
                <Link href="/category/greeting-cards" className={styles.shopDropdownItem} role="menuitem" onClick={() => setShowShopDropdown(false)}>
                  Other Cards
                </Link>
                <Link href="/category/photo-cards" className={styles.shopDropdownItem} role="menuitem" onClick={() => setShowShopDropdown(false)}>
                  Photo Cards
                </Link>
              </div>
            )}
          </div>
          <Link href="/category/help-section" className={styles.desktopNavItem}>
            Help
          </Link>
          <Link href="/about" className={styles.desktopNavItem}>
            Our Story
          </Link>
        </nav>
      </div>

      {/* Background Overlay for Mobile Drawer */}
      {showMenu && (
        <div 
          className={styles.menuBackdrop} 
          onClick={() => setShowMenu(false)} 
        />
      )}

      {/* Sliding Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${showMenu ? styles.drawerOpen : ""}`}
        ref={menuRef}
        inert={!showMenu ? true : undefined}
        aria-hidden={!showMenu}
      >
        <div className={styles.drawerHeader}>
          <button 
            className={styles.closeButton} 
            onClick={() => setShowMenu(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className={styles.drawerNav} role="navigation" aria-label="Mobile">
          <Link href="/" className={styles.drawerItem} onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <div className={styles.drawerSectionTitle}>Shop Cards</div>
          <div className={styles.drawerSubLinks}>
            <Link href="/category/wedding-cards" className={styles.drawerSubItem} onClick={() => setShowMenu(false)}>
              Wedding Cards
            </Link>
            <Link href="/category/holiday-cards" className={styles.drawerSubItem} onClick={() => setShowMenu(false)}>
              Holiday Cards
            </Link>
            <Link href="/category/birthday" className={styles.drawerSubItem} onClick={() => setShowMenu(false)}>
              Birthday
            </Link>
            <Link href="/category/love" className={styles.drawerSubItem} onClick={() => setShowMenu(false)}>
              Love
            </Link>
            <Link href="/category/mothers-day" className={styles.drawerSubItem} onClick={() => setShowMenu(false)}>
              Mother&apos;s Day
            </Link>
            <Link href="/category/greeting-cards" className={styles.drawerSubItem} onClick={() => setShowMenu(false)}>
              Other Cards
            </Link>
            <Link href="/category/photo-cards" className={styles.drawerSubItem} onClick={() => setShowMenu(false)}>
              Photo Cards
            </Link>
          </div>
          <div className={styles.menuDivider} />
          <Link href="/category/help-section" className={styles.drawerItem} onClick={() => setShowMenu(false)}>
            Help
          </Link>
          <Link href="/about" className={styles.drawerItem} onClick={() => setShowMenu(false)}>
            Our Story
          </Link>
        </nav>
      </div>
    </header>
  );
}
