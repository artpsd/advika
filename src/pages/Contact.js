// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-top">
        <h1>Contact Us</h1>
        <p>Please fill out the form below and we will get back to you shortly.</p>
      </div>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
      <div className="contact-bottom"></div>
    </div>
  );
};

export default Contact;
