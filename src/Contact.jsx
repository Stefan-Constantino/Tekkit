import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Form submitted successfully!");
      };
    
      return (
        <div className="contact-form-container">
          <h2 className="contact-form-title">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Name*"
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
    
            <div>
              <input
                {...register("organization")}
                type="text"
                placeholder="Company Name"
              />
            </div>
    
            <div>
              <input
                {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })}
                type="email"
                placeholder="Email*"
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
    
            <div>
              <input
                {...register("phone", { required: "Phone is required" })}
                type="tel"
                placeholder="Phone*"
              />
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>
    
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="How can we help?*"
              />
              {errors.message && <p className="error-message">{errors.message.message}</p>}
            </div>
    
            <div className="consent">
              <div className="checkbox-wrapper">
                <input {...register("consent", { required: "You must agree to be contacted" })} type="checkbox" />
                <label>By providing my contact information, I agree to receive communications from this business.</label>
              </div>
            </div>
            {errors.consent && <p className="error-message">{errors.consent.message}</p>}
    
            <button className="tekkbtn" type="submit">SCHEDULE NOW</button>
          </form>
        </div>
      );
    };
    
export default Contact;
















// import React, { useState } from "react";

// function Contact() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Message sent! We will get back to you soon.");
//     };

//     return (
//         <section id="contact">
//             <div className="container">
//                 <h2>Contact Us</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

//                     <label htmlFor="message">Message:</label>
//                     <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

//                     <button type="submit" className="btn">Send Message</button>
//                 </form>
//             </div>
//         </section>
//     );
// }

// export default Contact;
