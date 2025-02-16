import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg md:text-md font-medium text-black">
          {question}
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-700 md:text-md">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqItems = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a range of managed IT services including 24/7 support, cybersecurity, and data backups. Our goal is to ensure your business runs smoothly and securely. Whether you need IT consultation or ongoing support, we have you covered.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us through our contact form on the website or call our support line. We are available 24/7 to assist you. Your inquiries are important to us, and we aim to respond promptly.",
    },
    {
      question: "What is cybersecurity?",
      answer:
        "Cybersecurity involves protecting your systems, networks, and data from digital attacks. It encompasses various measures, including firewalls, encryption, and monitoring. Our team specializes in implementing robust cybersecurity strategies tailored to your needs.",
    },
    {
      question: "Do you offer backups?",
      answer:
        "Yes, we provide comprehensive data backup solutions to ensure your information is safe. Our backup services include regular updates and secure storage options so you can recover your data quickly in case of any loss.",
    },
    {
      question: "What is IT consultation?",
      answer:
        "IT consultation involves assessing your business's technology needs and providing tailored solutions. Our experts work with you to identify areas for improvement and implement effective strategies. This service helps optimize your IT infrastructure for better performance.",
    },
  ];

  return (
    <section className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white min-h-[60vh] md:min-h-[80vh]">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md text-gray-700">
            Find answers to common questions about our IT services and support.
          </p>
        </div>
        <div>
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="mt-12 max-w-md mx-auto text-center">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl">
            Still have questions?
          </h4>
          <p className="md:text-md text-gray-700">
            We're here to help you!
          </p>
          <div className="mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-md tekkbtn transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
