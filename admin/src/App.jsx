import React, { useState, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './App.css';

// ✅ Create context outside
const MyContext = createContext();

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const values = {
    isSideBarOpen,
    setIsSideBarOpen
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
    }
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export { MyContext };
export default App;
