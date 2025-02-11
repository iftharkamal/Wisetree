import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const HeroSectionText = () => {
  return (
    <div className="mt-16 lg:p-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-base font-secondary uppercase text-[#2B2A29] mb-5"
      >
        what makes us unique
      </motion.p>
      <motion.hr
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-[#00213280] mb-5"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Title
          text1={"Redefining Success For"}
          text2={"B"}
          text3={"2B"}
          text4={" br"}
          text5={"an"}
          text6={"ds"}
        />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3  mt-6 gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[16px] font-secondary leading-[26px]  text-[#2B2A29E5] lg:order-2"
        >
          Wisetree Brands stands out for its commitment to deliver sustainable
          and high-performance growth for B2B organisations, through a unique,
          proprietary organic growth engineering methodology. A brand-first
          philosophy, and an agile, experienced team sets Wisetree Brands apart
          in the B2B marketing landscape. Distinct from conventional methods,
          Wisetree uses a{" "}
          <span className="font-semibold">Brand-First Philosophy</span> that
          focuses on sustainable, long-term growth, specifically adapted for the
          post-digital landscape.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[16px] font-secondary leading-[26px] font-normal text-[#2B2A29E5] lg:order-3"
        >
          Our strategies are designed to be an efficient investment, relative to
          revenue, delivering substantial returns such as increased ROI and
          enhanced customer loyalty. We focus on optimising Per Customer Spend
          by increasing the Lifetime Value (LTV) of the Client, through our
          brand-first approach. By building strong brand foundations and
          strengthening Marketing Operations, using our unique, proprietary{" "}
          <span className="font-medium">5D framework</span>, we create long-term
          value that significantly reduces marketing costs. Learn how we apply
          this framework to guide businesses to success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="lg:order-1 flex items-end"
        >
          <button className="w-[230px]">
            <img src="/learnMoreButton.png" alt="" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionText;
