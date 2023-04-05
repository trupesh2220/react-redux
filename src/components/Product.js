import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Product() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd =(p)=>{
    dispatch(add(p))
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="w-full  ">
            <div className="w-full ">
              <img className="w-full h-80  object-fill" src={p.image} alt="" />
              <div className="text-center text-white text-[20px]"> {p.title.slice(0,15)}</div>
              <div className="text-center text-white text-[20px]">Price {p.price}</div>
              <div className="text-center"><button onClick={()=>handleAdd(p)} className='bg-[#0a212b] hover:bg-[#0e2d3b] border hover:text-[#c1d3dc] hover:border-black transition-all duration-300 p-3 font-bold text-white'>Add To Cart</button></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
