import React from 'react';
import CourseCard from '../components/CourseCard';
import c1 from '../assests/c1.jpg'
import c2 from '../assests/c2.jpg'
import c3 from '../assests/c3.jpg'
import c4 from '../assests/c4.jpg'
import c5 from '../assests/c5.jpg'
import c6 from '../assests/c6.jpg'
import c7 from '../assests/c7.jpg'
import c8 from '../assests/c8.jpg'
import c9 from '../assests/c9.jpg'
import c10 from '../assests/c10.jpg'
import c11 from '../assests/c11.jpg'
import c12 from '../assests/c12.jpg'



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
    title: 'Mastering Adobe Photoshop CC',
    author: 'Jill Evans',
    price: 29,
    image: c3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '10.5 hours',
    level: 'Intermediate',
    language: 'English'
  },
  {
    title: 'Web Design for Beginners',
    author: ' Jill Evans',
    price: "Free",
    image: c4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '8 hours',
    level: 'All Levels',
    language: 'English'
  },
  {
    title: 'Data Science: Deep Learning in Python',
    author: ' Elsa Jones',
    price: 49,
    image: c5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '9.5 hours',
    level: 'Intermidiate',
    language: 'English'
  },
  {
    title: 'The Complete Android App Development',
    author: ' Michael Cohen',
    price: 69,
    image: c6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '2 days',
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
  },
  {
    title: 'French for Beginners',
    author: 'by Wade Jenkins',
    price: 29,
    image: c8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '20 hours',
    level: 'All Levels',
    language: 'English, French'
  },
  {
    title: 'The Art of Energy Healing',
    author: 'Olivia Padilla',
    price: 39,
    image: c9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '5 hours',
    level: 'Intermediate',
    language: 'English'
  },
  {
    title: 'Yoga For Absolute Beginners',
    author: 'Olivia Padilla',
    price: 'Free',
    image: c10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '3 hours',
    level: 'Beginner',
    language: 'English'
  },
  {
    title: 'Learn To Read & Write Music',
    author: 'Marie Lloyd',
    price: 39,
    image: c11,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '5 hours',
    level: 'Intermediate',
    language: 'English'
  },
  {
    title: 'Natural Singing for everyone',
    author: 'Marie Lloyd',
    price: 'Free',
    image: c12,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.',
    duration: '2.5 hours',
    level: 'All Levels',
    language: 'English'
  }
];

export default function AllCourses() {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {sampleCourses.map((course, index) => (
        <CourseCard key={index} course={course}/>
      ))}
    </div>
    </div>
  );
}