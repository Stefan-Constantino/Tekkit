import React from "react";

export function ServicesSection1() {
  return (
    <section id="roundTheClock" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="text-center md:text-left">
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Round-the-Clock IT Support: Your Peace of Mind, Anytime, Anywhere
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Experience uninterrupted service with our 24/7 IT support. We ensure
              your systems run smoothly, minimizing downtime and maximizing
              productivity.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Always Available
                </h6>
                <p>
                  Our experts are just a call away, ready to assist at any hour.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Proactive Monitoring
                </h6>
                <p>
                  We monitor your systems continuously to prevent issues before they
                  disrupt your business.
                </p>
              </div>
            </div>
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

export default ServicesSection1;
