import React, { useEffect, useState } from "react";
import PerformanceChart from "../components/PerformanceChart";

const PerformancePage = () => {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio/performance")
      .then((res) => res.json())
      .then((data) => {
        setPerformance(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading performance data...</p>;

  return (
    <div>
      <h1>Performance</h1>
      <PerformanceChart performance={performance} />
    </div>
  );
};

export default PerformancePage;
