import React from "react";

import Iphone from "../../assets/iphone_14.jpg";

const Item = ({ item }) => {
  const { productName, price } = item;
  return (
    <div className="col-span-1 rounded-2xl bg-darkLight h-80 flex flex-col">
      <div className="h-56 shrink-0">
        <img src={Iphone} alt="" className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="flex-1">{productName}</h3>
        <div className="flex shrink-0 h-12 flex-col justify-end">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
