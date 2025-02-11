import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='bg-[url("/footerbg.png")] bg-cover bg-bottom  text-[#FCFFF9]'
    >
      <div className="h-[30px] w-full bg-white rounded-b-[45px]"></div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 "
      >
        <div className=' bg-[url("/DotGridFooter.png")] bg-contain  bg-center'>
          <div className="p-4 lg:flex lg:gap-10 items-center justify-between ">
            <h1 className="text-[30px] leading-[32px] mb-5 w-[312px] md:w-[448px] lg:w-[500px]">
              Achieve your business goals today. Book a discovery call now!
            </h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <img src="/connectButton.png" alt="button" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Links section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-3 md:hidden gap-6 text-[16px] p-4 text-center"
      >
        <p>About</p>
        <p>Service</p>
        <p>Work</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Case Study</p>
      </motion.div>

      {/* Logo section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mt-8 mb-8"
      >
        <div className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="logo"
            className="opacity-25 w-[197px] lg:w-[364px]"
          />
        </div>
        <div className="w-full flex items-center justify-center p-5 absolute top-12">
          <h1 className="text-[85px] lg:text-[205px] font-semibold bg-gradient-to-r from-[#92CC7E] via-[#1881B8] to-[#1675A7] bg-clip-text text-transparent">
            Wisetree
          </h1>
        </div>
      </motion.div>

      {/* Social icons & Footer info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col items-center justify-center gap-4 p-4"
      >
        {/* icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex gap-3 lg:hidden"
        >
          <motion.img whileHover={{ scale: 1.1 }} src="/facebook.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} src="/instagram.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} src="/x.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} src="/youtube.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} src="/linkedin.png" alt="" />
        </motion.div>

        <div className="h-[0.5px] bg-[#FCFFF980] w-[98%]"></div>
        <p className="text-[16px] text-[#FCFFF9D9] lg:hidden">
          © 2024 wisetree. All Rights Reserved.
        </p>

        {/* large screens section */}
        <div className="flex items-center justify-between w-full p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="hidden lg:flex gap-3 cursor-pointer"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/facebook.png"
              alt=""
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/instagram.png"
              alt=""
            />
            <motion.img whileHover={{ scale: 1.1 }} src="/x.png" alt="" />
            <motion.img whileHover={{ scale: 1.1 }} src="/youtube.png" alt="" />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/linkedin.png"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:flex gap-8 text-[18px] cursor-pointer"
          >
            <a>About</a>
            <a>Service</a>
            <a>Work</a>
            <a>Blog</a>
            <a>Career</a>
            <a>Case Study</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="hidden text-[16px] text-[#FCFFF9D9] lg:block">
              © 2024 wisetree. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Footer;
