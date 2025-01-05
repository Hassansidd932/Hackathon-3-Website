import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
  <div>
    <div className="lg:block hidden">
    <div className="relative lg:w-full lg:h-[704px]">
      {/* Background Image for Large Devices */}
      <div className="absolute top-0 left-0 lg:w-full lg:h-full">
        <Image
          src="/h.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Box */}
      <div className="lg:py-16 sm:w-full sm:h-[639px] lg:px-72 sm:px-4 sm:pt-[47px]">
        <div className="flex flex-col relative lg:mx-96 bg-white lg:w-[630px] lg:h-[444px] sm:w-[341px] sm:h-[256px] sm:mt-[47px] sm:px-[24px]">
          {/* Heading */}
          <div className="mb-[20px] flex sm:justify-center sm:text-center lg:py-6">
            <h2 className="font-clash lg:text-[32px] lg:leading-[44.8px] lg:text-left sm:text-2xl sm:text-center sm:leading-[29.52px] text-[#2A254B]">
              Luxury homeware for people who love timeless design quality
            </h2>
          </div>
          {/* Subheading */}
          <div className="mb-[32px] lg:py-0">
            <h6 className="lg:font-satoshi lg:text-[18px] lg:leading-[27px] lg:text-left sm:text-[16px] sm:leading-[21.6px] text-[#5B5676] sm:text-[#2A254B]">
              Shop the new Spring 2022 collection today
            </h6>
          </div>
          {/* Button */}
          <div className="lg:py-8 sm:py-0">
            <div className="mt-[10px] bg-[#F9F9F9] lg:w-[170px] lg:h-[56px] lg:py-[16px] lg:px-[32px] sm:w-full sm:h-28">
              <Link href="/product">
                <button className="font-satoshi text-[16px] leading-[24px] text-[#2A254B]  w-full h-full">
                  View collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image for Small Devices */}
      <div className="sm:content-center lg:hidden sm:w-[390px] sm:h-[304px] py-5  px-20">
        <Image
          src="/h.png"
          alt="Hero Background for Small Devices"
          width={390}
          height={304}
        />
      </div>
    </div>
    </div>
    <div className="lg:hidden justify-center">
      <div className="bg-white w-[375] h-[639px] left-[1513px] py-20 gap-0 justify-center items-center content-center">
        <div className="w-[341px] h-[256px] top-[47px] left-[24px] gap-[32px]">
          <div className="w-[341px] h-[168px] gap-[12px] ">
            <div className="w-[341px] h-[90px] gap-0  text-center">
              <h1 className="text-[#2A254B] font-clash text-[24px] font-normal leading-[29.52px] text-center">
                Luxury homeware for people
                who love timeless design 
                quality
              </h1>
            </div>
            <div className="w-[341px] h-[66px] gap-0 ">
              <p className="text-[#2A254B] font-satoshi text-[16px] font-normal leading-[21.6px] text-center">
                With our new collection, view over 400 bespoke
                pieces from homeware through to furniture
                today
              </p>
            </div>
          </div>

          <div className="px-5">
            <div className="bg-[#F9F9F9] w-[337px] h-[56px] py-[16px] text-center gap-[10px] ">
            <Link href="/product">
              <button className="font-satoshi text-[16px] font-normal leading-[24px] text-left">
                View collection
              </button>
            </Link>
          </div>
          </div>
        </div>

        <div className="w-[390px] h-[304px] top-[335px] mx-auto gap-0 opacity-100"><img src="/h.png" alt="Hero Image" className="w-full h-full object-cover" /></div>
      </div>
    </div>
  </div>
  
  );

};

export default Hero;



