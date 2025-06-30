import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const images = [
    "https://api.spicezgold.com/download/file_1734526125947_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp",
    "https://api.spicezgold.com/download/file_1734526125949_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-1-202308161432.webp",
    "https://api.spicezgold.com/download/file_1734526125951_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-2-202308161432.webp",
    "https://api.spicezgold.com/download/file_1734526125956_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp",
    "https://api.spicezgold.com/download/file_1734526629721_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp",
    "https://api.spicezgold.com/download/file_1734526629721_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp",
    "https://api.spicezgold.com/download/file_1734526629722_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-2-202304220523.webp",
  ];

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current?.swiper.slideTo(index);
    zoomSliderBig.current?.swiper.slideTo(index);
  };

  return (
    <div className="flex gap-3">
      {/* Thumbnails */}
      <div className="slider w-[15%]">
        <Swiper
          ref={zoomSliderSml}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSliderThumbs h-[500px]"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === idx ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(idx)}
              >
                <img
                  src={img}
                  className="w-full transition-all duration-300 ease-in-out group-hover:scale-105"
                  alt={`thumbnail-${idx}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Zoom Image */}
      <div className="zoomContainer w-[85%] h-[500px] overflow-hidden flex items-center justify-center">
        <div
          key={slideIndex}
          className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full flex items-center justify-center"
        >
          <InnerImageZoom
            zoomType="hover"
            zoomScale={1.5}
            src={images[slideIndex]}
            className="max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
