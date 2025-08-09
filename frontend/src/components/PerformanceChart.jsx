import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PerformanceChart = ({ performance }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!performance?.timeline) return;

    // Destroy old chart before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: performance.timeline.map((item) => item.date),
        datasets: [
          {
            label: "Portfolio",
            data: performance.timeline.map((item) => item.portfolio),
            borderColor: "#36A2EB",
            backgroundColor: "rgba(54, 162, 235, 0.1)",
            fill: true,
            tension: 0.3,
          },
          {
            label: "Nifty 50",
            data: performance.timeline.map((item) => item.nifty50),
            borderColor: "#FF6384",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            fill: true,
            tension: 0.3,
          },
          {
            label: "Gold",
            data: performance.timeline.map((item) => item.gold),
            borderColor: "#FFCE56",
            backgroundColor: "rgba(255, 206, 86, 0.1)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#444", usePointStyle: true },
          },
        },
        scales: {
          x: { ticks: { color: "#666" } },
          y: { ticks: { color: "#666" }, beginAtZero: false },
        },
      },
    });
  }, [performance]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Performance Comparison
      </h3>
      <canvas ref={chartRef}></canvas>

      {performance?.returns && (
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-3">Returns</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.keys(performance.returns).map((key) => (
              <div
                key={key}
                className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <h5 className="capitalize font-medium text-gray-700 mb-2">
                  {key}
                </h5>
                <p className="text-sm">
                  <span className="font-semibold">1M:</span>{" "}
                  {performance.returns[key]["1month"]}%
                </p>
                <p className="text-sm">
                  <span className="font-semibold">3M:</span>{" "}
                  {performance.returns[key]["3months"]}%
                </p>
                <p className="text-sm">
                  <span className="font-semibold">1Y:</span>{" "}
                  {performance.returns[key]["1year"]}%
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;
