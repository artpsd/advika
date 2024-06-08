import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './AboutUs.css';

const AboutUs = () => {
  return (
    
    <div className="about-us-container">
    <h2>About Us</h2>   
    <div className="content-container">
    <div className="video-container">
        {/* Add video component here */}
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
      
        
    <Tabs>
          <TabList>
            <Tab>Who We Are</Tab>
            <Tab>Vision</Tab>
            <Tab>What We Do</Tab>
          </TabList>

          <TabPanel>
            <p>We are a group of food enthusiasts with a passion for innovation and excellence in the food industry.</p>
          </TabPanel>
          <TabPanel>
            <p>Our vision is to revolutionize the food industry with innovative ideas and sustainable practices.</p>
          </TabPanel>
          <TabPanel>
            <p>We offer a range of services from market analysis to brand positioning to help your business thrive.</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
    
  );
};

export default AboutUs;
