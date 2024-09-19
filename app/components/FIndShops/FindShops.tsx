import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const FindShops = () => {
  return (
    <div className="mt-10 ">
      <div className="max-w-[1280px] bg-[#F9EBF9] py-10 mx-auto flex justify-center items-center gap-2">
        <IoHomeOutline className="text-[30px]" />
        <h2 className="text-[26px]">Find Shops Near Your</h2>
        <button className="bg-transparent text-[20px] border-2 border-black py-2 px-10 hover:bg-black hover:text-white duration-300">
          Find Store
        </button>
      </div>
    </div>
  );
};

export default FindShops;
