import React from "react";
import { FaCube } from "react-icons/fa";

function Problem() {
  return (
    <section className="py-12 bg-gray-50 min-h-[70vh] flex items-center heroSection">
      <div className="container mx-auto px-4 text-center flex flex-col justify-center h-full">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Discover How Our Managed IT Services Keep Your Business Running Smoothly
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div>
          <img 
                src="/award_popular_badge.png" 
                alt="award_popular_badge" 
                className="smallicons mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Unmatched Customer Support
            </h3>
            <p className="text-gray-700">
            We know IT issues can be frustrating. That’s why we respond fast, solve problems efficiently, and act like an extension of your team—so you’re never left waiting.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
          <img 
                src="/creative_lightbulb.png" 
                alt="creative_lightbulb" 
                className="smallicons mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
             Tailored IT Solutions
            </h3>
            <p className="text-gray-700">
            Your business is unique, and your IT support should be too. We craft customized solutions that align with your goals, ensuring seamless technology integration and support.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
          <img 
                src="/dollar_aim_target.png" 
                alt="Competitive Pricing" 
                className="smallicons mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Upfront Pricing
            </h3>
            <p className="text-gray-700">
            What you see is what you pay. No fine print, no last-minute changes—just total transparency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
