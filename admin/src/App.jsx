import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import './App.css'
import Sidebar from './Components/Sidebar';
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      exact:true,
      element: (
        <section className='main'>
          <Header/>
          <div className="contentMain flex">
            <div className="sidebarWrapper w-[18%]">
              <Sidebar/>
            </div>
          </div>
        </section>
      )
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
