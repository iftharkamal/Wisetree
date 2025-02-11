import React from "react";

const Cards = () => {
  return (
    <div className="p-4 flex gap-8 overflow-x-auto md:overflow-hidden ">
      {/* card container */}
      <div className="flex gap-8 flex-nowrap w-max">
        {/* cards */}
        <div className="w-[326px] h-[380px] rounded-[25px] shrink-0 snap-start">
          <img
            src="/card1.png"
            alt=""
            className="w-full h-full rounded-[25px]"
          />
        </div>
        <div className="w-[326px] h-[321px] rounded-[25px] shrink-0 snap-start">
          <img
            src="/card2.png"
            alt=""
            className="w-full h-full rounded-[25px]"
          />
        </div>
        <div className="w-[326px] h-[401px] rounded-[25px] shrink-0 snap-start">
          <img
            src="/card3.png"
            alt=""
            className="w-full h-full rounded-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
