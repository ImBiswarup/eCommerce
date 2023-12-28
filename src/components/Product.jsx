import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {

  const { id, image, category, title, price } = product;

  const { addToCart } = useContext(CartContext);

  return <div>
    <div className="border border-[#e4e4e4] hover:shadow h-[300px] relative overflow-hidden group transition">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[200px] mx-auto flex items-center justify-center">
          <img className='max-h-[160px] group-hover:scale-150 transition duration-500' src={image} alt="" />
        </div>
      </div>
      <div className="absolute top-4 right-8 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button onClick={() => addToCart(product, id)}>
          <div className="text-white bg-blue-400 rounded w-12 h-12 flex items-center justify-center">
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex items-center justify-center text-primary drop-shadow-xl rounded'>
          <BsEyeFill />
        </Link>
      </div>
    </div>
    <div className="">
      <div className="text-sm capitalize text-gray-500 ">
        {category}
      </div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <h2 className='font-semibold'>${Math.round(price)}</h2>
    </div>
  </div>;
};

export default Product;
