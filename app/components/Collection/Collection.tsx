import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useRequest } from "@/app/_http/axiosFetcher";
import { useRouter } from "next/navigation";
const Collection = () => {
  const router = useRouter();

  const { data, isLoading, error } = useRequest("collections", {
    method: "GET",
    module: "collectionApi",
  });

  const handleContinueReading = (id: string) => {
    router.push(`/collections/${id}`);
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-[36px] text-center mt-10">Trendy Collection</h2>
      <p className="text-[#555] text-[20px] text-center">
        Collect your loves with our newest arrivals.
      </p>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="collectionSwiper"
        >
          {data &&
            data.collections.map((collection: any, index: number) => {
              return (
                <SwiperSlide
                  onClick={() => handleContinueReading(collection._id)}
                >
                  <div className="relative mt-10  group overflow-hidden">
                    <Image
                      alt=""
                      src={`http://localhost:3001/${collection?.image}`}
                      height={300}
                      width={1000}
                      quality={100}
                      objectFit="cover"
                      className="object-cover  cursor-pointer"
                    />

                    <div className="absolute cursor-pointer group-hover:right-5 top-3 right-[-4rem] bg-white p-3 rounded-full duration-300">
                      <FaRegHeart />
                    </div>

                    <div className="absolute flex flex-col gap-2 font-medium text-[12px] top-2 left-2 text-start">
                      {collection?.subscription && (
                        <p className="bg-orange-400 px-2">Subscription</p>
                      )}

                      {collection.percent && (
                        <p className="bg-red-500 px-2 text-white max-w-[50px]">
                          -{collection?.percent}%
                        </p>
                      )}

                      {collection?.new && (
                        <p className="bg-blue-500 px-2 text-white max-w-[50px]">
                          New
                        </p>
                      )}

                      {collection?.hot && (
                        <p className="bg-blue-600 px-2 text-white max-w-[50px]">
                          HOT
                        </p>
                      )}
                    </div>

                    <div>
                      <h2 className="text-[#555]">{collection?.title}</h2>
                      <p>{collection?.desc}</p>
                      <p>${collection?.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Collection;
