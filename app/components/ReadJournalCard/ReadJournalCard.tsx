import Image from "next/image";
import React from "react";

interface IReadJournalCard {
  image: string;
  desc: string;
  date: string;
}

const ReadJournalCard = ({ image, desc, date }: IReadJournalCard) => {
  return (
    <div>
      <div>
        <div className="max-w-[400px] max-h-[250px] min-h-[250px] relative overflow-hidden ">
          <Image
            alt=""
            src={image}
            className="hover:scale-110 duration-300"
            height={270}
            width={400}
          />

          <div className="px-2 absolute top-2 left-2 bg-black w-[130px] text-white flex  items-center justify-center">
            ACCESORIES
          </div>
        </div>
        <div className="mt-5">
          <p>
            POST BY ALUKAS SHOPIFY -{" "}
            <span className="text-[#555]">{date} </span>{" "}
          </p>
          <h2 className="font-medium text-[26px]">{desc}</h2>
          <button className="border-b-2 border-black">Continue Reading</button>
        </div>
      </div>
    </div>
  );
};

export default ReadJournalCard;
