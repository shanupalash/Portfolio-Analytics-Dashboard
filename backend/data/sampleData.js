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
      value: 134025.0, // 50 * 2680.5
      gainLoss: 11525.0, // (2680.5 - 2450.0) * 50
      gainLossPercent: 9.4, // (11525.0 / (2450.0 * 50)) * 100
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      quantity: 100,
      avgPrice: 1800.0,
      currentPrice: 2010.75,
      sector: "Technology",
      marketCap: "Large",
      value: 201075.0, // 100 * 2010.75
      gainLoss: 21075.0, // (2010.75 - 1800.0) * 100
      gainLossPercent: 11.7, // (21075.0 / (1800.0 * 100)) * 100
    },
    {
      symbol: "HDFC",
      name: "HDFC Bank",
      quantity: 75,
      avgPrice: 1600.0,
      currentPrice: 1566.4,
      sector: "Banking",
      marketCap: "Large",
      value: 117480.0, // 75 * 1566.4
      gainLoss: -2520.0, // (1566.4 - 1600.0) * 75
      gainLossPercent: -2.1, // (-2520.0 / (1600.0 * 75)) * 100
    },
    {
      symbol: "SUNPHARMA",
      name: "Sun Pharmaceutical Industries Ltd",
      quantity: 80,
      avgPrice: 1200.0,
      currentPrice: 1350.0,
      sector: "Healthcare",
      marketCap: "Mid",
      value: 108000.0, // 80 * 1350.0
      gainLoss: 12000.0, // (1350.0 - 1200.0) * 80
      gainLossPercent: 12.5, // (12000.0 / (1200.0 * 80)) * 100
    },
    {
      symbol: "ZOMATO",
      name: "Zomato Ltd",
      quantity: 200,
      avgPrice: 150.0,
      currentPrice: 175.0,
      sector: "Technology",
      marketCap: "Mid",
      value: 35000.0, // 200 * 175.0
      gainLoss: 5000.0, // (175.0 - 150.0) * 200
      gainLossPercent: 16.67, // (5000.0 / (150.0 * 200)) * 100
    },
    {
      symbol: "TATAMOTORS",
      name: "Tata Motors Ltd",
      quantity: 120,
      avgPrice: 700.0,
      currentPrice: 820.0,
      sector: "Automobile",
      marketCap: "Large",
      value: 98400.0, // 120 * 820.0
      gainLoss: 14400.0, // (820.0 - 700.0) * 120
      gainLossPercent: 17.14, // (14400.0 / (700.0 * 120)) * 100
    },
    {
      symbol: "PAYTM",
      name: "One97 Communications Ltd",
      quantity: 150,
      avgPrice: 500.0,
      currentPrice: 450.0,
      sector: "Technology",
      marketCap: "Small",
      value: 67500.0, // 150 * 450.0
      gainLoss: -7500.0, // (450.0 - 500.0) * 150
      gainLossPercent: -10.0, // (-7500.0 / (500.0 * 150)) * 100
    },
  ],
  allocation: {
    bySector: {
      Technology: { value: 303575, percentage: 33.8 }, // (201075 + 35000 + 67500) / 897480 * 100
      Banking: { value: 117480, percentage: 13.1 }, // 117480 / 897480 * 100
      Energy: { value: 134025, percentage: 14.9 }, // 134025 / 897480 * 100
      Healthcare: { value: 108000, percentage: 12.0 }, // 108000 / 897480 * 100
      Automobile: { value: 98400, percentage: 11.0 }, // 98400 / 897480 * 100
      ConsumerGoods: { value: 138000, percentage: 15.4 }, // Hypothetical addition
    },
    byMarketCap: {
      Large: { value: 550905, percentage: 61.4 }, // (134025 + 201075 + 117480 + 98400) / 897480 * 100
      Mid: { value: 143000, percentage: 15.9 }, // (108000 + 35000) / 897480 * 100
      Small: { value: 203575, percentage: 22.7 }, // (67500 + 136075 hypothetical) / 897480 * 100
    },
  },
  performance: {
    timeline: [
      { date: "2024-01-01", portfolio: 650000, nifty50: 21000, gold: 62000 },
      { date: "2024-03-01", portfolio: 680000, nifty50: 22100, gold: 64500 },
      { date: "2024-06-01", portfolio: 700000, nifty50: 23500, gold: 68000 },
      { date: "2024-09-01", portfolio: 750000, nifty50: 24000, gold: 69500 },
      { date: "2024-12-01", portfolio: 820000, nifty50: 24800, gold: 71000 },
      { date: "2025-03-01", portfolio: 850000, nifty50: 25500, gold: 72500 },
      { date: "2025-06-01", portfolio: 897480, nifty50: 26000, gold: 74000 },
    ],
    returns: {
      portfolio: {
        "1month": 2.3,
        "3months": 8.1,
        "6months": 12.5,
        "1year": 15.7,
        "2years": 28.4,
      },
      nifty50: {
        "1month": 1.8,
        "3months": 6.2,
        "6months": 8.9,
        "1year": 12.4,
        "2years": 22.0,
      },
      gold: {
        "1month": -0.5,
        "3months": 4.1,
        "6months": 6.5,
        "1year": 8.9,
        "2years": 15.3,
      },
    },
  },
  summary: {
    totalValue: 897480, // Sum of all holdings' value
    totalInvested: 755000, // Sum of (quantity * avgPrice) for all holdings
    totalGainLoss: 142480, // totalValue - totalInvested
    totalGainLossPercent: 18.87, // (142480 / 755000) * 100
    topPerformer: {
      symbol: "TATAMOTORS",
      name: "Tata Motors Ltd",
      gainPercent: 17.14,
    },
    worstPerformer: {
      symbol: "PAYTM",
      name: "One97 Communications Ltd",
      gainPercent: -10.0,
    },
    diversificationScore: 8.5, // Slightly increased due to more sectors
    riskLevel: "Moderate",
    sharpeRatio: 1.2, // Added metric: hypothetical risk-adjusted return
    volatility: 14.8, // Added metric: annualized portfolio volatility (%)
  },
};
