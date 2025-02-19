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
                <ul className='flex items-center gap-3 nav'>
                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                                Home
                            </Button>
                       </Link>
                    </li>

                    <li className='list-none relative'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                            Fashion
                        </Button>
                        </Link>

                        <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Men</Button>
                                        <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Tshirt</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Shirt</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watch</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear</Button></Link>
                                </li>

                            </ul>
                                        </div>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Women</Button>
                                    <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Indian Wear</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Western Wear</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watch</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear</Button></Link>
                                </li>

                            </ul>
                                        </div>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                    <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Body Suit</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Diapers</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Tshirt</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Party Wear</Button></Link>
                                </li>

                            </ul>
                                        </div>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                                    <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Tops</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Dresses</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Lehengas</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear</Button></Link>
                                </li>

                            </ul>
                                        </div>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                                    <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Tshirt</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>Shirt</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Party Wear</Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear</Button></Link>
                                </li>

                            </ul>
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </li>
                    

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                            Electronics
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                            Bags
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                            Footwear
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                            Groceries
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                            Beauty
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
                            Wellness
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] !py-4'>
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
