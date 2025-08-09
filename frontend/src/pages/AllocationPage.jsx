import React, { useEffect, useState } from "react";
import AllocationCharts from "../components/AllocationCharts";

const AllocationPage = () => {
  const [allocation, setAllocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio/allocation")
      .then((res) => res.json())
      .then((data) => {
        setAllocation(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Portfolio Allocation
        </h1>

        <div className="bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-[1.01]">
          {allocation ? (
            <AllocationCharts allocation={allocation} />
          ) : (
            <p className="text-gray-500">No allocation data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllocationPage;
