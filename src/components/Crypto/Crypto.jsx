import React from 'react';
import styles from './Crypto.module.css';
import { Inter } from '@next/font/google';
import AddCrypto from './AddCrypto';

import Graph from './Graph';
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

// Not used Currently
async function getTop10() {
  const res = await fetch('https://api.coincap.io/v2/assets');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();
  const top10 = data.slice(0, 10).map((cryp) => ({
    symbol: cryp.symbol,
    name: cryp.name,
  }));
  return top10;
}

async function getDailyChange(coin) {
  const res = await fetch(
    `https://api.coincap.io/v2/assets/${coin}/history?interval=h1`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const { data } = await res.json();
  const history = data.slice(0, 24).map((d) => ({
    price: Number(d.priceUsd),
  }));
  history.name = coin;
  return history;
}

export default async function Crypto() {
  const data = await getData();
  const top10 = await getTop10();
  const btcChange = await getDailyChange('bitcoin');
  const ethChange = await getDailyChange('ethereum');
  const cardanoChange = await getDailyChange('cardano');
  return (
    <div className={`${inter.className} ${styles.container}`}>
      <span className={styles.tag}>Crypto Tracker</span>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.graphs}>
            <Graph change={btcChange} name={btcChange.name} />
            <Graph change={ethChange} name={ethChange.name} />
          </div>
          <div className={styles.yourCrypto}>
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
      </div>
    </div>
  );
}
