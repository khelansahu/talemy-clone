import React from "react";
import { FaCertificate, FaSchool, FaFileAlt, FaMicroscope, FaBookOpen } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import s2 from './assests/s2.jpg'
import s3 from './assests/s3.jpg'
import s4 from './assests/s4.jpg'
import s5 from './assests/s5.jpg'


const cards = [
  {
    title: "General Engagement",
    icon: <PiCertificateBold size={46}/>,
    image:s5,
  },
  {
    title: "Meet Students",
    icon: <FaSchool size={46} />,
    image:s3,
  },
  {
    title: "Online Resources",
    icon: <FaFileAlt size={46} />,
    image:s4,
  },
  {
    title: "Students Activities",
    icon: <FaMicroscope size={46} />,
    image:s4,
  },
  {
    title: "Senior Day 2018",
    icon: <FaBookOpen size={46} />,
    image:s2,
  },
];

export default function EventHighlights() {
  return (
    <div className="w-full flex flex-col lg:flex-row cursor-pointer">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group w-full lg:w-1/5 relative h-[300px] flex items-center justify-center text-white text-center px-4 overflow-hidden border-1"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 group-hover:bg-[#E4125D] transition-all duration-300 ease-in-out" />

          {/* Content */}
          <div className="relative z-10 space-y-4 px-2">
            <div className="text-white flex justify-center">{card.icon}</div>
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-300">
              The lysine contingency it's intended to prevent the spread of the animals in case
              they ever got off the island.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
