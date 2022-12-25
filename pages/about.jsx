import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const about = () => {
  return (
    <div>
      <Hero
        heading="About us"
        message="A little team with a big dream."
        button={false}
        page="about"
      />
      <Contact />
    </div>
  );
};

export default about;
