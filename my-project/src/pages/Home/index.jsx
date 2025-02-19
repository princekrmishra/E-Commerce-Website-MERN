import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdBannerSlider from "../../components/AdBannerSlider";
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from "../../components/ProductsSlider";



 const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <>       
            <HomeSlider/>
            <HomeCatSlider/>

            <section className="bg-white py-8">
              <div className="container">
                <div className="flex items-center justify-between">
                  <div className="leftSec">
                    <h3 className="text-[20px] font-[600]">Popular Products</h3>
                    <p className="text-[14px] font-[400]">
                      Do not miss the current offers until the end of March
                    </p>
                  </div>


                  <div className="rightSec w-[60%]">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                  >
                    <Tab label="Fashion" />
                    <Tab label="Electronics" />
                    <Tab label="Footwear" />
                    <Tab label="Bags" />
                    <Tab label="Grocieries" />
                    <Tab label="Beauty Products" />
                    <Tab label="Wellness" />
                    <Tab label="Jewellary" />
                    
                  </Tabs>
                  </div>
                </div>


                <ProductsSlider items={6} />
              </div>
            </section>
            
            <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="freeShipping w-auto mx-auto py-4 px-6 border-2 border-red-500 flex flex-col sm:flex-row rs-center justify-between rounded-md shadow-lg bg-red-50">
          
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

      <AdBannerSlider items={4}/>
      </div>


    </section>




    <section className="py-5 pt-0 bg-white">
      <div className="container">
      <h3 className="text-[20px] font-[600]">Latest Products</h3>
        <ProductsSlider items={6}/>
        <AdBannerSlider items={3}/>
      </div>
    </section>


    <section className="py-5 pt-0 bg-white">
      <div className="container">
      <h3 className="text-[20px] font-[600]">Featured Products</h3>
        <ProductsSlider items={6}/>
        <AdBannerSlider items={3}/>
      </div>
    </section>
            <br /> <br /><br /><br /><br /><br />

        </>

    )
}

export default Home;