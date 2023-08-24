import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "100,000",
      position: "top",
      font: { weight: "bold", size: 40 },
      align: "start",
      color: "#000000",
    },
    subtitle: {
      display: true,
      text: "Participants",
      position: "top",
      font: { weight: "normal", size: 20 },
      align: "start",
      color: "#000000",
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        display: false,
      },
      display: false,
    },
    y: {
      min: 0,
      max: 200,
      stepSize: 5,
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const labels = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "nov",
  "december",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Data",
      data: {
        jan: 30,
        feb: 10,
        march: 50,
        april: 100,
        may: 80,
        june: 70,
        july: 150,
        august: 130,
        september: 60,
        october: 40,
        nov: 200,
        december: 110,
      },
      backgroundColor: "#ffbb33",
      borderRadius: 4,
    },
  ],
};

export default function BarChart() {
  return (
    <div className="col-lg-12">
      <div className="shadow-sm p-3 mb-5 bg-white rounded text-start">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
