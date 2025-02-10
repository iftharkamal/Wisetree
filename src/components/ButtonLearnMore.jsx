import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ButtonLearnMore = () => {
  return (
    <div className="flex justify-between items-center w-[230px] rounded-4xl p-3 text-[#F7FFEF] bg-linear-150 from-[#2A5EA5] via-[#2A5EA5F2] to-[#006633]">
      <button className="text-[19px] font-medium uppercase">Learn more</button>
      <GoArrowUpRight className="text-[29px]" />
    </div>
  );
};

export default ButtonLearnMore;
