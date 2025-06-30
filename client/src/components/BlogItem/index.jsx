import React from 'react'
import { IoTimeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className='blogItem group'>
            <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
                <img src='https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg' className='w-full transition-all group-hover:scale-105' alt='blog image'/>


                <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1'>
                <IoTimeSharp className='text-[16px]'/> 20 January 2025
                </span>
            </div>


            <div className="info py-4">
                <h2 className='text-[15px] font-[600] text-black'>
                <Link to='/' className='link'>
                Achieving excellence through thoug customized solutions
                </Link>
                </h2>
                <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>We are excited to hear from you! Whether you’re looking for strategic insights, customized solu...</p>

                <Link className='link font-[500] text-[14px] flex items-center gap-1'>
                Read More
                <IoIosArrowForward />
                </Link>
            </div>
    </div>
  )
}

export default BlogItem;




