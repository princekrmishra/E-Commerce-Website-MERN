import React, {useState} from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../../Components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
const AddProduct = () => {

    const [productCategory, setProductCategory] = React.useState('');
    const [productSubCategory, setProductSubCategory] = React.useState('');
    const [productFeatured, setProductFeatured] = React.useState('');
    const [productRams, setProductRams] = React.useState('');
    const [productWeight, setProductWeight] = React.useState('');
    const [productSize, setProductSize] = React.useState('');

  const handleChangeProductCategory = (event) => {
    setProductCategory(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductSubCategory = (event) => {
    setProductSubCategory(event.target.value);
  };
   const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className='p-5 bg-gray-50'>
        <form className='form py-3 p-8' >
            <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
            <div className="grid grid-cols-1 mb-3">
                <div className="col">
                    <h3 className='text-[14px] font-[500] mb-1 text-black'>
                        Product Name
                    </h3>
                    <input 
                        type="text" 
                        className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fff]" />
                </div>
            </div>

    <div className="grid grid-cols-1 mb-3">
        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Description
            </h3>
            <textarea 
                type="text" 
                className="w-full h-[100px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fff]" 
            />
        </div>
    </div>

    <div className="grid grid-cols-4 mb-3 gap-4">
        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Category
            </h3>
            <Select
                labelId="demo-simple-select-label"
                id="productCatDropDown"
                size='small'
                className='w-full'
                value={productCategory}
                label="Category"
                onChange={handleChangeProductCategory}
            >
            <MenuItem value={''}>none</MenuItem>
            <MenuItem value={10}>Fashion</MenuItem>
            <MenuItem value={20}>Beauty</MenuItem>
            <MenuItem value={30}>Wellness</MenuItem>
            </Select>
        </div>

        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Sub Category
            </h3>
            <Select
            labelId="demo-simple-select-label"
            id="productCatDropDown"
            size='small'
            className='w-full'
            value={productSubCategory}
            label="Category"
            onChange={handleChangeProductSubCategory}
            >
            <MenuItem value={''}>none</MenuItem>
            <MenuItem value={10}>Men</MenuItem>
            <MenuItem value={20}>Women</MenuItem>
            <MenuItem value={30}>Kids</MenuItem>
            </Select>
        </div>
                    

        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Price
            </h3>
            <input 
                type="number" 
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fff]" 
            />
        </div>

        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Old Price
            </h3>
            <input 
                type="number" 
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fff]" 
            />
        </div>
    </div>

    <div className="grid grid-cols-4 mb-3 gap-4">
        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Is Featured?
            </h3>
            <Select
                labelId="demo-simple-select-label"
                id="productCatDropDown"
                size='small'
                className='w-full'
                value={productFeatured}
                label="Category"
                onChange={handleChangeProductFeatured}
            >
            <MenuItem value={10}>True</MenuItem>
            <MenuItem value={20}>False</MenuItem>
            </Select>
        </div>
                
        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Stock
            </h3>
            <input 
                type="number" 
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fff]" 
            />
        </div>
                
        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Brand
            </h3>
                <input 
                    type="text" 
                    className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fff]" 
                />
        </div>
                
        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Discount</h3>
                <input 
                    type="number" 
                    className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fff]" 
                />
        </div>           
    </div>


    <div className="grid grid-cols-4 mb-3 gap-4">
        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product RAMS
            </h3>
            <Select
                labelId="demo-simple-select-label"
                id="productCatDropDown"
                size='small'
                className='w-full'
                value={productRams}
                label="Category"
                onChange={handleChangeProductRams}
            >
            <MenuItem value={''}>none</MenuItem>
            <MenuItem value={'4GB'}>4GB</MenuItem>
            <MenuItem value={'8GB'}>8GB</MenuItem>
            <MenuItem value={'16GB'}>16 GB</MenuItem>
            </Select>
        </div>

        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Size
            </h3>
            <Select
            labelId="demo-simple-select-label"
            id="productCatDropDown"
            size='small'
            className='w-full'
            value={productSize}
            label="Category"
            onChange={handleChangeProductSize}
            >
            <MenuItem value={''}>none</MenuItem>
            <MenuItem value={'S'}>S</MenuItem>
            <MenuItem value={'M'}>M</MenuItem>
            <MenuItem value={'L'}>L</MenuItem>
            <MenuItem value={'XL'}>XL</MenuItem>

            </Select>
        </div>
                    

        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Product Weight
            </h3>
            <Select
            labelId="demo-simple-select-label"
            id="productCatDropDown"
            size='small'
            className='w-full'
            value={productWeight}
            label="Category"
            onChange={handleChangeProductWeight}
            >
            <MenuItem value={''}>none</MenuItem>
            <MenuItem value={'S'}>S</MenuItem>
            <MenuItem value={'M'}>M</MenuItem>
            <MenuItem value={'L'}>L</MenuItem>
            <MenuItem value={'XL'}>XL</MenuItem>

            </Select>
        </div>

        <div className="col">
            <h3 className='text-[14px] font-[500] mb-1 text-black'>
                Rating
            </h3>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
    </div>

    <div className="col w-full p-5 px-0">
        <h3 className='font-[700] text-[18px]  mb-3'>
            Media and Images
        </h3>

        
        <div className="grid grid-cols-7 gap-4 ">
            <div className="uploadBoxWrapper relative">
                <span className='absolute -top-[5px] -right-[5px] w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 flex items-center justify-center z-50 cursor-pointer'>
                    <IoMdClose className='text-white text-[17px]'/>
                </span>
                <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center  justify-center flex-col relative'>
                    <LazyLoadImage
                        className='w-full h-full object-cover'
                        alt={"image"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={'product-1.jpg'}
                    />   
                </div>
            </div>


            <div className="uploadBoxWrapper relative">
                <span className='absolute -top-[5px] -right-[5px] w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 flex items-center justify-center z-50 cursor-pointer'>
                    <IoMdClose className='text-white text-[17px]'/>
                </span>
                <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center  justify-center flex-col relative'>
                    <LazyLoadImage
                        className='w-full h-full object-cover'
                        alt={"image"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={'product-1.jpg'}
                    />   
                </div>
            </div>

            <div className="uploadBoxWrapper relative">
                <span className='absolute -top-[5px] -right-[5px] w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 flex items-center justify-center z-50 cursor-pointer'>
                    <IoMdClose className='text-white text-[17px]'/>
                </span>
                <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center  justify-center flex-col relative'>
                    <LazyLoadImage
                        className='w-full h-full object-cover'
                        alt={"image"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={'product-1.jpg'}
                    />   
                </div>
            </div>

            <div className="uploadBoxWrapper relative">
                <span className='absolute -top-[5px] -right-[5px] w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 flex items-center justify-center z-50 cursor-pointer'>
                    <IoMdClose className='text-white text-[17px]'/>
                </span>
                <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center  justify-center flex-col relative'>
                    <LazyLoadImage
                        className='w-full h-full object-cover'
                        alt={"image"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={'product-1.jpg'}
                    />   
                </div>
            </div>

            <div className="uploadBoxWrapper relative">
                <span className='absolute -top-[5px] -right-[5px] w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 flex items-center justify-center z-50 cursor-pointer'>
                    <IoMdClose className='text-white text-[17px]'/>
                </span>
                <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center  justify-center flex-col relative'>
                    <LazyLoadImage
                        className='w-full h-full object-cover'
                        alt={"image"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={'product-1.jpg'}
                    />   
                </div>
            </div>
            
            <div className="uploadBoxWrapper relative">
                <span className='absolute -top-[5px] -right-[5px] w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 flex items-center justify-center z-50 cursor-pointer'>
                    <IoMdClose className='text-white text-[17px]'/>
                </span>
                <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center  justify-center flex-col relative'>
                    <LazyLoadImage
                        className='w-full h-full object-cover'
                        alt={"image"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={'product-1.jpg'}
                    />   
                </div>
            </div>

            
            
            <UploadBox multiple={true}/>
        </div>
    </div>

    </div>       
    <br />
    <hr />
    <br />
    <Button type='button' className='btn-blue btn-lg w-full flex gap-2'>
        <FaCloudUploadAlt className='text-[25px] text-white'/>
        Publish And View
    </Button>
    </form>
    </section>
  )
}

export default AddProduct
