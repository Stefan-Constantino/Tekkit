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
              src="/image_0617.png"
              alt="Christian Nina"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Christian Nina</h3>
            <p className="text-gray-500 mb-4">IT Support Engineer</p>
            <p className="text-gray-700 mb-4">
              Providing proactive IT support and security to keep systems running smoothly and securely.
            </p>
            <div className="flex justify-center space-x-4 text-black">
              <a href="https://www.linkedin.com/in/christian-nina/">
                <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              </a>
                {/* <FaEnvelope className="cursor-pointer hover:text-red-500" /> */}
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-md shadow p-6">
            <img
              src="/1711750981155.jpg"
              alt="Anthony Hernandez"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Anthony Hernandez</h3>
            <p className="text-gray-500 mb-4">Sales & Business Development</p>
            <p className="text-gray-700 mb-4">
             Leading client relationships and delivering tailored IT solutions to drive business growth and efficiency.
            </p>
            <div className="flex justify-center space-x-4 text-black">
              <a href="https://www.linkedin.com/in/anthony-hernandez-12917b129/">
                <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              </a>
              {/* <FaEnvelope className="cursor-pointer hover:text-red-500" /> */}
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-white rounded-md shadow p-6">
            <img
              src="/1689003799522.jpg"
              alt="Pedro Herrera"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Pedro Herrera</h3>
            <p className="text-gray-500 mb-4">Technical Project Manager</p>
            <p className="text-gray-700 mb-4">
             Overseeing technical projects to deliver seamless IT solutions with efficiency and precision.
            </p>
            <div className="flex justify-center space-x-4 text-black">
              <a href="https://www.linkedin.com/in/pedroeherrera/">
                <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              </a>
              {/* <FaEnvelope className="cursor-pointer hover:text-red-500" /> */}
            </div>
          </div>

          {/* Member 4 */}
          <div className="bg-white rounded-md shadow p-6">
            <img
              src="/default_image.png"
              alt="Alonzo Myrie"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-black">Alonzo Myrie</h3>
            <p className="text-gray-500 mb-4">Technical Solution Specialist</p>
            <p className="text-gray-700 mb-4">
              Designing and optimizing IT solutions to enhance performance, security, and efficiency.
            </p>
            <div className="flex justify-center space-x-4 text-black">
              <a href="https://www.linkedin.com/in/alonzo-myrie-34b714293/">
                <FaLinkedin className="cursor-pointer hover:text-blue-500" />
              </a>
              {/* <FaEnvelope className="cursor-pointer hover:text-red-500" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
