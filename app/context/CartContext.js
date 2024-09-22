"use client";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const token = getCookie("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:3001/api/cart-count",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setCartCount(response.data.cartCount); // Backend'den gelen sepet sayısını ayarla
        }
      } catch (error) {
        console.error("Sepet sayısı alınamadı:", error);
      }
    };

    fetchCartCount();
  }, []);

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
