import React from "react";

function Services() {
    return (
    
        <section id="services">
            <div className="container">
                <h2>Our Services</h2>
                    <div className="row">
                        <div className="service">
                            <h3>24/7 Monitoring & Support</h3>
                            <p>Continuous monitoring of systems and networks to ensure they run smoothly and offering help desk supporet for troubleshooting and technical issues.</p>
                        </div>
                        <div className="service">
                            <h3>IT Consulting & Strategy</h3>
                            <p>Providing expert advice on IT infrastructure, helping businesses align tehcnoogy with their goals and plane for future growth.</p>
                        </div>
                        <div className="service">
                            <h3>Data Backup & Recovery</h3>
                            <p>Regular backups of critical data and a disaster recovery plan to ensure business continuity in case of hardware failure, data loss, or natural disasters.</p>
                        </div>
                        <div className="service">
                            <h3>Cybersecurity</h3>
                            <p>Implementing security measures like firewalls, antivirus software, threat detection, and encryption to protect against cyberattacks and data breaches.</p>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Services;