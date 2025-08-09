// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Overview" },
    { path: "/allocation", label: "Allocation" },
    { path: "/performance", label: "Performance" },
    { path: "/holdings", label: "Holdings" },
    { path: "/top-performers", label: "Top Performers" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="text-lg font-bold text-blue-400 tracking-wide">
            Portfolio Dashboard
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "hover:text-blue-400"
                } transition-colors duration-200 pb-1`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
