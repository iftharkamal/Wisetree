import React from "react";
import Title from "./Title";

const HeroSectionText = () => {
  return (
    <div className="mt-16 lg:p-6">
      <p className="text-base uppercase text-[#2B2A29] mb-5">
        what makes us unique
      </p>
      <hr className="text-[#00213280] mb-5" />
      <div>
        <Title
          text1={"Redefining Success For"}
          text2={"B"}
          text3={"2B"}
          text4={" br"}
          text5={"an"}
          text6={"ds"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  mt-6 gap-6">
        <p className="text-[16px] leading-[26px] font-normal text-[#2B2A29E5] lg:order-2">
          Wisetree Brands stands out for its commitment to deliver sustainable
          and high-performance growth for B2B organisations, through a unique,
          proprietary organic growth engineering methodology. A brand-first
          philosophy, and an agile, experienced team sets Wisetree Brands apart
          in the B2B marketing landscape. Distinct from conventional methods,
          Wisetree uses a{" "}
          <span className="font-semibold">Brand-First Philosophy</span> that
          focuses on sustainable, long-term growth, specifically adapted for the
          post-digital landscape.
        </p>
        <p className="text-[16px] leading-[26px] font-normal text-[#2B2A29E5] lg:order-3">
          Our strategies are designed to be an efficient investment, relative to
          revenue, delivering substantial returns such as increased ROI and
          enhanced customer loyalty. We focus on optimising Per Customer Spend
          by increasing the Lifetime Value (LTV) of the Client, through our
          brand-first approach. By building strong brand foundations and
          strengthening Marketing Operations, using our unique, proprietary{" "}
          <span className="font-medium">5D framework</span>, we create long-term
          value that significantly reduces marketing costs. Learn how we apply
          this framework to guide businesses to success.
        </p>
        <div className="lg:order-1 flex items-end">
          <button className="w-[230px]"><img src="/learnMoreButton.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionText;
