import React from "react";

const HeaderBottomItem1 = ({ items }) => {
  const { title, icon } = items;
  return (
    <div className="flex justify-center items-center mr-4">
      <p className="text-dark text-lg">{title}</p>
      {icon}
    </div>
  );
};

export default HeaderBottomItem1;
