import React from "react";

export function ServicesSection2() {
  return (
    <section id="relume" className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Unlock Your Business Potential with Expert IT Consultation Services
            </h3>
            <p className="mb-5 md:mb-6 md:text-md">
              Our IT consultation services empower your business with tailored
              strategies and solutions. Experience enhanced efficiency, security,
              and growth through our expert guidance.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="w-6 h-6"
                  />
                </div>
                <p>
                  Customized strategies for your unique business challenges.
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="w-6 h-6"
                  />
                </div>
                <p>Expert insights to optimize your IT infrastructure.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="w-6 h-6"
                  />
                </div>
                <p>Proactive support to prevent issues before they arise.</p>
              </li>
            </ul>
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

export default ServicesSection2;
