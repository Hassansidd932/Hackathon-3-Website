"use client"; // Mark this component as client-side

import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";

const Filter: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div className="py-6 hidden lg:block">
      {/* Filter Bar */}
      <div className="flex justify-between items-center bg-white p-4">
        {/* Filters */}
        <div className="flex space-x-6">
          {["Category", "Product type", "Price", "Brand"].map((filter) => (
            <div
              key={filter}
              className="flex items-center bg-white px-4 py-2 cursor-pointer"
            >
              <span
                className="text-[#2A254B] font-satoshi"
                onClick={toggleSidebar}
              >
                {filter}
              </span>
              <FaCaretDown
                className="ml-2 text-black"
                onClick={toggleSidebar} // Toggle sidebar on click
              />
            </div>
          ))}
        </div>

        {/* Sorting */}
        <div className="flex items-center space-x-4">
          <span className="text-[#2A254B] font-satoshi">Sorting by:</span>
          <div className="flex items-center bg-white px-4 py-2 cursor-pointer">
            <span
              className="text-[#2A254B] font-satoshi"
              onClick={toggleSidebar}
            >
              Date added
            </span>
            <FaCaretDown
              className="ml-2 text-black"
              onClick={toggleSidebar} // Toggle sidebar on click
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar Filters */}
        <div className="bg-white p-6 w-1/4 lg:block hidden">
          {/* Sidebar content */}
          {isSidebarVisible && (
            <>
              {/* Product Type */}
              <div className="mb-6">
                <h3 className="text-[#2A254B] font-satoshi mb-2">Product type</h3>
                <div className="space-y-2">
                  <div>
                    <input
                      type="checkbox"
                      id="furniture"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="furniture" className="ml-2 text-[#2A254B]">
                      Furniture
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="homeware"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="homeware" className="ml-2 text-[#2A254B]">
                      Homeware
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="sofas"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="sofas" className="ml-2 text-[#2A254B]">
                      Sofas
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="light-fittings"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="light-fittings" className="ml-2 text-[#2A254B]">
                      Light fittings
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="accessories"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="accessories" className="ml-2 text-[#2A254B]">
                      Accessories
                    </label>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="text-black font-clash mb-2">Price</h3>
                <div className="space-y-2">
                  <div>
                    <input type="checkbox" id="price1" name="price" />
                    <label htmlFor="price1" className="ml-2 text-[#2A254B]">
                      0 - 100
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="price2" name="price" />
                    <label htmlFor="price2" className="ml-2 text-[#2A254B]">
                      101 - 250
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="price3" name="price" />
                    <label htmlFor="price3" className="ml-2 text-[#2A254B]">
                      250+
                    </label>
                  </div>
                </div>
              </div>

              {/* Designer */}
              <div>
                <h3 className="text-[#2A254B] font-clash mb-2">Designer</h3>
                <div className="space-y-2">
                  <div>
                    <input
                      type="checkbox"
                      id="designer1"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="designer1" className="ml-2 text-[#2A254B]">
                      Robert Smith
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="designer2"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="designer2" className="ml-2 text-[#2A254B]">
                      Liam Gallagher
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="designer3"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="designer3" className="ml-2 text-[#2A254B]">
                      Biggie Smalls
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="designer4"
                      className="accent-[#2A254B]"
                    />
                    <label htmlFor="designer4" className="ml-2 text-[#2A254B]">
                      Thom Yorke
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;





