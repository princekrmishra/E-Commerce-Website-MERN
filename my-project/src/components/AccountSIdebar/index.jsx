import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { NavLink } from "react-router";
import { IoCloudUploadSharp } from "react-icons/io5";
import  Button  from '@mui/material/Button';

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
                    <div className="w-full p-5 flex items-center justify-center flex-col">
                        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                            <img src="./user-image.png" className="w-full h-full object-cover" />
                            <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 translate-all group-hover:opacity-100">
                               < IoCloudUploadSharp className='text-[#fff] text-[25px]' />
                               <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0'/>
                            </div>
                        </div>

                        

                        <h3>Prince Kumar Mishra</h3>
                        <h6 className='text-[13px] font-[500]'>kmishraprince@gmail.com</h6>
                    </div>


                    <ul className='list-none pb-5 bg-[#fafafa] myAccountsTab'>
                        <li className='w-full'>
                            <NavLink to="/my-account" exact={true} activeClassName="isActive">
                            <Button className='flex items-center gap-2 w-full !rounded-none  !capatalize !text-[rgba(0,0,0,0.7)] !text-left !px-5 !py-2 !justify-start '>
                                <FaUserAlt className='text-[17px]'/> User Profile
                            </Button>
                            </NavLink>
                        </li>

                        <li className='w-full'>
                            <NavLink to="/my-list" exact={true} activeClassName="isActive">
                            <Button className='flex items-center gap-2 w-full !rounded-none  !capatalize !text-[rgba(0,0,0,0.7)] !text-left !px-5 !py-2 !justify-start '>
                                <FaHeart className='text-[17px]'/> My List
                            </Button>
                            </NavLink>
                        </li>

                        <li className='w-full'>
                            <NavLink to="/my-orders" exact={true} activeClassName="isActive">
                            <Button className='flex items-center gap-2 w-full !rounded-none  !capatalize !text-[rgba(0,0,0,0.7)] !text-left !px-5  !py-2 !justify-start '>
                                <BsFillBagCheckFill className='text-[17px]'/> My Orders
                            </Button>
                            </NavLink>
                        </li>


                        <li className='w-full'>
                            
                            <Button className='flex items-center gap-2 w-full !rounded-none  !capatalize !text-[rgba(0,0,0,0.7)] !text-left !px-5 !py-2 !justify-start '>
                                <RiLogoutCircleRFill className='text-[18px]'/> Log Out
                            </Button>
                            
                        </li>

                        

                    </ul>
                </div>
  )
}

export default AccountSidebar;
