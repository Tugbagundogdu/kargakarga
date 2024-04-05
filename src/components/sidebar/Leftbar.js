import React from "react";
import { LuBell } from "react-icons/lu";

const Leftbar = () => {
  return (
    <div className="w-1/4 bg-[#363f72] flex flex-col items-center justify-between py-12 ">
      <div className="space-y-6 flex-col center ">
        <div className="sm:bg-[#5e668f] rounded-md lg:p-3 md:p-2  ">
          <LuBell size={26} color="#757e91" />
        </div>
          <LuBell className="" size={26} color="#757e91" />
          <LuBell size={26} color="#757e91" />
          <LuBell size={26} color="#757e91" />
      </div>

      <div className="space-y-9 w-">
        <LuBell size={26} color="#757e91" />
        <LuBell size={26} color="#757e91" />
        <LuBell size={26} color="#757e91" />
        <LuBell size={26} color="#757e91" />
      </div>
    </div>
  );
};

export default Leftbar;
