import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

type ReviewData = {
  title: string;
  description: string;
  author: string;
  rating: number;
  starIcon: string;
};

const reviews: ReviewData[] = [
  {
    title: "Beautiful products",
    description:
      "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
    author: "- Donald Duck -",
    rating: 5,
    starIcon: "FaStar",
  },
  {
    title: "Amazing service",
    description:
      "The customer service is outstanding. I got my product on time and in perfect condition.",
    author: "- Mickey Mouse -",
    rating: 5,
    starIcon: "FaStar",
  },
  {
    title: "Beautiful products",
    description:
      "Beautiful clothes. I always get complements. Good quality and items wash well. products and designs and such great.",
    author: "- Niamh Oxley -",
    rating: 5,
    starIcon: "FaStar",
  },
  {
    title: "Amazing service",
    description:
      "The customer service is outstanding. I got my product on time and in perfect condition.",
    author: "- Mickey Mouse -",
    rating: 5,
    starIcon: "FaStar",
  },
];

const CustomerReview = () => {
  return (
    <div className="bg-[#EDE2E1] py-20 mt-10">
      <h2 className="flex justify-center text-[26px] font-semibold ">
        Customer Review
      </h2>
      <div className="max-w-[1280px] mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="reviewSwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="px-10 py-10 mt-10 h-auto overflow-hidden"
            >
              <div className="text-start flex flex-col justify-between h-full min-h-[15rem] max-h-[18rem]">
                <div>
                  <div className="bg-black flex justify-center items-center h-[60px] w-[60px] rounded-full">
                    <RiDoubleQuotesL className="text-white text-[30px]" />
                  </div>

                  <h2>{review.title}</h2>
                  <p className="text-[#555]">{review.description}</p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <h2>{review.author}</h2>
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
