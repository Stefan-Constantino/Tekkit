import React from "react";

export function ServicesSection() {
  return (
    <section
      id="relume"
      className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
            Comprehensive IT Solutions
          </h1>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2">
          <p className="text-gray-700 text-base md:text-md mb-6">
            At Tekk-it, we provide a full suite of managed IT services designed 
            to meet your business needs. From 24/7 support to robust cybersecurity 
            measures, we ensure your technology works seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* "Learn More" Button */}
            <a href="#roundTheClock">
            <button
              title="Learn More"
              className="bg-black text-white px-6 py-2 rounded-md tekkbtn transition"
            >
              Learn More
            </button>
            </a>
            {/* "Sign Up" Button */}
            {/* <button
              title="Sign Up"
              className="border border-black text-black px-6 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Sign Up
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
