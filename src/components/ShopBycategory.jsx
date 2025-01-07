import React, { useState } from "react";

const ShopBycategory = () => {
  const items = [
    {
      title: "Monstera Plant",
      image:
        "https://c4.wallpaperflare.com/wallpaper/330/1004/860/beautiful-green-leaves-monstera-hd-wallpaper-preview.jpg",
    },
    {
      title: "Succulent Set",
      image:
        "https://img.freepik.com/premium-photo/top-view-small-potted-cactus-succulent-plants-set-three-various-types-echeveria-succulents_926199-68732.jpg",
    },
    {
      title: "Fiddle Leaf Fig",
      image:
        "https://c1.wallpaperflare.com/preview/66/577/214/leaf-plant-pot-planter.jpg",
    },
    {
      title: "Snake Plant",
      image:
        "https://media.istockphoto.com/id/1439949379/photo/plant-indoor-in-front-of-window-taking-light.jpg?s=612x612&w=0&k=20&c=m6lvg-LYqMaASZRZZObgV7J0CaOyULGFVbXksFcRYow=",
    },
    {
      title: "Pothos Vine",
      image:
        "https://media.houseandgarden.co.uk/photos/64bff5f4d6a55acd0397054e/1:1/w_1280%2Cc_limit/Screenshot%25202023-07-25%2520at%252017.17.10.png",
    },
  ];
  const [category,setcategory]=useState(items)
  return (
    <div>
      <div className="py-6">
        <h1 className="text-center font-bold text-[51px]">Shop By Categories</h1>
        <div className="category animate-flip-up">
          <div className="flex justify-center flex-wrap items-center gap-8 p-8">
            {
               category.map((items,i)=>(
                <div key={i} className="flex flex-col  items-center text-center">
                <div className="w-[228px] h-[300px] rounded-[100px] overflow-hidden border-2 border-gray-300 shadow-md">
                  <img
                    src={items.image}
                    alt="Indoor Plant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                  {items.title}
                </h3>
              </div>
               ))
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBycategory;
