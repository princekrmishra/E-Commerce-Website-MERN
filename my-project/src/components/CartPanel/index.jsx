import React from 'react'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import  Button  from '@mui/material/Button';

 const cartPanel = () => {
  return (
    <>
    <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-5">
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
              <Link to="/product/45875" className='block group'>
              <img 
              src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" 
              className='w-full group hover:scale-105'  />
              </Link>
            </div>
            

            <div className="info w-[75%] pr-5 relative">
              <h4 className='text-[14px] font-[500]'>
                <Link to="/product/747485" className='link'>
                Men Layerr Regular Fit Spread Collar Cotton Shirt
                </Link>
                </h4>
                <p className='flex items-center gap-5 mt-2 mb-2'>
                    <span>
                        Qty: 2
                    </span>
                    <span className='text-[14px] text-primary font-bold'>
                        price: $25
                    </span>
                </p>

                <MdDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>


            </div>
          </div>

          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
              <Link to="/product/45875" className='block group'>
              <img 
              src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" 
              className='w-full group hover:scale-105'  />
              </Link>
            </div>
            

            <div className="info w-[75%] pr-5 relative">
              <h4 className='text-[14px] font-[500]'>
                <Link to="/product/747485" className='link'>
                Men Layerr Regular Fit Spread Collar Cotton Shirt
                </Link>
                </h4>
                <p className='flex items-center gap-5 mt-2 mb-2'>
                    <span>
                        Qty: 2
                    </span>
                    <span className='text-[14px] text-primary font-bold'>
                        price: $25
                    </span>
                </p>

                <MdDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>


            </div>
          </div>

          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
              <Link to="/product/45875" className='block group'>
              <img 
              src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" 
              className='w-full group hover:scale-105'  />
              </Link>
            </div>
            

            <div className="info w-[75%] pr-5 relative">
              <h4 className='text-[14px] font-[500]'>
                <Link to="/product/747485" className='link'>
                Men Layerr Regular Fit Spread Collar Cotton Shirt
                </Link>
                </h4>
                <p className='flex items-center gap-5 mt-2 mb-2'>
                    <span>
                        Qty: 2
                    </span>
                    <span className='text-[14px] text-primary font-bold'>
                        price: $25
                    </span>
                </p>

                <MdDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>


            </div>
          </div>

          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
              <Link to="/product/45875" className='block group'>
              <img 
              src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" 
              className='w-full group hover:scale-105'  />
              </Link>
            </div>
            

            <div className="info w-[75%] pr-5 relative">
              <h4 className='text-[14px] font-[500]'>
                <Link to="/product/747485" className='link'>
                Men Layerr Regular Fit Spread Collar Cotton Shirt
                </Link>
                </h4>
                <p className='flex items-center gap-5 mt-2 mb-2'>
                    <span>
                        Qty: 2
                    </span>
                    <span className='text-[14px] text-primary font-bold'>
                        price: $25
                    </span>
                </p>

                <MdDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>


            </div>
          </div>

     


        </div>


        <br />
         <br />
            <br />
            <br />
         <br />
            <br />


        <div className='bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5'>
        <div className="bottomInfo w-full  py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full">
                <span className='text-[14px] font-[600]'>1 items</span>
                <span className='text-primary font-bold'>$150.00</span>
            </div>

            <div className="flex items-center justify-between w-full ">
                <span className='text-[14px] font-[600]'>Shipping</span>
                <span className='text-primary font-bold'>$8.00</span>
            </div>


        </div>


        <div className="bottomInfo w-full  py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full">
                <span className='text-[14px] font-[600]'>Total (tax excl.)</span>
                <span className='text-primary font-bold'>$93.00</span>
            </div>


            <br />

            <div className="flex items-center justify-between w-full gap-5">
                <Link to='/cart' className='w-[50%] d-block'><Button className="btn-org btn-lg w-full">View Cart</Button></Link>
                <Link to='/checkout' className='w-[50%] d-block'><Button className="btn-org btn-lg w-full">CheckOut</Button></Link>
                
            </div>

           

            </div>
        </div>
    </>
  )
}

export default cartPanel;


