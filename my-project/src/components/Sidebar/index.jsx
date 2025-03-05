import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css"
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { Button } from '@mui/material';
import { FaAngleUp } from "react-icons/fa6";


 const Sidebar = () => {
    const [isOpenCategoryFilter, SetIsOpenCategoryFilter] = useState(true);
  return (
    <aside className='sidebar py-5'>
        <div className="box">
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
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Fashion" 
                className='w-full' 
            />

            </div>
            </Collapse>
        </div>



        <div className="box">
            <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Availability
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={() => SetIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                    
                    {
                        isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
                    }
                
                </Button>
            </h3>
            <Collapse isOpened={isOpenCategoryFilter}>
            <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Available" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="In-Stock" 
                className='w-full' 
            />
            <FormControlLabel control={<Checkbox size='small'/>} 
                label="Out-Of-Stock" 
                className='w-full' 
            />

            </div>
            </Collapse>
        </div>
    </aside>
  )
}

export default Sidebar;
