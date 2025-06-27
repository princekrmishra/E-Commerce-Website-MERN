import React from 'react';
import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItem from "./CartItem";

const CartPage = () => {
  return (
    <section className='section py-10 pb-10'>
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        {/* Left Side - Cart Items */}
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your cart</h2>
              <p className='mt-0'>
                There are <span className='font-bold text-primary'>2</span> products in your cart
              </p>
            </div>

            {/* Cart Item */}
            <CartItem size="S"/>
          </div>
        </div>

        {/* Right Side - Cart Summary */}
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className='pb-3'>Cart Totals</h3>
            <hr />
            <div>
              <p className='flex items-center justify-between'>
                <span className='text-[14px] font-[500]'>Subtotal</span>
                <span className='text-primary font-bold'>₹ 1000</span>
              </p>

              <p className='flex items-center justify-between'>
                <span className='text-[14px] font-[500]'>Shipping</span>
                <span className='font-bold'>FREE</span>
              </p>

              <p className='flex items-center justify-between'>
                <span className='text-[14px] font-[500]'>Estimate For</span>
                <span className='font-bold'>India</span>
              </p>

              <p className='flex items-center justify-between'>
                <span className='text-[14px] font-[500]'>Grand Total</span>
                <span className='text-primary font-bold'>₹ 1000</span>
              </p>

              <br />

              <Button className='btn-org btn-lg w-full gap-2 flex'>
                <BsFillBagCheckFill className='text-[20px]' /> Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
