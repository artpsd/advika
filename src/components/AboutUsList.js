import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import './AboutUs.css';

const AboutUsList = () => {
  const [tab, setTab] = useState('')
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

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
      
        
    <div className="tabs-wrapper">
          <TabContext value={tab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="About Us Tabs">
                <Tab label="Who We Are" value="1" />
                <Tab label="Vision" value="2" />
                <Tab label="What We Do" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <p>Advika.cc is a comprehensive food consulting company based in Bangalore with seven years of experience and a proven track record of success in diverse food industry projects. Our expertise extends to consulting with top restaurants and cafes across India. We are dedicated to enhancing the success of culinary businesses through a client-focused approach</p>
            </TabPanel>
            <TabPanel value="2">
              <p>Our vision is to revolutionize the food industry with innovative ideas and sustainable practices.</p>
            </TabPanel>
            <TabPanel value="3">
              <p>We offer a range of services from market analysis to brand positioning to help your business thrive.</p>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default AboutUsList;
