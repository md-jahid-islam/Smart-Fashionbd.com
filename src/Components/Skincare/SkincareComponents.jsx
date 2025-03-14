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
          <Link className=' ' to={"/Serum"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/serum1.png" alt="img" />Serum</Link>
          <Link className=' ' to={"/Serum1"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/serums.png" alt="img" />Lilac Brightening Serum</Link>
          <Link className=' ' to={"/Foods"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/food2.png" alt="img" />Food</Link>
          <Link className=' ' to={"/Bubble"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/bubble3.png" alt="img" />bubble</Link>
          <Link className=' ' to={"/Acidairy"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/acidairy.png" alt="img" />acidairy</Link>
          <Link className=' ' to={"/EyeBro"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/Eyebro.png" alt="img" />eyebro</Link>
          <Link className=' ' to={"/Cream"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/cream23.png" alt="img" />cream</Link>
          <Link className=' ' to={"/Nature"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/nature1.png" alt="img" />nature</Link>
          <Link className=' ' to={"/Set"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/set4.png" alt="img" />set</Link>
          <Link className=' ' to={"/Snail"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/snail11.png" alt="img" />snail</Link>
          <Link className=' ' to={"/Sold"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/sold1.png" alt="img" />sold</Link>
          <Link className=' ' to={"/Some"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/some12.png" alt="img" />some</Link>
          <Link className=' ' to={"/Toner"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/toner3.png" alt="img" />toner</Link>
          <Link className=' ' to={"/Bention"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/bention5.png" alt="img" />bention</Link>
          <Link className=' ' to={"/Cmc"} > <img className=' rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 shadow-lg' src="/images/cmc1.png" alt="img" />cmc</Link>

        </div>
      </div>
    </nav>
  );
};

export default SkincareComponents;
