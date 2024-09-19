import Image from "next/image";
import React from "react";

interface CardData {
  imageUrl: string;
  category: string;
  title: string;
  buttonText: string;
}

const cardData: CardData[] = [
  {
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482",
    category: "2024 FASHION",
    title: "Just Launched Desk The Hals",
    buttonText: "SHOP NOW",
  },
  {
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_2.jpg?v=1711684410",
    category: "FLAT DISCOUNT",
    title: "Necklakes & Body Jewels",
    buttonText: "SHOP NOW",
  },
  {
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_3.jpg?v=1711684399",
    category: "NEW COLLECTION",
    title: "Jewelry & Charm Rings",
    buttonText: "SHOP NOW",
  },
];

const Fashions = () => {
  return (
    <div className="py-10 flex  justify-center gap-5 flex-wrap">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative cursor-pointer overflow-hidden max-w-[400px] max-h-[17rem] min-h-[17rem]"
        >
          <Image
            alt={card.title}
            height={400}
            width={400}
            src={card.imageUrl}
            className="hover:scale-110 duration-300"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute top-5 left-5 flex flex-col gap-2 text-white">
            <h3 className="text-[12px]">{card.category}</h3>
            <h2 className="text-[20px] font-medium max-w-[150px]">
              {card.title}
            </h2>
            <div>
              <button className="border-b-2 border-white">
                {card.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fashions;
