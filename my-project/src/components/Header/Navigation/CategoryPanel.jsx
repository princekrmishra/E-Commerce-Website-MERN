import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiMinus } from "react-icons/ti";

const CategoryPanel = (props) => {
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

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          {/* Main Category */}
          <li className="list-none flex items-center relative flex-col">
            <Link 
                to='/' 
                className='w-full'>
                <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Fashion
                </Button>
            </Link>

            {
                submenuIndex === 0 ? 
                <TiMinus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openSubmenu(0)}
                />
            :
                <FaPlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openSubmenu(0)}
                />
            }
            

            

            {/* Submenu (Only shown when submenuIndex === 0) */}
            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3 bg-white shadow-md">
                <li className="list-none relative">
                    <Link 
                        to='/' 
                        className='w-full'>
                        <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                            Apparel
                        </Button>
                    </Link>

                    {
                innersubmenuIndex === 0 ? 
                <TiMinus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(0)}
                />
            :
                <FaPlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(0)}
                />
            }

                  

                  {/* Inner Submenu (Only shown when innersubmenuIndex === 0) */}
                  {innersubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3 bg-white shadow-md">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link 
                to='/' 
                className='w-full'>
                <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Fashion
                </Button>
            </Link>

            {
                submenuIndex === 1 ? 
                <TiMinus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openSubmenu(1)}
                />
            :
                <FaPlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openSubmenu(1)}
                />
            }
            

            

            {/* Submenu (Only shown when submenuIndex === 0) */}
            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3 bg-white shadow-md">
                <li className="list-none relative">
                    <Link 
                        to='/' 
                        className='w-full'>
                        <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                            Apparel
                        </Button>
                    </Link>

                    {
                innersubmenuIndex === 1 ? 
                <TiMinus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(1)}
                />
            :
                <FaPlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(1)}
                />
            }

                  

                  {/* Inner Submenu (Only shown when innersubmenuIndex === 0) */}
                  {innersubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3 bg-white shadow-md">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
