import React from 'react';
import "./Blog.css"

const Blog = ({ title, description }) => {
  return (
    <div className="blog-post-details">
      <div className="blog-post-content" style={{textAlign:"left"}}>
        <h2>{title}</h2>
        <p style={{textAlign:"center"}}>{description}</p>
      </div>
    </div>
  );
};

export default Blog;
