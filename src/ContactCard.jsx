import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SocialMediaIcons from "./Links";

export function ContactCard() {
  return (
    <section id="relume" className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg mx-auto text-center md:mb-18 lg:mb-20">
          {/* <p className="mb-3 font-semibold md:mb-4">Connect</p> */}
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
            Get in Touch
          </h2>
          <p className="md:text-md">
            We’re here to assist you 24/7 with IT needs.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6 flex justify-left">
              <FaEnvelope className="w-12 h-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              Reach us anytime at our dedicated email support.
            </p>
            <a className="underline" href="mailto:support@tekk-it.com">
              support@tekk-it.com
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6 flex justify-left">
              <FaPhone className="w-12 h-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">
              Call us for immediate assistance with your IT issues.
            </p>
            <a className="underline" href="tel:+15551234567">
              +1 (555) 123-4567
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6 flex justify-left">
              <SocialMediaIcons className="w-12 h-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Socials
            </h3>
            <p className="mb-5 md:mb-6">
              Follow and message us for consultation and support.
            </p>
            {/* <a className="underline" href="#">
              456 Tech Ave, Sydney NSW 2000 AU
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
