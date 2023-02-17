'use client';

import React, { useState, useEffect } from 'react';
import styles from './Theme.module.css';

import { useTheme } from 'next-themes';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true, []));

  if (!mounted) return null;
  return (
    <div className={`${inter.className} ${styles.container}`}>
      <span className={styles.tag}>Theme Selector</span>
      <div className={styles.wrapper}>
        <button
          className={
            theme == 'pink' ? styles.selected : styles.button
          }
          onClick={() => setTheme('pink')}
        >
          Pink
        </button>
        <button
          className={
            theme == 'light' ? styles.selected : styles.button
          }
          onClick={() => setTheme('light')}
        >
          Light
        </button>
        <button
          className={
            theme == 'dark' ? styles.selected : styles.button
          }
          onClick={() => setTheme('dark')}
        >
          Dark
        </button>
        <button
          className={
            theme == 'green' ? styles.selected : styles.button
          }
          onClick={() => setTheme('green')}
        >
          Green
        </button>
      </div>
    </div>
  );
}
