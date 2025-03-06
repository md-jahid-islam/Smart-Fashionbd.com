import React from 'react';
import { Link } from 'react-router-dom';

const ShopComponents = () => {
  // Skin Types Data
  const skinTypes = [
    { img: '/images/damaged.png', name: 'Damaged' },
    { img: '/images/cambination.png', name: 'Combination' },
    { img: '/images/Normal1.png', name: 'Normal' },
    { img: '/images/oily.png', name: 'Oily' },
    { img: '/images/dry.png', name: 'Dry' },
    { img: '/images/sensitive.png', name: 'Sensitive' },
  ];

  // Skin Concerns Data
  const skinConcerns = [
    { img: '/images/pimples.png', name: 'Pimples' },
    { img: '/images/brighthing.png', name: 'Brightening' },
    { img: '/images/anti.png', name: 'Anti-Aging' },
    { img: '/images/blackheads.png', name: 'Blackheads' },
    { img: '/images/oil.png', name: 'Oil Control' },
    { img: '/images/sun.png', name: 'Sun Protection' },
    { img: '/images/spot.png', name: 'Spots' },
    { img: '/images/dark.png', name: 'Dark Circles' },
    { img: '/images/dehydaretions.png', name: 'Dehydration' },
  ];

  return (
    <nav>
      <div className="container mx-auto px-4">
        {/* Skin Type Section */}
        <div className="text-center pt-5">
          <h2 className="text-2xl font-bold underline">Shop by Skin Type!</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 pt-10 justify-center">
          {skinTypes.map((item, index) => (
            <Link
              to=""
              key={index}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-3xl shadow-lg hover:shadow-xl"
                src={item.img}
                alt={item.name}
              />
              <p className="mt-2 font-medium">{item.name}</p>
            </Link>
          ))}
        </div>

        {/* Skin Concern Section */}
        <div className="text-center pt-10">
          <h2 className="text-2xl font-bold underline">Shop by Skin Concern!</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-10 justify-center">
          {skinConcerns.map((item, index) => (
            <Link
              to=""
              key={index}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-32 h-36 md:w-40 md:h-44 lg:w-44 lg:h-48 rounded-3xl shadow-lg hover:shadow-xl"
                src={item.img}
                alt={item.name}
              />
              <p className="mt-2 font-medium">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ShopComponents;
