// BlogSection.js
import React from 'react';
import './BlogSection.css'; // Import your blog section styles here
import BlogCard from './BlogCard'; // Import the BlogCard component

const BlogSection = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      coverImage: 'cover1.jpg',
      date: 'June 1, 2024',
      title: 'Blog Post 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra ultrices sapien, et facilisis quam luctus at.',
      learnMoreLink: '/blog-post-1',
    },
    {
      coverImage: 'cover2.jpg',
      date: 'May 25, 2024',
      title: 'Blog Post 2',
      description: 'Phasellus eget dapibus risus. Vivamus nec justo justo. Duis tempus auctor nibh, non condimentum libero vestibulum nec.',
      learnMoreLink: '/blog-post-2',
    },
    // Add more blog post data as needed
  ];

  return (
    <section className="blog-section">
      <h2 className="section-heading">Blogs</h2>
      <div className="blog-card-container">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            coverImage={post.coverImage}
            date={post.date}
            title={post.title}
            description={post.description}
            learnMoreLink={post.learnMoreLink}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
