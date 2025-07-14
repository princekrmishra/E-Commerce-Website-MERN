import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { IoMdAdd } from "react-icons/io";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progres from '../../Components/ProgressBar';
import { AiOutlineEdit } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import TooltipMui from '@mui/material/Tooltip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchBox from '../../Components/SearchBox';
import { MyContext } from '../../App';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Products = () => {
  const [categoryFilterVal, setCategoryFilterVal] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const context = useContext(MyContext);

  const handleChangeFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };

  const products = Array.from({ length: 42 }, (_, i) => ({
    id: i + 1,
    name: `Flörven ${i + 1}`,
    category: 'Electronics',
    subcategory: 'Women',
    oldPrice: '$58.00',
    price: '$58.00',
    sales: 234 + i,
    progress: (i * 7) % 100,
    image: './product-1.jpg'
  }));

  const totalPages = Math.ceil(products.length / rowsPerPage);
  const paginatedProducts = products.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <main className="pt-[80px] px-5">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">
          Products{" "}
          <span className="font-[400] text-[14px]">Tailwind CSS</span>
        </h2>
        <div className="col w-[25%] ml-auto flex items-center gap-3 justify-end">
          <Button className="!bg-green-600 !text-white btn btn-sm">Export</Button>
          <Button className="btn-blue !text-white btn-sm" onClick={() => context.setIsOpenFullScreenPanel({open:true, model:'Add Product'})}>Add Products</Button>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full justify-between px-5 py-4">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px] mb-2">Category By</h4>
            <Select
              className="w-full"
              size="small"
              value={categoryFilterVal}
              onChange={handleChangeFilter}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>
          <div className="col w-[20%] ml-auto">
            <SearchBox />
          </div>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-6 py-3 w-[10%]">
                  <div className="w-[60px]">
                    <Checkbox {...label} />
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
              {paginatedProducts.map((product) => (
                <tr key={product.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-3 w-[10%]">
                    <div className="w-[60px]">
                      <Checkbox {...label} size="small" />
                    </div>
                  </td>
                  <td className="px-6 py-3 w-[10%]">
                    <div className="flex items-center gap-4 w-[300px]">
                      <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                        <Link to={`/product/${product.id}`}>
                          <img src={product.image} className="w-full group-hover:scale-105 transition-all" />
                        </Link>
                      </div>
                      <div className="info w-[75%]">
                        <h3 className="font-[600] text-[14px] leading-4 hover:text-[#3872fa]">
                          <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <span className="text-[12px]">Chair</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 w-[10%]">{product.category}</td>
                  <td className="px-6 py-3 w-[10%]">{product.subcategory}</td>
                  <td className="px-6 py-3 w-[10%]">
                    <div className="flex gap-1 flex-col">
                      <span className="line-through leading-3 text-gray-500 text-[14px] font-[500]">{product.oldPrice}</span>
                      <span className="text-[#3872fa] text-[14px] font-[600]">{product.price}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 w-[10%]">
                    <p className="text-[14px] w-[100px]">
                      <span className="font-[600]">{product.sales}</span> sale
                    </p>
                    <Progres value={product.progress} type="error" />
                  </td>
                  <td className="px-6 py-3 w-[10%]">
                    <div className="flex items-center gap-1">
                      <TooltipMui title="Edit Product" placement="top">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]">
                          <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                        </Button>
                      </TooltipMui>
                      <TooltipMui title="View Product" placement="top-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]">
                          <FiEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                        </Button>
                      </TooltipMui>
                      <TooltipMui title="Delete Product" placement="top-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]">
                          <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                        </Button>
                      </TooltipMui>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 pb-5 px-4">
          <div>
            <label className="mr-2 text-sm">Rows per page:</label>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setPage(0);
              }}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page <strong>{page + 1}</strong> of <strong>{totalPages}</strong>
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={page >= totalPages - 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
