"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
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
      {/* Left Section (Mobile: Menu Toggle, Desktop: Spacer for centering) */}
      <div className={styles.leftSection}>
        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={showMenu}
        >
          <Image src="/images/menu.svg" alt="" width={28} height={28} />
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
        <nav className={styles.desktopRightNav}>
          <Link href="/" className={styles.desktopNavItem}>
            Home
          </Link>
          <div 
            className={styles.shopDropdownContainer}
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
          >
            <button className={`${styles.desktopNavItem} ${styles.shopButton}`}>
              Shop Cards <span className={styles.chevron}>▾</span>
            </button>
            {showShopDropdown && (
              <div className={styles.shopDropdownMenu}>
                <Link href="/category/wedding-cards" className={styles.shopDropdownItem} onClick={() => setShowShopDropdown(false)}>
                  Wedding Cards
                </Link>
                <Link href="/category/holiday-cards" className={styles.shopDropdownItem} onClick={() => setShowShopDropdown(false)}>
                  Holiday Cards
                </Link>
                <Link href="/category/birthday" className={styles.shopDropdownItem} onClick={() => setShowShopDropdown(false)}>
                  Birthday
                </Link>
                <Link href="/category/love" className={styles.shopDropdownItem} onClick={() => setShowShopDropdown(false)}>
                  Love
                </Link>
                <Link href="/category/mothers-day" className={styles.shopDropdownItem} onClick={() => setShowShopDropdown(false)}>
                  Mother&apos;s Day
                </Link>
                <Link href="/category/greeting-cards" className={styles.shopDropdownItem} onClick={() => setShowShopDropdown(false)}>
                  Other Cards
                </Link>
              </div>
            )}
          </div>
          <Link href="/category/help-section" className={styles.desktopNavItem}>
            Help
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
      <div className={`${styles.mobileDrawer} ${showMenu ? styles.drawerOpen : ""}`} ref={menuRef}>
        <div className={styles.drawerHeader}>
          <button 
            className={styles.closeButton} 
            onClick={() => setShowMenu(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className={styles.drawerNav}>
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
          </div>
          <div className={styles.menuDivider} />
          <Link href="/category/help-section" className={styles.drawerItem} onClick={() => setShowMenu(false)}>
            Help
          </Link>
        </nav>
      </div>
    </header>
  );
}
