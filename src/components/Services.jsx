import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import Cards2 from "./Cards2";

const Services = () => {
  return (
    <div className="mt-5 lg:mt-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='bg-[url("/DotGrid.png")] bg-contain bg-center w-full lg:mb-8 p-4'
      >
        <h1 className="text-[80px] lg:text-[150px] text-[#2B2A29]">Services</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="p-4"
      >
        <Title
          text1={"Empowering B2B"}
          text2={"Leaders to scale"}
          text3={" Org"}
          text4={"an"}
          text5={"ica"}
          text6={"lly"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 mb-12 pl-4"
      >
        <Cards2 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-full overflow-hidden mb-12"
      >
        <div className="p-4">
          <p className="text-base uppercase font-secondary text-[#2B2A29] mb-5">
            Thoughtflow
          </p>
          <hr className="text-[#00213280] mb-8 lg:mb-16" />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -6 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-[250px] md:w-[420px] lg:w-[450px] h-[320px] md:h-[400px] lg:h-[530px]  -rotate-6 mb-10 md:mb-0 md:-translate-x-[120px] lg:-translate-x-[148px]"
          >
            <img
              src="/thoughtflow.png"
              alt="image"
              className="w-full h-full rounded-[19px] lg:rounded-[35px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col "
          >
            <div className="flex items-center justify-evenly font-secondary text-[#2B2A29BF] text-[16px] gap-3 mb-6">
              <p>oct 15, 2024</p>
              <p className="text-[#2B2A2980]">|</p>
              <p>brand Identity</p>
            </div>
            <h3 className="text-[24px] text-[#144486E5] text-center leading-[28px] max-w-[303px] mb-8">
              Define a unique and clear brand identity that resonates with the
              relevant target audience{" "}
            </h3>
            <button className="uppercase px-[25px] py-[16px] border-[0.8px] border-[#00213280] rounded-[37.5px] text-[18px] text-[#2B2A29BF] cursor-pointer">
              view blog
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: 6 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="hidden md:block w-[300px] md:w-[420px] lg:w-[450px] h-[335px] md:h-[400px] lg:h-[530px]  rotate-6 md:translate-x-[120px] lg:translate-x-[148px]"
          >
            <img
              src="/thoughtflow2.png"
              alt="image"
              className="h-full w-full rounded-[19px] lg:rounded-[35px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
