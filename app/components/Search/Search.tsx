import React from "react";
import { TfiSearch } from "react-icons/tfi";

const Search = () => {
  return (
    <div className="border rounded-sm flex justify-between px-2 py-3 items-center border-black/50 min-w-[270px]  max-w-full">
      <input
        placeholder="Search Products"
        className="w-full text-[12px] outline-none"
        type="text"
      />
      <TfiSearch className="text-black/70 cursor-pointer" />
    </div>
  );
};

export default Search;
