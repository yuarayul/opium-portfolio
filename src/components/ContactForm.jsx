import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Send email using EmailJS
      emailjs.send(
        'service_587zxdg',     // Replace with your EmailJS service ID
        'template_k3tgbjh',    // Replace with your EmailJS template ID
        formData,              // Pass your form data
        'El3Q0fIAU_eeAVCLU'         // Replace with your EmailJS user/public key
      )
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        // Optionally clear form after submission
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }, (error) => {
        console.error(error.text);
        // Optionally, handle error feedback here
      });
    } else {
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="contact-form-container">
      {submitted && <div className="success-message">Thank you for your message!</div>}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
