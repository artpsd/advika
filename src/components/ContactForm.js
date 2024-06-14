// src/components/ContactForm.js
import React, { useState } from 'react';
import Button from './Button'; // Import the Button component
import { TextField } from '@mui/material';
import './ContactForm.css'; // Import the CSS for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <>
    {/* <div className="contact-header">
    <h2>Contact Us</h2>
    <p>Get in Touch with our Food Consultants to Scale your Food Business</p>
    </div> */}
    <div className="contact-form-container">

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="primary">Let's Talk</Button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
