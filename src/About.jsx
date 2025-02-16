import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <p className="text-gray-500 uppercase mb-2">Meet</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Our Team
        </h2>
        <p className="text-gray-700 mb-10">
          Dedicated professionals committed to your success.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Member 1 */}
          <div className="bg-white rounded-md shadow p-6">
            {/* Replace with your actual image */}
            <img
              src="/profile1.jpg"
              alt="Christian Nina"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Christian Nina</h3>
            <p className="text-gray-500 mb-4">Cybersecurity Analyst</p>
            <p className="text-gray-700 mb-4">
              Protecting your data with cutting-edge security measures and proactive monitoring.
            </p>
            <div className="flex justify-center space-x-4 text-gray-600">
              <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaEnvelope className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-md shadow p-6">
            <img
              src="/profile2.jpg"
              alt="Anthony Hernandez"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Anthony Hernandez</h3>
            <p className="text-gray-500 mb-4">Support Specialist</p>
            <p className="text-gray-700 mb-4">
              Providing 24/7 support to resolve your IT challenges swiftly.
            </p>
            <div className="flex justify-center space-x-4 text-gray-600">
              <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaEnvelope className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-white rounded-md shadow p-6">
            <img
              src="/profile3.jpg"
              alt="Pedro Herrera"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Pedro Herrera</h3>
            <p className="text-gray-500 mb-4">Data Analyst</p>
            <p className="text-gray-700 mb-4">
              Transforming data into actionable insights for informed decision-making.
            </p>
            <div className="flex justify-center space-x-4 text-gray-600">
              <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaEnvelope className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Member 4 */}
          <div className="bg-white rounded-md shadow p-6">
            <img
              src="/profile4.jpg"
              alt="Alonzo Myrie"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Alonzo Myrie</h3>
            <p className="text-gray-500 mb-4">Network Engineer</p>
            <p className="text-gray-700 mb-4">
              Managing and optimizing network infrastructures for optimal performance.
            </p>
            <div className="flex justify-center space-x-4 text-gray-600">
              <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaEnvelope className="cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
