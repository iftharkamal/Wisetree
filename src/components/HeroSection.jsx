import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* navbar only shown in mobile display*/}
      <nav className="md:hidden flex items-center justify-between mb-5">
        <img
          src="/logoWithName.png"
          alt="logo"
          className="w-[122px] h-[42px]"
        />
        <img src="src/assets/menu.png" alt="menubar" />
      </nav>

      {/* container section */}
      <div className='bg-[url("/mainbackground.png")] bg-cover bg-center h-auto relative rounded-[40px] lg:rounded-[75px] text-[var(--text-color)] font-[var(--font-secondary)] lg:h-[80vh]'>
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
        <img
          src="/ellipseBlue.png"
          alt="blue"
          className="w-[220px] h-[117px] md:w-[330px] md:h-[190px] lg:w-[420px] lg:h-[270px] absolute top-[97px] left-[-13px] md:left-18 md:top-44 lg:left-64 lg:top-52 "
        />
        <img
          src="/ellipseGreen.png"
          alt="green"
          className="w-[220px] h-[117px] md:w-[340px] md:h-[200px] lg:w-[460px] lg:h-[270px] absolute top-[35px] right-[10px] md:right-28 md:top-15 lg:right-46 lg:top-16 "
        />

        {/* text/Headlines */}
        <div className="relative z-10">
          <h5 className="lg:hidden max-w-[220px] p-6 text-base leading-[26px] opacity-85">
            Looking to streamline your marketing?
          </h5>
          <div className="leading-[120px] lg:leading-[170px] lg:absolute lg:w-full lg:top-25 ">
            <div className="overflow-hidden w-full">
              <h1 className="text-[90px] lg:[120px] font-bold whitespace-nowrap uppercase scroll-left">
                Don’t just Keep Up, OUTRUN
              </h1>
            </div>
            <div className="overflow-hidden w-full">
              <h1 className="text-[90px] lg:[120px] font-bold  whitespace-nowrap uppercase scroll-right">
                Don’t just Keep Up, OUTRUN
              </h1>
            </div>
          </div>
          <h5 className="max-w-[280px] lg:max-w-[330px] p-6 text-base lg:text-[18px] leading-[24px] lg:leading-[27px] opacity-85 lg:absolute lg:right-56 lg:top-85">
            Wisetree Brands is your trusted partner to help you stand out, craft
            sustainable B2B strategies, and create a lasting impression.
          </h5>
        </div>

        {/* sphere */}
        <div className="w-[150px] lg:w-[225px] h-[150px] lg:h-[225px] absolute z-20 rounded-full bg-linear-180 from-[#052842] via-[#2A5EA5] to-[#7BB885] top-[150px] right-[50px] lg:top-76 lg:right-132">
          <div className="w-full h-full rounded-full bg-transparent relative">
            <p className="text-[35px] lg:text-[50px] text-center font-medium  uppercase leading-10 lg:leading-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Let’s Talk
            </p>
          </div>
        </div>

        {/* button only shown in desktop screen */}
        <button className="hidden lg:block absolute bottom-3 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-[50px] bg-[#FCFFF9] cursor-pointer  group transition-all duration-500 ">
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
                <p className="text-[#FCFFF9E5]  text-[20px] opacity-0 w-0 overflow-hidden transition-all ease-in-out duration-700 group-hover:opacity-100 group-hover:pr-26 group-hover:whitespace-nowrap">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
