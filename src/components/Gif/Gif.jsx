import React from 'react';
import Image from 'next/image';
import styles from './Gif.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

async function getData() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Gif() {
  const data = await getData();
  // console.log(data);
  const url = data.data.images.original;
  return (
    <div className={inter.className}>
      <span className={styles.tag}>Random Gif</span>

      <Image
        src={url.url}
        width={url.width}
        height={300}
        alt="test"
      />
    </div>
  );
}
