import React from "react";
import Blog from "../../components/Blog";
import Hero from "../../components/Hero";
import {BlogsData} from "../../components/BlogsData";
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <Hero heading="Blogs" message="A little team with a big dream." button={false} page="blog" />
      <div className="mx-[5%] my-4">
        <div className="w-full border-b-4 border-sky-500 mb-4">
          <p className="text-2xl font-bold">
            Some Blogs about Xelvis<span style={{color: "red"}}>64</span>
          </p>
        </div>
        {BlogsData.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
