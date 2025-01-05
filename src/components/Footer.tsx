import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#2A254B] text-white py-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-clash mb-4">Menu</h3>
          <ul className="space-y-2 text-sm font-satoshi">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-clash mb-4">Categories</h3>
          <ul className="space-y-2 text-sm font-satoshi">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h3 className="text-lg font-clash mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm font-satoshi">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Join Mailing List Section */}
        <div>
          <h3 className="text-lg font-clash mb-4">Join our mailing list</h3>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full p-3 text-black rounded mb-4"
            aria-label="Enter your email"
          />
          <button className="w-full bg-[#4E4D93] text-white py-2 rounded hover:bg-[#3a3a76] transition">
            Sign up
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#4E4D93] my-8"></div>

      {/* Footer Bottom Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2022 Avion LTD</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-300" />
          <FaFacebookSquare className="text-2xl cursor-pointer hover:text-gray-300" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
          <FaSkype className="text-2xl cursor-pointer hover:text-gray-300" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-gray-300" />
          <FaPinterest className="text-2xl cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

