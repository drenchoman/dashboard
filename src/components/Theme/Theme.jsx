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
    <div className={inter.className}>
      The theme is {theme}
      <button></button>
    </div>
  );
}
