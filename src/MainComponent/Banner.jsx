import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true}  modules={[Navigation, Autoplay]} 
        loop={true}
        autoplay={{
          delay: 4000,  
          disableOnInteraction: false, 
        }}
         className="mySwiper">
        <SwiperSlide className="flex mt-6 justify-center items-center ">
          <img 
            src="https://i.ibb.co.com/Pj3rdNp/Fish-fry-7.jpg" 
            alt="Image" 
            className="w-1/2 rounded-lg shadow-md mx-auto h-auto object-contain" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="https://i.ibb.co.com/JH2sxLd/vegetable-sandwich-recipe.webp" 
            alt="Image" 
            className="w-1/2 rounded-lg shadow-md mx-auto h-auto object-contain" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center  items-center">
          <img 
            src="https://i.ibb.co.com/Zhbn2C9/Smashburger-recipe-120219.jpg" 
            alt="Image" 
            className="w-1/2 mx-auto rounded-lg shadow-md h-auto object-contain" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center  items-center">
          <img 
            src="https://i.ibb.co.com/tzMLsDK/Asian-stirfried-vegetables.jpg" 
            alt="Image" 
            className="w-1/2 mx-auto rounded-lg shadow-md h-auto  object-contain" 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
