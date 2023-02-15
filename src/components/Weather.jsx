import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
import Image from 'next/image';

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

  return (
    <div>
      <h3>Weather in {name}</h3>
      <p>
        <TbTemperatureCelsius />
        {main.temp}
      </p>
      <div>
        <p>{weather[0].main}</p>
        <div>
          <Image
            width={30}
            height={30}
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather"
          />
        </div>
      </div>
    </div>
  );
}
