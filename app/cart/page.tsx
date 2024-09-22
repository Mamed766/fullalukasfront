"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

interface CartItem {
  productId?: string;
  quantity?: number;
  title?: string;
  price?: number;
  image?: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = getCookie("token");
        console.log("Frontend'deki token:", token);

        const response = await axios.get("http://localhost:3001/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setCartItems(response.data.items ?? []);
        console.log("API Response CARD:", response.data);
      } catch (error: any) {
        console.error(
          "Sepet alınırken hata oluştu:",
          error.response?.data || error.message
        );
      }
    };

    fetchCart();
  }, []);

  return (
    <>
      <div className="pt-[12rem] flex flex-col gap-2">
        <div className="flex justify-center text-[36px]">My Cart!</div>
        <div className=" max-w-[1280px] flex gap-2 flex-wrap mx-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col items-center justify-center ">
                  <p className="font-bold">Quantity: {item?.quantity}</p>
                  {item?.title && <p>Başlık: {item?.title}</p>}
                  {item?.price && <p>Price: {item?.price}</p>}
                </div>
                {item?.image && (
                  <img
                    src={`http://localhost:3001/${item?.image}`}
                    alt={item.title}
                  />
                )}
              </div>
            ))
          ) : (
            <p>Sepetiniz boş.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
