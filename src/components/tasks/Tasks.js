"use client";
import React from "react";
import EmptyTask from "../../assets/Frame.png";
import { IoCalendarOutline } from "react-icons/io5";
import { MdFlag } from "react-icons/md";
import Employees from "../../assets/Avatar group.png";
import TaskAdd from "../tasks/TaskAdd";
import Image from "next/image";
import DeleteTask from "../tasks/DeleteTask";
import { useNewTask } from "@/app/context/newTaskContext";
const Tasks = ({ board }) => {
  const { toggleNewTask, newTasks } = useNewTask();
  return (
    <div className="p-4 space-y-3">
      {board.tasks.length > 0 ? (
        board.tasks.map((task, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 space-y-4"
          >
            <div className="flex justify-between">
              <h1 key={index} className="text-green-700 font-bold">
                {task.name}
              </h1>
              <Image src={Employees} alt="employees" />
            </div>{" "}
            <h2>{task.description}</h2>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              incidunt non repellat reprehenderit iure, cupiditate a iusto!
            </h3>
            <div className="flex space-x-3">
              <IoCalendarOutline size={20} color="#757e91" />
              <span className="text-sm text-[#757e91]">
                {" "}
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
              <span className="text-[#757e91]">-</span>
              <span className="text-sm text-[#757e91]">
                {" "}
                {new Date(task.updatedAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex space-x-3">
              <p className="text-sm text-[#757e91]">Milestone Name</p>
              <MdFlag size={20} color="#2083D7" />
              <div>
                <DeleteTask code={task.code} />
              </div>
            </div>
          </div>
        ))
      ) :newTasks[board.id] === undefined || newTasks[board.id] === false ? (
        <div className="relative">
          <Image src={EmptyTask} alt="no task" />
          <div className="absolute bottom-48 left-16 space-x-4 text-3xl text-gray-400 cursor-pointer hidden">
            <span>+</span>
            <span onClick={() => toggleNewTask(board.id)}>New Task</span>
          </div>
        </div>
      ) : newTasks[board.id] === true &&  (
        <TaskAdd />
      )}
    </div>
  );
};

export default Tasks;