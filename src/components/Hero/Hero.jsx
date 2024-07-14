import React from "react";
import coffee from "../../assets/coffee.png";
import line from "../../assets/arrow.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import bb from "../../assets/bb.png";
const Hero = () => {
  return (
    <section className="pt-32 text-5xl w-full min-h-screen relative">
      <img src={bb} alt="" className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] opacity-5 -z-10" />
      <div className="grid grid-cols-1 text-center">
        <p className="text-sm italic text-gray-400 capitalize mb-2">
          <Typewriter
            words={["since 1988", "owner boda", "based on portsaid"]}
            loop={true}
            cursor
            cursorStyle="|"
          />
        </p>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="title text-5xl md:text-6xl cursor-default tracking-tight font-bold"
        >
          <span className=" text-primary relative">
            Coffee <img src={line} alt="" className=" absolute top-0 right-2" />
          </span>
          as you expect <br />
          only for <span className=" text-primary inline-block">you</span>
        </motion.h1>
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            src={coffee}
            alt="coffee"
            className=" w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
