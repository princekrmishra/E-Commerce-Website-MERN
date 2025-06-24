import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from "./pages/Home"
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';
import { ProductDetails } from './pages/ProductDetails';
import { createContext } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ProductZoom } from './components/ProductZoom';
import { IoCloseSharp } from "react-icons/io5";
import { ProductDetailsComponent } from './components/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';

import Drawer from '@mui/material/Drawer';
import CartPanel from "./components/CartPanel"




const MyContext = createContext();

function App() {

  const [openCartPanel, setOpenCartPanel] = useState(false);


  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState('lg');
  const [fullWidth, setFullWidth] = useState(true);



  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
      setOpenProductDetailsModal,
      setOpenCartPanel
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/productListing' exact={true} element={<ProductListing/>}/>
      <Route path='/product/:id' exact={true} element={<ProductDetails/>}/>
      <Route path={'/login'} exact={true} element={<Login/>} />
      <Route path={'/register'} exact={true} element={<Register/>} />
    </Routes>
     <Footer />
     </MyContext.Provider>
    </BrowserRouter>
        
    <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >
        
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]' onClick={handleCloseProductDetailsModal}>
              <IoCloseSharp className='text-[20px]' />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>

          </div>
        </DialogContent>
        
      </Dialog>
      {/* cart panel */}
      <Drawer 
      open={openCartPanel} 
      onClose={toggleCartPanel(false)} 
      anchor='right'
      className='w-[500px] cartPanel'
      >

        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
          <h4>Shopping Cart (1) </h4>
          <IoCloseSharp className='text-[20px] cursor-pointer' onClick={toggleCartPanel(false)}/>
        </div>



        <CartPanel />
      </Drawer>
    </>
  )
}

export default App

export {MyContext}
