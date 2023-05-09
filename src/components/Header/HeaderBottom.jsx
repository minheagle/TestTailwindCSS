import React from "react";

import { BiMenu } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

import HeaderBottomItem1 from "./HeaderBottomItem1";
import HeaderBottomItem2 from "./HeaderBottomItem2";

const item_1 = [
  {
    id: 1,
    title: "Home",
    icon: (
      <IoIosArrowDown
        className="m-2"
        style={{ fontSize: "1rem", color: "#000000" }}
      />
    ),
  },
  {
    id: 2,
    title: "Shop",
    icon: (
      <IoIosArrowDown
        className="m-2"
        style={{ fontSize: "1rem", color: "#000000" }}
      />
    ),
  },
  {
    id: 3,
    title: "Pages",
    icon: (
      <IoIosArrowDown
        className="m-2"
        style={{ fontSize: "1rem", color: "#000000" }}
      />
    ),
  },
  {
    id: 4,
    title: "Blogs",
    icon: (
      <IoIosArrowDown
        className="m-2"
        style={{ fontSize: "1rem", color: "#000000" }}
      />
    ),
  },
];

const item_2 = [
  { id: 1, title: "Sell on MartFury", icon: "" },
  { id: 2, title: "Track Your Order", icon: "" },
  {
    id: 3,
    title: "US Dollar",
    icon: (
      <IoIosArrowDown
        className="m-2"
        style={{ fontSize: "1rem", color: "#000000" }}
      />
    ),
  },
  {
    id: 4,
    title: "English",
    icon: (
      <IoIosArrowDown
        className="m-2"
        style={{ fontSize: "1rem", color: "#000000" }}
      />
    ),
  },
];

const renderItem1 = (item_1) => {
  return item_1.map((item) => {
    return <HeaderBottomItem1 key={item.id} items={item} />;
  });
};

const renderItem2 = (item_2) => {
  return item_2.map((item) => {
    return (
      <div key={item.id} className="flex justify-center items-center">
        <HeaderBottomItem2 items={item} />
        {item.title !== "English" ? (
          <div className="text-dark ml-4"> | </div>
        ) : (
          ""
        )}
      </div>
    );
  });
};

const HeaderBottom = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 h-10">
      <div className="col-span-1"></div>
      <div className="col-span-10 grid grid-cols-12">
        <div className="col-span-2 flex justify-start items-center">
          <BiMenu
            className="m-2"
            style={{ fontSize: "2rem", color: "#000000" }}
          />
          <h5 className="text-dark font-semibold">All Categories</h5>
        </div>
        <div className="col-span-10 flex justify-between items-center">
          <div className="flex justify-center items-center">
            {renderItem1(item_1)}
          </div>
          <div className="flex justify-center items-center">
            {renderItem2(item_2)}
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default HeaderBottom;
