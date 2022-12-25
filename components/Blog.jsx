import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = ({blog}) => {
  const {image, title, description, timestamp, slug} = blog;
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex cursor-pointer my-4 border-b-2 p">
        <div>
          <Image src={image} alt="Picture of the author" width={130} height={130} />
        </div>
        <div className="flex flex-col ml-3 w-full">
          <div className="flex justify-between">
            <div className="font-bold text-xl">{title}</div>
            <div className="text-l">{timestamp}</div>
          </div>
          <div className="text-l">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
