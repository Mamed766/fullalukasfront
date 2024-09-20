import Image from "next/image";
import React from "react";

interface ISmallCard {
  title: string;
  desc: string;
  image: string;
}

const SmallCollectionCard = ({ title, desc, image }: ISmallCard) => {
  return (
    <div>
      <div className="relative overflow-hidden max-w-[600px] max-h-[350px] min-h-[350px]">
        <Image
          alt=""
          src={image}
          className="hover:scale-110 duration-300"
          height={300}
          width={600}
        />

        <div className="absolute top-5 left-5">
          <h2 className="text-[26px] max-w-[200px]">{title}</h2>
          <p className="text-[16px] text-[#555]">{desc}</p>
          <div>
            <button className="border-b-2 mt-3 border-black">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCollectionCard;
