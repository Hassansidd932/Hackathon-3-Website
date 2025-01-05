import React from "react";
import Image from "next/image";
import Link from "next/link";

const Listing6: React.FC = () => {
  return (
    <div className="bg-white py-10 w-full">
      {/* Title */}
      <div className="h-[39px] px-6 mb-8">
        <h3 className="text-[#2A254B] text-[32px] font-clash leading-[39.36px]">
          You might also like
        </h3>
      </div>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 px-4 sm:px-8">
        {/* Image 1 */}
        <div className="w-full flex justify-center">
          <Image
            src="/a.png"
            alt="Ceramic 1"
            width={305}
            height={462}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full flex justify-center">
          <Image
            src="/b.png"
            alt="Ceramic 2"
            width={305}
            height={462}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full flex justify-center">
          <Image
            src="/c.png"
            alt="Ceramic 3"
            width={305}
            height={462}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="w-full flex justify-center">
          <Image
            src="/d.png"
            alt="Ceramic 4"
            width={305}
            height={462}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center mt-8">
        <Link href="/product">
          <button className="bg-gray-200 text-[#2A254B] text-[16px] font-satoshi px-6 py-2">
            View collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Listing6;
