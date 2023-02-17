import React from 'react';
import styles from './Motivation.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

async function getData() {
  const res = await fetch('https://api.goprogram.ai/inspiration');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Motivation() {
  const data = await getData();
  return (
    <div className={inter.className}>
      <span className={styles.tag}>Daily Motivation</span>
      <div className={styles.container}>
        <h3>{data.quote}</h3>
        <p>-{data.author}</p>
      </div>
    </div>
  );
}
