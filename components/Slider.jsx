import React, {useState} from "react";
import Image from "next/image";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Navigation, Pagination} from "swiper";
import {FaInstagram} from "react-icons/fa";

const Slider = ({slides}) => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">
        Members of Xelvis<span style={{color: "red"}}>64</span>
      </h1>
      <Swiper
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={10}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper mx-[20px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="group relative text-center hover:border-none border border-rose-500 rounded-3xl px-1 py-2 flex flex-col align-center justify-center ease-in duration-300"
          >
            <div>
              <Image
                src={slide.image}
                alt="Picture of the author"
                width={130}
                height={130}
                className="rounded-full"
              />
            </div>
            <div className="font-bold">{slide.name}</div>
            <div>{slide.description}</div>
            <div className="flex justify-center w-full h-full items-center absolute rounded-3xl top-0 left-0 right-0 bottom-0 hover:bg-rose-500 group ease-in duration-200">
              <div className="text-white hidden group-hover:block">
                <div className="flex gap-2">
                  <FaInstagram size={30} className="z-10 cursor-pointer" />
                  <FaInstagram size={30} className="z-10 cursor-pointer" />
                  <FaInstagram size={30} className="z-10 cursor-pointer" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
