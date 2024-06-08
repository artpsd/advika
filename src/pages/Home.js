import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/ServicesList';
import BlogSection from '../components/BlogSection';
import Clients from '../components/Clients';
import AboutUsList from '../components/AboutUsList';
import MeetOurTeam from '../components/MeetOurTeam';
import Gallery from '../components/Gallery';

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Clients />
      <AboutUsList />
      <Services />
      <MeetOurTeam />
      <Gallery />
      <BlogSection />
    </div>
  );
};

export default HomePage;
