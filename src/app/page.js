import Image from 'next/image';
import styles from './page.module.css';
import Weather from '@/components/Weather/Weather';
import Gif from '@/components/Gif/Gif';
import SpotifyTracks from '@/components/Spotify/SpotifyTracks';
import SpotifyArtists from '@/components/Spotify/SpotifyArtists';
import Theme from '@/components/Theme/Theme';
import Welcome from '@/components/Welcome/Welcome';
import PremLeague from '@/components/PremLeague/PremLeague';
import ALeague from '@/components/ALeague/Aleague';
import Motivation from '@/components/Motivation/Motivation';

export default async function Home() {
  return (
    <main className={styles.grid}>
      <section className={styles.nav}>
        <div className={styles.welcome}>
          <Welcome />
        </div>
        <div className={styles.motivation}>
          <Motivation />
        </div>
        <div className={styles.tracks}>
          <SpotifyTracks />
        </div>

        <div className={styles.theme}>
          <Theme />
        </div>
      </section>
      <section className={styles.main}>
        <section className={styles.football}>
          <div className={styles.premTable}>
            <PremLeague />
          </div>
          <div className={styles.aLeagueTable}>
            <ALeague />
          </div>
        </section>
      </section>
      <section className={styles.right}>
        <div className={styles.weather}>
          {/* <Weather /> </div>
        <div className={styles.gif}>{/* <Gif /> */}
        </div>
        <div className={styles.artists}>
          <SpotifyArtists />
        </div>
      </section>
    </main>
  );
}
