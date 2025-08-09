import React from "react";

const OverviewCards = ({ summary, holdings }) => {
  const cards = [
    {
      title: "Total Value",
      value: `₹${summary.totalValue?.toLocaleString() || 0}`,
      color: "text-gray-800",
    },
    {
      title: "Gain/Loss",
      value: `₹${summary.totalGainLoss?.toLocaleString() || 0}`,
      color: summary.totalGainLoss >= 0 ? "text-green-600" : "text-red-600",
    },
    {
      title: "Performance",
      value: `${(summary.totalGainLossPercent || 0).toFixed(2)}%`,
      color:
        summary.totalGainLossPercent >= 0 ? "text-green-600" : "text-red-600",
    },
    {
      title: "Holdings",
      value: holdings?.length || 0,
      color: "text-gray-800",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-1">
            {card.title}
          </h3>
          <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
