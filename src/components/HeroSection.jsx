import React from "react";
import {motion} from "framer-motion"

const HeroSection = () => {
  return (
    <>
      {/* navbar only shown in mobile display*/}
      <motion.nav 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="md:hidden flex items-center justify-between mb-5">
        <img
          src="/logoWithName.png"
          alt="logo"
          className="w-[122px] h-[42px]"
        />
        <img src="/menu.png" alt="menubar" />
      </motion.nav>

      {/* container section */}
      <motion.div
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
       className='bg-[url("/mainbackground.png")] bg-cover bg-center h-auto relative rounded-[40px] lg:rounded-[75px] text-[var(--text-color)] font-[var(--font-secondary)] lg:h-[80vh]'>
        {/* ------inverter border radius with logo in desktop view--------- */}
        <div className="hidden md:block">
          {/* inverted border-radius  */}
          <>
            <div className="absolute w-[45px] h-[50px] bg-white top-0 left-[227px] "></div>
            <div className="absolute top-0 left-[225px] w-[58px] h-[50px] bg-[#06182e] rounded-tl-[80px]"></div>
          </>
          <>
            <div className="absolute w-[45px] h-[50px] bg-white top-25 left-0 "></div>
            <div className="absolute top-25 left-0 w-[58px] h-[50px] bg-[#06182e] rounded-tl-[90px]"></div>
          </>

          {/* logo*/}
          <div className="w-[230px] h-[100px] bg-white rounded-br-[89px] relative">
            <div>
              <img
                src="/logoWithName.png"
                alt="logo"
                className="w-[179px] h-[61px] absolute top-4 left-4"
              />
            </div>
          </div>
        </div>

        {/* decorate elements */}
        <motion.img
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, delay: 0.2 }}
          src="/ellipseBlue.png"
          alt="blue"
          className="w-[220px] h-[117px] md:w-[330px] md:h-[190px] lg:w-[420px] lg:h-[270px] absolute top-[97px] left-[-13px] md:left-10 md:top-44  lg:left-10 lg:top-52 xl:left-30 "
        />
        <motion.img
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, delay: 0.2 }}
          src="/ellipseGreen.png"
          alt="green"
          className="w-[220px] h-[117px] md:w-[340px] md:h-[200px] lg:w-[460px] lg:h-[270px] absolute top-[35px] right-[10px] md:right-20 md:top-15 lg:right-10 lg:top-16 xl:right-30"
        />

        {/* text/Headlines */}
        <div className="relative z-10">
          <motion.h5 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="lg:hidden max-w-[220px] font-[var(--font-secondary)] p-6 text-base leading-[26px] opacity-85">
            Looking to streamline your marketing?
          </motion.h5>
          <div className="leading-[120px]  lg:leading-[150px] xl:leading-[180px] lg:absolute w-full lg:top-20 xl:top-12 ">
            <div className="overflow-hidden w-full">
              <motion.h1 
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 2, ease: "easeOut" }}
              className="text-[90px] lg:[120px] font-bold  uppercase scroll-left">
                Don’t just Keep Up, OUTRUN
              </motion.h1>
            </div>
            <div className="overflow-hidden ">
              <motion.h1 
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              className="text-[90px] lg:[120px] font-bold  whitespace-nowrap uppercase scroll-right">
                Don’t just Keep Up, OUTRUN
              </motion.h1>
            </div>
          </div>
          <motion.h5
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.5 }}
          className="max-w-[280px] lg:max-w-[330px] font-secondary p-6 text-base lg:text-[18px] leading-[24px] lg:leading-[27px] opacity-85 lg:absolute lg:right-10 lg:top-96 xl:top-96 xl:right-24 ">
            Wisetree Brands is your trusted partner to help you stand out, craft
            sustainable B2B strategies, and create a lasting impression.
          </motion.h5>
        </div>

        {/* sphere */}
        <motion.div
         initial={{opacity:0, x:200}}
         animate={{opacity:1, x:0}}
         transition={{duration:2, delay:0.5}}
         whileHover={{ scale: 1.1 }}
         className="w-[150px] lg:w-[225px] h-[150px] lg:h-[225px] absolute z-20 rounded-full bg-linear-180 from-[#052842] via-[#2A5EA5] to-[#7BB885] top-[150px] right-[50px] md:top-60 md:right-50 lg:top-64 lg:right-60 xl:right-96">
          <div className="w-full h-full rounded-full bg-transparent relative">
            <p className="text-[35px] lg:text-[50px] text-center font-medium  uppercase leading-10 lg:leading-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Let’s Talk
            </p>
          </div>
        </motion.div>

        {/* button only shown in desktop screen */}
        <motion.button
        initial={{opacity:0, y:-30}}
        animate={{opacity:1, y:0}}
        transition={{duration:2, delay:0.5}}
        className="hidden lg:block absolute bottom-3 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-[50px] bg-[#FCFFF9] cursor-pointer  group transition-all duration-500 ">
          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[43px] h-[40px] group-hover:hidden"
            />
            <div className="hidden group-hover:flex group-hover:gap-2 group-hover:transition-all group-hover:duration-300">
              <div className="w-[51px] h-[51px] rounded-full bg-[#84C08A] flex items-center justify-center">
                <img
                  src="/cross.png"
                  alt="exit"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="w-[134px] h-[51px] rounded-[50px] bg-[#187EB4] flex items-center justify-center">
                <p className="text-[#FCFFF9E5] font-[var(--font-secondary)] text-[20px] opacity-0 w-0 overflow-hidden transition-all ease-in-out duration-700 group-hover:opacity-100 group-hover:pr-28 group-hover:whitespace-nowrap">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default HeroSection;
