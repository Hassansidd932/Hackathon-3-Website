import React from "react";

const Email: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] w-full h-auto flex items-center justify-center px-4 py-8">
      {/* Main container */}
      <div className="bg-white w-full max-w-[1273px] h-auto flex flex-col items-center justify-center gap-4 p-4 md:p-[68px_351px_54px_351px]">
        {/* Heading */}
        <div className="w-full max-w-[571px] h-auto flex flex-col items-center justify-center gap-4">
          <h1 className="font-roboto text-lg md:text-3xl text-center text-[#2A254B] leading-[1.4]">
            Join the club and get the benefits
          </h1>

          {/* Subheading */}
          <p className="font-satoshi text-xs md:text-base text-center text-[#2A254B] max-w-[100%]">
            Sign up for our newsletter and receive exclusive offers on new
            <br className="hidden md:block" /> ranges, sales, pop-up stores, and more.
          </p>
        </div>

        {/* Input and Button Container */}
        <div className="w-full max-w-[472px] h-auto flex flex-row sm:flex-row  items-center justify-center">
          {/* Input Field */}
          <div className="bg-[#F9F9F9] w-full max-w-[354px] h-[64px] px-4 flex items-center sm:w-[224px] sm:h-[72px]">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full h-full bg-[#F9F9F9] text-[#2A254B] placeholder:text-[#2A254B] focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* Button */}
          <div className="bg-[#2A254B] w-[118px] h-[72px] flex items-center justify-center sm:w-[128px] sm:h-[70px]">
            <button className="text-white font-satoshi text-sm md:text-base font-normal leading-[24px] text-center">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;




