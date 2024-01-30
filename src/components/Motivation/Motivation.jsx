import React from 'react';
import styles from './Motivation.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

async function getData() {
  const res = await fetch('https://api.adviceslip.com/advice');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Motivation() {
  const data = await getData();
  return (
    <div className={inter.className}>
      <span className={styles.tag}>Daily Advice</span>
      <div className={styles.container}>
        <h3>{data.slip.advice}</h3>
      </div>
    </div>
  );
}
