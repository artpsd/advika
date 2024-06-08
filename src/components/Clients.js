import React from 'react';
import './Clients.css';
import client1 from '../Icons/clients/client1.png';
import client2 from '../Icons/clients/client2.png';
import client3 from '../Icons/clients/client3.png';
import client4 from '../Icons/clients/client4.png';
import client5 from '../Icons/clients/client5.png';
import client6 from '../Icons/clients/client6.png';
// Add more client logos as needed

const Clients = () => {
    const handleMouseEnter = () => {
      const logos = document.querySelectorAll('.client-logos img');
      logos.forEach((logo) => {
        logo.style.animationPlayState = 'paused';
      });
    };
  
    const handleMouseLeave = () => {
      const logos = document.querySelectorAll('.client-logos img');
      logos.forEach((logo) => {
        logo.style.animationPlayState = 'running';
      });
    };
  
  return (
    <div className="clients">
      <h2>Our Clients</h2>
      <div className="client-logos-wrapper">
      <div className="client-logos">
        <img src={client1} alt="Client Logo 1" />
        <img src={client2} alt="Client Logo 2" />
        <img src={client3} alt="Client Logo 3" />
        <img src={client4} alt="Client Logo 4" />
        <img src={client5} alt="Client Logo 5" />
        <img src={client6} alt="Client Logo 6" />
        {/* Add more client logos as needed */}
        </div>
      </div>
    </div>
  );
};

export default Clients;
