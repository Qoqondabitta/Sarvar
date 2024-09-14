import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import { Main } from "./style";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </>
  );
};

export default Home;
