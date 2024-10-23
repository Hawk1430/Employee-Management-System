/* eslint-disable react/prop-types */
import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ onChangeUser }) => {
  return (
    <div className="h-screen w-full p-7">
      <Header onChangeUser={onChangeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
