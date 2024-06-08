// BlogSection.js
import React from 'react';
import './BlogSection.css'; // Import your blog section styles here
import BlogCard from './BlogCard'; // Import the BlogCard component

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-card-container">
        <BlogCard
          coverImage="cover1.jpg"
          date="May 10, 2024"
          title="Title 1"
          description="Description 1"
          learnMoreLink="#"
        />
        <BlogCard
          coverImage="cover2.jpg"
          date="May 12, 2024"
          title="Title 2"
          description="Description 2"
          learnMoreLink="#"
        />
        <BlogCard
          coverImage="cover3.jpg"
          date="May 15, 2024"
          title="Title 3"
          description="Description 3"
          learnMoreLink="#"
        />
      </div>
    </div>
  );
};

export default BlogSection;