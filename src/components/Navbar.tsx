"use client";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Navbar: React.FC = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on clicking the menu icon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-20 top-0 left-0 px-8 bg-white  flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/home">
          <h3 className="text-[#22202E] text-2xl font-clash font-bold cursor-pointer">
            Avion
          </h3>
        </Link>
      </div>

      {/* Navigation Links for desktop */}
      <div className="hidden lg:flex gap-12">
        {[
          { label: "Plant pots", href: "/product?category=plant-pots" },
          { label: "Ceramics", href: "/product?category=ceramics" },
          { label: "Tables", href: "/product?category=tables" },
          { label: "Chairs", href: "/product?category=chairs" },
          { label: "Crockery", href: "/product?category=crockery" },
          { label: "Tableware", href: "/product?category=tableware" },
          { label: "Cutlery", href: "/product?category=cutlery" },
        ].map((item, index) => (
          <Link key={item.label} href={item.href}>
            <div
              className={`text-lg text-[#726E8D] font-satoshi hover:text-purple-700 cursor-pointer transition duration-300 ${
                index === 6 ? "mr-8" : ""
              }`}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <MdSearch className="text-2xl text-[#726E8D] hover:text-purple-700 cursor-pointer" />
        <FaRegUserCircle className="text-2xl text-[#726E8D] hover:text-purple-700 cursor-pointer" />
        <Link href="/shop">
          <CiShoppingCart className="text-2xl text-[#726E8D] hover:text-purple-700 cursor-pointer" />
        </Link>

        {/* Hamburger Menu for small screens */}
        <MdMenu
          className="text-2xl text-[#726E8D] hover:text-purple-700 cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu (for small and medium screens) */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center py-4 w-full max-w-xs mx-auto">
          {[
            { label: "Plant pots", href: "/product?category=plant-pots" },
            { label: "Ceramics", href: "/product?category=ceramics" },
            { label: "Tables", href: "/product?category=tables" },
            { label: "Chairs", href: "/product?category=chairs" },
            { label: "Crockery", href: "/product?category=crockery" },
            { label: "Tableware", href: "/product?category=tableware" },
            { label: "Cutlery", href: "/product?category=cutlery" },
          ].map((item) => (
            <Link key={item.label} href={item.href}>
              <div
                className="text-lg text-[#726E8D] font-satoshi hover:text-purple-700 cursor-pointer transition duration-300 py-4 px-6"
                onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


