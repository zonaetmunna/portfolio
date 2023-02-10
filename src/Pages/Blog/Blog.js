import React, { useEffect, useState } from "react";
import BlogCard from "../../Components/card/BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./BlogData.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data.length);
      });
  }, []);
  console.log(blogs);

  return (
    <div>
      <h1>{blogs.length}</h1>
      {blogs.slice(1, 2).map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
