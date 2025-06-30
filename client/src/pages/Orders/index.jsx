import React, { useState } from 'react';
import AccountSidebar from '../../components/AccountSIdebar';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Badge from '../../components/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";


const Orders = () => {
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
          image: 'https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg',
          qty: 1,
          price: 1300,
          subtotal: 1300,
        },
        {
          id: '66e68ecae51aa3db5145595b',
          title: 'Modern Smart Watch for Kids',
          image: 'https://api.spicezgold.com/download/file_1734526125947_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp',
          qty: 1,
          price: 2500,
          subtotal: 2500,
        },
      ]
    }
  ];

  return (
    <section className='py-10 w-full'>
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className='mt-0'>
                There are <span className='font-bold text-primary'>{orders.length}</span> Orders
              </p>

              <div className="relative overflow-x-auto mt-5">
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
                            className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]'
                          >
                            <FaAngleDown className='text-[16px] !text-[rgba(0,0,0,0.7)]' />
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
                        <td className="px-6 py-4 text-primary">{order.userId}</td>
                        <td className="px-6 py-4"><Badge status={order.status} /></td>
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
                            <img src={item.image} alt={item.title} className="w-[50px] h-[50px] object-cover rounded" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
