import React from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
  return (
    <div className='w-full h-auto  bg-[#f1f1f1] relative overflow-hidden'>
        <CiSearch className='absolute top-[13px] left-[10px] z-50 pointer-events-none opacity-50'/>
        <input type="text" className='w-full h-[40px] bg-[#f1f1f1] focus:outline-none border pl-8 border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.5)] rounded-md font-[13px]  '
        placeholder='Search Here'/>
    </div>
  )
}

export default SearchBox
