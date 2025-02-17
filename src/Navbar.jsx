import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white p-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div id="logo-container">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMenu();
            }}
          >
            <img
              id="logo1"
              className="w-80 sm:w-88 md:w-56 lg:w-64 xl:w-72"
              src="tekkitStraight_cropped.png"
              alt="Tekk-It Logo"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden p-2 text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav id="navbar" className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <li>
              <Link
                to="/services"
                onClick={closeMenu}
                className="nav hover:text-gray-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="nav hover:text-gray-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="nav hover:text-gray-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
