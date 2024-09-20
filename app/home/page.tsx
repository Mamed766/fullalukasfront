"use client";
import React from "react";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper";
import Fashions from "../components/Fashions/Fashions";
import Categories from "../components/Categories/Categories";
import Collection from "../components/Collection/Collection";
import FindShops from "../components/FIndShops/FindShops";
import AutmnCollection from "../components/AutmnCollection/AutmnCollection";
import SmallCollectionCards from "../components/SmallCollectionCards/SmallCollectionCards";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import ReadJournal from "../components/ReadJournal/ReadJournal";
import FollowUs from "../components/FollowUs/FollowUs";

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
      <div>
        <Collection />
      </div>
      <div>
        <FindShops />
      </div>
      <div>
        <AutmnCollection />
      </div>
      <div>
        <SmallCollectionCards />
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <CustomerReview />
      </div>
      <div>
        <ReadJournal />
      </div>
      <div>
        <FollowUs />
      </div>
    </div>
  );
};

export default HomePage;
