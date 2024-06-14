import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';
import service1 from '../Icons/service1.svg';
import service2 from '../Icons/service2.svg';
import service3 from '../Icons/service3.svg';
// Import other service images as needed

const ServicesList = () => {
    const newBusinessServices = [
        {
          image: service1,
          title: "Brand Positioning",
          description: "Our team regularly looks into gaps in the market and what kinds of food people like helping your business make more revenue."
        },
        {
          image: service2,
          title: "Kitchen Market Research",
          description: "Our food consultants start by studying the market before launching your business concept. Our team regularly looks into gaps in the market and help your business make more revenue."
        },
        {
          image: service3,
          title: "Kitchen Planning & Designing",
          description: "Our seasoned experts blend functionality and aesthetics, creating bespoke kitchens that align with your vision and operational needs."
        },
        {
          image: service1,
          title: "Menu Engineering | R&D",
          description: "Our menu engineering expertise ensures a culinary experience that not only delights the palate but also maximises your business success."
        },
        {
          image: service2,
          title: "Kitchen Operational SOP",
          description: "Experience the perfect blend of cost effectiveness and seamless operations, ensuring your kitchen is always well-equipped."
        },
        {
          image: service3,
          title: "Hiring & Training",
          description: "From mastering culinary techniques to fostering teamwork, We tailor comprehensive training programs that empower your kitchen staff."
        },
    
      ];

      const oldBusinessServices = [
        {
          image: service1,
          title: "Menu Revamping | R&D",
          description: "Our experienced restaurant consultants enhance your menu to align with current trends, customer preferences, and industry standards."
        },
        {
          image: service2,
          title: "Kitchen Revamping",
          description: "Transform your kitchen with our revamping services. Upgrade equipment, optimize workflow, and enhance aesthetics for improved efficiency and customer satisfaction. elevate your hospitality establishment with our tailored solutions effective supply chain systems for hospitality ventures, guaranteeing smooth procurement, inventory management, and distribution."
        },
        {
          image: service3,
          title: "Hiring & Training",
          description: "From mastering culinary techniques to fostering teamwork, We tailor comprehensive training programs that empower your kitchen staff."
        }
      ];
    
    
      return (
        <div className="services">
        <h2>Our Services</h2>
        <div className="services-category">
          <h3>New Business</h3>
          <div className="service-grid">
            {newBusinessServices.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="services-category">
          <h3>Old Business</h3>
          <div className="service-grid">
            {oldBusinessServices.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesList;