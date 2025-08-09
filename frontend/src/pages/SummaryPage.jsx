import React, { useEffect, useState } from "react";
import OverviewCards from "../components/OverviewCards";
import TopPerformers from "../components/TopPerformers";

const SummaryPage = () => {
  const [summary, setSummary] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/portfolio/summary").then((res) =>
        res.json()
      ),
      fetch("http://localhost:5000/api/portfolio/holdings").then((res) =>
        res.json()
      ),
    ])
      .then(([summaryData, holdingsData]) => {
        setSummary(summaryData);
        setHoldings(holdingsData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading summary...</p>;

  return (
    <div>
      <h1>Portfolio Summary</h1>
      <OverviewCards summary={summary} holdings={holdings} />
      <TopPerformers summary={summary} />
    </div>
  );
};

export default SummaryPage;
