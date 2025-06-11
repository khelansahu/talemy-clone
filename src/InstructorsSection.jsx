import React from 'react';
import p1 from './assests/p1.png'
import p2 from './assests/p2.png'
import p3 from './assests/p3.png'



const instructors = [
  {
    name: 'JOHN DOE',
    title: 'Software Engineer',
    image: p1,
  },
  {
    name: 'JANE ROE',
    title: 'Web Designer',
    image: p2,
  },
  {
    name: 'KING DOE',
    title: 'Web Designer',
    image: p3,
  },
];

const InstructorCard = ({ name, title, image }) => {
  return (
    <div className="relative group bg-white h-[390px] w-[300px]  rounded-md shadow-md">
      <img src={image} alt={name} className="w-full h-80 object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full bg-[#E4125D] text-white text-center py-4 transition-colors duration-300 group-hover:bg-[#5D0059] rounded-b-md">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

const InstructorsSection = () => {
  return (
    <div className="bg-[#5D0059] min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-white text-sm uppercase tracking-wide mb-2">Find The Right Instructor</h2>
      <h1 className="text-white text-3xl font-bold mb-12">Expert Instruction</h1>

      <div className="flex gap-8 flex-wrap justify-center">
        {instructors.map((instructor, index) => (
          <InstructorCard
            key={index}
            name={instructor.name}
            title={instructor.title}
            image={instructor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;
