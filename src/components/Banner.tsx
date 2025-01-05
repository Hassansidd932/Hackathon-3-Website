"use client";

import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="w-full h-[41px] bg-[#2A254B] flex justify-between items-center px-4">
          {/* Left Section: Truck Icon and Text */}
          <div className="flex items-center justify-center gap-2 w-full">
            <TbTruckDelivery className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            <h4 className="font-satoshi text-[14px]  leading-[18.9px] text-white text-center">
              Free delivery on all orders over £50 with code easter checkout
            </h4>
          </div>

          {/* Right Section: Close Icon */}
          <IoClose
            className="text-white w-6 h-6 cursor-pointer absolute right-4"
            aria-label="Close banner"
            onClick={handleClose}
          />
        </div>
      )}
    </>
  );
};

export default Banner;




