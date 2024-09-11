import React from "react";

const CircleChart = ({ percentage, label }) => {
  const radius = 40; // Radius of the circle
  const strokeWidth = 20; // Width of the circle's stroke
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circle-wrapper d-flex flex-column justify-content-center align-items-center">
      <div className="circle-chart">
        <svg width="120" height="120">
          <circle
            className="circle-bg"
            cx="60"
            cy="60"
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className="circle-progress"
            cx="60"
            cy="60"
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            className="circle-text fw-bold fs-14"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      {/* <p className="circle-label fs-13 text-wrap">{label}</p> */}
    </div>
  );
};

export default CircleChart;
