import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDelete, Updatequantity } from "../Redux/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const [total, settotal] = useState(0);
  const dispatch = useDispatch();
  function deleteProduct(id) {
    dispatch(productDelete(id));
  }
  function updateQuantity(id, amount) {
    const findProduct = products.find((item) => item.id == id);
    if (findProduct) {
      const newamount = Math.max(findProduct.quantity + amount, 1);
      dispatch(Updatequantity({ id, quantity: newamount }));
    }
  }

  const calculateTotal = () => {
    const price = products.reduce((amount, product) => {
      return amount + product.originalPrice * product.quantity;
    }, 0);
    settotal(price);
  };

  useEffect(() => {
    calculateTotal();
  }, [products]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4 lg:px-16">
        <h1 className="text-4xl font-semibold mb-6">Shopping Cart</h1>
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
                      disabled={product.quantity == 1}
                      onClick={() => updateQuantity(product.id, -1)}
                      className={`px-3 py-1 text-xl ${
                        product.quantity == 1
                          ? "bg-red-600 text-white"
                          : "bg-gray-200"
                      } bg-gray-200 rounded`}
                    >
                      -
                    </button>
                    <p className="text-lg font-medium">{product.quantity}</p>
                    <button
                      disabled={product.quantity == 10}
                      onClick={() => updateQuantity(product.id, 1)}
                      className={`px-3 py-1 text-xl ${
                        product.quantity == 10
                          ? "bg-red-600 text-white"
                          : "bg-gray-200"
                      } bg-gray-200 rounded`}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold">
                    ${product.originalPrice}
                  </p>
                  <button
                    onClick={() => deleteProduct(product.id)}
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

          {/* Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Shipping</p>
              <p>$20</p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>USD ${total + 20}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter coupon code here"
                className="w-full mt-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-lg">
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
