import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AllocationCharts = ({ allocation }) => {
  const sectorChartRef = useRef(null);
  const marketCapChartRef = useRef(null);
  const sectorChartInstance = useRef(null);
  const marketCapChartInstance = useRef(null);

  useEffect(() => {
    // Destroy previous charts to prevent overlap
    if (sectorChartInstance.current) {
      sectorChartInstance.current.destroy();
    }
    if (marketCapChartInstance.current) {
      marketCapChartInstance.current.destroy();
    }

    // Chart colors (expanded palette)
    const colors = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40",
      "#B2FF66",
    ];

    if (allocation?.bySector) {
      const sectorCtx = sectorChartRef.current.getContext("2d");
      sectorChartInstance.current = new Chart(sectorCtx, {
        type: "pie",
        data: {
          labels: Object.keys(allocation.bySector),
          datasets: [
            {
              data: Object.values(allocation.bySector).map(
                (item) => item.percentage
              ),
              backgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "bottom", labels: { color: "#333" } },
          },
        },
      });
    }

    if (allocation?.byMarketCap) {
      const marketCapCtx = marketCapChartRef.current.getContext("2d");
      marketCapChartInstance.current = new Chart(marketCapCtx, {
        type: "doughnut",
        data: {
          labels: Object.keys(allocation.byMarketCap),
          datasets: [
            {
              data: Object.values(allocation.byMarketCap).map(
                (item) => item.percentage
              ),
              backgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "60%",
          plugins: {
            legend: { position: "bottom", labels: { color: "#333" } },
          },
        },
      });
    }
  }, [allocation]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Asset Allocation</h3>
      {allocation ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-md font-semibold mb-2 text-gray-700">
              By Sector
            </h4>
            <canvas ref={sectorChartRef}></canvas>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-md font-semibold mb-2 text-gray-700">
              By Market Cap
            </h4>
            <canvas ref={marketCapChartRef}></canvas>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 italic">No allocation data available.</p>
      )}
    </div>
  );
};

export default AllocationCharts;
