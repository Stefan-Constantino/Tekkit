import React from "react";
import { Link } from "react-router-dom";

export function ServicesSection5() {
  return (
    <section
      id="relume"
      className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white"
    >
      <div className="container mx-auto">
        {/* A max-width container to keep content left-aligned and 
            limit line length on large screens */}
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
            Tailored IT Solutions Just for You
          </h2>
          <p className="text-gray-700 text-base md:text-md mb-6">
            Contact us today to create a customized IT service package that meets
            your unique needs.
          </p>
          <Link to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <button
              title="Inquire"
              className="bg-black text-white px-6 py-2 rounded-md tekkbtn transition"
            >
              Schedule an Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection5;
