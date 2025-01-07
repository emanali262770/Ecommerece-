import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
async function fetchData() {
  return await axios.get("http://localhost:5000/products");
}
const DailyDeal = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  if (isError) {
    console.log(error.message);
  }

  return (
    <div className="w-full bg-[#012b27] text-white py-10 mt-[40px]">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Daily Deals</h1>
          <a
            href="#"
            className="text-sm text-white underline hover:text-gray-300"
          >
            See All
          </a>
        </div>
        <div className="grid grid-cols-1 animate-fade-right sm:grid-cols-2 md:grid-cols-4 gap-6">
          {isLoading ? (
            <h1 className="text-xl text-white">Data is Fetching...</h1>
          ) : (
            data?.data?.map((product, index) => (
              <div
                key={index}
                className="bg-white text-black p-4 rounded-lg shadow-lg relative"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <span className="bg-[#325e58] text-xs font-bold px-3 py-2 rounded-full text-white absolute top-2 right-3">
                  Sale!
                </span>
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-sm mt-2">
                    <del className="text-gray-500">
                      ${product.originalPrice}
                    </del>{" "}
                    <ins className="text-[#012b27] font-bold">
                      ${product.salePrice}
                    </ins>
                  </p>
                  <button className="bg-[#012b27] text-white mt-4 px-4 py-2 rounded-full hover:bg-[#01433d] transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyDeal;
