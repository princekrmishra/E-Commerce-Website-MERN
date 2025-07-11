
import React, { useState } from 'react';
import DashboardBoxes from '../../Components/DashboardBoxes';
import Button from '@mui/material/Button';
import { FaPlus, FaAngleDown } from 'react-icons/fa';
import Badge from '../../components/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Progres from '../../Components/ProgressBar';
import { AiOutlineEdit } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { BiExport } from "react-icons/bi";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




const Dashboard = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [categoryFilterVal, setCategoryFilterVal] = React.useState('');

  const handleChangeFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrderProducts, setSelectedOrderProducts] = useState([]);

  const handleOpenDialog = (products) => {
    setSelectedOrderProducts(products);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOrderProducts([]);
  };

  const orders = [
    {
      orderId: 'ORD12345',
      paymentId: 'PAY98765',
      name: 'Prince Kumar Mishra',
      phone: '+91-7667214106',
      address: '123 Main Street, New Delhi',
      pincode: '110001',
      amount: '₹3800',
      email: 'kmishraprince@email.com',
      userId: 'USR001',
      status: 'delivered',
      date: '2025-06-28',
      
      products: [
        {
          id: '67346b3c6380d4e40d648b1f',
          title: 'A-Line Kurti With Sharara & Dupatta',
          image:
            'https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg',
          qty: 1,
          price: 1300,
          subtotal: 1300,
        },
        {
          id: '66e68ecae51aa3db5145595b',
          title: 'Modern Smart Watch for Kids',
          image:
            'https://api.spicezgold.com/download/file_1734526125947_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp',
          qty: 1,
          price: 2500,
          subtotal: 2500,
        },
      ],
    },
    {
    orderId: 'ORD12346',
    paymentId: 'PAY98766',
    name: 'Ananya Verma',
    phone: '+91-7001234567',
    address: '456 Garden Road, Mumbai',
    pincode: '400001',
    amount: '₹1500',
    email: 'ananya@email.com',
    userId: 'USR002',
    status: 'delivered',
    date: '2025-07-01',
    products: [
      {
        id: '3',
        title: 'Bluetooth Headphones',
        image: 'https://example.com/headphones.jpg',
        qty: 1,
        price: 1500,
        subtotal: 1500,
      }
    ]
  },
  {
    orderId: 'ORD12347',
    paymentId: 'PAY98767',
    name: 'Rahul Singh',
    phone: '+91-9876543210',
    address: '789 Civil Lines, Lucknow',
    pincode: '226001',
    amount: '₹2400',
    email: 'rahul@email.com',
    userId: 'USR003',
    status: 'shipped',
    date: '2025-07-08',
    products: [
      {
        id: '4',
        title: 'Formal Leather Shoes',
        image: 'https://example.com/shoes.jpg',
        qty: 1,
        price: 2400,
        subtotal: 2400,
      }
    ]
  }
  ];

  

  return (
    <>
      <div className="w-full py-2 bg-white px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning,<br /> Prince
          </h1>
          <p>Here's what's happening on your store today. See the statistics at once.</p>
          <br />
          <Button variant="contained" className="!capitalize"><FaPlus />&nbsp;Add Product</Button>
        </div>
        <img src="/shop-illustration.webp" className="w-[250px]" alt="illustration" />
      </div>

      <DashboardBoxes />

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>
        

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-6 py-3">&nbsp;</th>
                <th className="px-6 py-3">Order Id</th>
                <th className="px-6 py-3">Payment Id</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Address</th>
                <th className="px-6 py-3">Pincode</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">User Id</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="px-6 py-4">
                    <Button
                      onClick={() => handleOpenDialog(order.products)}
                      className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]"
                    >
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </td>
                  <td className="px-6 py-4 text-primary">{order.orderId}</td>
                  <td className="px-6 py-4 text-primary">{order.paymentId}</td>
                  <td className="px-6 py-4">{order.name}</td>
                  <td className="px-6 py-4">{order.phone}</td>
                  <td className="px-6 py-4 w-[250px] truncate">{order.address}</td>
                  <td className="px-6 py-4">{order.pincode}</td>
                  <td className="px-6 py-4">{order.amount}</td>
                  <td className="px-6 py-4">{order.email}</td>
                  <td className="px-6 py-4 text-primary-600">{order.userId}</td>
                  <td className="px-6 py-4">
                    <Badge status={order.status} />
                  </td>
                  <td className="px-6 py-4">{order.date}</td>

                  
                </tr>

                
              ))}
            </tbody>
          </table>
        </div>

        {/* Dialog Box for Products */}
        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
          <DialogTitle className="flex justify-between items-center">
            Products
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <div className="p-4">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Product Id</th>
                  <th className="px-4 py-2">Product Title</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrderProducts.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[50px] h-[50px] object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{item.qty}</td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td className="px-4 py-2">{item.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Dialog>

        
      </div>


      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        

        <div className="flex items-center justify-between px-5 py-5">
  <h2 className="text-[18px] font-[600]">
    Products <span className="text-gray-400 font-normal text-[14px]">Tailwind CSS</span>
  </h2>
</div>

<div className="flex flex-wrap items-center justify-between px-5 py-3 gap-y-3">
  {/* Left Filter */}
  <div className="w-[250px]">
    <h4 className="font-[600] text-[13px] mb-2">Category By</h4>
    <Select
      className="w-full"
      size="small"
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={categoryFilterVal}
      onChange={handleChangeFilter}
    >
      <MenuItem value=""><em>None</em></MenuItem>
      <MenuItem value={10}>Men</MenuItem>
      <MenuItem value={20}>Women</MenuItem>
      <MenuItem value={30}>Kids</MenuItem>
    </Select>
  </div>

  {/* Right Buttons */}
  <div className="flex items-center gap-3">
    <Button className="!bg-green-600 !text-white btn-sm">Export</Button>
    <Button className="btn-blue !text-white btn-sm">Add Products</Button>
  </div>
</div>

        


        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-6 py-3 w-[10%]">
                    <div className="w-[60px]">
                        <Checkbox {...label}  />
                    </div>
                </th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Sub Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Sales</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-1.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td>
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-2.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-3.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-4.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>


                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-5.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>


                


                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-6.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>

                

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-7.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-8.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-9.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-10.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>


                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-11.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>


                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-3 w-[10%]">
                        <div className="w-[60px]">
                            <Checkbox {...label} size='small'  />
                        </div>
                    </td>
                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65] overflow-hidden rounded-md group">
                                <Link to='/product/45745'>
                                    <img src="./product-12.jpg" className="w-full group-hover:scale-105 transition-all"></img>
                                </Link>
                                
                        </div>
                        <div className="info w-[75%]">
                            <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>
                                <Link to='/product/45745'>
                                    Flörven
                                </Link>
                            </h3>
                            <span className='text-[12px]'>
                                Chair
                            </span>
                        </div>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Electronics
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        Women
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex gap-1 flex-col">
                            <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                                $58.00
                            </span>
                            <span className='price  text-[#3872fa] text-[14px] font-[600]'>
                                $58.00
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span>sale</p> 
                        <Progres value={10} type="error"/>
                    </td>

                    <td className="px-6 py-3 w-[10%]">
                        <div className="flex items-center gap-1">
                             <Tooltip title="Edit Product" placement="top">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="View Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <FiEye className='text-[rgba(0,0,0,0.7)] text-[18px] '/>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Delete Product" placement="top-start">
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                                <MdDeleteOutline className='text-[rgba(0,0,0,0.7)] text-[20px] '/>
                            </Button>
                            </Tooltip>
                        </div>
                    </td> 
                </tr>

                
                
                
            </tbody>

          </table>
        </div>
        </div>
        <div className="flex items-center justify-end pt-5 pb-5 px-4">
                <Pagination count={10} color='[#3372fa] '/>
        </div>
        
        
   


      
    </>
  );
};

export default Dashboard;
