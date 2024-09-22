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

  const handleAddToCart = async () => {
    try {
      const token = getCookie("token");
      const response = await axios.post(
        "http://localhost:3001/api/cart/add",
        {
          productId: data?.collection?._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const cartResponse = await axios.get(
          "http://localhost:3001/api/cart-count",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        updateCartCount(cartResponse.data.cartCount);
        alert("Ürün sepete başarıyla eklendi.");
      }

      console.log("Gönderilen productId:", data?.collection?._id);
      console.log("Gönderilen token:", token);
      console.log("Gönderilen quantity:", 1);

      console.log(" eklenen data", response.data);
      console.log("dataa", data);
    } catch (error: any) {
      console.error(
        "Sepete eklerken hata oluştu:",
        error.response?.data || error.message
      );
    }
  };

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
            <button
              onClick={handleAddToCart}
              className="bg-black px-[5rem]  mt-10 py-3 text-white"
            >
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
