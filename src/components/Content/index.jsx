import React from "react";
import Item from "./Item";

const item = [
  {
    id: 1,
    productName: "Iphone 14 ashdjashdkashdasjhjdhsdkajhsdjkahsd",
    price: 1000,
    star: 5,
  },
  { id: 2, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 3, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 4, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 5, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 6, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 7, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 8, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 9, productName: "Iphone 14", price: 1000, star: 5 },
  { id: 10, productName: "Iphone 14", price: 1000, star: 5 },
];

const renderItem = (item) => {
  return item.map((item) => {
    return (
      <div key={item.id} className="col-span-1 gap-4">
        <Item item={item} />
      </div>
    );
  });
};

const index = () => {
  return (
    <div className="col-span-12 grid grid-cols-12">
      <div className="col-span-1 "></div>
      <div className="col-span-10 grid grid-cols-6 gap-4">
        {renderItem(item)}
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default index;
