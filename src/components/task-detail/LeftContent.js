import React from "react";
import users from "../../assets/Avatar group.png";
import Image from "next/image";
import { MdFlag } from "react-icons/md";
const LeftContent = ({ lists }) => {
  return (
    <div className="w-8/12 bg-white">
      {lists.map((board, index) => (
        <>
          <div key={index} className="my-8 mx-4">
            <div className=" justify-between flex ">
              <div className=" mt-8 p-8">
                <div className="flex space-x-5 items-center ">
                  <div className="w-6 h-6 p-3 rounded-full border border-slate-700 "></div>
                  <div className="text-3xl text-[#525f70] font-bold">
                    {board.description}
                  </div>
                </div>
                <div className="text-[#aaadb3] font-semibold underline mt-6">ID:# {board.id}</div>
              </div>
              <div className="flex items-center rounded-md space-x-5 border-2 border-gray-200 h-14 p-3 ">
                <span className="w-6 h-6 rounded-full border border-black"></span>
                <span> {new Date(board.createdAt).toLocaleDateString()}</span>
                <span>-</span>
                <span> {new Date(board.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex space-x-24 mt-12 px-5">
              <div className="flex justify-center items-center flex-col space-y-3 text-[#757e91]">
                <span>Task Status</span>
                <span className="text-black">Open</span>
              </div>
              <div className=" space-y-3 text-[#757e91]">
                <span>Assigments</span>
                <Image src={users} alt="assigments user"/>
              </div>
              <div className=" space-y-3 text-[#757e91]">
                <span>Priority</span>
                <MdFlag size={20} color="red" />
              </div>

            </div>
            <div className="mt-12 space-y-5 p-5">
              <h1 className="text-[#757e91] font-semibold">Description</h1>
              <p>{board.description}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default LeftContent;
