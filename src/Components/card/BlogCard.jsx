import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div>
      <div>
        <h4>{blog.blog_title}</h4>
      </div>
    </div>
  );
};

export default BlogCard;