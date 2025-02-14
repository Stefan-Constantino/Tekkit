import React from "react";
import Contact from "./Contact";

function HeroSection() {
    return (
        <div className="relative">
            <div 
                id="HeroContainer"
                className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10"
            >
                {/* Left Section */}
                <div id="managesecuredefend" className="text-center md:text-left md:w-2/3 p-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Manage. Secure. Defend.</h2>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Let us handle all your IT needs</h1>
                    <div id="NYBusinessBox" className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6">
                        <h3 className="text-lg">New York & New Jersey Business IT Solutions</h3>
                    </div>
                    <ul className="custom-bullets mt-4 text-lg space-y-2">
                        <li>Less than half the cost of hiring internal IT staff</li>
                        <li>Complete IT management program for small businesses</li>
                        <li>We handle all routine IT tasks for you</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="boxDefault bg-gray-700 p-8 text-center rounded-md shadow-lg md:w-1/3">
                    <h2 id="dontworry" className="text-2xl font-semibold">Don't Worry</h2>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">We're Here To Help</h1>
                    <p className="text-lg mb-4">Schedule a quick meeting or phone-call to learn more</p>
                    <a href="contact" className="btn bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Get Started</a>
                </div>
            </div>

            {/* Background Image */}
            <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-50"
                style={{ backgroundImage: 'url(../path_to_your_image.jpg)' }} 
            ></div>
        </div>
    );
}

export default HeroSection;
