import React from "react";
import Image from "next/image";
import Link from "next/link";

const Listing4: React.FC = () => {
  return (
    <div className="bg-white py-10 w-full">
      {/* Feature Container with Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 px-4 sm:px-8">
        {/* Image 1 with Link */}
        <Link href="/item">
          <div className="w-full h-auto flex justify-center">
            <Image
              src="/a.png"
              alt="Ceramic 1"
              width={305}
              height={462}
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>

        {/* Image 2 with Link */}
        <Link href="/item">
          <div className="w-full h-auto flex justify-center">
            <Image
              src="/b.png"
              alt="Ceramic 2"
              width={305}
              height={462}
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>

        {/* Image 3 with Link */}
        <Link href="/item">
          <div className="w-full h-auto flex justify-center">
            <Image
              src="/c.png"
              alt="Ceramic 3"
              width={305}
              height={462}
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>

        {/* Image 4 with Link */}
        <Link href="/item">
          <div className="w-full h-auto flex justify-center">
            <Image
              src="/d.png"
              alt="Ceramic 4"
              width={305}
              height={462}
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-gray-200 text-[#2A254B] text-[16px] font-satoshi px-6 py-2 ">
          View collection
        </button>
      </div>
    </div>
  );
};

export default Listing4;

