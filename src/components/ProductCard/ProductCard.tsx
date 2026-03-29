"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

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

export default function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={product.image} 
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image} 
        />
      </div>
      
      <div className={styles.infoContainer}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>
            {product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}
          </h3>
        </div>
        
        <div className={styles.priceRow}>
          <span className={styles.price}>
            <span className={styles.signInText}>Sign in</span> or Create an account to see pricing
          </span>
          <button 
            className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
            onClick={toggleLike}
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isLiked ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff2e2e" stroke="#ff2e2e" strokeWidth="2">
                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
               </svg>
            ) : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
               </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
