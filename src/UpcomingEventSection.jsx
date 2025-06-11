import React from 'react';
import e from './assests/e.jpg'
const UpcomingEventSection = () => {
  return (
    <div className="bg-white py-16 px-6">

      <div className="flex items-center justify-between max-w-6xl mx-auto mb-12">
        <div>
          <p className="text-[#5D0059] font-medium">Hot Events</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Upcoming Events</h2>
        </div>
        <button className="bg-[#E4125D] text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#E4125D] hover:outline-[#E4125D] hover:outline-1 transition">
          VIEW ALL EVENTS
        </button>
      </div>

      
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-md grid md:grid-cols-2">
        <img
          src={e}
          alt="Event"
          className="w-full h-full object-cover"
        />

        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900">Serenity Art Exhibition</h3>
          <p className="text-sm text-gray-600 mt-2">April 10 @ 8:00 pm – 9:00 pm</p>
          <p className="text-gray-700 mt-4">
            Maecenas leo nisi, efficitur at felis sit amet, lacinia auctor quam. Aliquam euismod pretium mattis. Aenean
            sollicitudin orci non orci gravida ullamcorper. Duis utres odios pellentesque, efficiturs odio vitae,
            aliquams arcu.
          </p>

          <div className="flex gap-4 mt-6">
            {[
              { label: 'Days', value: '02' },
              { label: 'Hours', value: '02' },
              { label: 'Minutes', value: '18' },
              { label: 'Seconds', value: '31' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-26 h-26 rounded-full bg-[#5D0059] text-white flex items-center justify-center text-4xl font-bold">
                  {item.value}
                </div>
                <p className="mt-2 text-[#5D0059] font-medium">{item.label}</p>
              </div>
            ))}
          </div>

      
          <button className="mt-8 bg-[#E4125D] text-white px-6 py-2 rounded-full font-semibold w-max hover:bg-white  hover:text-[#E4125D] hover:outline-[#E4125D] hover:outline-1 transition">
            FIND OUT MORE »
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventSection;
