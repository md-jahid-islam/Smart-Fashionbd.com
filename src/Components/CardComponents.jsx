import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const CardComponents = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
    <section className=" flex items-center justify-center min-h-screen bg-gray-100 px-5 ">
      
      <div
        className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start w-full max-w-3xl"
        data-aos="fade-up" >
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2" data-aos="slide-right">
          <img src="/images/shopping.png" alt="Shopping Cart" className="w-full h-full object-cover"/>
        </div>

        {/* Right Side - Text Content */}
        <div
          className="w-full md:w-1/2 p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          data-aos="slide-left">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-center">
            Your Cart feels lonely.
          </h2>
          <p className="text-sm md:text-base font-semibold pt-4 text-center">
            Your Shopping cart lives to serve. Give it purpose—fill it with books, electronics, videos, etc. and make it happy.
          </p>

          {/* Button */}
          <div className="flex justify-center pt-6">
            <Link to="/Skincare">
              <button className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>   
    </>
  );
};

export default CardComponents;
