import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

interface SlideData {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const slidesData: SlideData[] = [
  {
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk_s3.jpg?v=1710139620&width=2136",
    title: "A Minimalistic Design Masculine",
    description: "Awesome products for the dynamic urban lifestyle",
    buttonText: "Shop Now",
  },
  {
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk_s2.jpg?v=1710139621&width=2136",
    title: "New S/S 2024 Amazing collections",
    description: "A symbol of love and a modern take on gold",
    buttonText: "Discover",
  },
  {
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/save_web_slide1_resize.jpg?v=1711681053&width=1800",
    title: "Introducing The Lost Day Collection",
    description: "Ring, Occasion Pieces, Pandora & more collection",
    buttonText: "Discover",
  },
];

const HomeSwiper = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[40rem] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            >
              <div className="absolute top-[11rem] left-[10rem] text-start flex flex-col gap-2">
                <h1 className="text-[50px] max-w-[450px]">{slide.title}</h1>
                <p className="text-[24px] text-[#555]">{slide.description}</p>
                <div>
                  <button className="bg-transparent border-2 mt-5 border-black px-10 py-2 hover:bg-black hover:text-white duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
