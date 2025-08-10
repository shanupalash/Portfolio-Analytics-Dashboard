import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Heading with animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-teal-600 text-transparent bg-clip-text drop-shadow-lg"
      >
        Welcome to <br /> Portfolio Analytics Dashboard
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
      >
        Gain powerful insights into your investments. Track performance, manage
        holdings, and make data-driven decisions with ease.
      </motion.p>

      {/* Call to Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Explore Dashboard
      </motion.button>
    </div>
  );
};

export default Home;
