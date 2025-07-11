import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { TbGift } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";

const DashboardBoxes = () => {
  return (
    <>
        <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className='dashboardBoxesSlider'
    >
      <SwiperSlide>
        <div className="box p-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer hover:bg-[#fafafa]">
          <TbGift className='text-[40px] text-[#3372fa]'/>
          <div className="info w-[70%]">
            <h3>New Orders</h3>
            <b>1,390</b>
          </div>
          <FaRegChartBar className='text-[40px] text-[#3372fa]'/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="box p-5  bg-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f1]">
          <AiTwotonePieChart className='text-[50px] text-[#10b981]'/>
          <div className="info w-[70%]">
            <h3>Sales</h3>
            <b>$57,890</b>
          </div>
          <FaRegChartBar className='text-[50px] text-[#10b981]'/>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="box p-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f1]">
          <BsBank className='text-[40px] text-[#9728ca]'/>
          <div className="info w-[70%]">
            <h3>Revenue</h3>
            <b>$12,390</b>
          </div>
          <FaRegChartBar className='text-[50px] text-[#9728ca]'/>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="box bg-white p-5 rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f1]">
          <RiProductHuntLine className='text-[40px] text-[#c7c407]'/>
          <div className="info w-[70%]">
            <h3>Total Products</h3>
            <b>1,390</b>
          </div>
          <FaRegChartBar className='text-[50px] text-[#c7c407]'/>
        </div>
      </SwiperSlide>


      
      

    </Swiper>
    </>
  )
}

export default DashboardBoxes;
