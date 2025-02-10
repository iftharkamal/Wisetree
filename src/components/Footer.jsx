import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className='bg-[url("src/assets/mainbg2.png")] bg-cover bg-left text-[#FCFFF9]'>
      <div className="h-[30px] w-full bg-white rounded-b-[45px]"></div>

      <div className="mt-12 ">
        <div className=' bg-[url("src/assets/DotGridFooter.png")] bg-contain  bg-center'>
          <div className="p-4 lg:flex lg:gap-10 items-center justify-between ">
            <h1 className="text-[30px] leading-[32px] mb-5 w-[312px] md:w-[448px] lg:w-[500px]">
              Achieve your business goals today. Book a discovery call now!
            </h1>
            {/* button */}
            <div className="flex justify-between items-center w-[230px] rounded-4xl p-3 text-[#F7FFEF] bg-linear-150 from-[#2A5EA5] via-[#2A5EA5F2] to-[#006633]">
              <button className="text-[19px] font-medium uppercase">
                Connect
              </button>
              <GoArrowUpRight className="text-[29px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 md:hidden gap-6 text-[16px] p-4 text-center">
        <p>About</p>
        <p>Service</p>
        <p>Work</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Case Study</p>
      </div>

      <div className="relative mt-8 mb-8">
        <div className="flex items-center justify-center">
          <img
            src="src/assets/logo.png"
            alt="logo"
            className="opacity-25 w-[197px] lg:w-[364px]"
          />
        </div>
        <div className="w-full flex items-center justify-center p-5 absolute top-12">
          <h1 className="text-[85px] lg:text-[205px] font-semibold bg-gradient-to-r from-[#92CC7E] via-[#1881B8] to-[#1675A7] bg-clip-text text-transparent">
            Wisetree
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {/* icons */}
        <div className="flex gap-3 lg:hidden">
          <img src="src/assets/facebook.png" alt="" />
          <img src="src/assets/instagram.png" alt="" />
          <img src="src/assets/x.png" alt="" />
          <img src="src/assets/youtube.png" alt="" />
          <img src="src/assets/linkedin.png" alt="" />
        </div>

        <div className="h-[0.5px] bg-[#FCFFF980] w-[98%]"></div>
        <p className="text-[16px] text-[#FCFFF9D9] lg:hidden">
          © 2024 wisetree. All Rights Reserved.
        </p>

        <div className="flex items-center justify-between w-full p-4">
          <div className="hidden lg:flex gap-3 cursor-pointer">
            <img src="src/assets/facebook.png" alt="" />
            <img src="src/assets/instagram.png" alt="" />
            <img src="src/assets/x.png" alt="" />
            <img src="src/assets/youtube.png" alt="" />
            <img src="src/assets/linkedin.png" alt="" />
          </div>
          <div className="hidden lg:flex gap-8 text-[18px] cursor-pointer">
            <a>About</a>
            <a>Service</a>
            <a>Work</a>
            <a>Blog</a>
            <a>Career</a>
            <a>Case Study</a>
          </div>
          <div>
            <p className="hidden text-[16px] text-[#FCFFF9D9] lg:block">
              © 2024 wisetree. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
