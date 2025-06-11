import React from 'react';
import l1 from './assests/l1.png'
import l2 from './assests/l2.png'
import l3 from './assests/l3.png'
import l4 from './assests/l4.png'




const logos = [
  l1,l2,l3,l4
];

const Logos = () => {
  return (
    <div className="bg-[#5D0059] py-15">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-30">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="h-34 object-contain opacity-80 hover:opacity-100 transition cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
