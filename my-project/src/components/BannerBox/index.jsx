import React from 'react'
import { Link } from 'react-router-dom';

 const BannerBox = (props) => {
  return (
    <div className="bannerBox flex justify-center items-center overflow-hidden rounded-xl shadow-lg py-8">
        <Link to='/'>
            <img src={props.img} className='w-full h-[250px] object-cover rounded-xl'/>
        </Link>
  </div>
  )
}

export default BannerBox;
