import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <h2>Contact Me</h2>
    <p>If you’d like to get in touch, feel free to reach out via email, phone, or connect with me on LinkedIn.</p>
    
    <div className="contact-details">
      <p><strong>Email:</strong> <a href="mailto:kvrohitraj1912@gmail.com">kvrohitraj1912@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+917396696607">+91 73966 96607</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rohitraj1912" target="_blank" rel="noopener noreferrer">rohitraj1912</a></p>
    </div>
  </div>
);

export default Contact;
