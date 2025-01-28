"use client"

import Image from "next/image";
import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaChevronDown } from "react-icons/fa";
import logo from "../../Images/Group (3).png"
import Link from "next/link";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white  sticky top-0 z-50 border-y-2 border-gray-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left: Logo */}
        <Link href="/" passHref>
        <div className="">
          <Image src={logo}  alt="Logo" className="w-40" />
        </div>
        </Link>

        {/* Middle: Search bar and Routes */}
        <div className="hidden lg:flex md:flex items-center space-x-8 w-1/2">
          <div className="flex w-full items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-l-xl border-t border-l border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7D29]"
            />
            <button className="px-4 py-2 bg-[#FF7D29] text-white rounded-r-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
              Search
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-[#FF7D29] flex items-center"
            >
              AllCategories <FaChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white shadow-md rounded-lg py-2 w-48">
                <a
                  href="/category1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 1
                </a>
                <a
                  href="/category2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 2
                </a>
                <a
                  href="/category3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 3
                </a>
              </div>
            )}
          </div>
          <a href="/coupon" className="text-gray-700 hover:text-[#FF7D29]">
            Coupon
          </a>
          <a href="/support" className="text-gray-700 hover:text-[#FF7D29]">
            Support
          </a>
        </div>

        {/* Right: Cart and User Icons */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-gray-700 text-xl hover:text-[#FF7D29] cursor-pointer" />
          <FaUser className="text-gray-700 text-xl hover:text-[#FF7D29] cursor-pointer" />
        </div>
      </div>

      {/* Responsive: Search bar and Routes */}
      <div className="md:hidden lg:hidden bg-gray-100 p-2 flex flex-col space-y-2">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 rounded-l-lg border-t border-l border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7D29]"
          />
          <button className="px-4 py-2 bg-[#FF7D29] text-white rounded-r-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
            Search
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-[#FF7D29] flex items-center"
            >
              All Categories <FaChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white shadow-md rounded-lg py-2 w-full">
                <a
                  href="/category1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 1
                </a>
                <a
                  href="/category2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 2
                </a>
                <a
                  href="/category3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 3
                </a>
              </div>
            )}
          </div>
          <a href="/coupon" className="text-gray-700 hover:text-[#FF7D29]">
            Coupon
          </a>
          <a href="/support" className="text-gray-700 hover:text-[#FF7D29]">
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
