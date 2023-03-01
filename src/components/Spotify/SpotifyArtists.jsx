import React from 'react';
import Image from 'next/image';
import styles from './Spotify.module.css';
import { Inter } from '@next/font/google';
import getAccessToken from '@/lib/spotifyaccess';
// curl -H "Authorization: Basic <base64 encoded client_id:client_secret>" -d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A%2F%2Flocalhost:3000/callback https://accounts.spotify.com/api/token

const inter = Inter({ subsets: ['latin'] });

async function getTopArists() {
  const { access_token } = await getAccessToken();
  const res = await fetch(
    'https:/api.spotify.com/v1/me/top/artists',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const { items } = await res.json();

  const artists = items.slice(0, 5).map((artist) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    coverImage: artist.images[1],
    followers: artist.followers.total,
  }));
  return artists;
}

export default async function SpotifyArtists() {
  const artists = await getTopArists();

  return (
    <div className={`${inter.className}`}>
      <span className={styles.tag}>Top Artists</span>
      <div className={styles.container}>
        {artists.map((artist, i) => (
          <div className={styles.artist} key={i}>
            <Image
              src={artist.coverImage.url}
              width={100}
              height={100}
              alt="Artist"
            />

            <h3>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={artist.url}
              >
                {artist.name}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
