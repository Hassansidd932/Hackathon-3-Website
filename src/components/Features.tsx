import React from "react"; 
import { FaRegCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { LuSprout } from "react-icons/lu";

const Features: React.FC = () => {
  return (
    <div className="">
      <div className="w-full lg:h-[355px] px-4 py-12 bg-[#F9F9F9]  lg:bg-white">
        <div className="text-center mb-12">
          <h3 className="font-clash text-2xl text-[#2A254B]">
            What makes our brand different
          </h3>
        </div>

        {/* Feature Container */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[32px]">
          {/* Feature 1: Next Day Delivery */}
          <div className="px-5 flex flex-col mb-8 sm:mb-0">
            <div className="text-[#2A254B] text-4xl mb-3">
              <TbTruckDelivery />
            </div>
            <h4 className="text-xl font-semibold text-[#2A254B] font-clash mb-2">
              Next day as standard
            </h4>
            <p className="font-satoshi text-sm text-[#2A254B]">
              Order before 3pm and get your order <br /> the next day as standard
            </p>
          </div>

          {/* Feature 2: Made by True Artisans */}
          <div className="px-5 flex flex-col mb-8 sm:mb-0">
            <div className="text-[#2A254B] text-3xl mb-3">
              <FaRegCheckCircle />
            </div>
            <h4 className="text-xl font-clash font-semibold text-[#2A254B] mb-2">
              Made by true artisans
            </h4>
            <p className="text-sm text-[#2A254B] font-satoshi">
              Handmade crafted goods made with <br /> real passion and craftsmanship
            </p>
          </div>

          {/* Feature 3: Unbeatable Prices */}
          <div className="px-5 flex flex-col mb-8 sm:mb-0">
            <div className="text-[#2A254B] text-4xl mb-3">
              <BiSolidPurchaseTag />
            </div>
            <h4 className="text-xl font-semibold font-clash text-[#2A254B] mb-2">
              Unbeatable prices
            </h4>
            <p className="text-sm text-[#2A254B] font-satoshi">
              For our materials and quality, you <br /> won’t find better prices anywhere
            </p>
          </div>

          {/* Feature 4: Recycled Packaging */}
          <div className="px-5 flex flex-col mb-8 sm:mb-0">
            <div className="text-[#2A254B] text-4xl mb-3">
              <LuSprout />
            </div>
            <h4 className="text-xl font-semibold text-[#2A254B] mb-2 font-clash">
              Recycled packaging
            </h4>
            <p className="text-sm text-[#2A254B] font-satoshi">
              We use 100% recycled packaging to <br /> ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
