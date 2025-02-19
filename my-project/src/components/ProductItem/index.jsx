import React from 'react'
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";

 const ProductItem = () => {
  return (
    <div className='productItem rounded-md  overflow-hidden shadow-lg border-1 border-[rgba(0,0,0,0.1)]'>
        <div className="group imgWrapper w-[100&] overflow-hidden rounded-md relative">
            <Link to='/'>
            <div className="img h-[220px] overflow-hidden">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg"
                className='w-full' />

                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
                className='w-full absolute top-0 left-0 opacity-0 transition-all duration-600 group-hover:opacity-100 group-hover:scale-105' />
            </div>
            
            </Link>
        <span className='discount flex  items-center absolute top-[10px] left-[10px] x-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>10%</span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                <MdOutlineZoomOutMap className='text-[18px] !text-black group-hover:text-white'/>
            </Button>

            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                <IoMdGitCompare className='text-[18px] !text-black group-hover:text-white'/>
            </Button>

            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                <FaRegHeart className='text-[18px] !text-black group-hover:text-white'/>
            </Button>

        </div>

        </div>
        
        <div className="info p-3 py-3">
            <h6 className='text-[13px]'><Link to='/' className='link transition-all'>
                RARE RABBIT
            </Link>    
            </h6>
            <h3 className='text-[13px] title mt-2 font-[500] mb-1 text-[#000]'>
            <Link to='/' className='link transition-all'>
            Men Layerr Regular Fit Spread Collar Cotton Shirt
            </Link>  
            </h3>
            <Rating name="size-small" defaultValue={4} size="small" readOnly/>

            <div className="flex items-center gap-4">
                <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>₹2299</span>
                <span className='Price text-primary text-[15px] font-[600]'>₹999</span>
            </div>
        </div>
    </div>
  )
}

export default ProductItem;
