import React from 'react';
import { FaClock, FaSignal, FaGlobe } from 'react-icons/fa';


export default function CourseCard({ course }) {
  return (
    <div className=''>
    <div className="border h-[500px] rounded-b-lg border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300">
    <div class="relative inline-block group w-full">
      <img src={course.image} alt={course.title} className="w-full h-60 object-cover " />
      <div class="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
      </div>
      <div className='px-5 pt-3 flex flex-col justify-between  h-60 '>
       <div>
       <h3 className="font-bold text-lg mb-2 hover:text-[#E60076] cursor-pointer">{course.title}</h3>
        <div className='flex justify-between pr-5'><p className="text-sm text-gray-500 mb-1">
          by <span className="font-semibold text-[#5D0059] hover:text-[#E60076] cursor-pointer">{course.author}</span>
        </p>
        <p className="text-[#5D0059] font-bold mb-2">${course.price}</p></div>
        <p className="text-sm text-gray-600 mb-3">{course.description}</p>
       </div>
        <div className='border-[1px] border-gray-400 mt-10'></div>
        <div className="flex justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1"><FaClock className='text-[#E60076]'/> {course.duration}</span>
          <span className="flex items-center gap-1"><FaSignal className='text-[#E60076]'/> {course.level}</span>
          <span className="flex items-center gap-1"><FaGlobe className='text-[#E60076]' /> {course.language}</span>
        </div>
      </div>
    </div>
    </div>
  );
}