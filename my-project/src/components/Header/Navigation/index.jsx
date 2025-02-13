import React from 'react';
import { Button } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb";


 const Navigation = () => {
  return (
    <nav>
        <div className='container flex items-center justify-end gap-8'>
            <div className='col_1 w-[20%]'>
                <Button className='!text-black gap-2 w-full'>
                    <IoMenu className='text-[18px]'/>
                    Shop By Categories
                    <FaAngleDown className='rext-[14px] ml-auto font-bold'/>
                    </Button>
            </div>
            <div className="col_2 w-[65%] flex justify-center">
                <ul className='flex items-center gap-2'>
                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Home
                        </Button>
                       </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Fashion
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Electronics
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Bags
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Footwear
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Groceries
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Beauty
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Wellness
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>
                            Jewellary
                        </Button>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="col_3 w-[15%]">
                <p className='text-[16px] font-[500] flex items-center gap-3 mb-0 mt-0'><TbTruckDelivery className='text-[20px]'/>Free Pan India Delivery</p>
            </div>
        </div>
    </nav>
  )
}

export default Navigation
