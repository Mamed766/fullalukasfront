import React from "react";
interface HeaderCircleProps {
  number: number;
}

const HeaderCircle: React.FC<HeaderCircleProps> = ({ number }) => {
  return (
    <div className="w-5 h-5 p-2 top-[-2px] right-[-12px] absolute bg-black rounded-full text-white flex items-center justify-center text-[12px]">
      {number}
    </div>
  );
};

export default HeaderCircle;
