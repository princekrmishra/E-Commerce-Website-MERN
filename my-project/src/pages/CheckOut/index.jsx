import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from "react-icons/bs";

const CheckOut = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        {/* Left Column: Billing Details */}
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>

            <form className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField className="w-full" label="Full Name" variant="outlined" size="small" />
                </div>
                <div className="col w-[50%]">
                  <TextField type="email" className="w-full" label="Email" variant="outlined" size="small" />
                </div>
              </div>

              <h4>Street Address*</h4>
              <div className="flex items-center gap-5 pb-5 pt-3">
                <div className="col w-[100%]">
                  <TextField className="w-full" label="House Number and Street" variant="outlined" size="small" />
                </div>
              </div>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField className="w-full" label="Apartment, Suite, unit, etc (optional)" variant="outlined" size="small" />
                </div>
              </div>

              <h4>Town/City*</h4>
              <div className="flex items-center gap-5 pb-5 pt-3">
                <div className="col w-[100%]">
                  <TextField className="w-full" label="City" variant="outlined" size="small" />
                </div>
              </div>

              <h4>State/Country*</h4>
              <div className="flex items-center gap-5 pb-5 pt-3">
                <div className="col w-[100%]">
                  <TextField className="w-full" label="State" variant="outlined" size="small" />
                </div>
              </div>

              <h4>Postcode/ZIP*</h4>
              <div className="flex items-center gap-5 pb-5 pt-3">
                <div className="col w-[100%]">
                  <TextField className="w-full" label="ZIP Code" variant="outlined" size="small" />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5 pt-3">
                <div className="col w-[50%]">
                  <TextField className="w-full" label="Phone Number" variant="outlined" size="small" />
                </div>
                <div className="col w-[50%]">
                  <TextField className="w-full" label="Email Address" variant="outlined" size="small" />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="rightCol w-[30%]">
          <div className="card shadow-md rounded-md p-5 bg-white">
            <h2 className="mb-4">Your Order</h2>

            {/* Header Row */}
            <div className="flex items-center justify-between border-b py-3 border-t border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>

            {/* Product Row */}
             <div className='mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-5'>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                    className="w-full transition-all group-hover:scale-105"
                    alt="product"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px]">Men Layer Shirt</h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
              </div>

              <span className='text-[14px] font-[600]'>₹2000</span>
            </div>
           
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                    className="w-full transition-all group-hover:scale-105"
                    alt="product"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px]">Men Layer Shirt</h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
              </div>

              <span className='text-[14px] font-[600]'>₹2000</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                    className="w-full transition-all group-hover:scale-105"
                    alt="product"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px]">Men Layer Shirt</h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
              </div>

              <span className='text-[14px] font-[600]'>₹2000</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                    className="w-full transition-all group-hover:scale-105"
                    alt="product"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px]">Men Layer Shirt</h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
              </div>

              <span className='text-[14px] font-[600]'>₹2000</span>
            </div>
            </div>

            <Button className='btn-org btn-lg w-full flex gap-2 items-center'><BsFillBagCheckFill className='text-[22px]'/>Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
