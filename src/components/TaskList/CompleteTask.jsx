/* eslint-disable react/prop-types */
import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-sm">High</h3>
        <h4 className="text-sm"> {task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2">{task.taskDescription}</p>
      <div className="mt-2">
        <button className="w-full bg-green-500 py-1 px-2 text-sm rounded">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
