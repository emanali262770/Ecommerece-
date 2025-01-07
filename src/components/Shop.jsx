import React from "react";
import BreadCrumb from "./ReusableComponents/BreadCrumb";
import shopImage from "../Images/shop.jpg";
import LatestArrival from "./LatestArrival";
import DailyDeal from "./DailyDeal";
import ShopBanners from "./ShopBanners";
import shopbanner1 from "../Images/shopbanner1.jpg";
import shopbanner2 from "../Images/shopbanner2.jpg";
import Subscribe from "./Subscribe";
const Shop = () => {
  return (
    <div className="w-[100%]">
      <BreadCrumb bgImage={shopImage} title={"Shop"} />
      <div className="w-[90%] mx-auto">
        <LatestArrival />
        <DailyDeal />
        <div className="grid grid-cols-2 gap-4">
          <ShopBanners image={shopbanner1} />
          <ShopBanners image={shopbanner2} />
        </div>
        <Subscribe />
      </div>
    </div>
  );
};

export default Shop;
