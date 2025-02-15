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
                <img src="https://drive.google.com/file/d/1-z8AMcVKcOFU1dhjKi08CUzwlq53AAOv/view?usp=sharing" alt="banner" className='w-full h-[600px]' />
            </div>
        </SwiperSlide>
        

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img src="https://drive.google.com/file/d/10EFIDbMJy9zx8hSY1u340ggkn5TUBb1J/view?usp=sharing" alt="banner" className='w-full h-[600px]' />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src="https://drive.google.com/file/d/1dOXQPvdidcsLxAoeg3u4wm-2i_A62jUY/view?usp=sharing" 
                    alt="banner" 
                    className='w-full h-[600px]' />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165904/1739165903970_file_1734525014348_NewProject_7.jpg" 
                    alt="banner" 
                    className='w-full h-[600px]'/> 
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src="https://s3.envato.com/files/260793076/01.png" 
                    alt="banner" 
                    className='w-full h-[600px]' /> 
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    </div>
  )
}

export default HomeSlider;