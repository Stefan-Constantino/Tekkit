import React from "react";

function Problem() {
    return (
        <section id="problem">
            <div className="container">
                <div>
                    <h2 className="centeredtext">Here's what the other IT companies are doing </h2>
                    <h1 className="centeredtext">WRONG</h1>
                    <h3 className="centeredtext">and let us know if this is too on the nose...</h3>
                </div>
                <div className="row">
                <div className="service">
                            <h3>Your IT provider keeps falling short of their promises...</h3>
                            <p>Many IT companies simply put in the minimum effort to retain customers. They rely entirely on third party software to do all the work, and getting a real person to help with something seems like an impossible task...</p>
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

export default Problem;