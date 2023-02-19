import React from 'react';
import styles from './Crypto.module.css';

async function getData() {
  const res = await fetch('test');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Crypto() {
  const data = await getData();
  return (
    <div>
      <span className={styles.tag}>Crypto Tracker</span>
      <div></div>Crypto
    </div>
  );
}
