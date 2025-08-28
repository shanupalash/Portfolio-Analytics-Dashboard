import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(234,179,8,0.15),transparent_60%)] opacity-70"></div>

      {/* Heading with animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text drop-shadow-xl text-center z-10"
      >
        Fintech Analytics Dashboard
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="mt-6 text-base sm:text-lg md:text-xl text-black max-w-2xl leading-relaxed text-center font-light z-10"
      >
        Monitor investments, analyze portfolio performance, and optimize
        strategies with intuitive, data-driven insights.
      </motion.p>

      {/* Call to Action Button */}
      <motion.a
        href="/summary"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(234, 179, 8, 0.4)",
        }}
        whileTap={{ scale: 0.98 }}
        className="mt-10 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
      >
        Explore Dashboard
      </motion.a>
    </div>
  );
};

export default Home;
