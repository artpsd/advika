import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <div className="left-section">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="right-section">
        <h4 className="service-title">{title}</h4>
        <p className="service-description">{description}</p>
        <a href="#" className="service-link">Learn More</a>
      </div>
    </div>
  );
};

export default ServiceCard;
