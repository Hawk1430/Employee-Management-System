/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-around items-end gap-5 w-[3/4]  ">
      <div className="text-white rounded-xl w-[25%]  py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.newTasks}</h2>
        <h3 className="text-xl font-medium">New Task</h3>{" "}
      </div>
      <div className="text-white rounded-xl w-[25%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{data.completedTasks}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>{" "}
      </div>
      <div className="rounded-xl w-[25%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.activeTasks}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>{" "}
      </div>
      <div className="text-white rounded-xl w-[25%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.failedTasks}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>{" "}
      </div>
    </div>
  );
};

export default TaskListNumber;
