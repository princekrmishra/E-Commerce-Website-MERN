import React, { useContext, useState } from 'react';
import {
  Button, Checkbox, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, TablePagination, Tooltip
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import SearchBox from '../../Components/SearchBox';
import { MyContext } from '../../App';

const CategoryList = () => {
  const context = useContext(MyContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const products = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Banner ${i + 1}`,
    image: 'https://api.spicezgold.com/download/file_1734525239704_foot.png'
  }));

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const paginatedProducts = products.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <main className="pt-[80px] px-5">
      {/* Header with background */}
      <div className="flex items-center justify-between px-4 py-3 mt-3 bg-[#f1f1f1] rounded-md">
        <h2 className="text-[18px] font-[600]">
          Category List
          
        </h2>
        <div className="w-[25%] ml-auto flex items-center gap-3 justify-end">
          <Button className="!bg-green-600 !text-white" size="small">Export</Button>
          <Button
            className="!bg-blue-600 !text-white"
            size="small"
            onClick={() => context.setIsOpenFullScreenPanel({ open: true, model: 'Add Home' })}
          >
            <IoMdAdd className="mr-1" /> Add New Category
          </Button>
        </div>
      </div>

      {/* Search & Table */}
      <div className="card my-4 shadow-md rounded-lg bg-white p-5">
       

        {/* Table */}
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell className='!bg-[#f1f1f1]]'  padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell className='!bg-[#f1f1f1]'>Image</TableCell>
                <TableCell className='!bg-[#f1f1f1]' align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedProducts.map((product) => (
                <TableRow key={product.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell width={100}>
                    <div className="w-[240px] h-[120px] rounded overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="flex justify-center gap-3">
                      <Tooltip title="View" arrow><Link to={`/product/${product.id}`}><FiEye className="text-[18px] text-blue-600" /></Link></Tooltip>
                      <Tooltip title="Edit" arrow><AiOutlineEdit className="text-[18px] text-green-600 cursor-pointer" /></Tooltip>
                      <Tooltip title="Delete" arrow><MdDeleteOutline className="text-[18px] text-red-600 cursor-pointer" /></Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={products.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50]}
        />
      </div>
    </main>
  );
};

export default CategoryList;
