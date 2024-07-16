import React from "react";
import bg from "../../assets/hero.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 relative" id="about">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="title text-4xl md:text-5xl cursor-default tracking-tight font-bold capitalize text-center "
      >
        <span className=" text-primary">our</span> story
      </motion.h1>
      <img
        src={bg}
        alt=""
        className=" absolute -z-50 bg-cover top-0 md:-top-32 opacity-60"
      />
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center max-w-xl mx-auto leading-7 text-sm my-10 text-text"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eveniet
        libero tempora expedita impedit magni inventore quis molestias maxime
        iure, blanditiis eligendi similique eum incidunt quam placeat sequi
        ratione voluptatem. libero tempora expedita impedit magni inventore quis
        molestias maxime iure, blanditiis eligendi similique eum incidunt quam
        placeat sequi ratione voluptatem.
      </motion.p>
    </section>
  );
};

export default About;
