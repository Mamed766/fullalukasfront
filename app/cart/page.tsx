"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

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

        setCartItems(response.data.items);
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
    <div className="pt-[12rem] max-w-[1280px] mx-auto">
      <h1>Sepetim</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>Ürün ID: {item}</p>
            <p>Miktar: {item}</p>
          </div>
        ))
      ) : (
        <p>Sepetiniz boş.</p>
      )}
    </div>
  );
};

export default CartPage;
