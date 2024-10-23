/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div id="allTask" className="bg-[#1C1C1C] p-5 rounded mt-5 ">
      <div className="bg-red-400  py-2 px-4 flex justify-between mb-2 rounded">
        <h2 className="text-lg font-medium  w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium  w-1/5">New Task</h3>
        <h5 className="text-lg font-medium  w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium  w-1/5">Completed </h5>
        <h5 className="text-lg font-medium  w-1/5">Failed</h5>
      </div>
      {authData.employees.map((elem, idx) => {
        return (
          <div
            className="border-2 border-emerald-500 mb-2  py-2 px-4 flex justify-between rounded"
            key={idx}
          >
            <h2 className="text-lg font-medium w-1/5 text-white">
              {elem.firstName}
            </h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">
              {elem.newTasks}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {elem.activeTasks}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-green-600">
              {elem.completedTasks}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {elem.failedTasks}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
