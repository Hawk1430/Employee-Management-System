/* eslint-disable react/prop-types */
import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

export const EmployeeDashboard = ({ data, onChangeUser }) => {
  console.log(data);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header name={data.firstName} onChangeUser={onChangeUser} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};
