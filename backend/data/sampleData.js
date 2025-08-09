module.exports = {
  holdings: [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries Ltd",
      quantity: 50,
      avgPrice: 2450.0,
      currentPrice: 2680.5,
      sector: "Energy",
      marketCap: "Large",
      value: 134025.0,
      gainLoss: 11525.0,
      gainLossPercent: 9.4,
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      quantity: 100,
      avgPrice: 1800.0,
      currentPrice: 2010.75,
      sector: "Technology",
      marketCap: "Large",
      value: 201075.0,
      gainLoss: 21075.0,
      gainLossPercent: 11.7,
    },
  ],
  allocation: {
    bySector: {
      Technology: { value: 250000, percentage: 35.7 },
      Banking: { value: 180000, percentage: 25.7 },
      Energy: { value: 134025, percentage: 19.1 },
      Healthcare: { value: 136000, percentage: 19.4 },
    },
    byMarketCap: {
      Large: { value: 455000, percentage: 65.0 },
      Mid: { value: 175000, percentage: 25.0 },
      Small: { value: 70000, percentage: 10.0 },
    },
  },
  performance: {
    timeline: [
      { date: "2024-01-01", portfolio: 650000, nifty50: 21000, gold: 62000 },
      { date: "2024-03-01", portfolio: 680000, nifty50: 22100, gold: 64500 },
      { date: "2024-06-01", portfolio: 700000, nifty50: 23500, gold: 68000 },
    ],
    returns: {
      portfolio: { "1month": 2.3, "3months": 8.1, "1year": 15.7 },
      nifty50: { "1month": 1.8, "3months": 6.2, "1year": 12.4 },
      gold: { "1month": -0.5, "3months": 4.1, "1year": 8.9 },
    },
  },
  summary: {
    totalValue: 700000,
    totalInvested: 600000,
    totalGainLoss: 100000,
    totalGainLossPercent: 16.67,
    topPerformer: {
      symbol: "INFY",
      name: "Infosys Limited",
      gainPercent: 28.5,
    },
    worstPerformer: { symbol: "HDFC", name: "HDFC Bank", gainPercent: -2.1 },
    diversificationScore: 8.2,
    riskLevel: "Moderate",
  },
};
