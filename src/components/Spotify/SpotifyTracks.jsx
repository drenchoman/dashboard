import React from 'react';
import Image from 'next/image';
import styles from './Spotify.module.css';
import { Inter } from '@next/font/google';
import getAccessToken from '@/lib/spotifyaccess';

const inter = Inter({ subsets: ['latin'] });

async function getTopTracks() {
  const { access_token } = await getAccessToken();
  const res = await fetch(
    'https://api.spotify.com/v1/me/top/tracks',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const { items } = await res.json();

  const tracks = items.slice(0, 5).map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    url: track.external_urls.spotify,
    coverImage: track.album.images[1],
  }));

  return tracks;
}

// Can move to own lib, gets access token for spotify calls

export default async function SpotifyTracks() {
  const tracks = await getTopTracks();

  return (
    <div className={inter.className}>
      <span className={styles.tag}>Top Tracks</span>
      {tracks.map((track, i) => (
        <div className={styles.wrapper} key={i}>
          <div className={styles.info}>
            <h3>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={track.url}
              >
                {track.title}
              </a>
            </h3>
            <p>{track.artist}</p>
          </div>

          <Image
            src={track.coverImage.url}
            alt="Image"
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}
