"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";

const IndexPage = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col justify-between py-10 px-6 h-full ">
      <div>
        <h1 className="text-2xl font-medium mb-2">Projeler</h1>
        {items?.map((item, index) => (
          <div key={index} className="p-2 hover:bg-[#f3f6fd] rounded-md ">
            <div
              onClick={() => handleClick(index)}
              className="cursor-pointer flex justify-start lg:justify-between items-center"
            >
              {item.title}
              <FaAngleDown color="#717a8e" />
            </div>
            <div className={activeIndex === index ? "block" : "hidden"}>
              {item.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="pl-4 py-2 cursor-pointer hover:bg-slate-300"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex sm:flex-row space-y-3 flex-col items-center mt-4 space-x-6">
          <SiSimpleanalytics color="#717a8e" />
          <span className="text-[#717a8e] cursor-pointer">Proje Oluştur</span>
        </div>
      </div>
      <div>
        <h2>Tuğba Gündoğdu</h2>
        <h3>tugba.gundgdu@gmail.com</h3>
      </div>
    </div>
  );
};

export default IndexPage;
