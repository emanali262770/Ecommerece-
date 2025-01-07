import React from "react";

const ShopBanners = ({ image }) => {
    
  return (
    <div>
      <div
        className="relative w-[80%] mx-auto h-64 mt-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">Overlay from Bottom</h1>
          <p className="text-sm">This is an example of a bottom overlay.</p>
        </div>
      </div>
    </div>
  );
};

export default ShopBanners;
