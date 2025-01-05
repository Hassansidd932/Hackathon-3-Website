import React from "react";
import Image from "next/image";
import Link from "next/link";

const Listing: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Small Device Layout */}
      <div className="block sm:hidden w-[390px] h-[811px] mx-auto mt-[20px]">
        {/* Title */}
        <div className="w-[217px] h-[39px] px-4 mb-4 mx-auto">
          <h3 className="text-[#2A254B] text-[32px] font-clash leading-[39.36px] ">
            New ceramics
          </h3>
        </div>

        {/* Images in a grid layout */}
        <div className="grid grid-cols-2 gap-[24px] px-[24px]">
          {/* Image 1 */}
          <div className="w-[163px] h-[288px]">
            <Image src="/a.png" alt="Ceramic 1" width={163} height={288} />
          </div>
          {/* Image 2 */}
          <div className="w-[163px] h-[288px]">
            <Image src="/b.png" alt="Ceramic 2" width={163} height={288} />
          </div>
          {/* Image 3 */}
          <div className="w-[163px] h-[288px]">
            <Image src="/c.png" alt="Ceramic 3" width={163} height={288} />
          </div>
          {/* Image 4 */}
          <div className="w-[163px] h-[288px]">
            <Image src="/d.png" alt="Ceramic 4" width={163} height={288} />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 w-full flex justify-center">
          <Link href="/product">
            <button className="bg-gray-200 w-[170px] h-[56px] flex justify-center items-center text-[#2A254B] text-[16px] font-satoshi leading-[24px]">
              View collection
            </button>
          </Link>
        </div>
      </div>

      {/* Large Device Layout */}
      <div className="hidden sm:block w-full h-[761px] bg-white">
        {/* Title */}
        <div className="w-[217px] h-[39px] px-4 mb-8">
          <h3 className="text-[#2A254B] text-[32px] font-clash leading-[39.36px]">
            New ceramics
          </h3>
        </div>

        {/* Feature Container */}
        <div className="flex flex-row justify-between sm:gap-6 gap-4 px-4 sm:px-8">
          {/* Image 1 */}
          <div className="w-full sm:w-[305px] h-[462px] flex justify-center">
            <Image src="/a.png" alt="Ceramic 1" width={305} height={462} />
          </div>

          {/* Image 2 */}
          <div className="w-full sm:w-[305px] h-[462px] flex justify-center">
            <Image src="/b.png" alt="Ceramic 2" width={305} height={462} />
          </div>

          {/* Image 3 */}
          <div className="w-full sm:w-[305px] h-[462px] flex justify-center">
            <Image src="/c.png" alt="Ceramic 3" width={305} height={462} />
          </div>

          {/* Image 4 */}
          <div className="w-full sm:w-[305px] h-[462px] flex justify-center">
            <Image src="/d.png" alt="Ceramic 4" width={305} height={462} />
          </div>
        </div>

        {/* Button */}
        <div className="bg-gray-200 w-full sm:w-[170px] h-[56px] mx-auto mt-8 px-8 py-4 flex justify-center items-center">
          <Link href="/product">
            <button className="w-[106px] h-[24px] text-[#2A254B] text-[16px] font-satoshi leading-[24px] text-left">
              View collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Listing;



        
