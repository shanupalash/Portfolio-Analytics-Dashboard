import React from "react";

const TopPerformers = ({ summary = {} }) => {
  const { topPerformer, worstPerformer, diversificationScore, riskLevel } =
    summary;

  const formatGain = (percent) => {
    if (percent == null) return "—";
    const color = percent >= 0 ? "text-green-500" : "text-red-500";
    return <span className={color}>{percent}%</span>;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Top Performers</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-md font-semibold text-gray-700 mb-1">
            Best Performer
          </h4>
          <p className="text-gray-900 font-medium">
            {topPerformer?.name || "—"}
          </p>
          <p className="text-lg font-semibold">
            {formatGain(topPerformer?.gainPercent)}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-md font-semibold text-gray-700 mb-1">
            Worst Performer
          </h4>
          <p className="text-gray-900 font-medium">
            {worstPerformer?.name || "—"}
          </p>
          <p className="text-lg font-semibold">
            {formatGain(worstPerformer?.gainPercent)}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Diversification Score</p>
          <p className="text-xl font-bold text-gray-800">
            {diversificationScore ?? "—"}
          </p>
        </div>
        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Risk Level</p>
          <p className="text-xl font-bold text-gray-800">{riskLevel ?? "—"}</p>
        </div>
      </div>
    </div>
  );
};

export default TopPerformers;
