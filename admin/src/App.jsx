import React, { useState, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import Products from './pages/Products';
import AddProduct from './pages/Products/addProduct';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {IoMdClose} from 'react-icons/io';
import Slide from '@mui/material/Slide';
import HomeSliderBanners from './pages/HomeSliderBanners';
import AddHomeSlide from './pages/HomeSliderBanners/AddHomeSlide';
import CategoryList from './pages/Categegory';
import ForgotPassword from './pages/ForgotPassword';
import VerifyAccount from './pages/VerifyAccount';
import ChangePassword from './pages/ChangePassword';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ✅ Create context outside
const MyContext = createContext();

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: ""
  });

  const values = {
    isSideBarOpen,
    setIsSideBarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel, 
    setIsOpenFullScreenPanel

  };

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex transition-all duration-300">
            {/* ✅ Tailwind-compatible dynamic width */}
            <div className={`sidebarwrapper transition-all duration-300 ${isSideBarOpen ? 'w-[18%]' : 'w-0'}`}>
              {isSideBarOpen && <Sidebar />}
            </div>
            <div className={`contentRight py-4 px-5 transition-all duration-300 ${isSideBarOpen ? 'w-[82%]' : 'w-full'}`}>
              <Dashboard />
            </div>
          </div>
        </section>
      )
    },
    {
      path: "/login",
      exact: true,
      element: (
        <>
              <Login />
        </>  
      )
    },
    {
      path: "/verify-account",
      exact: true,
      element: (
        <>
              <VerifyAccount />
        </>  
      )
    },
    {
      path: "/forgot-password",
      exact: true,
      element: (
        <>
              <ForgotPassword />
        </>  
      )
    },
    {
      path: "/change-password",
      exact: true,
      element: (
        <>
              <ChangePassword />
        </>  
      )
    },
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
              <SignUp />
        </>  
      )
    },
    {
      path: "/products",
      exact: true,
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex transition-all duration-300">
            {/* ✅ Tailwind-compatible dynamic width */}
            <div className={`sidebarwrapper transition-all duration-300 ${isSideBarOpen ? 'w-[18%]' : 'w-0'}`}>
              {isSideBarOpen && <Sidebar />}
            </div>
            <div className={`contentRight py-4 px-5 transition-all duration-300 ${isSideBarOpen ? 'w-[82%]' : 'w-full'}`}>
              <Products />
            </div>
          </div>
        </section>
      )
    },
    {
      path: "/homeSlider/list",
      exact: true,
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex transition-all duration-300">
            {/* ✅ Tailwind-compatible dynamic width */}
            <div className={`sidebarwrapper transition-all duration-300 ${isSideBarOpen ? 'w-[18%]' : 'w-0'}`}>
              {isSideBarOpen && <Sidebar />}
            </div>
            <div className={`contentRight py-4 px-5 transition-all duration-300 ${isSideBarOpen ? 'w-[82%]' : 'w-full'}`}>
              <HomeSliderBanners />
            </div>
          </div>
        </section>
      )
    },
    {
      path: "/category/list",
      exact: true,
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex transition-all duration-300">
            {/* ✅ Tailwind-compatible dynamic width */}
            <div className={`sidebarwrapper transition-all duration-300 ${isSideBarOpen ? 'w-[18%]' : 'w-0'}`}>
              {isSideBarOpen && <Sidebar />}
            </div>
            <div className={`contentRight py-4 px-5 transition-all duration-300 ${isSideBarOpen ? 'w-[82%]' : 'w-full'}`}>
              <CategoryList />
            </div>
          </div>
        </section>
      )
    },
    
  ]);

  


  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />



      <Dialog
        fullScreen
        open={isOpenFullScreenPanel.open}
        onClose={() => setIsOpenFullScreenPanel({open: false})}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setIsOpenFullScreenPanel({open: false})}
              aria-label="close"
            >
              <IoMdClose className='text-gray-800' />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span className='text-gray-800'>{isOpenFullScreenPanel?.model}</span>
            </Typography>
            
          </Toolbar>
        </AppBar>
        {
          isOpenFullScreenPanel?.model === 'Add Product' && <AddProduct />
        }

        {
          isOpenFullScreenPanel?.model === 'Add Home Slide' && <AddHomeSlide />
        }
      </Dialog>
    </MyContext.Provider>
  );
};

export { MyContext };
export default App;
