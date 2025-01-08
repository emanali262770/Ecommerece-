import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDelete } from "../Redux/CartSlice";
import { useEffect } from "react";

const Cart = () => {
  const [pricecounter, setpricecounter] = useState(1);
  const [input, setinput] = useState("");
  const [iscoupanapply, setiscoupanapply] = useState(false);
  const [subtotal, setsubtotal] = useState(0);
  const [ship, setship] = useState(20);

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(productDelete(id));
  }
  function calculation() {
    const total = products.reduce((acc, product) => {
      return acc + product.originalPrice * pricecounter;
    }, 0);
    setsubtotal(total);
  }
  function coupan() {
    if (input == "eman"&&!iscoupanapply) {
      setsubtotal((p) => p - 10);
      setinput("");
      setiscoupanapply(true)
    } else {
      alert("Coupan code is not Valid");
    }
  }

  useEffect(() => {
    calculation();
  }, [pricecounter]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4 lg:px-16">
        <h1 className="text-4xl font-semibold mb-6">Shopping cart</h1>

        <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 items-center bg-white p-6 rounded-lg shadow-md">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex  flex-col md:flex-row items-center md:items-start gap-3 justify-between border-b pb-4"
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
                      disabled={pricecounter == 1}
                      onClick={() => setpricecounter(pricecounter - 1)}
                      className={`px-3 py-1 text-xl bg-gray-200 rounded  ${
                        pricecounter === 1
                          ? "bg-red-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      -
                    </button>
                    <p className="text-lg font-medium">{pricecounter}</p>
                    <button
                      disabled={pricecounter == 10}
                      onClick={() => setpricecounter(pricecounter + 1)}
                      className={`px-3 py-1 text-xl bg-gray-200 rounded  ${
                        pricecounter === 10
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
          {/* Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Shipping</p>
              <p>$20.00</p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>USD ${subtotal? subtotal+ship:0}</p>
            </div>
         
              <div>
                <input
                  type="text"
                  placeholder="Enter coupon code here"
                  value={input}
                  onChange={(e) => setinput(e.target.value)}
                  className="w-full mt-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <button
                  onClick={coupan}
                  className={`w-full mt-4 ${iscoupanapply?'bg-gray-500 hover:bg-gray-500':' bg-black hover:bg-gray-800'} bg-black text-white py-3 rounded-lg `}
                  disabled={iscoupanapply}
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
