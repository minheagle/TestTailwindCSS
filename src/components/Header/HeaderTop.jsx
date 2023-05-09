import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 h-20 border-b-2 border-b-dark">
      <div className="col-span-1"></div>
      <div className="col-span-10 grid grid-cols-12">
        <div className="col-span-2 flex justify-start items-center">
          <h1 className="text-4xl text-white">Supper Store</h1>
        </div>
        <div className="col-span-7 flex justify-center items-center">
          <select
            name=""
            id=""
            className="w-1/6 h-8 focus-visible:border-primary"
          ></select>
          <input
            type="text"
            className="w-4/6 h-8"
            placeholder="I'm shopping for ..."
          />
          <button className="bg-black text-white w-1/6 h-8">Search</button>
        </div>
        <div className="col-span-3 flex justify-start items-center">
          <AiOutlineHeart
            className="m-4"
            style={{ fontSize: "2rem", color: "#000000" }}
          />
          <HiOutlineChartSquareBar
            className="m-4"
            style={{ fontSize: "2rem", color: "#000000" }}
          />
          <BiShoppingBag
            className="m-4"
            style={{ fontSize: "2rem", color: "#000000" }}
          />
          <div className="flex justify-start items-center">
            <BsPerson
              className="m-2"
              style={{ fontSize: "2rem", color: "#000000" }}
            />
            <div>
              <p className="text-black font-semibold">Login</p>
              <p className="text-black font-semibold">Register</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default HeaderTop;
