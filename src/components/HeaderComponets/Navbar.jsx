import React, { useState, useEffect, useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../Images/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../../context/Auth";

const Navbar = () => {
  const {setIsLogin,isLogin}=useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  
  const cart = useSelector((state) => state.cart);

 
 

  const handleLogin = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <div>
      <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="flex h-[10vh] items-center justify-between max-w-[1350px] mx-auto px-4">
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="cursor-pointer w-[150px]" />
            </Link>
          </div>

          <div className="gap-8 lg:flex hidden font-semibold text-lg">
            <Link to={"/"}>
              <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                Home
              </p>
            </Link>
            <Link to={"/shop"}>
              <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                Shop
              </p>
            </Link>
            <Link to={"/about"}>
              <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                About
              </p>
            </Link>
            <Link to={"/contact"}>
              <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                Contact
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="Login">
              {isLogin ? (
                <button
                  onClick={handleLogin}
                  className="text-lg font-semibold hover:text-green-700 duration-200"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-lg font-semibold hover:text-green-700 duration-200"
                >
                  Login
                </Link>
              )}
            </div>

            <Link to={"/cart"} className="flex gap-0 items-center">
              <MdOutlineShoppingCart className="text-black ml-3 text-2xl cursor-pointer" size={24} />
              <p className="bg-green-800 text-white flex justify-center items-center h-[20px] w-[20px] rounded-3xl">
                {cart.length}
              </p>
            </Link>

            {isOpen ? (
              <ImCancelCircle
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-black block lg:hidden text-2xl cursor-pointer"
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-black text-2xl block lg:hidden cursor-pointer"
              />
            )}
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 block lg:hidden bg-white w-[400px] shadow-md p-4 rounded-md">
            <div className="gap-8 font-semibold text-lg">
              <Link to={"/"}>
                <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                  Home
                </p>
              </Link>
              <Link to={"/shop"}>
                <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                  Shop
                </p>
              </Link>
              <Link to={"/about"}>
                <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                  About
                </p>
              </Link>
              <Link to={"/contact"}>
                <p className="cursor-pointer p-3 hover:text-gray-400 transition">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="h-[10vh] bg-black"></div>
      <Outlet />
    </div>
  );
};

export default Navbar;
