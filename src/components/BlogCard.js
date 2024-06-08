// BlogCard.js
import React from 'react';
import './BlogCard.css'; // Import your blog card styles here

const BlogCard = ({ coverImage, date, title, description, learnMoreLink }) => {
  return (
    <div className="blog-card">
      <img src={coverImage} alt="Blog Cover" className="blog-cover" />
      <div className="blog-info">
        <span className="blog-date">{date}</span>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
        <a href={learnMoreLink} className="learn-more-link">Learn More</a>
      </div>
    </div>
  );
};

export default BlogCard;
