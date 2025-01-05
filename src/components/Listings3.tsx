import React from "react";
import Image from "next/image";
import Link from "next/link";

const Listing3: React.FC = () => {
  return (
    <div className="bg-white w-full py-6 px-4">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {/* Image 1 with Link */}
        <Link href="/item">
          <div className="w-full h-auto">
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
          <div className="w-full h-auto">
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
          <div className="w-full h-auto">
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
          <div className="w-full h-auto">
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
    </div>
  );
};

export default Listing3;

