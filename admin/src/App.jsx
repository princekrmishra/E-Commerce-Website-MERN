import React, { useState, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import Products from './pages/Products';

// ✅ Create context outside
const MyContext = createContext();

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isSideBarOpen,
    setIsSideBarOpen,
    isLogin,
    setIsLogin

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
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export { MyContext };
export default App;
