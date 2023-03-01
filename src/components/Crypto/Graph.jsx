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

const options = {
  responsive: true,
  plugins: {
    legned: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'test',
    },
  },
};

export default function Graph({ change }) {
  const [chartData, setChartData] = useState({
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24,
    ],
    datasets: [
      {
        label: 'Test',
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
