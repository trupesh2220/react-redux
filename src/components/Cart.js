import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const handleRemove = (pro) => {
    dispatch(remove(pro));
  };
  return (
    <>
      <div className="grid grid-cols-4 container mx-auto mt-10">
        {product &&
          product.map((pro) => (
            <div key={pro.id} className="w-full">
              <div className="w-full">
                <img
                  className="w-full h-80  object-fill"
                  src={pro.image}
                  alt=""
                />
                <div className="text-center text-white text-[20px]">
                  {pro.title.slice(0, 15)}
                </div>
                <div className="text-center text-white text-[20px]">
                  Price {pro.price}
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleRemove(pro.id)}
                    className="bg-[#0a212b] hover:bg-[#0e2d3b] border hover:text-[#c1d3dc] hover:border-black transition-all duration-300 p-3 font-bold text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Cart;
