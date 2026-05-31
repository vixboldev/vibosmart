import React from "react";
import { FcSmartphoneTablet } from "react-icons/fc";

function Logo(props) {
  return (
    <div className="flex items-center gap-2 select-none">
      <FcSmartphoneTablet className="text-4xl" />
      <h1 className="text-2xl font-black tracking-wide">
        <span className="text-cyan-400">VIBO</span>
        <span className="text-pink-500">SMART</span>
      </h1>
    </div>
  );
}

export default Logo;
