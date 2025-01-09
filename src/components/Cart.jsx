import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDelete } from "../Redux/CartSlice";

const Cart = () => {
  const [quantity, setQuantity] = useState({});
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 20;

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
  const handleDelete = (id) => {
    dispatch(productDelete(id));
    setQuantity((prev) => {
      const newQuantity = { ...prev };
      delete newQuantity[id];
      return newQuantity;
    });
  };

  
  const handleQuantityChange = (id, change) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min(10, (prev[id] || 1) + change)),
    }));
  };


  const calculateSubtotal = () => {
    const total = products.reduce(
      (acc, product) => acc + product.originalPrice * (quantity[product.id] || 1),
      0
    );
    setSubtotal(total);
  };


  const handleCouponApply = () => {
    if (couponCode === "eman" && !isCouponApplied) {
      setSubtotal((prev) => prev - 10);
      setCouponCode("");
      setIsCouponApplied(true);
    } else {
      alert("Invalid coupon code.");
    }
  };

  useEffect(() => {
    calculateSubtotal();
  }, [quantity, products]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4 lg:px-16">
        <h1 className="text-4xl font-semibold mb-6">Shopping cart</h1>
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-8">        
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center py-4 md:items-start gap-3 justify-between border-b pb-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="flex-1 px-4 text-center md:text-left">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-500">Brown / S</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      disabled={quantity[product.id] === 1}
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className={`px-3 py-1 text-xl bg-gray-200 rounded ${
                        quantity[product.id] === 1
                          ? "bg-red-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      -
                    </button>
                    <p className="text-lg font-medium">
                      {quantity[product.id] || 1}
                    </p>
                    <button
                      disabled={quantity[product.id] === 10}
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className={`px-3 py-1 text-xl bg-gray-200 rounded ${
                        quantity[product.id] === 10
                          ? "bg-red-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold">
                    ${product.originalPrice}
                  </p>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 text-3xl mt-[-5px] hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
              ))
            ) : (
              <h1 className="text-2xl font-semibold text-center">
                Shopping Cart is Empty
              </h1>
            )}
          </div>
       
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Shipping</p>
              <p>${shippingCost}</p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>USD ${subtotal + shippingCost}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter coupon code here"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full mt-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                onClick={handleCouponApply}
                className={`w-full mt-4 ${
                  isCouponApplied
                    ? "bg-gray-500"
                    : "bg-black hover:bg-gray-800"
                } text-white py-3 rounded-lg`}
                disabled={isCouponApplied}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
