import Button from '@mui/material/Button';
import React, { useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";

import OtpBox from '../../Components/OtpBox';
const VerifyAccount = () => {

  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  }
  
  
  return (
    <section className='bg-white w-full h-[100vh] '>
      <header className='w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50'>
        <Link to='/'>
          <img 
            src="userimage.svg" 
            className="w-[200px] " 
          />
          </Link>

          <div className="flex items-center gap-0">
            <NavLink to='/login' exact={true} activeClassName='isActive'>
              <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                <CgLogIn className='text-[18px]'/>Login
              </Button>
            </NavLink>
            
          <NavLink to='/sign-up' exact={true} activeClassName='isActive'>
            <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
              <FaRegUser className='text-[15px]'/>Sign Up
            </Button>
          </NavLink>
          </div>
      </header>
      <img src="/pattern.webp" className="w-full fixed top-0 left-0 opacity-5" />


      <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src="shieldpng.png" className="w-[100px] m-auto" />
        </div>

        <h1 className='text-center text-[35px] font-[800] mt-4'>
          Welcome Back! 
          <br />
        <span className='text-blue-500'>
          Please verify your Email
        </span>
        </h1>


        

      <br /><br />

      <p className='text-center text-[15px]'>OTP send to &nbsp; <span className='text-blue-400 font-bold'>kmishraprince@gmail.com</span></p>

<br />
      <div className="text-center flex items-center justify-center flex-col">
        <OtpBox length={6} onChange={handleOtpChange}/>
      </div>


      <br />

      <div className="w-[300px] m-auto">
        <Button className='btn-blue w-full'>Verify OTP</Button>
      </div>
      
      </div>

      
    </section>
  )
}

export default VerifyAccount;
