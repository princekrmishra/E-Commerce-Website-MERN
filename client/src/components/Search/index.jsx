import React from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';
import { ImSearch } from "react-icons/im";

const Search = () => {
    return (
        <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[15px] relative p-2'>
            <input 
                type='text' 
                placeholder='Search for product...' 
                className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]'
            />
            <button className='!absolute top-[7px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black flex items-center justify-center'> 
                <ImSearch className='text-[#4e4e4e]' />
            </button>
        </div>
    );
}

export default Search;
