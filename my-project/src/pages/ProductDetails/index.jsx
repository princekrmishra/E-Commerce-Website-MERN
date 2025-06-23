import { React, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { QtyBox } from '../../components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
export const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);

  return (
    <>
        <div className='py-5'>
        <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className='link transition'> 
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className='link transition'
        >
          Fashion
        </Link>
      
      </Breadcrumbs>
        </div>

    </div>

    <section className='bg-white py-5'>
        <div className='container flex gap-8'> 
            <div className="productZoomContainer w-[40%]">
                <ProductZoom/>
            </div> 

             <div className="productContent w-[60%]">
                <h1 className='text-[22px] font-[600] mb-2'>Ready Made Sharee</h1>
                <div className="flex items-center gap-3">
                  <span className='text-grey-400 text-[13px] '>Brand : <span className='font-[500] text-black opacity-75'>House of ChickenKari</span>
                  </span>
                  <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                  <span className='text-[13px] cursor-pointer color-'>Review (5)</span>
                </div>
                 <div className="flex items-center gap-4 mt-4">
                <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>₹2299</span>
                <span className='Price text-primary text-[20px] font-[500]'>₹999</span>

                <span className='text-[13px] font-[500]'>Available in Stock: <span className='text-[13px] font-bold text-green-600'>147 items</span></span>
            </div>

            <br />

            <p className='mt-3 pr-10 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo quos commodi, laborum quae officia esse, animi laboriosam beatae veritatis placeat facere veniam deserunt minus ad accusamus. Odio, repellat iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi minima fuga labore molestiae consequuntur pariatur ipsam ex quisquam aliquid itaque possimus, deleniti dolorum corporis ipsa corrupti quod impedit rerum enim perferendis. Animi dolorem ipsum facere id doloremque veniam vitae, maiores incidunt eos corrupti aut, dicta placeat similique temporibus.</p>


            <div className="flex items-center gap-3">
              <span className='text-[16px]'>Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button className= {`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                <Button className= {`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                <Button className= {`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                <Button className= {`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
              </div>
            </div>
            <p className='text-[14px] mt-4 mb-2'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
              <div className="flex items-center gap-4">
                <div className="qtyBoxWrapper w-[80px]">
                  <QtyBox />
                </div>
                     <Button className="btn-org flex gap-2">
                      <MdOutlineShoppingCart className='text-[22px] '/>Add to Cart</Button>
                
              </div>

             </div>
        </div>
    </section>
    </>
  )
}


