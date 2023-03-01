import React from 'react';
import Image from 'next/image';
import styles from './Welcome.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Welcome() {
  const date = new Date();

  return (
    <div className={`${inter.className} ${styles.container}`}>
      <div className={styles.image}>
        <Image
          width={50}
          height={50}
          src={
            'https://res.cloudinary.com/dbyprqeyc/image/upload/v1675313489/pic_cpdbmi.jpg'
          }
          alt="Profile Picture"
        />
      </div>
      <div className={styles.welcome}>
        <h1>Welcome Back Oscar</h1>
        <div className={styles.info}>
          <p>It is {date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
