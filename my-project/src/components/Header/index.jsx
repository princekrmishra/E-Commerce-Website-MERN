import React, { createContext, useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaCartShopping } from "react-icons/fa6";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation'
import { MyContext } from '../../App';
import { FaUserAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import Button  from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';





const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


const Header = () => {

const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const context = useContext(MyContext)
    return (
        <header className='bg-white'>
            <div className='top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>

                        <div className='col1 w-[50%]'>
                            <p className='text-[12px] font-[500]'>Get up to 15% off new season styles, limited time </p>
                        </div>

                        <div className='col2 flex-items-center justify-end'>
                        <ul className='flex items-center gap-3'>

                            <li className='list-none'>
                                <Link to='/help-center' className='text-[13px] link font-[500] transition hover:text-blue-500'>Help Center{" "}</Link>
                            </li>

                            <li className='list-none'>
                                <Link to='/order-tracking' className='text-[13px] link font-[500] transition hover:text-blue-500'>Order Tracking{" "}</Link>
                            </li>

                        </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className='header py-4 border-b-[1px] border-gray-250 '>
                <div className='container flex items-center justify-between'>
                    <div className='col1 w-[25%] '>
                    <Link to={"/"}><img src="/logo.png"></img></Link>
                    </div>
                    <div className='col2 w-[40%]'>
                    <Search/>
                    </div>
                        
                    <div className='col3 w-[35%] flex items-center pl-7'>
                        
                        <ul className='flex items-center gap-3 w-full justify-end'>
                            {
                                context.isLogin === false ?  (
                                <li className='list-none'>
                                <Link to="/login" className='link transition text-[15px] font-[500] hover:text-red-500'>Login</Link> |&nbsp;
                                <Link to="/register" className='link transition text-[15px] font-[500] hover:text-red-500' >Register</Link> 
                            </li>) : (
                                <>
                                <Button className="text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                                    <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]'><FaUserAlt className='text-[16px] text-[#000]'/></Button>

                                    <div className="info flex flex-col">
                                        <h4 className='text-[14px] mb-0 text-[rgba(0,0,0,0.6)] font-[500] capitalize text-left justify-start'>Prince Kumar Mishra</h4>
                                        <span className='text-[13px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left justify-start'>kmishraprince@gmail.com</span>
                                    </div>
                                </Button>

    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to='/my-account' className='w-full block'>
                <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                <FaUserAlt className='text-[18px]' /><span className='text-[14px]'>My Account</span>
                </MenuItem>
        </Link>
        <Link to='/my-orders' className='w-full block'>
                <MenuItem onClick={handleClose} className='flex gap-2 !py-2 '>
                <BsFillBagCheckFill className='text-[18px]' /> <span className='text-[14px]'> Orders</span>
                </MenuItem>
                </Link>
                <Link to='/my-list' className='w-full block'>
                <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                <FaHeart  className='text-[18px]'/> <span className='text-[14px]'>My List</span>
                </MenuItem>
                </Link>
                <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                <RiLogoutCircleRFill  className='text-[18px]'/> <span className='text-[14px]'> Log out</span>
                </MenuItem>
                
               
            </Menu>
                            </>
                            )
                            }
                           
                            
                            <li>
                            <Tooltip title="Compare">
                                <IconButton aria-label="cart" >
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <IoMdGitCompare />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                            </li>

                            <li>
                            <Tooltip title="Wishlist">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FaRegHeart />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>

                            </li>

                            <li>
                            <Tooltip title="My Cart">
                                <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)}>
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FaCartShopping />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                            
                            </li>

                        </ul>
                    </div>

                </div>

            </div>

        
        <Navigation/>



        </header>
    
    )
}


export default Header;