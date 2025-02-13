import React from "react";
import Contact from "./Contact";

function HeroSection() {
    return (
        <div >
            <div id="HeroContainer">
                 <div id="managesecuredefend">
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
                {/*
                
                <Contact/>
                */}
                <div className="boxDefault" >
                    <h2 id="dontworry">Don't Worry </h2>
                    <h1>We're Here To Help</h1>
                    <p>Schedule a quick meeting or phone-call to learn more</p>
                    <a href="contact" className="btn">Get Started</a>
                </div>
                
            </div>
        </div>
    );
}

export default HeroSection;
