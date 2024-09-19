"use client";
import { useRequest } from "@/app/_http/axiosFetcher";
import Image from "next/image";
import React from "react";

const Categories = () => {
  const { data, isLoading, error } = useRequest("categories", {
    method: "GET",
    module: "categoryApi",
  });

  console.log(data?.categories[0]?.title);

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-center text-[30px] font-medium pb-10">
        Popular Categories
      </h1>
      <div className="flex flex-wrap gap-10">
        {data &&
          data.categories.map((category: any, index: number) => {
            return (
              <div key={index} className="flex  flex-col items-center">
                <div className="min-w-[180px] min-h-[180px]  max-w-[180px] max-h-[180px] overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                  <Image
                    alt={category?.title || "Category Image"}
                    src={`http://localhost:3001/${category?.image}`}
                    height={300}
                    width={300}
                    quality={100}
                    className="rounded-full h-full w-full object-cover hover:scale-110 duration-300"
                  />
                </div>
                <h2 className="text-center font-medium border-b-2">
                  {category?.title}
                </h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
