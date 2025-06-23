import React, { useContext } from 'react'
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from '../../App';



 const ProductItem = () => {

    const context = useContext(MyContext);
  return (
    <div className='productItem rounded-md  overflow-hidden shadow-lg border-1 border-[rgba(0,0,0,0.1)] flex items-center'>
        <div className="group imgWrapper w-[25%] overflow-hidden rounded-md relative">
            <Link to='/'>
            <div className="img h-[220px] overflow-hidden">
                <img src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                className='w-full' />

                <img src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                className='w-full absolute top-0 left-0 opacity-0 transition-all duration-600 group-hover:opacity-100 group-hover:scale-105' />
            </div>
            
            </Link>
        <span className='discount flex  items-center absolute top-[10px] left-[10px] x-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>10%</span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
            <Button 
                className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group' onClick={() => context.setOpenProductDetailsModal(true)}>
                <MdOutlineZoomOutMap className='text-[18px] !text-black group-hover:text-white'/>
            </Button>

            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                <IoMdGitCompare className='text-[18px] !text-black group-hover:text-white'/>
            </Button>

            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                <FaRegHeart className='text-[18px] !text-black group-hover:text-white'/>
            </Button>

        </div>

        </div>
        
        <div className="info p-3 py-3 px-8 w-[75%]">
            <h6 className='text-[15px] !font-[400] '><Link to='/' className='link transition-all'>
                RARE RABBIT
            </Link>    
            </h6>
            <h3 className='text-[18px] title mt-2 font-[500] mb-1 text-[#000]'>
            <Link to='/' className='link transition-all'>
            Men Layerr Regular Fit Spread Collar Cotton Shirt
            </Link>  
            </h3>
            <p className='text-[14px] mb-3'>Elevate your casual style with the RARE RABBIT Men’s Comfort Shirt — crafted in a breezy salmon-orange hue for all-day ease and effortless charm. Perfect for summer days, this lightweight shirt blends comfort with contemporary flair.</p>
            <Rating name="size-small" defaultValue={4} size="small" readOnly/>

            <div className="flex items-center gap-4">
                <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>₹2299</span>
                <span className='Price text-primary text-[15px] font-[600]'>₹999</span>
            </div>

            <div className='mt-3'>
                <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[20px]'/>Add to Cart</Button>
            </div>
        </div>
    </div>
  );
};

export default ProductItem;
