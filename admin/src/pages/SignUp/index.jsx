import Button from '@mui/material/Button';
import React, { useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
const SignUp = () => {
  const [loadingGoogle ,setLoadingGoogle] = React.useState(false);
  const [loadingFb ,setLoadingFb] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  function handleClickFb() {
    setLoadingFb(true);
  }
  return (
    <section className='bg-white w-full top-0 left-0 '>
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
          Join us today! Get special
          <br />
        <span className='text-blue-500'>
           benefits and stay up-to-date
        </span>
        </h1>


        <div className="flex items-center justify-center w-full mt-5 gap-3" >
        <LoadingButton 
          size='small'
          onClick={handleClickGoogle}
          endIcon={<FcGoogle className='!text-[27px]' />}
          loading={loadingGoogle}
          loadingPosition='end'
          variant='outlined'
          className='!bg-none !py-2 !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
          >
            Signin with Google 
          </LoadingButton>

          <LoadingButton 
          size='small'
          onClick={handleClickFb}
          endIcon={<BsFacebook className='!text-[27px]' />}
          loading={loadingFb}
          loadingPosition='end'
          variant='outlined'
          className='!bg-none !py-2 !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
          >
            Signin with Facebook 
          </LoadingButton>
      </div>

      <br />
      <div className="w-full flex items-center justify-center gap-3">
        <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'></span>
        <span className='text-[14px] font-[500]'>Or, Sign in with your email</span>
        <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'></span>
      </div>

<br />
      <form className='w-full px-8 mt-3'>

        <div className="form-group mb-4 w-full">
          <h4 className='text-[14px] font-[500] mb-1'>Full Name</h4>
          <input 
            type="text"
            className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
        </div>


        <div className="form-group mb-4 w-full">
          <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
          <input 
            type="email"
            className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
        </div>

        <div className="relative w-full">
          <div className="form-group mb-4 w-full">
          <h4 className='text-[14px] font-[500] mb-1'>Password</h4>
          <input 
            type={showPassword === false ? 'password' : 'text'}
            className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />

            <Button className='!absolute top-[32px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600' onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword === false ? (
                  <FaRegEye className='text-[18px]'/>
                ) : (
                  <FaRegEyeSlash className='text-[18px]'/>
                )
              }
              </Button>
        </div>
        </div>


      <div className="form-group mb-4 w-full flex items-center justify-between">
        <FormControlLabel 
          control={<Checkbox defaultChecked/>} 
          label='Remember Me'
        />
        <Link 
          to='/forgot-password' 
          className='text-blue-400 font-[700] text-[15px] hover:underline hover:text-gray-700'
        >
          Forgot Password
        </Link>
      </div>


      <Button className='btn-blue btn-lg w-full'>Sign Up</Button>

      </form>
      </div>

      
    </section>
  )
}

export default SignUp;
