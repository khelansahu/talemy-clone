import React from "react";
import { FaGraduationCap, FaTrophy, FaAtom } from "react-icons/fa";
import s1 from './assests/s1.png'

export default function AboutSection() {
  return (
    <div className="w-full pt-16 px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 gap-10">
      
        <div className="w-full lg:w-1/2">
          <img
            src={s1}
            alt="student"
            className="w-[80%] h-auto object-contain"
          />
        </div>

     
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-purple-700 font-semibold">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold">Welcome to Talemy</h2>
          <div className="h-[2px] w-12 bg-gray-300" />
          <p className="text-gray-600 leading-relaxed">
          Temporibus autem quibusdam et aut officiis debitis is aut rerum necessitatibusp saepes eveniet ut etes seo lage voluptates quibusdam et aut officiis debitis is aut rerum necessitatibus saepes eveniet ut etes seo lage voluptates  repudiandaese sint et molestiae non mes.
          </p>

        
          <div className="space-y-6 pt-4">
            <FeatureItem
              icon={<FaAtom size={30} />}
              title="Hands on Research"
              text="Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim consectet adipisi elit, sed do consectet adipisi elit, sed doadesg ens minim veniam."
            />
            <FeatureItem
              icon={<FaTrophy size={30} />}
              title="Deticated to Your Success"
              text="Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim consectet adipisi elit, sed do consectet adipisi elit, sed doadesg ens minim veniam."
            />
            <FeatureItem
              icon={<FaGraduationCap size={30} />}
              title="Classic Experience"
              text="Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim consectet adipisi elit, sed do consectet adipisi elit, sed doadesg ens minim veniam."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-[#E4125D] text-white rounded-full p-4">{icon}</div>
      <div>
        <h4 className="font-bold text-[22px]">{title}</h4>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}
