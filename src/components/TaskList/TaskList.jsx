/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto items-center justify-start flex-nowrap gap-5 w-full py-5  mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask task={elem} key={idx} />;
        }
        if (elem.newTask) {
          return <NewTask task={elem} key={idx} />;
        }
        if (elem.completed) {
          return <CompleteTask task={elem} key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask task={elem} key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
