import React, {useState} from 'react'
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiMinus } from "react-icons/ti";

const CategoryColllapse = () => {
    const [submenuIndex, setsubmenuIndex] = useState(null);
      const [innersubmenuIndex, setinnersubmenuIndex] = useState(null);
      const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen);
      };
    
      const openSubmenu = (index) => {
        if(submenuIndex===index){
          setsubmenuIndex(null);
        }
        else{
          setsubmenuIndex(index);
        }
      };
    
      const openInnerSubmenu = (index) => {
        if(innersubmenuIndex===index){
          setinnersubmenuIndex(null);
        }
        else{
          setinnersubmenuIndex(index);
        } 
      };
    
      const categories = [
        {
          name: "Fashion",
          subcategories: [
            {
              name: "Clothing",
              innerSubcategories: ["Men", "Women", "Kids"]
            },
            {
              name: "Footwear",
              innerSubcategories: ["Casual Shoes", "Sports Shoes", "Sandals"]
            }
          ]
        },
        {
          name: "Electronics",
          subcategories: [
            {
              name: "Mobiles",
              innerSubcategories: ["Smartphones", "Feature Phones"]
            },
            {
              name: "Laptops",
              innerSubcategories: ["Gaming Laptops", "Business Laptops"]
            }
          ]
        },
        {
          name: "Home & Kitchen",
          subcategories: [
            {
              name: "Furniture",
              innerSubcategories: ["Sofas", "Beds", "Tables"]
            },
            {
              name: "Appliances",
              innerSubcategories: ["Refrigerators", "Microwaves", "Washing Machines"]
            }
          ]
        },
        {
          name: "Accessories",
          subcategories: [
            {
              name: "Watches",
              innerSubcategories: ["Smartwatches",
                "Luxury Watches",
                "Casual Watches"
                ]
            },
            {
              name: "Bags & Wallets",
              innerSubcategories: ["Handbags", "Wallents", "Backpacks "]
            },
            {
              name: "Sunglasses",
              innerSubcategories: ["Aviators", "Wayfares", "Round Frames"]
            }
          ]
        },
        {
          name: "Books & Stationery",
          subcategories: [
            {
              name: "Fiction",
              innerSubcategories: ["Mystery", "Sci-fi", "Romance"]
            },
            {
              name: "Educational",
              innerSubcategories: ["School Books", "College Books", "Competitive Exams"]
            }
          ]
        },
        {
          name: "Sports & Fitness",
          subcategories: [
            {
              name: "Gym Equipment",
              innerSubcategories: ["Dumbbells", "Resistance Bands", "Yoga Mats"]
            },
            {
              name: "Outdoor Sports",
              innerSubcategories: ["Football", "Basketball", "Cricket"]
            }
          ]
        },
        {
          name: "Beauty & Personal Care",
          subcategories: [
            {
              name: "Skincare",
              innerSubcategories: ["Face Wash", "Moisturizers", "Sunscreens"]
            },
            {
              name: "Hair Care",
              innerSubcategories: ["Shampoos", "Conditioners", "Hair Dryers"]
            }
          ]
        },
        {
          name: "Grocery",
          subcategories: [
            {
              name: "Dairy Products",
              innerSubcategories: ["Milk", "Cheese", "Yogurt"]
            },
            {
              name: "Snacks",
              innerSubcategories: ["Chips", "Chocolates", "Cookies"]
            }
          ]
        },
        
      ];
    
  return (
    <>
    <div className="scroll">
        <ul className="w-full">
          {categories.map((category, index) => (
            <li key={index} className="list-none flex items-center relative flex-col">
              
              <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]" onClick={() => 
                openSubmenu(index)}>
                {category.name}
              </Button>

              {submenuIndex === index ? (
                <TiMinus 
                className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(index)} />
              ) : (
                <FaPlus 
                className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(index)} />
              )}

              {submenuIndex === index && (
                <ul className="submenu w-full pl-3 bg-white shadow-md">
                  {category.subcategories.map((subcat, subIndex) => (
                    <li key={subIndex} 
                    className="list-none relative">
                      <Button 
                      className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]" 
                      onClick={() => openInnerSubmenu(subIndex)}>
                        {subcat.name}
                      </Button>
                      
                      {innersubmenuIndex === subIndex ? (
                        <TiMinus className="absolute top-[10px] right-[15px] cursor-pointer" 
                        onClick={() => openInnerSubmenu(subIndex)} />
                      ) : (
                        <FaPlus className="absolute top-[10px] right-[15px] cursor-pointer" 
                        onClick={() => openInnerSubmenu(subIndex)} />
                      )}

                      {innersubmenuIndex === subIndex && (
                        <ul className="inner_submenu w-full pl-3 bg-white shadow-md">
                          {subcat.innerSubcategories.map((innerItem, innerIndex) => (
                            <li key={innerIndex} className="list-none relative mb-1">
                              <Link to="/" className="link w-full text-left !justify-start !px-3 transition text-[14px]">
                                {innerItem}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CategoryColllapse;
