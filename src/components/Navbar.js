import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">School Portal</Link>
        </h1>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <ul
          className={`sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 absolute sm:static left-0 top-14 w-full sm:w-auto bg-blue-600 sm:bg-transparent z-50 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          } flex flex-col sm:flex-row justify-center items-center sm:py-0 py-5`}
        >
          <li>
            <Link
              to="/"
              className="block text-lg sm:inline hover:text-yellow-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/marks-overview"
              className="block text-lg sm:inline hover:text-yellow-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Marks Overview
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="block text-lg sm:inline hover:text-yellow-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
