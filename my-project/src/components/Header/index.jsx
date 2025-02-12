import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../Search';


const Header = () => {
    return (
        <header>
            <div className='top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]'>
                <div className='container'>
                    <div className='flex item-centre justify-between'>

                        <div className='col1 w-[50%]'>
                            <p className='text-[12px] font-[500]'>Get up to 15% off new season styles, limited time </p>
                        </div>

                        <div className='col2 flex-items-center justify-end'>
                        <ul className='flex items-center gap-3'>

                            <li className='list-none'>
                                <Link to='/help-center' className='text-[13px] link font-[500] transition'>Help Center{" "}</Link>
                            </li>

                            <li className='list-none'>
                                <Link to='/order-tracking' className='text-[13px] link font-[500] transition'>Order Tracking{" "}</Link>
                            </li>

                        </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className='header py-3'>
                <div className='container flex item-center justify-between'>
                    <div className='col1 w-[25%] '>
                    <Link to={"/"}><img src="/logo.jpg"></img></Link>
                    </div>
                    <div className='col2 w-[45%]'></div>
                        <Search/>
                    <div className='col3 w-[30%]'></div>

                </div>

            </div>

        </header>
    
    )
}


export default Header;