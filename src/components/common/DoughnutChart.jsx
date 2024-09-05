import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Title, Tooltip } from "chart.js";

const DoughnutChart = ({ chartData }) => {
  Chart.register(ArcElement, Title, Tooltip);

  const data = {
    labels: ["Alogrithms Structure", "Empty"],
    datasets: [
      {
        label: "Alogrithms Structure",
        data: chartData.percent,
        backgroundColor: ["#5a77df", "rgb(50, 57, 84)"],
        hoverOffset: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        position: "bottom",
        text: chartData.title,
      },
    },
  };
  return (
    <>
      <Doughnut options={options} data={data} />
    </>
  );
};

export default DoughnutChart;
