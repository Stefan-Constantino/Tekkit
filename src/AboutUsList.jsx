import React from "react";
import Contact from "./Contact";

function AboutUsList() {
    return (
        <section id="aboutusList" className="container py-8">
            <div className="flex flex-col gap-8">
                <div id="workWithUs" className="p-6 bg-gray-100 rounded-lg shadow-lg mb-8"> {/* Added mb-8 for bottom margin */}
                    <h1 className="centered-heading">Why work with us</h1>
                    <ul className="space-y-6">
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>Quality of service matters.</h3>
                            <p>We want to be your long-term partner in business, not just another service provider. Our team is composed of some of the most passionate and dedicated individuals in the industry. We love what we do, and it shows in the exceptional quality of our work. We’re here to help our clients see tangible results, not just talk about it.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>We appreciate fair, transparent pricing as much as they do.</h3>
                            <p>We’re all consumers, and no one likes complicated or sneaky pricing. That’s why we don’t have hidden fees. We're committed to providing our clients with fair and transparent pricing. Our clients never get a bill they didn’t agree to.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>Our cybersecurity runs 24/7/365.</h3>
                            <p>An IT infrastructure doesn’t take breaks or vacations—and neither does our 24/7/365 monitoring. We keep a close eye on monitoring our clients’ IT systems around the clock.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>We have a proven approach to help our clients increase productivity.</h3>
                            <p>Our trusted support team assesses IT needs and develops a customized plan that fits our clients’ vision for growth by completing a microscopic examination of each client’s technology infrastructure.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>We proactively eliminate risks before they arise.</h3>
                            <p>Most IT issues and disasters can be prevented with proper monitoring. We perform 24/7/365 Remote Monitoring and Maintenance (RMM) to prevent problems from happening in the first place.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>We don’t just talk, we do.</h3>
                            <p>The proof is in our results. We don’t waste time talking about the value our services bring, our clients experience it first-hand.</p>
                        </li>
                    </ul>
                </div>

                <div id="ourMindset" className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <h1 className="centered-heading">Our Mindset</h1>
                    <ul className="space-y-6">
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>Custom IT Solutions to Help Increase Productivity</h3>
                            <p>Custom IT solutions are a game changer for businesses that want to stay ahead of the competition. By tailoring to your company's specific IT needs, we can ensure that your organization has the tools you need to stay productive and efficient.</p>
                            <p>The right IT solution will help your business run more smoothly, increase productivity and save money. Our experts dig in to understand the big picture and analyze every component to design a complete IT roadmap tailored to you.</p>
                        </li>
                    </ul>
                </div>

                <div id="ourValues" className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <h1 className="centered-heading">Our Values</h1>
                    <ul className="space-y-6">
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>Success = Productivity</h3>
                            <p>Our Managed IT plans are designed to maximize your time. Our priority is to optimize your technology infrastructure and eliminate the bottlenecks in your daily operations to keep your productivity uninterrupted.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>Your Vision is Unique</h3>
                            <p>Your business has its own unique DNA. So, the IT support we provide is not based on assumptions or generalities – we start by understanding your organization on a granular level before any plans are made.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>When You Grow, We Grow</h3>
                            <p>If we’re not helping your business use technology to grow, we’re not doing our jobs. We are heavily invested in how your company scales. When you succeed, we succeed.</p>
                        </li>
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <h3>A Proactive IT Solution is the Only Solution</h3>
                            <p>IT problems should never be handled in hindsight. We’re constantly watching your IT like a hawk to anticipate new requirements, risk factors, and opportunities to avoid costly downtime.</p>
                        </li>
                    </ul>
                </div>

                <div id="ourHistory" className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <h1 className="centered-heading">Our History</h1>
                    <ul className="space-y-6">
                        <li className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                            <p>Our company was founded with the mission to help businesses use IT to scale their operations. At our core, we are an organization of creative problem solvers. We believe our greatest IT accomplishments are making business processes easy for clients and helping them stay productive. Joining our team requires having a deep understanding of how technology empowers businesses – and a passion for seeing it in action.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8"> {/* Added mt-8 for top margin */}
                <Contact />
            </div>
        </section>
    );
}

export default AboutUsList;
