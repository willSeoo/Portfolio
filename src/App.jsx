import React from "react";
import Hero from "./sections/Hero";
import Text from "./sections/text";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Text />
      <Projects />
    </div>
  );
};

export default App;
