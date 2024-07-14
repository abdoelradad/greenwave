import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto overflow-hidden">
        <Hero />
      </main>
    </div>
  );
};

export default App;
