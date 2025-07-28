import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle="OUR PROGRAM" title="What We Offer" />
      <Programs />
      <Title subtitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subtitle="Contact us" title="Get In Touch" />
      <Contact />
    </div>
  );
};

export default App;
