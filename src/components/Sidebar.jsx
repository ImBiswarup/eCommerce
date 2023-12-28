import React, { useContext } from 'react';
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from '../contexts/CartContext';

import { Link } from 'react-router-dom';



const Sidebar = () => {

  const { isOpen, HandleClose, } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed rounded top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className="flex items-center justify-between mt-2.5">
      <div className="uppercase text-sm font-semibold ">
        Shopping Cart {itemAmount}
      </div>
      <div onClick={HandleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center py-6 border-b">
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className="flex flex-col gap-y-2 h-[465px] lg:h-[560px] overflow-y-auto overflow-x-hidden border-b shadow no-scrollbar">
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} />
      })}
    </div>
    <div className={` flex flex-col gap-y-3 py-4 rounded ${itemAmount >= 1 ? "" : "hidden"} `}>
      <div className={` flex justify-between w-full items-center rounded `}>
        <div className="ml-4 uppercase font-semibold">
          <span className='mr-2 '>Subtotal</span> ${parseFloat(total).toFixed(2)}
        </div>
        <div onClick={() => clearCart()} className={`cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 rounded flex justify-center items-center text-xl`}>
          <FiTrash2 className='' />
        </div>
      </div>
      <Link to={'/'} className={`bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium rounded hover:bg-gray-400`}>
        Checkout
      </Link>
    </div>
  </div>;
};

export default Sidebar;
