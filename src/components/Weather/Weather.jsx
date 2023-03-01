import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
import Image from 'next/image';
import styles from '@/components/Weather/Weather.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

async function getData() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${process.env.WEATHER_KEY}&units=metric`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Weather() {
  const data = await getData();
  const { main, name, weather } = data;
  const desc =
    weather[0].description.charAt(0).toUpperCase() +
    weather[0].description.slice(1);

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <span className={styles.tag}>Today&apos;s Weather</span>
      <h3 className={styles.header}>{name}</h3>

      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span>{desc}</span>

          <div className={styles.image}>
            <Image
              width={30}
              height={30}
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt="weather"
            />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.row}>
            <p className={styles.tempNum}>{parseInt(main.temp)}</p>
            <TbTemperatureCelsius className={styles.temp} />
          </div>

          <div className={styles.stats}>
            <ul>
              <li>Feels like: {parseInt(main.feels_like)}°</li>
              <li>Today&apos;s high: {parseInt(main.temp_max)}°</li>
              <li>Today&apos;s low: {parseInt(main.temp_min)}°</li>
              <li>Humidty: {parseInt(main.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
