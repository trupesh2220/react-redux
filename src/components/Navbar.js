import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className=" bg-[#023d54]">
        <div className=" container p-3 flex justify-around items-center">
          <img
            className="w-20 rounded-full h-20"
            src={require("../images/1.jpg")}
            alt="img"
          />
          <div className="flex justify-center items-center gap-5 text-white font-bold text-2xl">
            <div>
              <Link to={"/"}>Home</Link>
            </div>
            <div>
              <Link to={"/cart"}>Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
