import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../Images/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50"> {/* Fixed position */}
      <div className="flex h-[10vh] items-center justify-between max-w-[1350px] mx-auto px-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="cursor-pointer w-[150px]" />
        </div>

        <div className="gap-8 lg:flex hidden font-semibold text-lg">
          <p className="cursor-pointer hover:text-gray-400 transition">Home</p>
          <p className="cursor-pointer hover:text-gray-400 transition">Shop</p>
          <p className="cursor-pointer hover:text-gray-400 transition">About</p>
          <p className="cursor-pointer hover:text-gray-400 transition">Contact</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="lg:flex hidden items-center border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <input
              type="text"
              placeholder="Search Product"
              className="outline-none text-sm w-48 bg-transparent"
            />
            <FaMagnifyingGlass className="text-gray-500 text-lg cursor-pointer" />
          </div>

          <MdOutlineShoppingCart className="text-black text-2xl hidden lg:block cursor-pointer" />
          {isopen ? (
            <ImCancelCircle
              onClick={() => setisopen((p) => !p)}
              className="text-black block lg:hidden text-2xl cursor-pointer"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setisopen((p) => !p)}
              className="text-black text-2xl block lg:hidden cursor-pointer"
            />
          )}
        </div>
      </div>

      {isopen && (
        <div className="absolute top-20 left-0 block lg:hidden bg-white w-[400px] shadow-md p-4 rounded-md">
          <div className="gap-8 font-semibold text-lg">
            <p className="cursor-pointer p-3 hover:text-gray-400 transition">Home</p>
            <p className="cursor-pointer p-3 hover:text-gray-400 transition">Shop</p>
            <p className="cursor-pointer p-3 hover:text-gray-400 transition">About</p>
            <p className="cursor-pointer p-3 hover:text-gray-400 transition">Contact</p>
            <MdOutlineShoppingCart
              className="text-black ml-3 text-2xl cursor-pointer"
              size={24}
            />
          </div>
        </div>
      )}
      {/* Add a spacer to account for the fixed navbar */}
    
    </div>
  );
};

export default Navbar;
