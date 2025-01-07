import React from 'react'

import Slider from "./Slider";
import ShopBycategory from "../ShopBycategory";
import DailyDeal from "../DailyDeal";
import LatestArrival from "../LatestArrival";
import Subscribe from "../Subscribe";

const Home = () => {
  return (
    <div>
     
     <Slider />
      <ShopBycategory />
      <DailyDeal />
      <LatestArrival />
      <Subscribe />
     
    </div>
  )
}

export default Home