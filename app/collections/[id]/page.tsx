"use client";
import { useRequest } from "@/app/_http/axiosFetcher";
import AlukasLogo from "@/app/components/AlukasLogo/AlukasLogo";
import AutmnCollection from "@/app/components/AutmnCollection/AutmnCollection";
import Collection from "@/app/components/Collection/Collection";
import FeaturedProducts from "@/app/components/FeaturedProducts/FeaturedProducts";
import { CartContext } from "@/app/context/CartContext";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext } from "react";

const page = () => {
  const { id } = useParams();
  const { cartCount, updateCartCount } = useContext(CartContext);

  const { data, isLoading, error } = useRequest(
    () => (id ? `collections/${id}` : null),
    {
      method: "GET",
      module: "collectionApi",
    }
  );

  console.log(data);

  return (
    <div className="pt-[12rem] max-w-[1280px] mx-auto">
      <div className="flex gap-[5rem]">
        <div>
          <Image
            alt=""
            src={`http://localhost:3001/${data?.collection?.image}`}
            height={600}
            width={600}
            objectFit="cover"
            quality={100}
            className="object-cover"
          />
        </div>
        <div>
          <AlukasLogo />
          <div className="flex gap-2 mt-5">
            {data?.collection?.subscription && (
              <p className="bg-orange-400 px-2 rounded">Subscription</p>
            )}

            {data?.collection.percent && (
              <p className="bg-red-500 rounded px-2 text-white max-w-[50px]">
                -{data?.collection?.percent}%
              </p>
            )}

            {data?.collection?.new && (
              <p className="bg-blue-500 rounded px-2 text-white max-w-[50px]">
                New
              </p>
            )}

            {data?.collection?.hot && (
              <p className="bg-blue-600 rounded px-2 text-white max-w-[50px]">
                HOT
              </p>
            )}
          </div>
          <h1 className="text-[33px] font-medium">{data?.collection.desc}</h1>
          <p className="text-[#555]">{data?.collection.title}</p>
          <h2 className="text-[20px]">Price: ${data?.collection.price}</h2>
          <div>
            <button className="bg-black px-[5rem]  mt-10 py-3 text-white">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Collection />
      <AutmnCollection />
      <FeaturedProducts />
    </div>
  );
};

export default page;
