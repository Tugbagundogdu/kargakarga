import React from "react";
import { LuBell } from "react-icons/lu";

const Leftbar = () => {
  return (
    <div className="w-1/4 bg-[#363f72] flex flex-col items-center justify-between py-12 ">
      <div className="space-y-6 flex-col center ">
        <div className="bg-[#5e668f] rounded-md p-3 ">
          <LuBell size={26} color="#757e91" />
        </div>
          <LuBell size={26} color="#757e91" />
          <LuBell size={26} color="#757e91" />
          <LuBell size={26} color="#757e91" />
      </div>

      <div className="space-y-9">
        <LuBell size={26} color="#757e91" />
        <LuBell size={26} color="#757e91" />
        <LuBell size={26} color="#757e91" />
        <LuBell size={26} color="#757e91" />
      </div>
    </div>
  );
};

export default Leftbar;
