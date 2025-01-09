import React from "react";
import Navbar from "./components/HeaderComponets/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/HeaderComponets/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
