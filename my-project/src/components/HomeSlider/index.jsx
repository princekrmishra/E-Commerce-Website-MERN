import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

 const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
        <div className="container">
            
        <Swiper 
            loop={true}
            spaceBetween={10} 
            navigation={true} 
            modules={[Navigation, Autoplay]} 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            className="sliderHome"
        >
        

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" 
                    alt="banner" 
                    className='w-full h-[600px]'/> 
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src={slider1} 
                    alt="banner" 
                    className='w-full h-[600px]'/> 
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src={slider2} 
                    alt="banner" 
                    className='w-full h-[600px]'/> 
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img 
                    src={slider3} 
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

        <SwiperSlide>
            <div className="item overflow-hidden rounded-[10px]">
                <img src="https://www.shutterstock.com/shutterstock/photos/2234699085/display_1500/stock-vector-mega-sale-banner-promotion-template-with-d-megaphone-on-red-background-special-deal-label-design-2234699085.jpg" alt="banner" className='w-full h-[600px]' />
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    </div>
  )
}

export default HomeSlider;