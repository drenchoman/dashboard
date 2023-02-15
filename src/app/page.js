import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Weather from '@/components/Weather/Weather';
const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  return (
    <main className={styles.grid}>
      <div className={styles.nav}>Nav</div>
      <div className={styles.main}></div>
      <div className={styles.weather}>
        <Weather />
      </div>
      <div className={styles.side}>Side</div>
    </main>
  );
}
