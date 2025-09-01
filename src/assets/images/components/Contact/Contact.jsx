import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import LinkedIn from "../../socials/linkedin.png";
import Facebook from "../../socials/facebook.png";
import Instagram from "../../socials/instagram.png";
import Connection from "../../../images/connections.svg";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(false);
    setError("");

    const templateParams = {
      // to_email: "abhikushwaha235@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message + " from:" +formData.email,
    };

    emailjs
      .send("service_fkzq0eo","template_q6s6hsm", {
  ...templateParams,
  headers: {
    "Reply-To": `${formData.name} <${formData.email}>`,
    "From": `${formData.name} <noreply@yourdomain.com>`
  }
}, "ZJDaOSU9WnGRl40Qr")
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: ""  });
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
         {/* Right Section: Social Media Links */}
         <div className="app__contact-container_socials">
          <p className="app__contact-container_contacts-touch">- Get in Touch</p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the specified
            social media handles below. Preferably LinkedIn.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="https://www.linkedin.com/in/abhishek-kushwaha-ab8908268" target="_blank">
              <img src={LinkedIn} alt="LinkedIn" />
              
            </a>
            <a href="" target="_blank">
              <img src={Facebook} alt="Facebook" />
            
            </a>
            <a href="https://www.instagram.com/mysticccacia/" target="_blank">
              <img src={Instagram} alt="Instagram" />
           
            </a>
          </ul>
        </div>
        {/* Left Section: Contact Form */}
        <div className="app__contact-container_form">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {isSent && <p className="success-message">Message sent successfully! ✅</p>}
          {error && <p className="error-message">{error}</p>}
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
