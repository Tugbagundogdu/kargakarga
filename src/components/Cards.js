"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Tasks from "./tasks/Tasks";
const Cards = () => {
  const [boards, setBoards] = useState([]);
  const [flags, setFlags] = useState([]);

  const userToken =
    typeof window !== "undefined" && localStorage.getItem("userToken");
  const getBoards = async () => {
    try {
      const res = await axios.get(
        "https://api.management.parse25proje.link/api/boards",
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setBoards(res.data.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCommons = async () => {
    try {
      const res = await axios.get(
        "https://api.management.parse25proje.link/api/commons/flags",
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setFlags(res.data.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBoards();
    getCommons();
  }, []);

  return (
    <div className="flex space-x-5 overflow-x-auto no-scrollbar ">
      {boards?.map((board, index) => (
        <div
          key={index}
          className="border border-gray-300 flex-shrink-0 w-4/12 rounded-xl my-6 bg-white"
        >
          <div className="">
            <div className="flex justify-between items-center px-4 py-3">
              <div className="flex space-x-5">
                <h1>{board.name}</h1>
                <span className="bg-[#eff8ff] rounded-full w-3 h-3 p-3 center border border-slate-400 text-[#145389] ">
                  {board.order}
                </span>
              </div>

              <div className="center space-x-5">
                <span className="text-3xl font-light text-[#757e91]">+</span>
                <div className="bg-[#eff8ff] rounded-full w-3 h-3 p-3 center border border-slate-400">
                  <span className="text-2xl font-light text-[#757e91] mb-3 ">
                    ...
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <Tasks board={board} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
