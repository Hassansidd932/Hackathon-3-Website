import React from "react";
import Link from "next/link";

const Features3: React.FC = () => {
  return (
    
    <div className="bg-white sm:flex-row flex-col   flex   lg:h-[598px] sm:h-[628px]  sm:px-[24px] lg:py-[60px] sm:py-[32px]  gap-[16px] sm:gap-[16px] sm:top-[4094px] sm:left-[1525px]">
      {/* Left Section */}
      <div className="bg-[#2A254B]  lg:w-[634px] sm:w-[342px] lg:h-[478px] sm:h-[281px] sm:top-[32px] sm:left-[24px] sm:p-[36px] sm:gap-0 sm:opacity-100 p-[64px] flex flex-col gap-[12px] text-white">
        <div className="sm:space-y-[12px] justify-center">
          {/* Title */}


          <h3 className="font-clash text-[32px] leading-[39.36px] text-left">
            It started with a small idea
          </h3>
          {/* Subtitle */}
          <h4 className="font-satoshi text-[18px] leading-[24.3px] text-left">
            A global brand with local beginnings, our story began in a <br />
            small studio in South London in early 2014
          </h4>
        </div>
        {/* Button */}
        <div className="flex mt-auto">
          <Link href="/product">
            <button className="bg-[#F9F9F926] px-[32px] py-[16px] text-[16px] font-satoshi font-normal leading-[24px] text-white">
              View collection
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[630px] lg:h-[478px] sm:w-[342px] sm:h-[259px] sm:top-[337px] sm:flex-row flex-col sm:left-[24px] sm:opacity-100">
        <img
          src="/ab.png"
          alt="Product"
          className="h-full object-cover"
        />
      </div>
    </div>
  ) 
    
};

export default Features3;



