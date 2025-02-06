import React from "react";

function HeroSection() {
    return (
        <div id="home">
            <div id="HeroContainer">
                 <div>
                    <h2>Manage. Secure. Defend. </h2>
                    <h1>Let us handle all your IT needs</h1>
                    <div id="NYBusinessBox">
                        <h3>New York & New Jersey Business IT Solutions</h3>
                    </div>
                    <div>
                    <ul className="custom-bullets">
                        <li>Less than half the cost of hiring internal IT staff</li>
                        <li>Complete IT management program for small businesses</li>
                        <li>We handle all routine IT tasks for you</li>
                    </ul>
                    </div>
                </div>
                <div className="boxDefault">
                    <h2>Welcome to Our IT Services</h2>
                    <p>Providing top-notch IT solutions for your business needs.</p>
                    <a href="#contact" className="btn">Get Started</a>
                </div>
                
            </div>
        </div>
    );
}

export default HeroSection;
