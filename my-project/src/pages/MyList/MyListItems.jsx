import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const MyListItems = (props) => {
  

  
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to='/product/7845' className='group'>
          <img
            src='https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg'
            className='w-full group-hover:scale-105 transition-all'
            alt="product"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoCloseSharp className='absolute cursor-pointer top-0 right-0 text-[22px] link transition-all' />
        <span className='text-[13px]'>RARE RABBIT</span>
        <h3 className='text-[15px]'>
          <Link to="/product/7845">Men Layer Regular Fit Collar Cotton Shirt</Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

       

        {/* Price Section */}
        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className='Price text-[14px] font-[600]'>₹999</span>
          <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹2299</span>
          <span className='Price text-primary text-[14px] font-[600]'>55% OFF</span>
        </div>

        

        <Button className="btn-org btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
