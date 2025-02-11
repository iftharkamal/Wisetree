import React from "react";

const Cards2 = () => {
  return (
    <div className="flex items-center overflow-x-auto">
      {/* cards container */}
      <div className="flex flex-col md:flex-row md:overflow-x-auto  gap-5 mt-5 scroll-smooth">
        {/* cards */}

        <div className="relative  md:w-[325px] flex-shrink-0">
          <div className="relative w-full">
            <img src="/cardbg.png" alt="card" />
            <div className="absolute top-10 left-5 uppercase text-[#fcfff9]">
              <p className="text-[22px] whitespace-nowrap">
                enhanced Brand <br />
                Visibility in Competitive{" "}
              </p>
              <p className="text-[32px]">markets</p>
              <div className="mt-14">
                <img src="/Frame.png" alt="logo" />
              </div>
            </div>
            <div className="absolute right-0 bottom-0  md:right-0 md:bottom-0">
              <img src="/cardcircle.png" alt="circle" />
              <p className="absolute font-secondary text-white text-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                01.
              </p>
            </div>
          </div>
        </div>

        <div className="relative  md:w-[325px] flex-shrink-0">
          <div className="">
            <img src="/cardbg2.png" alt="card" />
            <div className="absolute top-10 left-7 uppercase text-[#fcfff9] px-1">
              <div className="mb-14">
                <img src="/Vector2.png" alt="logo" />
              </div>
              <p className="text-[22px] whitespace-nowrap">
                Balance CAC <br />
                with ROI
              </p>
              <p className="text-[32px]">Digital Era</p>
            </div>
          </div>

          <div className="absolute right-0 top-0">
            <img src="/cardcircle.png" alt="circle" />
            <p className="absolute font-secondary text-white text-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              02.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-[325px] flex-shrink-0">
          <div className="">
            <img src="/cardbg.png" alt="card" />
            <div className="absolute top-10 left-5 uppercase text-[#fcfff9] px-3">
              <p className="text-[22px] whitespace-nowrap">
                Complex product
                <br />& service
              </p>
              <p className="text-[32px]">launches</p>
              <div className="mt-14">
                <img src="/Vector3.png" alt="logo" />
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <img src="/cardcircle.png" alt="circle" />
            <p className="absolute font-secondary text-white text-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              03.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-[325px] flex-shrink-0">
          <div className="">
            <img src="/cardbg2.png" alt="card" />
            <div className="absolute top-10 left-7 uppercase text-[#fcfff9] px-1">
              <div className="mb-14">
                <img src="/Vector4.png" alt="logo" />
              </div>
              <p className="text-[22px] whitespace-nowrap">
                Scale Marketing
                <br /> Operations for{" "}
              </p>
              <p className="text-[32px]">Growth</p>
            </div>
          </div>

          <div className="absolute right-0 top-0">
            <img src="/cardcircle.png" alt="circle" />
            <p className="absolute font-secondary text-white text-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              04.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-[325px] flex-shrink-0">
          <div className="">
            <img src="/cardbg.png" alt="card" />
            <div className="absolute top-10 left-5 uppercase text-[#fcfff9]">
              <p className="text-[22px] whitespace-nowrap">
                alignment Between
                <br />
                Sales & Marketing
              </p>
              <p className="text-[32px]">Teams</p>
              <div className="mt-14">
                <img src="/Vector5.png" alt="logo" />
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <img src="/cardcircle.png" alt="circle" />
            <p className="absolute font-secondary text-white text-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              05.
            </p>
          </div>
        </div>

        <div className="relative md:w-[325px] flex-shrink-0">
          <div className="">
            <img src="/cardbg2.png" alt="card" />
            <div className="absolute top-10 left-7 uppercase text-[#fcfff9] px-1">
              <div className="mb-14">
                <img src="/Vector6.png" alt="logo" />
              </div>
              <p className="text-[22px] whitespace-nowrap">
                contemparary Brand <br />
                Positioning in the{" "}
              </p>
              <p className="text-[32px]">Digital Era</p>
            </div>
          </div>

          <div className="absolute right-0 top-0">
            <img src="/cardcircle.png" alt="circle" />
            <p className="absolute font-secondary text-white text-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              06.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-[325px] flex-shrink-0">
          <div className="">
            <img src="/cardbg.png" alt="card" />
            <div className="absolute top-10 left-5 uppercase text-[#fcfff9]">
              <p className="text-[22px] whitespace-nowrap">consistent Global</p>
              <p className="text-[32px]">Brand Identity</p>
              <div className="mt-20">
                <img src="/Vector7.png" alt="logo" />
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <img src="/cardcircle.png" alt="circle" />
            <p className="absolute font-secondary text-white text-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              07.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
