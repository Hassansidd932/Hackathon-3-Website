import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <div className="bg-gray-50  lg:w-full  sm:w-[392px] lg:h-[277px] sm:h-[385px]  px-[128px] py-[88px] mx-auto flex flex-col sm:flex-row justify-between items-center ">
      {/* Left Section */}
      <div className=" lg:w-[704px] sm:w-[342px] text-left">
        <h3 className="font-clash px-0 text-[32px] text-[#2A254B] leading-[50.4px] text-left">
          A brand built on the love of craftmanship, quality
          <br />
          and outstanding customer service
        </h3>
      </div>

      {/* Right Section */}
      <div className="flex justify-center sm:w-[342px] sm:h-[56px] items-center">
        <Link href="/product"><button className="bg-white px-[32px] py-[16px] text-[16px] font-satoshi font-normal leading-[24px] text-[#2A254B]">
          View our products
        </button></Link>
      </div>
    </div>
  );
};

export default Header;
