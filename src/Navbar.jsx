import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "./assests/logo@2x.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#E4125D] h-[60px] px-6 text-white flex justify-between items-center text-sm">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <FaPhone /> Hotline 0123456789
          </div>
          <div className="flex items-center gap-2 hover:text-black cursor-pointer hidden sm:flex">
            <MdEmail /> info@talemy.com
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          <FaFacebookF className="cursor-pointer hover:text-black size-4" />
          <MdEmail className="cursor-pointer hover:text-black size-4" />
          <FaInstagram className="cursor-pointer hover:text-black size-4" />
          <FaPinterestP className="cursor-pointer hover:text-black size-4" />
        </div>
      </div>

      <div className="bg-white flex justify-between h-[80px] items-center px-6 py-4 shadow relative">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
        </div>

        <div className="hidden md:flex gap-10 font-bold text-[14px] items-center">
          {[
            "Home",
            "Pages",
            "Courses",
            "Events",
            "Shop",
            "Elements",
            "Blog",
          ].map((item) => (
            <span
              key={item}
              className="cursor-pointer hover:text-[#E4125D] transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 text-xl">
          <FiShoppingBag className="cursor-pointer hover:text-[#E4125D]" />
          <FiSearch className="cursor-pointer hover:text-[#E4125D]" />
          <FaUser className="cursor-pointer hover:text-[#E4125D]" />

          <div className="md:hidden">
            {mobileMenuOpen ? (
              <HiOutlineX
                className="cursor-pointer text-2xl"
                onClick={() => setMobileMenuOpen(false)}
              />
            ) : (
              <HiOutlineMenuAlt3
                className="cursor-pointer text-2xl"
                onClick={() => setMobileMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 md:hidden z-50">
            {[
              "Home",
              "Pages",
              "Courses",
              "Events",
              "Shop",
              "Elements",
              "Blog",
            ].map((item) => (
              <span
                key={item}
                className="py-2 border-b cursor-pointer hover:text-[#E4125D]"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
