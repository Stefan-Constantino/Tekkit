import React from "react";

function Problem() {
    return (
        <section id="problem" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Here's what the other IT companies are doing</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 mb-4">WRONG</h1>
                    <h3 className="text-lg sm:text-xl md:text-2xl">and let us know if this is too on the nose...</h3>
                </div>

                {/* Service Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="service bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <h3 className="text-xl font-semibold mb-4">Your IT provider keeps falling short of their promises...</h3>
                        <p className="text-lg">Many IT companies simply put in the minimum effort to retain customers. They rely entirely on third-party software to do all the work, and getting a real person to help with something seems like an impossible task...</p>
                    </div>

                    <div className="service bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <h3 className="text-xl font-semibold mb-4">IT Consulting & Strategy</h3>
                        <p className="text-lg">Providing expert advice on IT infrastructure, helping businesses align technology with their goals and plan for future growth.</p>
                    </div>

                    <div className="service bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <h3 className="text-xl font-semibold mb-4">Data Backup & Recovery</h3>
                        <p className="text-lg">Regular backups of critical data and a disaster recovery plan to ensure business continuity in case of hardware failure, data loss, or natural disasters.</p>
                    </div>

                    <div className="service bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                        <p className="text-lg">Implementing security measures like firewalls, antivirus software, threat detection, and encryption to protect against cyberattacks and data breaches.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Problem;
