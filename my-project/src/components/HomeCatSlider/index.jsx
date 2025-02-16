import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

 const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
        <div className="container">
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true} 
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107557/1737107555729_fash.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Electronics</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107665/1737107663085_bag.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Bag</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107678/1737107676260_foot.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Footwear</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107691/1737107689261_gro.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Grocieries</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107705/1737107702876_beauty.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Beauty Products</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107718/1737107715395_well.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Wellness</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/'>
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739065363/1739065363328_jw.png" alt="cat" className='w-[60px] transition-all'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Jewellary</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                

            </Swiper>
        </div>
    </div>
  )
}

export default HomeCatSlider;
