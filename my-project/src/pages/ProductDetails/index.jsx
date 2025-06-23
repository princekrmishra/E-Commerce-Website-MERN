import { React, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { QtyBox } from '../../components/QtyBox';

import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import { ProductDetailsComponent } from '../../components/ProductDetails';

export const ProductDetails = () => {
  
  const [activeTab, setActiveTab] = useState(0);



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
        <div className='container flex gap-8 items-center'> 
            <div className="productZoomContainer w-[40%]">
                <ProductZoom/>
            </div> 

             
             <div className="productContent w-[60%] pr-10 pl-10">
              <ProductDetailsComponent />
             </div>
              
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
              <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 &&"text-primary"}`} onClick={() => {setActiveTab(0)}}>Description</span>
              <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 &&"text-primary"}`} onClick={() => {setActiveTab(1)}}>Product Information</span>
              <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 &&"text-primary"}`} onClick={() => {setActiveTab(2)}}>Reviews (5)</span>
          </div>

          {
            activeTab === 0 && (
              <div className="shodow-md w-full py-5 px-8">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


              <h4>Product Specification</h4>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione rem necessitatibus deleniti magni dolores excepturi ipsam. Eveniet accusantium quasi fuga illo nihil sapiente laboriosam quae ea. Consequatur cum quas, ex, deleniti pariatur ducimus ipsam autem accusantium officiis molestias laudantium eaque porro expedita distinctio, ullam voluptates eveniet facere magnam libero blanditiis.</p>

              <h4>Free Shiping and Return</h4>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure officia nemo tempora repellat voluptate et ab quos quo obcaecati incidunt!</p>

              <h4>Money Back Gurantee</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti laborum culpa iure, ullam hic quas exercitationem maiores sapiente sit assumenda nisi eveniet magnam enim maxime esse quisquam molestias distinctio itaque sed labore illum aut nam doloribus! Dicta eum ut iusto corrupti. Eius esse quasi asperiores quod sed nulla error.</p>

              <h4>Online Support</h4>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia est repudiandae possimus culpa officiis. Voluptatum nesciunt, iste ipsum perferendis nam rerum dolores temporibus quia neque fugit, ducimus suscipit dolorem iusto quae cupiditate earum exercitationem ratione odio. Iure nisi ab ratione?</p>

          </div>
            )
             
          }

          {
            activeTab === 1 && (
               <div className="shodow-md w-full py-5 px-8">
              <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
            )
            
          }

          {
            activeTab === 2 && (
             <div className="shodow-md w-[80%] py-5 px-8">
            <div className="w-full productReviewContainer">
              
              <h2 className='text-[18px]'>Customer Questions and Answers</h2>

              <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                    <div className="review pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                    <img src="/user-image.png" className="w-full" />
                  </div>
                  <div className="w-[80%]">
                      <h4 className='text-[16px]'>Prince Kumar Mishra</h4>
                      <h5 className='text-[13px] mb-0'>23-06-2025</h5>
                      <p className='mb-0 mt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, pariatur vero autem nihil dolorem incidunt nostrum hic explicabo mollitia dicta!</p>
                    </div>
                    
                </div>
                <Rating name="size-small" defaultValue={4} readOnly/>
              </div>
              <div className="review pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                    <img src="/user-image.png" className="w-full" />
                  </div>
                  <div className="w-[80%]">
                      <h4 className='text-[16px]'>Prince Kumar Mishra</h4>
                      <h5 className='text-[13px] mb-0'>23-06-2025</h5>
                      <p className='mb-0 mt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, pariatur vero autem nihil dolorem incidunt nostrum hic explicabo mollitia dicta!</p>
                    </div>
                    
                </div>
                <Rating name="size-small" defaultValue={4} readOnly/>
              </div>

              <div className="review pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                    <img src="/user-image.png" className="w-full" />
                  </div>
                  <div className="w-[80%]">
                      <h4 className='text-[16px]'>Prince Kumar Mishra</h4>
                      <h5 className='text-[13px] mb-0'>23-06-2025</h5>
                      <p className='mb-0 mt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, pariatur vero autem nihil dolorem incidunt nostrum hic explicabo mollitia dicta!</p>
                    </div>
                    
                </div>
                <Rating name="size-small" defaultValue={4} readOnly/>
              </div>

               <div className="review pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                <div className="info w-[60%] flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                    <img src="/user-image.png" className="w-full" />
                  </div>
                  <div className="w-[80%]">
                      <h4 className='text-[16px]'>Prince Kumar Mishra</h4>
                      <h5 className='text-[13px] mb-0'>23-06-2025</h5>
                      <p className='mb-0 mt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, pariatur vero autem nihil dolorem incidunt nostrum hic explicabo mollitia dicta!</p>
                    </div>
                    
                </div>
                <Rating name="size-small" defaultValue={4} readOnly/>
              </div>

             

              </div>
              
              <br />

             <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                <h2 className='text-[18px]'>Add a Review</h2>

                <form className="w-full mt-5 ">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Write a review..."
                        className='w-full'
                        multiline
                        rows={5}
                      />
                      <br /><br />
                      <Rating name="size-small" defaultValue={4} /> 

                      <div className="flex items-center mt-5">
                        <Button className='btn-org'>Submit Review</Button>
                      </div>
                      
                </form>
              </div>
             
            </div>
            </div>
          )}
        </div>


        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] mb-3">Related Products</h2>
        <ProductsSlider items={6}/>
        </div>
    </section>
    </>
  )
}


