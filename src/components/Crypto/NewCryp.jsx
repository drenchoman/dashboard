'use client';
import React from 'react';
import useSWR from 'swr';
import styles from './Crypto.module.css';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// async function getData(name) {
//   const res = await fetch(`https://api.coincap.io/v2/assets/${name}`);

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   const data = await res.json();

//   // const top2 = data.map((cryp) => ({
//   //   rank: cryp.rank,
//   //   symbol: cryp.symbol,
//   //   name: cryp.name,
//   //   price: cryp.priceUsd,
//   //   change: cryp.changePercent24Hr,
//   // }));
//   return data;
// }

export default function NewCryp() {
  const { data, error, isLoading } = useSWR(
    `https://api.coincap.io/v2/assets/poo`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h3>
        {data.data.name}{' '}
        <span className={styles.symbol}>{data.data.symbol}</span>
      </h3>
      <div className={styles.stats}>
        <p>$ {Number(data.data.priceUsd).toFixed(2)}</p>
        <p>
          Change
          {Number(data.data.changePercent24Hr).toFixed(2) < 0 ? (
            <span className={styles.red}>
              {Number(data.data.changePercent24Hr).toFixed(2)}%
            </span>
          ) : (
            <span className={styles.green}>
              {Number(data.data.changePercent24Hr).toFixed(2)}%
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
