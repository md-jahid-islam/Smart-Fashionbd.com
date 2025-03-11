import React from 'react';
import { Link } from 'react-router-dom';

const ShopComponents = () => {
  // Skin Concerns Data
  return (
    <>
     <nav>
          <div className="container mx-auto px-4">
            {/* Title */}
            <div className="flex justify-center pt-5">
              <h2 className="text-2xl font-bold underline text-center">
              Shop by Skin Type!
              </h2>
            </div>
    
            {/* Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-10 justify-center">
              <Link className=' ' to={"/Damaged"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/damaged.png" alt="img" />damaged</Link>
              <Link className=' ' to={"/Cambination"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/cambination.png" alt="img" />cambination</Link>
              <Link className=' ' to={"/Normal"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/normals.png" alt="img" />Normal</Link>
              <Link className=' ' to={"/Oily"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/oily.png" alt="img" />oily</Link> 
              <Link className=' ' to={"/Sensitive"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/sensitive.png" alt="img" />sensitive</Link>
                <Link className=' ' to={"/Dry"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/dry.png" alt="img" />dry</Link>
            </div>
            <div className=' '>
                <h2 className=' flex justify-center items-center text-2xl font-bold underline pt-5'> Shop by Skin Concern</h2>
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-10 justify-center'>
              <Link className=' ' to={"/Pimples"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/pimples.png" alt="img" />pimples</Link>
              <Link className=' ' to={"/Brightening"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/brighthing.png" alt="img" />Brightening</Link>
              <Link className=' ' to={"/Anti"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/Anti.png" alt="img" />Anti</Link>
              <Link className=' ' to={"/Blackheads"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/blackheads.png" alt="img" />blackheads</Link>
              <Link className=' ' to={"/Oil"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/oil.png" alt="img" />oil</Link>
              <Link className=' ' to={"/Sun"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/sun.png" alt="img" />sun</Link>
              <Link className=' ' to={"/Spot"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/spot.png" alt="img" />spot</Link>
              <Link className=' ' to={"/Dark"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/dark.png" alt="img" />dark</Link>
              <Link className=' ' to={"/Dehydaretions"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/dehydaretions.png" alt="img" />dehydaretions</Link>

                </div>
              </div>
          </div>
        </nav>
    </>
  );
 };

 export default ShopComponents;

 