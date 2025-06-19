import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    'https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp',
    'https://api.spicezgold.com/download/file_1734528821892_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg',
    'https://api.spicezgold.com/download/file_1734528821894_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp',
    'https://api.spicezgold.com/download/file_1734528821896_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp',
  ];

  const goto = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="flex gap-3">
      {/* Thumbnails */}
      <div className="slider w-[15%]">
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSliderThumbs h-[500px] overflow-hidden"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === idx ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(idx)}
              >
                <img
                  src={src}
                  className="w-full transition-all duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Zoom Image */}
      <div className="zoomContainer w-[85%] h-[500px] overflow-hidden flex items-center justify-center">
        <InnerImageZoom
          zoomType="hover"
          zoomScale={1.5}
          src={images[slideIndex]}
          className="max-h-full object-contain"
        />
      </div>

      
    </div>
  );
};



// import React, { useRef, useState } from 'react'
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/styles.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

// export const ProductZoom = () => {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const zoomSliderBig = useRef();
//     const zoomSliderSml = useRef();

//     const goto = (index) => {
//         setSlideIndex(index);
//         zoomSliderSml.current.swiper.slideTo(index);
//         zoomSliderBig.current.swiper.slideTo(index);
//     }
//   return (
//     <>
//     <div className='flex gap-3'>
//         <div className="slider w-[15%]">
//             <Swiper
//             ref = {zoomSliderSml}
//                 direction={'vertical'}
//                 slidesPerView={4}
//                 spaceBetween={0}
//                 navigation={true} 
//                 modules={[Navigation]}
//                 className="zoomProductSliderThumbs h-[500px] overflow-hidden;"
//             >
//         <SwiperSlide>
//             <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
//                 <img src="https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" className='w-full translate-all group-hover:scale-105' />
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//             <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
//                 <img src="https://api.spicezgold.com/download/file_1734528821892_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg" className='w-full translate-all group-hover:scale-105' />
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//             <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
//                 <img src="https://api.spicezgold.com/download/file_1734528821894_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp" className='w-full translate-all group-hover:scale-105' />
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//             <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
//                 <img src="https://api.spicezgold.com/download/file_1734528821896_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp" className='w-full translate-all group-hover:scale-105' />
//             </div>
//         </SwiperSlide>
        
//             </Swiper>
        
//         </div>


//         <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
//             <Swiper
//                 ref={zoomSliderBig}
//                 direction={'vertical'}
//                 slidesPerView={1}
//                 spaceBetween={0}
//                 navigation={false}
//             >
//             <SwiperSlide>
//                 <InnerImageZoom 
//                     zoomType="hover" 
//                     zoomScale={1} 
//                     src={
//                         "https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp"  
//                         }
//                     />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <InnerImageZoom 
//                     zoomType="hover" 
//                     zoomScale={1} 
//                     src={
//                         "https://api.spicezgold.com/download/file_1734528821892_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg"  
//                         }
//                     />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <InnerImageZoom 
//                     zoomType="hover" 
//                     zoomScale={1} 
//                     src={
//                         "https://api.spicezgold.com/download/file_1734528821894_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp"  
//                         }
//                     />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <InnerImageZoom 
//                     zoomType="hover" 
//                     zoomScale={1} 
//                     src={
//                         "https://api.spicezgold.com/download/file_1734528821896_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"  
//                         }
//                     />
//             </SwiperSlide>
//             </Swiper>
        
//         </div>
//     </div>
//     </>
    
//   )
// }





