import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Holdings from "./pages/HoldingsPage";
import Allocation from "./pages/AllocationPage";
import Performance from "./pages/PerformancePage";
import Summary from "./pages/SummaryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/allocation" element={<Allocation />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
