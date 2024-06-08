import React from 'react';
import Banner from '../components/Banner';
import ServicesList from '../components/ServicesList';
import AboutUs from '../components/AboutUsList';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="home-page">
      <Banner />
      <ServicesList />
      <AboutUs />
      <BlogCard />
    </div>
  );
};

export default Services;
