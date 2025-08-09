// src/pages/OverviewPage.jsx
import React from "react";
import OverviewCards from "../components/OverviewCards";

const OverviewPage = ({ data }) => {
  return <OverviewCards summary={data.summary} holdings={data.holdings} />;
};

export default OverviewPage;
