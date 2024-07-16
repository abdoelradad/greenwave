import React from "react";
import logo2 from "../../assets/logo2.png";

const Logo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-x-2 font-bold">
      DEATH <img src={logo2} alt="" className="w-[25px] h-[25px] bg-cover" />
      COFFEE
    </div>
  );
};

export default Logo;
