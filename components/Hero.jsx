import Link from "next/link";
import React, {useEffect, useState} from "react";

const Hero = ({heading, message, button = true, page}) => {
  const [bgImage, setBgImage] = useState("bg-default_hero");

  useEffect(() => {
    if (page === "blog") {
      setBgImage(`bg-blog_hero`);
    } else if (page === "project") {
      setBgImage(`bg-project_hero`);
    } else if (page === "about") {
      setBgImage(`bg-about_hero`);
    }
  }, [page]);
  return (
    <div
      className={`flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover ${bgImage}`}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        {button && (
          <button className="px-8 py-2 border hover:border-sky-500 hover:text-sky-500 ease-in duration-300">
            <Link href="/about">Visit us</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
