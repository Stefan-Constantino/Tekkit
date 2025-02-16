import React from "react";

function Solution() {
  return (
    <section className="bg-white py-12 min-h-[80vh] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2 px-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Transform Your IT Experience Today
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Connect with us to discover tailored IT solutions that meet your unique 
            business needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-black text-white py-2 px-6 rounded-md tekkbtn transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 px-4 mt-8 md:mt-0">
          {/* Replace with your own content or an actual image */}
          <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-md">
            <img src="/SolutionSection.jpg" alt="Solution" className="object-cover w-full h-full rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
