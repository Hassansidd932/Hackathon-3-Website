import React from "react";
import Link from "next/link";

const Productlist: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[1440px] lg:h-[759px] p-4 lg:p-0 lg:pr-[55px] gap-4 lg:gap-0">
      {/* Image Section */}
      <div className="w-full lg:w-auto flex justify-center items-center">
        <img src="/l.png" alt="Product" className="w-full h-auto lg:h-[759px] object-contain lg:object-cover" />
      </div>

      {/* Product Details Section */}
      <div className="py-8 lg:py-20 flex flex-col w-full lg:w-[602px] gap-8">
        {/* Product Header */}
        <div className="px-4 lg:px-10">
          <h3 className="text-[#2A254B] font-clash text-[24px] lg:text-[36px] leading-[30px] lg:leading-[44.28px]  lg:text-left">
            The Dandy Chair
          </h3>
          <h3 className="text-[#12131A] font-satoshi text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32.4px]  lg:text-left mt-2">
            £250
          </h3>
        </div>

        {/* Product Description */}
        <div className="px-4 lg:px-10">
          <h6 className="font-clash text-[16px] leading-[19.68px] text-[#2A254B]  lg:text-left">
            Description
          </h6>
          <p className="font-satoshi text-[14px] lg:text-[16px] leading-[21px] text-[#505977]  lg:text-left mt-4">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather upholstery.
          </p>
          <ul className="mt-4 list-disc list-inside text-[#505977] font-satoshi text-[14px] lg:text-[16px] leading-[21px]">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        </div>

        {/* Dimensions Section */}
        <div className="px-4 lg:px-10">
          <h6 className="font-clash text-[16px] leading-[19.68px] text-[#2A254B]  lg:text-left">
            Dimensions
          </h6>
          <div className="flex flex-col lg:flex-row justify-between mt-4">
            <div className=" lg:text-left">
              <h6 className="font-clash text-[14px] leading-[17.22px] text-[#2A254B]">Height</h6>
              <p className="font-satoshi text-[16px] leading-[21.6px] text-[#505977] mt-1">110cm</p>
            </div>
            <div className=" lg:text-left mt-4 lg:mt-0">
              <h6 className="font-clash text-[14px] leading-[17.22px] text-[#2A254B]">Width</h6>
              <p className="font-satoshi text-[16px] leading-[21.6px] text-[#505977] mt-1">75cm</p>
            </div>
            <div className=" lg:text-left mt-4 lg:mt-0">
              <h6 className="font-clash text-[14px] leading-[17.22px] text-[#2A254B]">Depth</h6>
              <p className="font-satoshi text-[16px] leading-[21.6px] text-[#505977] mt-1">50cm</p>
            </div>
          </div>
        </div>

        {/* Add to Cart Section */}
        <div className="px-4 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center gap-4">
              <h6 className="font-clash text-[16px] leading-[19.68px] text-[#2A254B]">
                Amount:
              </h6>
              <div className="flex items-center border border-[#CAC6DA] bg-[#F9F9F9] px-4 py-2">
                <button className="font-satoshi text-[16px] text-[#2A254B]">-</button>
                <span className="font-satoshi text-[16px] text-[#2A254B] mx-4">1</span>
                <button className="font-satoshi text-[16px] text-[#2A254B]">+</button>
              </div>
            </div>
            <Link href="/shop">
              <button className="bg-[#2A254B] text-white font-satoshi text-[16px] px-6 py-2 mt-4 lg:mt-0">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlist;

