import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
const SocialComponents = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleRedirect = (url) => {
    window.open(url);
  };

  return (
    <nav className=" flex justify-center items-center pt-16 bg-gray-100">
      <div 
        className='flex gap-4 p-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg border-2 border-gray-200 rounded-2xl' 
        data-aos="fade-left">
        <button 
          onClick={() => handleRedirect('https://wa.me/message/O3CTLULQDASLC1')} 
          className="text-xl font-semibold text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-green-600">
        <FaWhatsapp/>
        </button>

        <button 
          onClick={() => handleRedirect('https://m.me/jahidul.islam.98621')} 
          className=" text-xl font-semibold text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
          <FaFacebookMessenger/>
        </button>
      </div>
    </nav>
  );
};

export default SocialComponents;
