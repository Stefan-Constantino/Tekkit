import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full p-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div id="logo-container">
                    <Link to="/">
                        {/* Adjust logo size with Tailwind classes */}
                        <img id="logo1" className="w-80 sm:w-88 md:w-56 lg:w-64 xl:w-72" src="tekkit.png" alt="Tekk-It Logo" />
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="lg:hidden p-2 text-white focus:outline-none"
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
                            <Link to="/" className="text-white hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/#services" className="text-white hover:text-gray-300">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-gray-300">
                                Schedule Appointment
                            </Link>
                        </li>
                        <li>
                            <Link to="/ticket" className="text-white hover:text-gray-300">
                                Submit A Ticket
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
