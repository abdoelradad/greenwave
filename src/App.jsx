import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto overflow-hidden px-5">
        <Hero />
        <About />
        <Menu />
      </main>
    </div>
  );
};

export default App;
