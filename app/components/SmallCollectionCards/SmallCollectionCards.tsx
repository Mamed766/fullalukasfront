import Image from "next/image";
import React from "react";
import SmallCollectionCard from "../SmallCollectionCard/SmallCollectionCard";

const SmallCollectionCards = () => {
  return (
    <div className="max-w-[1280px] gap-2  justify-between flex flex-wrap mx-auto mt-10">
      <SmallCollectionCard
        title="New Bangles Collection"
        desc="Catch the higlihht in the roof"
        image="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_4.jpg?v=1710149492"
      />
      <SmallCollectionCard
        title="Culture of Ring Design"
        desc="Pasha da Cartier Collection"
        image="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_5.jpg?v=1710149492"
      />
    </div>
  );
};

export default SmallCollectionCards;
