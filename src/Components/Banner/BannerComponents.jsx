
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const BannerComponents = () => {
  return (
   <>
   
   <div className=" mt-[132px] ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[180px] md:h-[370px] "
      >
        <SwiperSlide> 
          <img src="/images/banner1.jpg" alt="Banner 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner6.png" alt="Banner 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner3.jpg" alt="Banner 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner4.jpg" alt="Banner 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner5.jpg" alt="Banner 2" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
   </div>
   <nav className="container mx-auto">
    </nav>
   </>
  );
};

export default BannerComponents;
