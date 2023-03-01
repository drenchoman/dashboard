'use client';
import React, { useState, Suspense } from 'react';
import NewCryp from './NewCryp';
import styles from './Crypto.module.css';

export default function AddCrypto({ top10 }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.addWrapper}>
      <h3>Click to add</h3>
      {top10.map((cryp, i) => (
        <div key={i}>
          <button>
            <h4>
              {cryp.name}{' '}
              <span className={styles.symbol}>{cryp.symbol}</span>
            </h4>
          </button>
        </div>
      ))}
    </div>
  );
}
