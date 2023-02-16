import React from 'react';
import Image from 'next/image';
import styles from './Spotify.module.css';
import { Inter } from '@next/font/google';
// curl -H "Authorization: Basic <base64 encoded client_id:client_secret>" -d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A%2F%2Flocalhost:3000/callback https://accounts.spotify.com/api/token

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
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const { items } = await res.json();

  const tracks = items.slice(0, 10).map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    url: track.external_urls.spotify,
    coverImage: track.album.images[1],
  }));

  return tracks;
}

// Can move to own lib, gets access token for spotify calls

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT}:${process.env.SPOTIFY_SECRET}`
        ).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    }
  );

  return response.json();
};

export default async function Gif() {
  const data = await getTopTracks();
  console.log(data);

  return (
    <div className={inter.className}>
      <h2>test</h2>
    </div>
  );
}
