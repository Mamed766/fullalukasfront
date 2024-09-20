import Image from "next/image";
import React from "react";
import ReadJournalCard from "../ReadJournalCard/ReadJournalCard";

const ReadJournal = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-[36px]">Read Journal</h2>
        <p className="text-[#555]">
          Latest trends and inspirations in fashion design.
        </p>
      </div>
      <div className="flex gap-2 justify-between mt-10 flex-wrap">
        <ReadJournalCard
          date="MAR 06 2024"
          image="https://demo-alukas.myshopify.com/cdn/shop/articles/3.jpg?v=1711695248&width=533"
          desc="Selective Styles Help Your Look"
        />
        <ReadJournalCard
          date="MAR 06 2024"
          image="https://demo-alukas.myshopify.com/cdn/shop/articles/2.jpg?v=1711695314"
          desc="How to Style a Quiff"
        />
        <ReadJournalCard
          date="MAR 06 2024"
          image="https://demo-alukas.myshopify.com/cdn/shop/articles/1.jpg?v=1711695328&width=533"
          desc="Chirtmas Gift Guide"
        />
      </div>
    </div>
  );
};

export default ReadJournal;
