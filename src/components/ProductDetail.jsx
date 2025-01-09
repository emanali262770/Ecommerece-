import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
async function getdetaildata(id) {
  return await axios.get(`http://localhost:5000/products/${id}`);
}
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isError, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getdetaildata(id),
  });

  if (isError) {
    console.log(error.message);
  }
  function addtoCart(product) {
    dispatch(addToCart(product));
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={data?.data?.image}
              className="w-[400px] h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">{data?.data?.name}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              €{data?.data?.originalPrice}
            </p>
            <p className="text-gray-600 mb-4">{data?.data?.description}</p>

            <button
              onClick={() => addtoCart(data?.data)}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add to cart
            </button>

            <div className="flex space-x-4 mt-6">
              <FaFacebook size={30} color="blue" />

              <FaInstagram size={30} color="red" />

              <FaYoutube size={30} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
