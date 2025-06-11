import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaPhone, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import logo from './assests/logo@2x.png'

export default function Navbar() {
  return (
    <div className="w-full">
 
      <div className="bg-[#E4125D] h-[60px] px-13 text-white flex justify-between items-center px-6 py-2 text-sm">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <FaPhone /> Hotline 0123456789
          </div>
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <MdEmail /> info@talemy.com
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FaFacebookF className="cursor-pointer hover:text-black size-4" />
          <MdEmail className="cursor-pointer  hover:text-black size-4" />
          <FaInstagram className="cursor-pointer  hover:text-black size-4" />
          <FaPinterestP className="cursor-pointer  hover:text-black size-4" />
        </div>
      </div>


      <div className="bg-white flex  justify-between h-[80px] items-center px-13 py-4 shadow">
       
        <div className="flex items-center gap-2 ">
          <img src={logo} alt="logo" className="h-10" />
        </div>

 
        <div className="flex gap-10 font-bold text-[14px] items-center">
          <span className="cursor-pointer hover:text-[#E4125D]">Home </span>
          <span className="cursor-pointer hover:text-[#E4125D]">Pages </span>
          <span className="cursor-pointer hover:text-[#E4125D]">Courses </span>
          <span className="cursor-pointer hover:text-[#E4125D]">Events </span>
          <span className="cursor-pointer hover:text-[#E4125D]">Shop</span>
          <span className="cursor-pointer hover:text-[#E4125D]">Elements </span>
          <span className="cursor-pointer hover:text-[#E4125D]">Blog </span>
        </div>

        <div className="flex items-center gap-6 text-xl">
          <FiShoppingBag className="cursor-pointer hover:text-[#E4125D]" />
          <FiSearch className="cursor-pointer hover:text-[#E4125D]" />
          <FaUser className="cursor-pointer hover:text-[#E4125D]" />
        </div>
      </div>
    </div>
  );
}
