import React from "react";
import { FaCube } from "react-icons/fa";

function Problem() {
  return (
    <section className="py-12 bg-gray-50 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 text-center flex flex-col justify-center h-full">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Discover How Our Managed IT Services Keep Your Business Running Smoothly
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div>
            <FaCube className="mx-auto text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Exceptional Customer Service
            </h3>
            <p className="text-gray-700">
              Our services provide round-the-clock support to ensure your systems are always operational.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <FaCube className="mx-auto text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Long heading is what you see here in this feature section
            </h3>
            <p className="text-gray-700">
              We implement robust security measures to safeguard your data against threats.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <FaCube className="mx-auto text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Effortless Data Backups to Protect Your Valuable Information from Loss
            </h3>
            <p className="text-gray-700">
              Our automated backup solutions ensure your critical data is always safe and retrievable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
