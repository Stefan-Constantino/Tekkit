import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky lg:fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-700">
      <div className="container mx-auto p-4 flex justify-between items-center">
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
          className="lg:hidden text-black focus:outline-none"
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

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu - rendered in flow so it pushes content down */}
      {isOpen && (
        <nav className="lg:hidden">
          <ul className="flex flex-col space-y-4">
            <li className="border-b border-gray-700">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link
                to="/services"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                Services
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link
                to="/about"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  closeMenu();
                }}
                className="nav hover:text-gray-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
