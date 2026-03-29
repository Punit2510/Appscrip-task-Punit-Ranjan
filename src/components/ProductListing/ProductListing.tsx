"use client";

import React, { useState, useEffect } from 'react';
import styles from './ProductListing.module.css';
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductListing({ products }: { products: Product[] }) {
  const [showFilter, setShowFilter] = useState(true);
  const [sortOption, setSortOption] = useState('recommended');
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileScreen(isMobile);
      setShowFilter(!isMobile);
    };
    
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'price-high-low') return b.price - a.price;
    if (sortOption === 'price-low-high') return a.price - b.price;
    return 0;
  });

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.heroSubtext}>
          Lorem ipsum dolor sit amet consectetur. Amet est placerat pharetra porttitor amet consectetur.
        </p>
      </section>

      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <span className={styles.itemsCount}>{products.length} ITEMS</span>
          {!isMobileScreen ? (
            <button 
              className={styles.toggleFilterBtn}
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <span className={styles.chevronIcon}>
                {showFilter ? '◄' : '►'}
              </span>
              {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
            </button>
          ) : (
            <button 
              className={styles.mobileFilterBtn}
              onClick={() => setShowFilter((prev) => !prev)}
            >
              FILTER
            </button>
          )}
        </div>
        
        {isMobileScreen && <div className={styles.toolbarDivider} />}

        <div className={styles.toolbarRight}>
          <select 
            className={styles.sortDropdown}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high-low">PRICE: HIGH TO LOW</option>
            <option value="price-low-high">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className={styles.contentArea}>
        {showFilter && !isMobileScreen && (
          <aside className={styles.sidebarWrapper}>
            <SidebarFilter />
          </aside>
        )}
        
        {showFilter && isMobileScreen && (
          <div className={styles.mobileFilterOverlay}>
             <div className={styles.mobileFilterHeader}>
               <h3>Filter Items</h3>
               <button onClick={() => setShowFilter(false)}>✕</button>
             </div>
             <SidebarFilter />
          </div>
        )}

        <div className={`${styles.productGrid} ${showFilter && !isMobileScreen ? styles.gridWithFilter : styles.gridFull}`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
