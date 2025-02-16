import React from 'react'
import { Link } from 'react-router-dom';

 const BannerBox = (props) => {
  return (
    <div className="box bannerBox">
        <Link to='/'>
            <img src={props.img} className='w-full'/>
        </Link>
  </div>
  )
}

export default BannerBox;
