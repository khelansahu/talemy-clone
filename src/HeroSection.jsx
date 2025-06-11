import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    
      <img
        src=""
        alt="hero"
        className="w-full h-full object-cover"
      />

    
      <div className="absolute inset-0 bg-black/40 z-10" />    
      <div className="absolute inset-0 z-20 bg-black/70 clip-slant" />
      <div className="absolute inset-0 z-30 flex items-center px-10 md:px-20">
        <div className="text-white max-w-lg space-y-6">
          <p className="uppercase tracking-[4px] text-sm font-bold ">Education is power</p>
          <h1 className="text-5xl font-bold leading-tight text-[100px]">
            Lead.<br />Inspire.<br />
            <span className="text-[#E4125D] text-[100px]">Win!</span>
          </h1>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition cursor-pointer">
              Learn More
            </button>
            <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-white hover:text-[#E4125D] cursor-pointer transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
