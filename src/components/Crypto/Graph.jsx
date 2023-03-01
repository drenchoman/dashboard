'use client';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ change, name }) {
  const options = {
    responsive: true,
    plugins: {
      legned: {
        position: 'top',
      },
      title: {
        display: false,
        text: name,
      },
    },
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [chartData, setChartData] = useState({
    labels: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    datasets: [
      {
        label: `${capitalizeFirstLetter(name)} Last 24 hrs`,
        data: change.map((d) => Number(d.price)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
    // borderColor: 'black',
    // borderWidth: 2,
  });
  return (
    <div>
      <Line datasetIdKey="id" options={options} data={chartData} />
    </div>
  );
}
