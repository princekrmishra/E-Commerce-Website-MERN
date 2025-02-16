import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";

 const Home = () => {
    return (
        <>       
            <HomeSlider/>
            <HomeCatSlider/>
            
            <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="freeShipping w-full py-4 px-6 border-2 border-red-500 flex flex-col sm:flex-row items-center justify-between rounded-md shadow-lg bg-red-50">
          
          {/* Left Section: Icon & Heading */}
          <div className="flex items-center gap-4">
            <FaShippingFast className="text-red-600 text-5xl" />
            <span className="text-xl sm:text-2xl font-semibold uppercase text-red-700">
              Free Shipping
            </span>
          </div>

          {/* Middle Section: Message */}
          <p className="text-center sm:text-left text-gray-700 text-lg">
            Free Delivery Now on Orders Above <span className="font-bold">₹199</span>
          </p>

          {/* Right Section: Price */}
          <p className="font-bold text-2xl text-red-600">Only ₹199</p>
        </div>
      </div>
    </section>
            <br /> <br /><br /><br /><br /><br />
        </>

    )
}

export default Home;