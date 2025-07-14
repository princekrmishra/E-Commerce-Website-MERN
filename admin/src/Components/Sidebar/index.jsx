import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RxDashboard } from 'react-icons/rx';
import { FaRegImage } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';
import { IoBagCheckOutline } from 'react-icons/io5';
import { HiLogout } from 'react-icons/hi';
import { FaAngleDown } from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import { MyContext } from '../../App';

// ✅ Reusable submenu item component
const SubMenuItem = ({ label }) => (
  <Button className="!text-[13px] !text-[rgba(0,0,0,0.7)] !normal-case w-full justify-start font-[500] pl-[52px] flex gap-3">
    <span className="w-[5px] h-[5px] mt-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
    {label}
  </Button>
);

const Sidebar = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const context = useContext(MyContext);

  const isOpenSubMenu = (index) => {
    setSubMenuIndex(subMenuIndex === index ? null : index);
  };

  return (
    <div className={`fixed top-0 left-0 bg-white h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4 transition-all duration-300 ${context.isSideBarOpen ? 'w-[18%]' : 'w-0'}`}>
      <div className="py-2">
        <Link to="/">
          <img src="userimage.svg" className="w-[200px]" />
        </Link>
      </div>

      <ul className="mt-4 space-y-1">
        {/* Dashboard */}
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <RxDashboard className="text-[18px]" />
            <span>Dashboard</span>
          </Button>
        </li>

        {/* Home Slides */}
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <FaRegImage className="text-[18px]" />
            <span>Home Slides</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center" onClick={() => isOpenSubMenu(1)}><FaAngleDown /></span>
          </Button>
          <Collapse isOpened={subMenuIndex === 1}>
            <ul className="w-full">
              <li><SubMenuItem label="Home Banner Slide List" /></li>
              <li><SubMenuItem label="Add Home Banner Slide" /></li>
            </ul>
          </Collapse>
        </li>

        {/* Users */}
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <FiUsers className="text-[18px]" />
            <span>Users</span>
          </Button>
        </li>

        {/* Products */}
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <MdOutlineProductionQuantityLimits className="text-[20px]" />
            <span>Products</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center" onClick={() => isOpenSubMenu(2)}><FaAngleDown /></span>
          </Button>
          <Collapse isOpened={subMenuIndex === 2}>
            <ul className="w-full">
              <li><SubMenuItem label="Product List" /></li>
              <li><SubMenuItem label="Product Upload" /></li>
            </ul>
          </Collapse>
        </li>

        {/* Category */}
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <TbCategory className="text-[20px]" />
            <span>Category</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center" onClick={() => isOpenSubMenu(3)}><FaAngleDown /></span>
          </Button>
          <Collapse isOpened={subMenuIndex === 3}>
            <ul className="w-full">
              <li><SubMenuItem label="Category List" /></li>
              <li><SubMenuItem label="Add a Category" /></li>
              <li><SubMenuItem label="Sub Category List" /></li>
              <li><SubMenuItem label="Add a Sub Category" /></li>
            </ul>
          </Collapse>
        </li>

        {/* Orders */}
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <IoBagCheckOutline className="text-[20px]" />
            <span>Orders</span>
          </Button>
        </li>

        {/* Logout */}
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <HiLogout className="text-[20px]" />
            <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
