import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js/auto";

const BarChart = () => {
  Chart.register(
    LinearScale,
    CategoryScale,
    BarElement,
    Legend,
    Title,
    Tooltip
  );

  const data = {
    labels: [
      "Algorithms structures",
      "Object program",
      "Database program",
      "Web develop",
      "Mobile application",
      "Machine learning",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "#5a77df",
          "#5a77df",
          "#5a77df",
          "#5a77df",
          "#5a77df",
          "#5a77df",
        ],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: false,
        position: "bottom",
      },
    },
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default BarChart;
