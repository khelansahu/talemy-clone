import React from "react";
import c1 from '../assests/c1.jpg'
import c2 from '../assests/c2.jpg'
import c7 from '../assests/c7.jpg'
import CourseCard from "../components/CourseCard";
const sampleCourses = [
  {
    title: 'The Complete Digital Marketing Bootcamp',
    author: 'Robert Moreno',
    price: 99,
    image: c1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '3 days',
    level: 'Beginner',
    language: 'English'
  },
{
    title: 'Smart Marketing with Price Psychology',
    author: 'Robert Moreno',
    price: 9,
    image: c2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '3 hours',
    level: 'All Levels',
    language: 'English'
  },
  {
    title: 'Business English Course for ESL Students',
    author: 'Wade Jenkins',
    price: 19,
    image: c7,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '6 hours',
    level: 'All Level',
    language: 'English'
  }
 
];
const Business = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sampleCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        
        ))}
      </div>
    </div>
  );
};

export default Business;
