import Button from '@mui/material/Button';
import React, { useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";

const ForgotPassword = () => {

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
          <img src="logoshort.svg" className="m-auto" />
        </div>

        <h1 className='text-center text-[35px] font-[800] mt-4'>
          Having trouble to sign in?
          <br />
        <span className='text-blue-500'>
          Reset your password. <br />
        </span>
        </h1>


      

     
     


      <form className='w-full px-8 mt-3'>
        <div className="form-group mb-4 w-full">
          <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
          <input 
            placeholder='Enter your Email'
            type="email"
            className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
        </div>

       
       

     


      <Button className='btn-blue btn-lg w-full'>Reset Password</Button>
      <br /> <br />
      <div className="text-center flex items-center justify-center gap-4">
        <span>Don't want to reset? </span>
          <Link 
            to='/login' 
            className='text-blue-400 font-[700] text-[15px] hover:underline hover:text-gray-700'
          >
            Sign In
          </Link>
      </div>
     

      </form>
      </div>

      
    </section>
  )
}

export default ForgotPassword;
