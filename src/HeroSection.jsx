import React from "react";

function HeroSection() {
  return (
    <section className="bg-white py-12 min-h-[90vh] flex items-center heroSection">
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
        {/* Left (Text) Section */}
        <div className="flex-1 px-4 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
            Reliable IT Support, Simplified
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            At Tekk-it, we take the hassle out of technology so you can focus on growing your business. Our managed IT services ensure seamless operations, enhanced security, and expert support whenever you need it. Stay connected, stay protected, Tekk-it takes care of IT.
          </p>
          {/* Button Wrapper to Prevent Full-Width Stretching */}
          <div className="flex justify-center md:justify-start">
            <a href="/contact" 
              className="inline-block bg-black text-white py-2 px-6 rounded-md transition tekkbtn">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right (Image) Section */}
        <div className="flex-1 px-4 mt-8 md:mt-0 flex items-center justify-center">
          <img 
            src="/rupixen-zWe0UhHdi60-unsplash.jpg" 
            alt="hero" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
