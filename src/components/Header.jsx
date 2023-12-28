import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { Login_Signup_Context } from "../contexts/Login_Signup_Context";
import { useTypewriter } from "react-simple-typewriter"
import { FaUser } from "react-icons/fa";
import { ProductContext } from "../contexts/ProductContext";



const Header = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { loginWithRedirect, user, isAuthenticated } = useContext(Login_Signup_Context);
  const { productQuery, handleChange } = useContext(ProductContext);


  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 170 ? setIsActive(true) : setIsActive(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
      });
    };
  }, []);

  const [text] = useTypewriter({
    words: ["Men's", "Women's", "Electronics", "Jewellery"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });


  return (
    <header className={`${isActive ? "bg-orange-100 py-4 shadow-md" : "bg-none py-4"} fixed w-full z-10 transition-all`}>
      <div className="flex items-center w-full justify-around">
        <div className="logo w-[10%] flex items-center justify-center">
          <Link to={"/"}>
            <div className="flex items-center justify-around text-2xl font-semibold ">
              <img className="w-10" src={Logo} alt="" />
              <h1 className={`ml-1 hidden md:flex`} >eKart</h1>
            </div>
          </Link>
        </div>
        <div className="input w-[60%] flex items-center">
          <div className={`${isActive ? "" : "hidden"} w-full`}>
            {showSearch && (
              <div className="flex items-center w-full">
                <input
                  value={productQuery}
                  onChange={handleChange}
                  type="text"
                  placeholder={`Search for ${text}`}
                  className={`${productQuery ? "bg-orange-100" : "bg-transparent"} px-2 py-1 w-full border-gray-500 rounded focus:outline-none`}
                />
              </div>
            )}
          </div>
        </div>
        <div className={`login ${isAuthenticated ? "w-[20%]" : "w-[15%]"} flex items-center justify-center`}>
          <div className={`${isActive ? "" : "hidden"}`}>
            {
              isAuthenticated ? (
                <>
                  <div className="flex items-center justify-center">
                    <Link to={"/profile"}>
                      <img className="rounded-full w-10 h-10 mr-3 cursor-pointer" src={user.picture} alt="profile image" />
                    </Link>
                    <h2 className="hidden md:flex">{user.name}</h2>
                  </div>
                </>

              ) : (
                <>
                  <button className="bg-transparent hover:outline text-xl font-bold px-3 py-1 rounded-lg mr-2 hidden md:flex items-center justify-center" onClick={() => loginWithRedirect()}>Log In</button>
                  <button className="bg-transparent hover:outline text-xl font-bold px-3 py-1 rounded-lg mr-2 flex items-center justify-center md:hidden" onClick={() => loginWithRedirect()}>+<FaUser /></button>
                </>
              )
            }
          </div>
        </div>
        <div className={`cart_icon ${isAuthenticated ? "w-[10%]" : "w-[15%]"} ${isActive ? "" : "hidden"} flex items-center justify-center`}>
          <div className={`cursor-pointer flex relative ${isActive ? "" : "hidden"}`}>
            <BsBag onClick={() => setIsOpen(!isOpen)} className="text-2xl cursor-pointer" />
            <div className={`absolute -right-1 -top-2 bg-orange-500 text-[12px] w-4 h-4 flex items-center justify-center rounded-full`}>{itemAmount}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
