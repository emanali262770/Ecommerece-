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
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProtectedRoute><Shop/></ProtectedRoute>} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
