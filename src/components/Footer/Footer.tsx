"use client";

import React, { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.newsletter}>
            <h3 className={styles.heading}>BE THE FIRST TO KNOW</h3>
            <p className={styles.text}>Sign up for updates from mettā muse.</p>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Enter your e-mail..." className={styles.input} />
              <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.heading}>CONTACT US</h3>
            <p className={styles.text}>+44 221 133 5360</p>
            <p className={styles.text}>customercare@mettamuse.com</p>
            <h3 className={styles.heading}>CURRENCY</h3>
            <div className={styles.currency}>
              <img src="/us.png" alt="US Flag" width={36} height={36} className={styles.flagImg} />
              <span className={styles.currencyDiamond}>&#9670;</span>
              <span className={styles.usd}>USD</span>
            </div>
            <p className={styles.tinyText}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomSection}>
          <div className={styles.linksColumn}>
            <button 
              className={styles.mobileContextBtn} 
              onClick={() => toggleSection('metta')}
            >
              <h3 className={styles.heading}>mettā muse</h3>
              <span className={styles.chevron}>{openSection === 'metta' ? '▲' : '▼'}</span>
            </button>
            <ul className={`${styles.linkList} ${openSection === 'metta' ? styles.open : ''}`}>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <button 
              className={styles.mobileContextBtn} 
              onClick={() => toggleSection('links')}
            >
              <h3 className={styles.heading}>QUICK LINKS</h3>
              <span className={styles.chevron}>{openSection === 'links' ? '▲' : '▼'}</span>
            </button>
            <ul className={`${styles.linkList} ${openSection === 'links' ? styles.open : ''}`}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className={styles.socialColumn}>
            <button 
              className={styles.mobileContextBtn} 
              onClick={() => toggleSection('social')}
            >
              <h3 className={styles.heading}>FOLLOW US</h3>
              <span className={styles.chevron}>{openSection === 'social' ? '▲' : '▼'}</span>
            </button>
            <div className={`${styles.socialContent} ${openSection === 'social' ? styles.open : ''}`}>
              <div className={styles.socialIcons}>
                <div className={styles.iconWrapper}>
                  <img src="/ig.png" alt="Instagram" width={24} height={24} className={styles.socialImg} />
                </div>
                <div className={styles.iconWrapper}>
                  <img src="/in.png" alt="LinkedIn" width={24} height={24} className={styles.socialImg} />
                </div>
              </div>
              <h3 className={styles.headingOuter}>mettā muse ACCEPTS</h3>
              <div className={styles.paymentIcons}>
                <div className={`${styles.payIcon} ${styles.payIconWhite}`}>
                  <img src="/gpay.png" alt="Google Pay" height={28} width={48} className={styles.payImg} />
                </div>
                <div className={`${styles.payIcon} ${styles.payIconWhite}`}>
                  <img src="/mastercard.png" alt="Mastercard" height={28} width={48} className={styles.payImg} />
                </div>
                <div className={`${styles.payIcon} ${styles.payIconWhite}`}>
                  <img src="/paypal.png" alt="PayPal" height={28} width={48} className={styles.payImg} />
                </div>
                <div className={`${styles.payIcon} ${styles.payIconWhite} ${styles.payIconBlue}`}> 
                  <img src="/amex.png" alt="Amex" height={28} width={48} className={styles.payImg} />
                </div>
                <div className={`${styles.payIcon} ${styles.payIconWhite}`}>
                  <img src="/applepay.png" alt="Apple Pay" height={28} width={48} className={styles.payImg} />
                </div>
                <div className={`${styles.payIcon} ${styles.payIconWhite} ${styles.payIconPurple}`}> 
                  <img src="/pay.png" alt="Pay" height={28} width={48} className={styles.payImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright © 2026 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
