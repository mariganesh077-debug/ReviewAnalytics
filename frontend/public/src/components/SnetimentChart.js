import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // ✅ Import plugin

// Register all components + plugin
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const SentimentChart = ({ reviews }) => {
  const counts = { positive: 0, negative: 0, neutral: 0 };

  reviews.forEach((r) => {
    counts[r.sentiment] = (counts[r.sentiment] || 0) + 1;
  });

  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: [counts.positive, counts.negative, counts.neutral],
        backgroundColor: ["#4CAF50", "#F44336", "#FFC107"],
        borderColor: ["#388E3C", "#D32F2F", "#FFA000"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 30,
          usePointStyle: true,
          font: {
            size: 18,
            weight: "bold",
            family: "Arial, Helvetica, sans-serif",
          },
          color: "#000",
          boxWidth: 22,
          boxHeight: 14,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const dataset = data.datasets[0];
                const value = dataset.data[i];
                const total = dataset.data.reduce((a, b) => a + b, 0);
                const percentage =
                  total > 0 ? ((value / total) * 100).toFixed(1) : 0;

                return {
                  text: `${label} (${value} - ${percentage}%)`,
                  fillStyle: dataset.backgroundColor[i],
                  strokeStyle: dataset.borderColor[i],
                  lineWidth: 2,
                  pointStyle: "circle",
                  hidden: false,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage =
              total > 0 ? ((context.parsed / total) * 100).toFixed(1) : 0;
            return `${context.label}: ${context.parsed} reviews (${percentage}%)`;
          },
        },
      },
      datalabels: {
        color: (context) => {
          // auto-switch label color for readability
          const bgColor = context.dataset.backgroundColor[context.dataIndex];
          return bgColor === "#FFC107" ? "#000" : "#fff"; // black on yellow, white on others
        },
        font: {
          weight: "bold",
          size: 14,
        },
        textAlign: "center",
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage =
            total > 0 ? ((value / total) * 100).toFixed(1) : 0;
          return `${value}\n(${percentage}%)`; // show count + percentage
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1200,
      easing: "easeOutQuart",
    },
  };

  return (
    <div style={{ width: "100%", height: "420px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SentimentChart;
