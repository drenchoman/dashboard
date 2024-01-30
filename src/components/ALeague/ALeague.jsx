import React from 'react';
import Image from 'next/image';
import styles from './ALeague.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
async function getData() {
  const res = await fetch(
    'https://api-football-standings.azharimm.dev/leagues/aus.1/standings?season=2023'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const { data } = await res.json();
  const standings = data.standings.slice(0, 5).map((team) => ({
    team: team.team.name,
    url: team.team.logos[0].href,
    gamesPlayed: team.stats[0].value,
    losses: team.stats[1].value,
    points: team.stats[2].value,
    goalsAgainst: team.stats[3].value,
    goalsFor: team.stats[4].value,
    draws: team.stats[5].value,
    wins: team.stats[6].value,
    goalDifference: team.stats[8].value,
  }));
  return standings;
}

export default async function ALeague() {
  const data = await getData();
  return (
    <div className={inter.className}>
      <span className={styles.tag}>A League Table</span>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Club</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td className={styles.club}>
                {d.team}

                <Image
                  width={20}
                  height={20}
                  alt="Club Logo"
                  src={d.url}
                />
              </td>
              <td>{d.gamesPlayed}</td>
              <td>{d.wins}</td>
              <td>{d.draws}</td>
              <td>{d.losses}</td>
              <td>{d.goalsFor}</td>
              <td>{d.goalsAgainst}</td>
              <td>{d.goalDifference}</td>
              <td>{d.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
