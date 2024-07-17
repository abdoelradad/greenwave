import React from "react";
import coffee from "../../assets/coffee.png";
import { motion } from "framer-motion";
import { PiCoffeeBeanBold } from "react-icons/pi";
import { PiCoffeeBold } from "react-icons/pi";
import { PiTimerBold } from "react-icons/pi";
import { LuLeafyGreen } from "react-icons/lu";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

const left = [
  {
    name: "Best Coffee",
    description: "Aromatic blend with a hint of chocolate and caramel notes.",
    icon: <PiCoffeeBeanBold size={30} />,
  },
  {
    name: "Quick service",
    description: "Smooth espresso with a velvety crema and robust flavor.",
    icon: <PiCoffeeBold  size={30} />,
  },
  {
    name: "From Nature",
    description: "Smooth espresso with a velvety crema and robust flavor.",
    icon: <LuLeafyGreen  size={30} />,
  },

];
const right = [
  {
    name: "from  nature to you",
    description: "Aromatic blend with a hint of chocolate and caramel notes.",
    icon: <LuLeafyGreen size={30}/>,
  },
  {
    name: "Good Staff",
    description: "Smooth espresso with a velvety crema and robust flavor.",
    icon: <PiUsersThreeFill size={30}/>,
  },
  {
    name: "Best Price",
    description: "Refreshing cold brew with a crisp, clean finish.",
    icon: <IoPricetagsOutline size={30}/>,
  },
];

const About = () => {
  return (
    <section className="py-24 relative bg-[#141414]" id="about">
      <div className="max-w-6xl mx-auto overflow-hidden px-5 relative">
        <h1 className="title text-4xl md:text-5xl cursor-default tracking-tight font-bold capitalize text-center ">
          <span className=" text-primary">our</span> story
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24 place-items-center">
          <div className="w-full flex items-center flex-col gap-10">
            {left.map((item) => (
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
                <span className="text-primary md:pt-[5px]">{item.icon}</span>
                <div className="text-center md:text-left">
                  <h3 className="text-lg mb-1">{item.name}</h3>

                  <p className="text-sm text-gray-400 max-w-[200px] mx-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={coffee} alt="" className="w-[350px] bg-cover" />
          <div className="w-full flex items-center flex-col gap-10">
          {right.map((item) => (
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
                <span className="text-primary md:pt-[5px]">{item.icon}</span>
                <div className="text-center md:text-left">
                  <h3 className="text-lg mb-1">{item.name}</h3>

                  <p className="text-sm text-gray-400 max-w-[200px] mx-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
