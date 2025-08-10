import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/allocation", label: "Allocation" },
    { path: "/performance", label: "Performance" },
    { path: "/holdings", label: "Holdings" },
    { path: "/summary", label: "Summary" },
  ];

  return (
    <nav className="bg-gray-900 text-gray-200 shadow-lg w-full sticky top-0 z-50">
      <div className="flex justify-between items-center h-16 px-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
          Portfolio Analytics
        </h1>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 rounded-md transition-all duration-300 ease-in-out
                ${
                  location.pathname === link.path
                    ? "bg-gray-200 text-gray-900 font-semibold"
                    : "hover:bg-gray-100 hover:text-gray-900 text-gray-200"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
