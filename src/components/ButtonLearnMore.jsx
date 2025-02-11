import React from "react";
import { GoArrowUpRight } from "react-icons/go";

{/* <button className="text-[19px] font-medium uppercase">Learn more</button>
<GoArrowUpRight className="text-[29px]" /> */}
// 

const ButtonLearnMore = () => {
  return (
    <button className="flex  items-center rounded-4xl text-[#F7FFEF] text-[19px] uppercase bg-linear-150 from-[#2A5EA5] via-[#2A5EA5F2] to-[#006633]">
      <div className=" w-[180px] h-[45px] rounded-4xl flex items-center"><p>Learn More</p></div>
      <div className="bg-amber-500 w-[20px] h-[45px] "></div>
      <div className="w-[45px] h-[45px] rounded-full bg-white"></div>
     
    </button>
  );
};

export default ButtonLearnMore;
