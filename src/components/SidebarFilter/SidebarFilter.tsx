"use client";

import React, { useState } from 'react';
import styles from './SidebarFilter.module.css';

const filterGroups = [
  { id: 'ideal-for', label: 'IDEAL FOR', defaultOpen: true, options: ['Men', 'Women', 'Baby & Kids'] },
  { id: 'occasion', label: 'OCCASION', defaultOpen: false, options: ['Rainy', 'Casual', 'Party'] },
  { id: 'work', label: 'WORK', defaultOpen: false, options: ['French Wire', 'Embroidery', 'Printed'] },
  { id: 'fabric', label: 'FABRIC', defaultOpen: false, options: ['Cotton', 'Silk', 'Linen'] },
  { id: 'segment', label: 'SEGMENT', defaultOpen: false, options: ['Ethnic', 'Western'] },
  { id: 'suitable-for', label: 'SUITABLE FOR', defaultOpen: false, options: ['Formal Wear', 'Daily Wear'] },
  { id: 'raw-materials', label: 'RAW MATERIALS', defaultOpen: false, options: ['Wool', 'Polyester'] },
  { id: 'pattern', label: 'PATTERN', defaultOpen: false, options: ['Striped', 'Solid', 'Checkered'] },
];

export default function SidebarFilter() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    filterGroups.reduce((acc, group) => ({ ...acc, [group.id]: group.defaultOpen }), {})
  );

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizable}>
        <input type="checkbox" id="customizable" className={styles.checkbox} />
        <label htmlFor="customizable" className={styles.customizableLabel}>CUSTOMIZABLE</label>
      </div>

      {filterGroups.map((group) => (
        <div key={group.id} className={styles.filterGroup}>
          <button 
            className={styles.groupHeader} 
            onClick={() => toggleGroup(group.id)}
            aria-expanded={Boolean(openGroups[group.id])}
          >
             <div className={styles.headerTitleGroup}>
                <span className={styles.groupLabel}>{group.label}</span>
                <span className={styles.groupStatus}>All</span>
             </div>
            <span className={styles.groupIcon}>{openGroups[group.id] ? '▲' : '▼'}</span>
          </button>
          
          {openGroups[group.id] && (
            <div className={styles.groupContent}>
              <button className={styles.unselectAll}>Unselect all</button>
              {group.options.map((opt) => (
                <label key={opt} className={styles.filterOption}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
