import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Have questions? We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Our Office</h3>
        <p>123 Car Rental Street, Mumbai, India</p>
        <p>Email: support@driveeasy.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
    </div>
  );
}

export default ContactUs;
