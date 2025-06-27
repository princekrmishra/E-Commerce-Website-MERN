import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';

const CartItem = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size || 'M');
  const openSize = Boolean(sizeAnchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value != null) {
      setSelectedSize(value);
    }
  };

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);
  const openQty = Boolean(qtyAnchorEl);

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };

  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value != null) {
      setSelectedQty(value);
    }
  };

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

        <div className="flex items-center gap-4 mt-2">
          {/* Size Dropdown */}
          <div className='relative'>
            <span
              className='flex items-center justify-between bg-[#f1f1f1] text-[11px] font-600 py-1 px-2 rounded-md cursor-pointer'
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{ 'aria-labelledby': 'size-button' }}
            >
              {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => (
                <MenuItem key={size} onClick={() => handleCloseSize(size)}>{size}</MenuItem>
              ))}
            </Menu>
          </div>

          {/* Quantity Dropdown */}
          <div className='relative'>
            <span
              className='flex items-center justify-between bg-[#f1f1f1] text-[11px] font-600 py-1 px-2 rounded-md cursor-pointer'
              onClick={handleClickQty}
            >
              Qty: {selectedQty} <GoTriangleDown />
            </span>
            <Menu
              id="qty-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              MenuListProps={{ 'aria-labelledby': 'qty-button' }}
            >
              {[1, 2, 3, 4, 5].map(qty => (
                <MenuItem key={qty} onClick={() => handleCloseQty(qty)}>{qty}</MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-4 mt-2">
          <span className='Price text-[14px] font-[600]'>₹999</span>
          <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>₹2299</span>
          <span className='Price text-primary text-[14px] font-[600]'>55% OFF</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
