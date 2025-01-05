import React from "react";
import Link from "next/link";

const Features4: React.FC = () => {
  return (
    <div>
    <div className="flex w-full h-[603px] lg:w-full lg:h-[603px] flex-col lg:flex-row">
      {/* Left Section with Image */}
      <div className="w-full lg:w-[720px] h-[358px] lg:h-[603px]">
        <img
          src="/f4.png"
          alt="Feature Image"
          className="w-full h-full object-cover  "
        />
      </div>
      

      {/* Right Section with Text and Button */}
      <div className="bg-[#F9F9F9] w-full lg:w-[720px] h-[836px] lg:h-[603px] px-6 lg:px-[84px] py-6 lg:p-11 pt-[72px] pb-[306px]">
        {/* Text Content */}
        <div className="space-y-6 lg:space-y-[25px]">
          {/* Title */}
          <h4 className="text-[#2A254B] font-clash  text-[10px] lg:text-[24px] leading-[28px] lg:leading-[33.6px] text-left">
            Our service isn’t just personal, it’s actually <br /> hyper personally exquisite
          </h4>

          {/* Subtitle */}
          <h6 className="text-[#505977] font-satoshi text-[14px] lg:text-[16px] leading-[21px] lg:leading-[21.6px] text-left">
            When we started Avion, the idea was simple. Make high-quality furniture <br />
            affordable and available for the mass market. <br />
            <div className="py-3"></div>
            Handmade, and lovingly crafted furniture and homeware is what we live, <br />
            breathe and design so our Chelsea boutique became the hotbed for the <br />
            London interior design community.
          </h6>
        </div>

        {/* Button */}
        <div className="mt-6 lg:mt-[40px] py-4 lg:py-44">
          <Link href="/product">
            <button className="bg-white px-[32px] py-[16px] text-[#2A254B] font-satoshi text-[16px] lg:text-[16px] leading-[24px] lg:leading-[24px] w-full lg:w-[342px] h-[56px]">
              Get in touch
            </button>
          </Link>
          
        </div>
        
      </div>
    </div>
    <div className="sm:mb-10 sm:block md:hidden lg:hidden p-20 bg-white">
    </div>
    </div>
     
    
   
     
  );
};

export default Features4;


