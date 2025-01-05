
import React from "react";

const Product: React.FC = () => {
  return (
    <div className="w-full h-auto sm:w-[1348px] sm:h-[209px] lg:h-[229px] flex justify-center items-center">
      <img
        src="/p.png"
        alt="Product"
        className="object-contain  sm:h-[209px] lg:object-cover"
      />
    </div>
  );
};

export default Product;


