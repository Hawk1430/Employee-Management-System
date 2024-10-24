import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [assignTo, setAssignTo] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});

  const [userData, setUserData] = useContext(AuthContext);

  // const formHandler = (e) => {
  //   const { name, value } = e.target;
  //   setTask((prevTask) => ({
  //     ...prevTask,
  //     [name]: value,
  //     active: false,
  //     newTask: true,
  //     completed: false,
  //     failed: false,
  //   }));
  //   console.log(task);
  // };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const newTaskObj = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDate,
      taskDescription,
      category,
    };

    setNewTask(newTaskObj);

    const data = userData;
    data.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.newTasks = elem.newTasks + 1;
        console.log(elem);
      }
    });
    setUserData(data);
    console.log(data);

    setAssignTo("");
    setCategory("");
    setTaskDate("");
  };

  useEffect(() => {
    if (Object.keys(newTask).length !== 0) {
      console.log(newTask);
    }
  }, [newTask]);

  // function handleNewTask(taskTitle, taskDate, taskDescription, category) {
  //   return setNewTask({
  //     active: false,
  //     newTask: true,
  //     completed: false,
  //     failed: false,
  //     taskTitle,
  //     taskDate,
  //     taskDescription,
  //     category,
  //   });
  // }

  return (
    <div className=" text-white p-5 bg-[#1C1C1C] mt-7 rounded">
      <form
        onSubmit={(e) => submitFormHandler(e)}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-[50%]">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name="taskTitle"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              required
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name="taskDate"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              value={assignTo}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              value={category}
              name="category"
              required
            />
          </div>
        </div>

        <div className="w-[40%] flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400 "
            name="taskDescription"
            id="taskDescription"
            cols={30}
            rows={10}
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            required
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
