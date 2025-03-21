import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css"
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { Button } from '@mui/material';
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


 const Sidebar = () => {
    const [isOpenCategoryFilter, SetIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, SetisOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, SetisOpenSizeFilter] = useState(true);
  return (
    <aside className='sidebar py-5'>
        <div className="box mt-3">
            <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop By Categories
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={() => SetIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                    
                    {
                        isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
                    }
                
                </Button>
            </h3>
            <Collapse isOpened={isOpenCategoryFilter}>
            <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />

            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Electronics" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Bags" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Footwear" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Jewellary" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Wellness" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Beauty" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Groceries" 
                className='w-full' />

            </div>
            </Collapse>
        </div>



        <div className="box mt-3">
            <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Availability
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={() => SetisOpenAvailFilter(!isOpenAvailFilter)}>
                    
                    {
                        isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />
                    }
                
                </Button>
            </h3>
            <Collapse isOpened={isOpenAvailFilter}>
            <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Available (17)" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="In-Stock (10)" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Out-Of-Stock (17)" 
                className='w-full' 
            />

            </div>
            </Collapse>
        </div>







        <div className="box mt-3">
            <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Size
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={() => SetisOpenSizeFilter(!isOpenSizeFilter)}>
                    
                    {
                        isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
                    }
                
                </Button>
            </h3>
            <Collapse isOpened={isOpenSizeFilter}>
            <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Small (17)" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Medium (10)" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Large (17)" 
                className='w-full' 
            />

            <FormControlLabel control={<Checkbox size='small'/>} 
                label="X-Large (17)" 
                className='w-full' 
            />

            <FormControlLabel control={<Checkbox size='small'/>} 
                label="XX-Large (17)" 
                className='w-full' 
            />


            </div>
            </Collapse>
        </div>


        <div className="box mt-4">
            <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Filter By Price
            </h3>
            <RangeSlider />
            <div className='flex pt-4 pb-2 priceRange'>
                <span className='text-[13px]'>
                    From: <strong className='text-dark'>Rs: {100}</strong>
                </span>
                <span className='ml-auto text-[13px]'>
                    From: <strong className='text-dark'>Rs: {5000}</strong>
                </span>

            </div>
        </div>

        <div className="box mt-4">
            <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Filter By Rating
            </h3>
            <div className="w-full">
            <Rating name="size-small" defaultValue={5} size="small" readOnly w-full/>
            </div>

            <div className="w-full">
            <Rating name="size-small" defaultValue={4} size="small" readOnly w-full/>
            </div>

            <div className="w-full">
            <Rating name="size-small" defaultValue={3} size="small" readOnly w-full/>
            </div>

            <div className="w-full">
            <Rating name="size-small" defaultValue={2} size="small" readOnly w-full/>
            </div>

            <div className="w-full">
            <Rating name="size-small" defaultValue={1} size="small" readOnly w-full/>
            </div>
            
        </div>

        
    </aside>
  )
}

export default Sidebar;
