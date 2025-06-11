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
    <footer className="relative h-[90vh] bg-[#161616] text-white pt-12 pb-4 px-10">
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat "
    style={{ backgroundImage: `url(${fm})` }}
  ></div>
      <div className="relative z-10  mx-auto">
        <div className="w-full">
          <div className="flex justify-between w-full ">
            <img src={f1} alt="Talemy Logo" className="h-12 mb-4" />
            <br />
            <div>
              <div className="flex gap-5 mt-5">
                <a href="#" className="text-gray-300 ">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="rounded-sm text-gray-200 ">
                  <FaSquareXTwitter size={20} />
                </a>
                <a href="#" className=" rounded-sm text-gray-200 ">
                  <RiInstagramFill size={20} />
                </a>
                <a href="#" className="text-gray-300 ">
                  <FaPinterest size={20} />
                </a>
              </div>
            </div>
            {/* <hr className="bg-gray-30"/> */}
          </div>
          <div className="border-t border-gray-700 mt-5"></div>
          <div className="flex gap-20 mt-10 mb-10">
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

            <div>
              <h3 className="font-bold text-lg mb-3">Help</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
           

            <div>
              <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center text-[#E4125D] gap-1"><MdLocationPin size={18}/> <span className="text-gray-300">205 West 21th Street, MIAMI FL, USA</span></li>
                <li className="flex items-center text-[#E4125D] gap-1"><IoCall size={18}/> <span className="text-gray-300">(800) 123-4567</span></li>
                <li className="flex items-center text-[#E4125D] gap-1"><IoCall size={18}/> <span className="text-gray-300">(800) 765-4321</span></li>
                <li className="flex items-center text-[#E4125D] gap-1"><IoIosMail size={18}/> <span className="text-gray-300">info@talemy.com</span></li>
              </ul>
            </div>
            <div>
              <img src={f} alt="" />
            </div>
          </div>
        </div>
        <div className="relative flex gap-60  items-center gap-10 py-6 border-t border-gray-700">

          <div className="flex items-center gap-4 text-white text-xl font-semibold">
            <img src={f3} className="h-10" />
            OUR NEWSLETTER
          </div>
         <div className="flex justify-between ">
         <div >
            <input
              type="email"
              placeholder="E-mail Address"
              className="flex-grow px-4 absolute w-[50%]  py-3 rounded-l-full bg-gray-700 bg-opacity-10 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="ml-130"><button className="px-4 py-3 bg-[#E4125D] cursor-pointer ml-10 relative  text-white font-semibold rounded-full hover:bg-white hover:outline hover:text-[#E4125D]">
              SUBSCRIBE NOW
            </button></div>
         </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400">
          <p>
            © 2025{" "}
            <span className="text-[#E4125D]">Talemy Demo High School</span>. All
            Rights Reserved.
          </p>
          <div className="flex gap-6 mt-2 md:mt-0">
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
