import React, { useState } from "react";

const HoldingsTable = ({ holdings }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "symbol",
    direction: "asc",
  });
  const [search, setSearch] = useState("");

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortedHoldings = [...holdings].sort((a, b) => {
    if (sortConfig.key === "symbol") {
      return sortConfig.direction === "asc"
        ? a.symbol.localeCompare(b.symbol)
        : b.symbol.localeCompare(a.symbol);
    }
    return sortConfig.direction === "asc"
      ? a[sortConfig.key] - b[sortConfig.key]
      : b[sortConfig.key] - a[sortConfig.key];
  });

  const filteredHoldings = sortedHoldings.filter(
    (holding) =>
      holding.symbol.toLowerCase().includes(search.toLowerCase()) ||
      holding.name.toLowerCase().includes(search.toLowerCase())
  );

  const SortIndicator = ({ column }) => {
    if (sortConfig.key !== column) return null;
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
        <h3 className="text-xl font-bold text-gray-800">Holdings</h3>
        <input
          type="text"
          placeholder="Search holdings..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th
                className="p-3 text-left cursor-pointer hover:bg-gray-200"
                onClick={() => requestSort("symbol")}
              >
                Symbol <SortIndicator column="symbol" />
              </th>
              <th className="p-3 text-left">Name</th>
              <th
                className="p-3 text-right cursor-pointer hover:bg-gray-200"
                onClick={() => requestSort("quantity")}
              >
                Quantity <SortIndicator column="quantity" />
              </th>
              <th className="p-3 text-right">Value</th>
              <th
                className="p-3 text-right cursor-pointer hover:bg-gray-200"
                onClick={() => requestSort("gainLossPercent")}
              >
                Gain/Loss % <SortIndicator column="gainLossPercent" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredHoldings.length > 0 ? (
              filteredHoldings.map((holding) => (
                <tr
                  key={holding.symbol}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">{holding.symbol}</td>
                  <td className="p-3">{holding.name}</td>
                  <td className="p-3 text-right">{holding.quantity}</td>
                  <td className="p-3 text-right">
                    ₹{holding.value.toLocaleString()}
                  </td>
                  <td
                    className={`p-3 text-right font-semibold ${
                      holding.gainLossPercent >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {holding.gainLossPercent.toFixed(2)}%
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-4 text-center text-gray-500 italic"
                >
                  No holdings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoldingsTable;
