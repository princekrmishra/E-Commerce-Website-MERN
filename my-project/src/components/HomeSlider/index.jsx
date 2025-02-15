import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

 const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
        <div className="container">
            
        <Swiper 
            spaceBetween={10} 
            navigation={true} 
            modules={[Navigation]} 
            className="sliderHome"
        >

        
        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img src="../src/assets/slider1.png" alt="banner" className='w-full h-[680px]' />
            </div>
        </SwiperSlide>
        

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img src="../src/assets/slider2.png" alt="banner" className='w-full h-[680px]' />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src="../src/assets/slider3.png" 
                    alt="banner" 
                    className='w-full h-[680px]' />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165904/1739165903970_file_1734525014348_NewProject_7.jpg" 
                    alt="banner" 
                    className='w-full h-[680px]'/> 
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src="https://s3.envato.com/files/260793076/01.png" 
                    alt="banner" 
                    className='w-full h-[680px]' /> 
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    </div>
  )
}

export default HomeSlider;