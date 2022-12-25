import React from "react";
import Blog from "../../components/Blog";
import Hero from "../../components/Hero";
import {BlogsData} from "../../components/BlogsData";
import Link from "next/link";
import Portfolio from "../../components/Portfolio";

const Projects = () => {
  return (
    <div>
      <Hero
        heading="Projects"
        message="A little team with a big dream."
        button={false}
        page="project"
      />
      <div className="mx-[5%] my-4">
        <div className="w-full border-b-4 border-sky-500 mb-4">
          <p className="text-2xl font-bold">
            Some Projects of Xelvis<span style={{color: "red"}}>64</span>
          </p>
        </div>
        <Portfolio />
      </div>
    </div>
  );
};

export default Projects;
