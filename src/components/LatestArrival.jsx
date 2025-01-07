import React from "react";
import { SiOrganicmaps } from "react-icons/si";
import { GiStumpRegrowth } from "react-icons/gi";
import p1 from "../Images/p1.jpg";
import p2 from "../Images/p2.jpg";
import { Link } from "react-router-dom";

const LatestArrival = () => {
  return (
    <div>
      <div className="w-full">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row animate-fade gap-10 py-5 mt-[100px] mx-auto">
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <h1 className="text-[32px] lg:text-[48px] py-2 font-bold">
              Our Latest Arrival
            </h1>
            <hr />
            <h2 className="text-[20px] lg:text-[25px] font-semibold py-2">
              Calophyllum Inophyllum
            </h2>
            <p className="text-[16px] lg:text-[18px] py-2">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="flex justify-center lg:justify-start items-center font-semibold py-2 gap-2">
              <SiOrganicmaps size={24} color="#003a34" /> 100% Organic
            </span>
            <span className="flex justify-center lg:justify-start items-center font-semibold py-2 gap-2">
              <GiStumpRegrowth size={24} color="#003a34" /> Good Growth
            </span>
            <Link to={"/shop"}>
         
            <button className="bg-[#003a34] text-white px-4 md:px-5 py-2 md:py-3 rounded-3xl font-bold mt-3">
              Shop Now
            </button>
          </Link>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <img
              src={p1}
              className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] lg:w-[277px] lg:h-[382px] rounded-tl-[50%] rounded-tr-[50%]"
              alt=""
            />
            <img
              src={p2}
              className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] lg:w-[277px] lg:h-[382px] rounded-bl-[50%] rounded-br-[50%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArrival;
