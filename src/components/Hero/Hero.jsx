import React from "react";
import coffee from "../../assets/coffee.png";
import line from "../../assets/arrow.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import bb from "../../assets/bb.png";
import bg from "../../assets/bg.png";

const Hero = () => {
  return (
    <section className="pt-10 max-w-6xl mx-auto overflow-hidden px-5">
      <div className="grid grid-cols-1 text-center relative">
        <img src={bb} alt="" className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] opacity-5 -z-10" />
        <p className="text-sm uppercase text-gray-500 mb-4">
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
          transition={{ duration: 1 }}
          className="title text-5xl md:text-6xl cursor-default tracking-tight font-bold"
        >
          <span className=" text-primary relative">
            Coffee{" "}
          </span>
          as you expect <br />
          only for <span className=" text-primary inline-block">you</span>
        </motion.h1>
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
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
