import React from "react";
import { Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#0f1115] text-white px-6 py-3 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">

        {/* Avatar + Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
            SP
          </div>
          <span className="font-semibold text-[15px]">Student</span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4 text-[14px] text-gray-300">

          <button className="bg-[#1c1f26] px-4 py-1.5 rounded-md text-white font-medium">
            Dashboard
          </button>

          <button className="hover:text-white transition">
            Attendance
          </button>

          <button className="hover:text-white transition">
            Calendar
          </button>

          <button className="hover:text-white transition">
            Chat
          </button>

          <button className="hover:text-white transition flex items-center gap-1">
            More
            <span className="text-xs">▼</span>
          </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <Settings className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
      </div>

    </div>
  );
};

export default Navbar;