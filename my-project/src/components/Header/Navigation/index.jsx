import React, { useState } from 'react';
import { Button } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"


 const Navigation = () => {
  
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCategorypanel=()=>{
        setIsOpenCatPanel(true);

    }

  return (
    <>
    <nav>
        <div className='container flex items-center justify-end gap-8'>
            <div className='col_1 w-[20%]'>
                <Button className='!text-black gap-2 w-full' onClick={openCategorypanel}>
                    <IoMenu className='text-[18px]'/>
                    Shop By Categories
                    <FaAngleDown className='text-[14px] ml-auto font-bold'/>
                    </Button>
            </div>
            <div className="col_2 w-[65%] flex justify-center">
                <ul className='flex items-center gap-3'>
                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                                Home
                            </Button>
                       </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Fashion
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Electronics
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Bags
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Footwear
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Groceries
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Beauty
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Wellness
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                            Jewelry
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

    {/**category panel */}
   <CategoryPanel openCategorypanel={openCategorypanel} isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
    </>
  )
}

export default Navigation;
