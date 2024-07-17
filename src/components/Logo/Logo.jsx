import React from "react";
import logo2 from "../../assets/logo2.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 font-bold">
      DEATH <img src={logo2} alt="" className="w-[25px] h-[25px] bg-cover" />
      COFFEE
    </div>
  );
};

export default Logo;
