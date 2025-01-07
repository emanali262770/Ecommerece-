import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="w-[90%] max-w-3xl mx-auto mt-[100px] text-center">
        <h1 className="text-[32px] sm:text-[48px] font-bold">
          Subscribe to Our Newsletter <br />
          and Grab{" "}
          <span className="text-[#003a34] font-extrabold">45% Off!</span>
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-[70%] py-3 px-4 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a34] transition"
          />
          <button className="w-full sm:w-auto bg-[#003a34] text-white py-3 px-10 rounded-full font-semibold hover:bg-[#0a413b] transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
