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
      <div className="min-h-screen bg-gray-50">
        {/* Navbar stays fixed at top */}
        <Navbar />

        {/* Main content area */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/allocation" element={<Allocation />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
