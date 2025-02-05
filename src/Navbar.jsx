import React from "react";


function Navbar() {
    return (
        <header>
            <div className="container">
                <img id="logo" src="tekkit.png" alt="Tekk-It Logo" />
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
