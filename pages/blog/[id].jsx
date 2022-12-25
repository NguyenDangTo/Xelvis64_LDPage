import React, {useEffect, useState} from "react";
import Hero from "../../components/Hero";
import {useRouter} from "next/router";
import {BlogsData} from "../../components/BlogsData";

const BlogDetail = () => {
  const router = useRouter();
  const {id} = router.query;

  const blog = BlogsData.filter((blog) => blog.slug == id)[0];
  useEffect(() => {
    if (blog === {}) {
      router.replace("/");
    }
  }, [router, id, blog]);

  return (
    <div>
      <Hero heading={blog?.title} message={null} button={false} image="BlogHero" />
      <div className="lg:px-[180px] md:px-[50px] text-justify px-8 mb-[20px]">
        <div>{blog?.description}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
