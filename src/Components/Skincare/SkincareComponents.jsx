import React from 'react';
import { Link } from 'react-router-dom';

 const SkincareComponents = () => {
  return (
    <nav>
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center pt-5">
          <h2 className="text-3xl font-bold underline text-center">
            Shop by Featured Categories!
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-10 justify-center">
          {[
            { img: '/images/serum1.png', name: 'Serum' },
            { img: '/images/serums.png', name: 'Serum' },
            { img: '/images/food2.png', name: 'Food' },
            { img: '/images/bubble3.png', name: 'Shampoo' },
            { img: '/images/acidairy.png', name: 'Dairy' },
            { img: '/images/eyebro3.png', name: 'Eyebrow' },
            { img: '/images/cream23.png', name: 'Cream' },
            { img: '/images/nature1.png', name: 'Nature' },
            { img: '/images/set4.png', name: 'Set' },
            { img: '/images/snail11.png', name: 'Snail' },
            { img: '/images/sold1.png', name: 'Sold' },
            { img: '/images/some12.png', name: 'Some' },
            { img: '/images/toner3.png', name: 'Toner' },
            { img: '/images/bention5.png', name: 'Bention' },
            { img: '/images/cmc1.png', name: 'Starter Kit' },

          ].map((item, index) => (
            <Link 
              to="" 
              key={index} 
              className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-3xl shadow-lg" src={item.img} alt={item.name} />
              <p className="mt-2 font-medium">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SkincareComponents;
