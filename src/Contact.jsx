import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Replace these values with your EmailJS credentials
    emailjs.send(
      "service_jsy0hfk",      // e.g., "service_xxxxx"
      "template_hlgb3ed",     // e.g., "template_xxxxx"
      data,
      "b2HAlv91lN2A6lOmW"          // e.g., "user_xxxxx"
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");
      },
      (error) => {
        console.error("FAILED...", error);
        alert("There was an error sending your message.");
      }
    );
  }

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Replace with your own image path */}
          <img
            src="/contactus.png"
            alt="Contact"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right side: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            {/* Name */}
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Name*"
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <input
                {...register("organization")}
                type="text"
                placeholder="Company Name"
              />
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="Email*"
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register("phone", { required: "Phone is required" })}
                type="tel"
                placeholder="Phone*"
              />
              {errors.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="How can we help?*"
              />
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="consent">
              <div className="checkbox-wrapper">
                <input
                  {...register("consent", {
                    required: "You must agree to be contacted",
                  })}
                  type="checkbox"
                />
                <label>
                  By providing my contact information, I agree to receive
                  communications from Tekk-it.
                </label>
              </div>
            </div>
            {errors.consent && (
              <p className="error-message">{errors.consent.message}</p>
            )}

            {/* Submit Button */}
            <button className="tekkbtn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
