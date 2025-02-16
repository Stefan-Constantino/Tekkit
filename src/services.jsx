import React from "react";

function Services() {
  return (
    <section className="py-12 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-start md:gap-8">
          {/* Left Column */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-black mb-4">
              Expert IT Services to Keep Your Business Running Smoothly
            </h2>
            <p className="text-gray-700 mb-6">
              At Tekk-it, we provide comprehensive IT solutions designed to support, 
              secure, and streamline your operations. Whether you need round-the-clock 
              support or advanced cybersecurity, we’ve got it covered.
            </p>
          </div>

          {/* Right Column: Services Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <img 
                src="/24_7_sup_red.png" 
                alt="24/7 Monitoring & Support" 
                className="smallicons mx-auto mb-4" />
              <div>
                <h3 className="text-xl font-semibold text-black">24/7 IT Support</h3>
                <p className="text-gray-700 mt-2">
                  Technology never sleeps, and neither do we. Our expert team is available 
                  24/7 to troubleshoot issues, minimize downtime, and ensure your systems 
                  operate seamlessly so you can focus on growing your business.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <img 
                src="/cyber_sec_red.png" 
                alt="Cybersecurity" 
                className="smallicons mx-auto mb-4" />
              <div>
                <h3 className="text-xl font-semibold text-black">Cybersecurity</h3>
                <p className="text-gray-700 mt-2">
                  Cyber threats are evolving—so should your defenses. Our proactive security 
                  solutions include real-time threat detection, firewall protection, endpoint 
                  security, and compliance support to keep your business safe from attacks.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <img 
                src="/data_rec_red.png" 
                alt="Data Backup & Recovery" 
                className="smallicons mx-auto mb-4" />
              <div>
                <h3 className="text-xl font-semibold text-black">Data Backup &amp; Recovery</h3>
                <p className="text-gray-700 mt-2">
                  Protect your business-critical data with secure and reliable backup solutions. 
                  In case of unexpected loss, we ensure quick and efficient recovery.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <img 
                src="/service_red.png" 
                alt="IT Consulting & Strategy" 
                className="smallicons mx-auto mb-4" />
              <div>
                <h3 className="text-xl font-semibold text-black">
                  IT Consultation &amp; Strategy
                </h3>
                <p className="text-gray-700 mt-2">
                  Optimize your IT infrastructure with expert guidance. Our consultants help 
                  you implement the best technologies and strategies to keep your business 
                  competitive and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
