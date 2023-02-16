import Image from 'next/image';
import styles from './page.module.css';
import Weather from '@/components/Weather/Weather';
import Gif from '@/components/Gif/Gif';
import Spotify from '@/components/Spotify/Spotify';

export default async function Home() {
  return (
    <main className={styles.grid}>
      <div className={styles.nav}>Nav</div>
      <div className={styles.main}>
        <Spotify />
      </div>
      <div className={styles.weather}></div>
      <div className={styles.gif}></div>
      <div className={styles.side}></div>
    </main>
  );
}
