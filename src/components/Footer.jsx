import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#003a34] text-white mt-10 py-10">
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Action</h2>
          <ul className="space-y-2 text-sm">
            <Link to={"/"}>
              {" "}
              <li>Home</li>
            </Link>
            <Link to={"/shop"}>
              {" "}
              <li>Shop</li>
            </Link>
            <Link to={"/about"}>
              {" "}
              <li>About Us</li>
            </Link>
            <Link to={"/contact"}>
              {" "}
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Link to={"/"}>
              {" "}
              <img
                src={logo} // Replace with the logo URL
                alt="Logo"
                className=""
              />
            </Link>
          </div>
          <p className="text-sm">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet.
          </p>
          <hr className="my-4 border-gray-500" />
          <div className="flex justify-center md:justify-start space-x-4">
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm">Call Us</p>
          <p className="text-sm font-semibold">+1 234 567 89</p>
          <p className="text-sm mt-4">Email</p>
          <p className="text-sm font-semibold">example@domain.com</p>
          <p className="text-sm mt-4">Address</p>
          <p className="text-sm font-semibold">
            633, Northwest, Apartment 11, USA
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-sm">
        Copyright © All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
