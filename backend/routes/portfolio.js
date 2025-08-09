// backend/routes/portfolio.js
const express = require("express");
const router = express.Router();
const {
  holdings,
  allocation,
  performance,
  summary,
} = require("../data/sampleData");

router.get("/holdings", (req, res) => {
  try {
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

router.get("/allocation", (req, res) => {
  try {
    res.json(allocation);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch allocation" });
  }
});

router.get("/performance", (req, res) => {
  try {
    res.json(performance);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch performance data" });
  }
});

router.get("/summary", (req, res) => {
  try {
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch summary" });
  }
});

module.exports = router;
