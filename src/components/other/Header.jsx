/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const Header = ({ onChangeUser, name }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", ""); //This just set loggedInUser to "".
    // window.location.reload(); //This is used to make browser reload.
    onChangeUser("");
  };

  return (
    <div className="text-white flex items-end justify-between">
      <h1 className=" text-2xl                   ">
        Hello <br /> <span className="text-3xl font-semibold">{name} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
