import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

export const AdBannerSlider = (props) => {
  return (
    <div className='py-5 w-full'>
       <Swiper
          slidesPerView={props.items}
          spaceBetween={10}
          navigation={true} 
          modules={[Navigation]}
          className="smlBtn"
          >
          
          <SwiperSlide>
           <BannerBox 
            img={'https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/new-arrival/MCLP_Row4_4_4blocker_MOB_OppoF21sPro_PDP_B2B.jpg'} link={'/'}/>
          </SwiperSlide>

          <SwiperSlide>
           <BannerBox 
            img={'https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/slider/B2B_Home-Page-Smartphone_Mob.jpg'} link={'/'}/>
          </SwiperSlide>

          <SwiperSlide>
           <BannerBox 
            img={'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/event-support/1540474972043/assets/images/mob_main_ban.jpg'} link={'/'}/>
          </SwiperSlide>

          <SwiperSlide>
           <BannerBox 
            img={'https://image01-in.oneplus.net/media/202502/08/b99f07af62bfc978552c5f15d395486a.png?x-amz-process=image/format,webp/quality,Q_80'} link={'/'}/>
          </SwiperSlide>

          <SwiperSlide>
           <BannerBox 
            img={'https://www.jio.com/itela23pro_jioofferpg_tab_768x800px.jpg'} link={'/'}/>
          </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default AdBannerSlider;
