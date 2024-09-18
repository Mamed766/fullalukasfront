import React from "react";
import { BsCursorFill } from "react-icons/bs";
import Link from "next/link";

export type DropdownItem = {
  label: string;
  link: string;
};

export type DropdownProps = {
  items: DropdownItem[];
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul className="flex-col border border-[#e3e3e3] shadow-xl font-normal text-[13px] p-5 z-10 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-in-out absolute w-[15rem] top-[45px] bg-white ">
      {items.map((item, index) => (
        <Link
          href={`/${item.link}`}
          key={index}
          className="flex py-1 items-center gap-1"
        >
          <span className="text-black  duration-300">{item.label}</span>
        </Link>
      ))}
    </ul>
  );
};

export default Dropdown;
