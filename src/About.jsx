import React from "react"; 

function About() {
    return (
        <section id="about1" className="container py-8">
            <div className="text-center mb-8">
                <h1 className="centered-heading">About Us</h1>
                <p>We are dedicated to providing exceptional IT support with a focus on customer satisfaction.</p>
            </div>

            <div className="flex flex-wrap justify-between gap-8">
                <div id="team" className="w-full sm:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
                    <h3>Our Team</h3>
                    <p>Meet our talented and passionate team members!</p>
                </div>

                <div id="mission" className="w-full sm:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
                    <h3>Our Mission</h3>
                    <p>Our mission is to innovate and provide solutions that empower businesses to thrive in the digital age.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
