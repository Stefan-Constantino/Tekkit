import React from "react";

export function ServicesSection3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="text-center md:text-left">
            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Protect Your Business with Comprehensive Cybersecurity Solutions
              Tailored for You
            </h1>
            <p className="md:text-md">
              Cybersecurity is essential in today's digital landscape, safeguarding
              your sensitive information from threats. Our unique approach combines
              advanced technology and expert consultation to ensure your business
              remains secure and resilient against cyber attacks.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection3;
