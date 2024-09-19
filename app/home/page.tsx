"use client";
import React from "react";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper";
import Fashions from "../components/Fashions/Fashions";
import Categories from "../components/Categories/Categories";

const HomePage = () => {
  return (
    <div className="pt-[10.5rem]">
      <div>
        <HomeSwiper />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <Fashions />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
