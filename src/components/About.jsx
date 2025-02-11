import React from "react";
import Cards from "./Cards";
import { GoArrowRight } from "react-icons/go";
import ButtonLearnMore from "./ButtonLearnMore";

const About = () => {
  return (
    <div className="bg-white">
      {/* ---------------first container--------------- */}
      <div className='bg-[url("/mainbg2.png")] bg-cover bg-center rounded-bl-[45px] rounded-br-[45px]'>
        <div className="h-[50px] bg-white rounded-br-[45px] rounded-bl-[45px]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 p-4 lg:p-6 mt-10 gap-7 lg:gap-10 lg:ml-5 lg:mt-10">
          <p className="text-[#FCFFF9D9] text-base leading-[26px]">
            We are the B2B branding experts who create long-term value for
            brands, which ultimately translates into deeper connections with
            Prospects and Clients. Our sustainable, integrated marketing,
            communication, and partnership strategies drive substantial ROI
            growth and significantly enhance trust and client loyalty, which are
            critical for long-term business relationships and sustained
            success​.{" "}
          </p>
          <div className="flex flex-col items-start text-[65px] leading-[70px] font-semibold text-[#FCFFF9F2] lg:ml-20">
            <p>Who</p>
            <p className="opacity-85">We</p>
            <p className="opacity-65">Are</p>
          </div>
          <p className="text-[#FCFFF9D9] text-base leading-[26px]">
            As a B2B Brand and Marketing Consulting Firm we are at the forefront
            of redefining success metrics that we achieve through consistent,
            and customised engineered efforts.
          </p>
          <div className="lg:flex lg:items-end lg:justify-end hidden ">
            <button className="cursor-pointer w-[265px]"><img src="/learnMoreWhiteButton.png" alt="button" /></button>
          </div>
        </div>
        <div className="lg:flex justify-end lg:mt-10">
          <Cards />
        </div>
        <div className="flex justify-end p-4 pb-[100px]">
          <GoArrowRight className="text-[#FCFFF9] text-[38px]" />
        </div>
      </div>

      {/* --------second container---------- */}
      <div className="mt-16 relative p-6 mb-10">
        <h1 className="text-center text-[45px] lg:text-[80px] leading-[55px] lg:leading-[95px] text-[#144486] -tracking-normal">
          If you're looking at us,
          <br />
          You're <span className="opacity-95">lo</span>
          <span className="opacity-85">ok</span>
          <span className="opacity-75">ing</span>{" "}
          <span className="opacity-65">to</span>
        </h1>

        {/* box container */}
        <div className="relative">
          <div className="flex gap-7 items-center justify-center">
            {/* Box 1 */}
            <div className="relative bg-[url('/box1.png')] bg-cover bg-center flex items-center z-40  rounded-[25px] lg:rounded-[75px] text-[#FCFFF9E5] w-[256px] h-[143px] lg:w-[700px] lg:h-[431px] -mt-5 lg:-mt-10">
              <p className=" absolute left-1/2 top-1/2 -translate-x-72 -translate-y-1/2 text-[80px] lg:text-[250px] text-center font-medium text-[#FCFFF914]">
                G
              </p>
              <div className="flex items-center justify-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#FCFFF9E5] text-[57px] lg:text-[184px]">
                  1
                </p>
                <div>
                  <p className="text-[26px] lg:text-[86px] font-medium ">
                    GAIN
                  </p>
                  <p className="text-[#FCFFF9D9] text-[13px] lg:text-[43px] whitespace-nowrap">
                    Gain Buyer's Trust
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="relative p-4 bg-[url('/box2.png')] bg-cover bg-center blur-[1px]  flex items-center  rounded-[20px] lg:rounded-[40px] text-[#FCFFF9E5] w-[146px] h-[81px] lg:w-[370px] lg:h-[228px] mt-2.5 ">
              <p className=" absolute left-1/2 top-1/2 -translate-x-40 -translate-y-1/2 text-[80px] lg:text-[136px] font-medium text-[#FCFFF914]">
                E
              </p>
              <div className="flex items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <p className="text-[#FCFFF9E5] text-[30px] lg:text-[97px]">2</p>
                <div>
                  <p className="text-[15px] lg:text-[45px] font-medium ">
                    ENHANCE
                  </p>
                  <p className="text-[#FCFFF9D9] text-[7px] lg:text-[23px] flex-wrap">
                    Gain Enhance sales quota attainment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-7 items-center justify-center -mt-6 lg:-mt-16 lg:ml-36">
            {/* Box 4 */}
            <div className="relative  bg-[url('/box1.png')] bg-cover bg-center blur-[2px] flex items-center justify-center p-1 lg:p-4 rounded-[10px] lg:rounded-[17.5px] text-[#FCFFF9E5] w-[80px] h-[38px] lg:w-[162px] lg:h-[100px] mt-12 lg:mt-24">
              <p className="absolute left-1/2 top-1/2 -translate-x-14 -translate-y-1/2  text-[60px] font-medium text-[#FCFFF914]">
                b
              </p>
              <div className="flex items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#FCFFF9D9] text-[16px] lg:text-[42.5px]">
                  4
                </p>
                <div>
                  <p className="text-[6.5px] lg:text-[20px] font-medium uppercase">
                    build
                  </p>
                  <p className="text-[#FCFFF9D9] text-[3.5px] lg:text-[10px] whitespace-nowrap">
                    build a distintive <br />
                    brand
                  </p>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="relative bg-[url('/box3.png')] bg-cover bg-center blur-[1.5px] flex items-center justify-center px-10 rounded-[15px] lg:rounded-[21px] text-[#FCFFF9E5] w-[100px] h-[58px] lg:w-[200px] lg:h-[120px] lg:p-8">
              <p className="absolute left-1/2 top-1/2 -translate-x-20 -translate-y-1/2  text-[60px] lg:text-[71px] font-medium text-[#FCFFF914]">
                g
              </p>
              <div className="flex items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#FCFFF9D9] text-[20px] lg:text-[51px]">3</p>
                <div>
                  <p className="text-[9.5px] lg:text-[24px] font-medium uppercase">
                    Generate
                  </p>
                  <p className="text-[#FCFFF9D9] text-[7px] lg:text-[12px] flex-wrap">
                    generate demand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
