/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Header = ({ name }) => {
  return (
    <div className="text-white flex items-end justify-between">
      <h1 className=" text-2xl                   ">
        Hello <br /> <span className="text-3xl font-semibold">{name} 👋</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;
