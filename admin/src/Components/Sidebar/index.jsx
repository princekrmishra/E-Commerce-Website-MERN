import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiLogout } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import {Collapse} from 'react-collapse';



const Sidebar = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if(subMenuIndex === index){
      setSubMenuIndex(null);
    }else{
      setSubMenuIndex(index);
    }
  }
  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
        <div className="py-2 w-full">
            <Link to='/'><img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" className="w-[120px]" /></Link>
        </div>


        <ul className='mt-4'>
            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <RxDashboard className='text-[18px]'/>
                  <span>Dashboard</span>
              </Button>
            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <FaRegImage className='text-[18px]'/>
                  <span>Home Slides</span>
                  <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' onClick={() => isOpenSubMenu(1)}><FaAngleDown/></span>
              </Button>

              <Collapse isOpened={subMenuIndex === 1}>
  <ul className="w-full">
    <li className="w-full">
      <Button
        className="text-[13px] !text-[rgba(0,0,0,0.7)] w-full justify-start capitalize font-[500] pl-9 flex gap-3"
      >
        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
        Home Banner Slide List
      </Button>
    </li>
    <li className="w-full">
      <Button
        className="text-[13px] !text-[rgba(0,0,0,0.7)] w-full justify-start capitalize font-[500] pl-9 flex gap-3"
      >
        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
        Add Home Banner Slide
      </Button>
    </li>
  </ul>
</Collapse>


              
            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <FiUsers className='text-[18px]'/>
                  <span>Users</span>
              </Button>
            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <MdOutlineProductionQuantityLimits className='text-[20px]'/>
                  <span>Products</span>
                  <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' onClick={() => isOpenSubMenu(2)}><FaAngleDown/></span>
              </Button>

              <Collapse isOpened={true}>
                <ul>
                  <li>
                    <Button></Button>
                  </li>
              </ul>
              </Collapse>

            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <TbCategory className='text-[20px]'/>
                  <span>Category</span>
                  <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' onClick={() => isOpenSubMenu(3)}><FaAngleDown/></span>
              </Button>

                <Collapse isOpened={true}>
                <ul>
                  <li>
                    <Button></Button>
                  </li>
              </ul>
              </Collapse>

            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <IoBagCheckOutline className='text-[20px]'/>
                  <span>Orders</span>
              </Button>
            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <HiLogout className='text-[20px]'/>
                  <span>Logout</span>
              </Button>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;
