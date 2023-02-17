import Image from 'next/image';
import styles from './page.module.css';
import Weather from '@/components/Weather/Weather';
import Gif from '@/components/Gif/Gif';
import SpotifyTracks from '@/components/Spotify/SpotifyTracks';
import SpotifyArtists from '@/components/Spotify/SpotifyArtists';
import Theme from '@/components/Theme/Theme';

export default async function Home() {
  return (
    <main className={styles.grid}>
      <section className={styles.nav}>
        <div className={styles.theme}>
          <Theme />
        </div>
      </section>
      <div className={styles.main}>
        <SpotifyTracks />
      </div>
      <section className={styles.right}>
        <div className={styles.weather}>
          <Weather />
        </div>
        <div className={styles.gif}>
          <Gif />
        </div>
        <div className={styles.artists}>
          <SpotifyArtists />
        </div>
      </section>
    </main>
  );
}
