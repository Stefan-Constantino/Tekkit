import React from "react";
import { Link } from "react-router-dom";

function AboutUsList() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Get in Touch with Us
          </h2>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-lg mb-6">
            Have questions or need assistance? Our team is ready to provide you with 
            the information you need and help you schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="/contact">
            <button className="bg-black text-white py-2 px-6 rounded-md transition tekkbtn">
              Contact
            </button>
            </a>
            <Link to="/services" className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-200 transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsList;
