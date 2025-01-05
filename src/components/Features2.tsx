import React from "react";
import Image from "next/image";
import Link from "next/link";

const Features2: React.FC = () => {
  return (
    <div className="flex flex-col w-full sm:flex-row sm:w-full sm:h-[603px]">
      {/* Small Device Layout */}
      <div className="block sm:hidden w-[390px] h-[828px] mt-[20px] mx-auto">
        {/* Content Section */}
        <div className="w-full h-auto px-6">
          <div className="w-full h-auto mt-8 gap-[25px]">
            {/* Heading */}
            <div className="w-full h-auto py-2 px-6">
              <h3 className="text-[#2A254B] font-clash font-semibold text-[20px] leading-[22px] ">
                From a studio in <br />
                London to a <br />
                global brand with over 400 outlets
              </h3>
            </div>

            {/* Paragraphs */}
            <div className="w-full h-auto py-2 px-6">
              <h6 className="font-satoshi text-[#505977] text-[16px] leading-[18px] ">
                When we started Avion, the <br />
                idea was simple. Make high- <br />
                quality furniture affordable and <br />
                available for the mass market.
              </h6>
              <div className="py-2">
                <h6 className="font-satoshi text-[#505977] text-[16px] leading-[18px] ">
                  Handmade, and lovingly <br />
                  crafted furniture and homeware <br />
                  is what we live, breathe, and <br />
                  design so our Chelsea boutique.
                </h6>
              </div>
            </div>

            {/* Button */}
            <div className="w-[342px] h-[56px] mt-[16px] mx-auto bg-gray-200 flex items-center justify-center">
              <Link href="/product">
                <button className="text-[#2A254B] text-[14px] font-satoshi leading-[24px]">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[390px] h-[358px] mt-[24px] mx-auto">
          <Image src="/2.png" alt="Ceramic 3" width={390} height={358} />
        </div>
      </div>

      {/* Large Device Layout */}
      <div className="hidden sm:flex w-full h-[603px]">
        {/* Content Section */}
        <div className="w-full sm:w-[720px] h-auto sm:h-[603px] px-6">
          <div className="w-full sm:w-[536px] h-auto sm:h-[225px] mt-8 sm:mt-[72px] gap-[25px]">
            {/* Heading */}
            <div className="w-full sm:w-[514px] h-auto sm:h-[68px] justify-center py-10 px-6">
              <h3 className="text-[#2A254B] font-clash text-left text-[20px] sm:text-[24px]">
                From a studio in London to a global brand with over 400 outlets
              </h3>
            </div>

            {/* Paragraphs */}
            <div className="w-full sm:w-[536px] h-auto sm:h-[132px] opacity-100 py-10 px-6">
              <h6 className="font-satoshi text-[#505977] text-[14px] sm:text-[16px] leading-[21.6px] text-left">
                When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
              </h6>
              <div className="py-2">
                <h6 className="font-satoshi text-[#505977] text-[14px] sm:text-[16px] leading-[21.6px] text-left">
                  Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
                </h6>
              </div>
            </div>

            {/* Button */}
            <div className="py-8 sm:py-52 px-6">
              <div className="bg-gray-200 w-full sm:w-[150px] h-[56px] flex items-center justify-center px-6 py-3 gap-[10px]">
                <Link href="/product">
                  <button className="flex w-[86px] h-[24px] text-center text-[#2A254B] text-[14px] sm:text-[16px] font-satoshi leading-[24px] opacity-100">
                    Get in touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[720px] h-auto sm:h-[603px] mt-8 sm:mt-0 ">
          <img src="/2.png"/>
        </div>
      </div>
    </div>
  );
};

export default Features2;


