import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <header>
            <div id="navbar-container">
                <Link to="/"><img id="logo" src="tekkit.png" alt="Tekk-It Logo" /></Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/#services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Schedule Appointment</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
