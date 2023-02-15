import Image from 'next/image';
import styles from './page.module.css';
import Weather from '@/components/Weather/Weather';
import Gif from '@/components/Gif/Gif';

export default async function Home() {
  return (
    <main className={styles.grid}>
      <div className={styles.nav}>Nav</div>
      <div className={styles.main}></div>
      <div className={styles.weather}>
        <Weather />
      </div>
      <div className={styles.side}>
        <Gif />
      </div>
    </main>
  );
}
