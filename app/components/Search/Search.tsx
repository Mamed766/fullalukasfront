import React from "react";
import { TfiSearch } from "react-icons/tfi";

interface SearchProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

const Search: React.FC<SearchProps> = ({ value = "", onChange, onSearch }) => {
  return (
    <div className="border rounded-sm flex justify-between px-2 py-3 items-center border-black/50 min-w-[270px] max-w-full">
      <input
        placeholder="Search Products"
        className="w-full text-[12px] outline-none"
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSearch) {
            onSearch();
          }
        }}
      />
      <TfiSearch className="text-black/70 cursor-pointer" onClick={onSearch} />
    </div>
  );
};

export default Search;
