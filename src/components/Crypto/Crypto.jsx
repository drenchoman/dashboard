import React from 'react';
import styles from './Crypto.module.css';

async function getData() {
  const res = await fetch('https://api.coincap.io/v2/assets');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();
  const top2 = data.slice(0, 2).map((cryp) => ({
    rank: cryp.rank,
    symbol: cryp.symbol,
    name: cryp.name,
    price: cryp.priceUsd,
    change: cryp.changePercent24Hr,
  }));
  return top2;
}

export default async function Crypto() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <span className={styles.tag}>Crypto Tracker</span>
      <div></div>
    </div>
  );
}
