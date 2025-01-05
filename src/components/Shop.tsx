import React from "react";

const Shop: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] w-full lg:h-[749px]">
      {/* Shopping Cart Header */}
      <div className="px-6 mt-6 lg:px-[188px] lg:mt-[64px]">
        <h1 className="font-clash text-[#2A254B] text-2xl leading-[36px] lg:text-3xl lg:leading-[50.4px]">
          Your shopping cart
        </h1>
      </div>

      {/* Column Headings */}
      <div className="hidden lg:grid grid-cols-3 mt-6 lg:mt-10 lg:px-[188px] text-sm font-clash text-[#2A254B]">
        <h6 className="text-left">Product</h6>
        <h6 className="text-center">Quantity</h6>
        <h6 className="text-right">Total</h6>
      </div>
      <hr className="hidden lg:block border-t border-[#EBE8F4] lg:mx-[188px] lg:my-4" />

      {/* Product 1 */}
      <div className="flex flex-col items-center space-y-4 px-6 py-4 bg-[#F9F9F9]   lg:flex-row lg:items-center lg:justify-between lg:px-[188px] lg:py-4">
        <img
          src="/pp.png"
          alt="Product 1"
          className="w-full max-w-[309px] lg:w-[309px] h-auto"
        />
        <div className="flex items-center space-x-4 lg:space-x-4">
          <button className="px-4 py-2 border rounded">-</button>
          <span className="text-lg">1</span>
          <button className="px-4 py-2 border rounded">+</button>
        </div>
        <h4 className="text-lg font-satoshi">£85</h4>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col items-center space-y-4 px-6 py-4 bg-[#F9F9F9]  lg:flex-row lg:items-center lg:justify-between lg:px-[188px] lg:py-4">
        <img
          src="/pp2.png"
          alt="Product 2"
          className="w-full max-w-[292px] lg:w-[292px] h-auto"
        />
        <div className="flex items-center space-x-4 lg:space-x-4">
          <button className="px-4 py-2 border rounded">-</button>
          <span className="text-lg">1</span>
          <button className="px-4 py-2 border rounded">+</button>
        </div>
        <h4 className="text-lg font-satoshi">£125</h4>
      </div>

      <hr className="hidden lg:block border-t border-[#EBE8F4] lg:mx-[188px] lg:my-4" />

      {/* Subtotal Section */}
      <div className="flex flex-col items-center space-y-4 px-6 lg:items-end lg:px-[188px]">
        <div className="flex flex-col items-center lg:flex-row lg:text-center">
          <h4 className="font-clash text-[#4E4D93] text-lg py-2">Subtotal</h4>
          <h3 className="font-clash text-[#2A254B] text-2xl lg:text-3xl lg:px-3">
            £210
          </h3>
        </div>
        <p className="text-sm text-[#4E4D93] text-center lg:text-left">
          Taxes and shipping are calculated at checkout
        </p>
      </div>

      {/* Checkout Button */}
      <div className="flex justify-center px-6 mt-6 lg:justify-end lg:px-[188px] lg:mt-8">
        <button className="bg-[#2A254B] text-white w-full max-w-md px-6 py-4  lg:w-auto">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default Shop;
