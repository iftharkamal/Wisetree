import React from "react";
import Title from "./Title";
import Cards2 from "./Cards2";

const Services = () => {
  return (
    <div className="mt-5 lg:mt-8">
      <div className='bg-[url("/src/assets/DotGrid.png")] bg-contain bg-center w-full lg:mb-8 p-4'>
        <h1 className="text-[80px] lg:text-[150px] text-[#2B2A29]">Services</h1>
      </div>
      <div className="p-4">
        <Title
          text1={"Empowering B2B"}
          text2={"Leaders to scale"}
          text3={" Org"}
          text4={"an"}
          text5={"ica"}
          text6={"lly"}
        />
      </div>
      <div className="mt-10 mb-12 pl-4">
        <Cards2 />
      </div>

      <div className="w-full overflow-hidden mb-12">
        <div className="p-4">
          <p className="text-base uppercase text-[#2B2A29] mb-5">Thoughtflow</p>
          <hr className="text-[#00213280] mb-8 lg:mb-16" />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between mb-10">
          <div className="w-[300px] md:w-[420px] lg:w-[500px] h-[335px] md:h-[400px] lg:h-[600px]  -rotate-6 mb-6 md:mb-0 md:-translate-x-[100px] lg:-translate-x-[148px]">
            <img
              src="src/assets/thoughtflow.png"
              alt="image"
              className="w-full h-full rounded-[19px] lg:rounded-[35px]"
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center justify-around text-[#2B2A29BF] text-[16px] gap-3 mb-6">
              <p>oct 15, 2024</p>
              <p className="text-[#2B2A2980]">|</p>
              <p>brand Identity</p>
            </div>
            <h3 className="text-[24px] text-[#144486E5] text-center leading-[28px] max-w-[303px] mb-8">
              Define a unique and clear brand identity that resonates with the
              relevant target audience{" "}
            </h3>
            <button className="uppercase px-[25px] py-[16px] border-[0.8px] border-[#00213280] rounded-[37.5px] text-[18px] text-[#2B2A29BF] ">
              view blog
            </button>
          </div>
          <div className="hidden md:block w-[300px] md:w-[420px] lg:w-[500px] h-[335px] md:h-[400px] lg:h-[600px]  rotate-6 md:translate-x-[100px] lg:translate-x-[148px]">
            <img
              src="src/assets/thoughtflow2.png"
              alt="image"
              className="h-full w-full rounded-[19px] lg:rounded-[35px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
