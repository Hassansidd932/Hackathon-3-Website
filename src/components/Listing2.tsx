import React from "react";
import Image from "next/image";
import Link from "next/link";

const Listing2: React.FC = () => {
  return (
    <div className="bg-white w-full max-w-[1440px] h-auto mt-[20px] mx-auto opacity-100 pb-[40px]">
      {/* Title */}
      <div className="w-[330px] h-[45px] mt-[64px] mx-auto sm:ml-[80px]">
        <h2 className="text-[#2A254B] font-clash text-[32px] leading-[44.8px] text-center sm:text-left">
          Our popular products
        </h2>
      </div>

      {/* Image Layout */}
      <div className="flex flex-col sm:flex-row sm:gap-[16px] mt-[16px] px-4 sm:px-0 justify-center">
        {/* Large Image */}
        <div className="w-full sm:w-[630px] lg:h-[462px] sm:h-[288px] flex justify-center mb-[16px] sm:mb-0">
          <Image src="/e.png" alt="Popular Product 1" width={630} height={462} />
        </div>

        {/* Smaller Images */}
        <div className="flex flex-wrap sm:flex-row rap gap-[16px] justify-center sm:justify-evenly">
          {/* Image 2 */}
          <div className=" flex flex-row gap-[16px]">
           <div className="lg:w-[305px] lg:h-[462px] sm:w-[163px] sm:h-[288px]"><Image src="/a.png" alt="Popular Product 2" width={305} height={462} /></div>

           {/* Image 3 */}
            <div className="lg:w-[305px] lg:h-[462px] sm:w-[163px] sm:h-[288px]"><Image src="/f.png" alt="Popular Product 3" width={305} height={462} /></div>
         </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 sm:mt-[40px]">
        <Link href="/product">
          <button className="bg-gray-200 w-[170px] h-[56px] flex justify-center items-center text-[#2A254B] text-[16px] font-satoshi leading-[24px]">
            View collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Listing2;





