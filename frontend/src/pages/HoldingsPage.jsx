import React, { useEffect, useState } from "react";
import HoldingsTable from "../components/HoldingsTable";

const HoldingsPage = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio/holdings")
      .then((res) => res.json())
      .then((data) => {
        setHoldings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading holdings...</p>;

  return (
    <div>
      <h1>Holdings</h1>
      <HoldingsTable holdings={holdings} />
    </div>
  );
};

export default HoldingsPage;
