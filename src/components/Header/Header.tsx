"use client";

import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.topStrip}>
        <div className={styles.topStripContent}>
          <span className={styles.stripItem}>
            <span className={styles.stripIcon}>lorem ipsum dolor</span>
          </span>
          <span className={`${styles.stripItem} ${styles.hideOnMobile}`}>
            <span className={styles.stripIcon}>lorem ipsum dolor</span>
          </span>
          <span className={`${styles.stripItem} ${styles.hideOnMobile}`}>
            <span className={styles.stripIcon}>lorem ipsum dolor</span>
          </span>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.leftSection}>
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <div className={styles.logo}>LOGO</div>
        </div>

        <div className={styles.centerSection}>
          <div className={`${styles.logo} ${styles.desktopLogo}`}>LOGO</div>
        </div>

        <div className={styles.rightSection}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Favorites">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
          <button className={`${styles.iconBtn} ${styles.hideOnMobile}`} aria-label="User Profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <div className={`${styles.language} ${styles.hideOnMobile}`}>
            ENG <span className={styles.langArrow}>▼</span>
          </div>
        </div>
      </div>

      <nav className={`${styles.navBar} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="#" className={styles.navLink}>SHOP</Link>
        <Link href="#" className={styles.navLink}>SKILLS</Link>
        <Link href="#" className={styles.navLink}>STORIES</Link>
        <Link href="#" className={styles.navLink}>ABOUT</Link>
        <Link href="#" className={styles.navLink}>CONTACT US</Link>
      </nav>
      
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu} />
      )}
    </header>
  );
}
