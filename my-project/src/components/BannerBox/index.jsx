import React from 'react'
import { Link } from 'react-router-dom';

 const BannerBox = (props) => {
  return (
    <div className="bannerBox flex justify-center items-center overflow-hidden rounded-xl shadow-lg py-8 group">
        <Link to='/'>
            <img src={props.img} className='w-full h-[250px] object-cover transition-all rounded-xl group-hover:scale-105'/>
        </Link>
  </div>
  )
}

export default BannerBox;
