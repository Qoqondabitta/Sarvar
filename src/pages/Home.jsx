import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import { Main } from "./style";
import About from "../components/about/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};

export default Home;
