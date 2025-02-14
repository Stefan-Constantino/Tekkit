import React from "react";

function Services() {
    return (
        <section id="services" className="py-12 bg-gray-700 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="service bg-lightblue p-4 rounded-lg text-center">
                        <img src="public/twentyfour7sup.png" alt="24/7 Monitoring & Support" className="smallicons mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">24/7 Monitoring & Support</h3>
                        <p>Continuous monitoring of systems and networks to ensure they run smoothly and offering help desk support for troubleshooting and technical issues.</p>
                    </div>
                    <div className="service bg-lightblue p-4 rounded-lg text-center">
                        <img src="public/service.png" alt="IT Consulting & Strategy" className="smallicons mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">IT Consulting & Strategy</h3>
                        <p>Providing expert advice on IT infrastructure, helping businesses align technology with their goals and plan for future growth.</p>
                    </div>
                    <div className="service bg-lightblue p-4 rounded-lg text-center">
                        <img src="public/datarecovery.png" alt="Data Backup & Recovery" className="smallicons mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Data Backup & Recovery</h3>
                        <p>Regular backups of critical data and a disaster recovery plan to ensure business continuity in case of hardware failure, data loss, or natural disasters.</p>
                    </div>
                    <div className="service bg-lightblue p-4 rounded-lg text-center">
                        <img src="public/cyber_sec.png" alt="Cybersecurity" className="smallicons mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                        <p>Implementing security measures like firewalls, antivirus software, threat detection, and encryption to protect against cyberattacks and data breaches.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
