import React from "react";
import f from "./assests/f.png";
import f1 from "./assests/f1.png";
import f3 from "./assests/f3.png";
import fm from "./assests/fm.png";

import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="relative bg-[#161616] text-white pt-12 pb-4 px-6 sm:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fm})` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <img src={f1} alt="Talemy Logo" className="h-12 mb-4 sm:mb-0" />
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="text-gray-300"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-300"><FaSquareXTwitter size={20} /></a>
            <a href="#" className="text-gray-300"><RiInstagramFill size={20} /></a>
            <a href="#" className="text-gray-300"><FaPinterest size={20} /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6" />

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-3">Admission</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Admission</li>
              <li>Academics</li>
              <li>Alumni</li>
              <li>Research</li>
              <li>Students</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>History & Mission</li>
              <li>Administration</li>
              <li>Campus Direction</li>
              <li>Employment</li>
              <li>Around The World</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-3">Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MdLocationPin className="text-[#E4125D]" />
                <span>205 West 21th Street, MIAMI FL, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCall className="text-[#E4125D]" />
                <span>(800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCall className="text-[#E4125D]" />
                <span>(800) 765-4321</span>
              </li>
              <li className="flex items-center gap-2">
                <IoIosMail className="text-[#E4125D]" />
                <span>info@talemy.com</span>
              </li>
            </ul>
          </div>

          {/* Column 5 (Image) */}
          <div>
            <img src={f} alt="decor" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 py-6 border-t border-gray-700">
          <div className="flex items-center gap-4 text-white text-lg font-semibold">
            <img src={f3} className="h-10" alt="newsletter" />
            OUR NEWSLETTER
          </div>

          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="E-mail Address"
              className="px-4 py-3 rounded-full bg-gray-700 bg-opacity-10 text-white placeholder-gray-400 focus:outline-none w-full sm:w-[300px]"
            />
            <button className="px-6 py-3 bg-[#E4125D] text-white font-semibold rounded-full hover:bg-white hover:text-[#E4125D] transition">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400 gap-2">
          <p className="text-center md:text-left">
            © 2025 <span className="text-[#E4125D]">Talemy Demo High School</span>. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS</a>
            <a href="#">SITEMAP</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
