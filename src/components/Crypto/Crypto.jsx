import React from 'react';
import styles from './Crypto.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

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

  return (
    <div className={inter.className}>
      <span className={styles.tag}>Crypto Tracker</span>
      <div>
        {data.map((cryp) => (
          <div key={cryp.rank}>
            <h3>
              {cryp.name}{' '}
              <span className={styles.symbol}>{cryp.symbol}</span>
            </h3>
            <div className={styles.stats}>
              <p>$ {Math.round(cryp.price)}</p>
              <p>
                Change
                {Number(cryp.change).toFixed(2) < 0 ? (
                  <span className={styles.red}>
                    {Number(cryp.change).toFixed(2)}%
                  </span>
                ) : (
                  <span className={styles.green}>
                    {Number(cryp.change).toFixed(2)}%
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
