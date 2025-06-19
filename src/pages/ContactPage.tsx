// src/pages/ContactPage.tsx
import React from 'react';
import './styles/ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-overlay">
        <h1>Contact Us</h1>
        <p className="sub-heading">We’d love to hear from you!</p>
        <div className="content">
          <div className="form-section">
            <h2>Get In Touch</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required />
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="info-section">
            <h2>Find Us</h2>
            <p><strong>📍 Address:</strong> Clerkenwell Close, London, EC1R 0AY, England</p>
            <p><strong>📞 Phone:</strong> +44 20 7946 0000</p>
            <p><strong>✉️ Email:</strong> contact@steakz.co.uk</p>
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Clerkenwell+Close+London+EC1R+0AY&zoom=15&size=300x200&markers=color:red%7CClerkenwell+Close+London+EC1R+0AY"
              alt="Map to our location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
