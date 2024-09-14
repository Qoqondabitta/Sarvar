import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Certificate from "../components/certificates/Certificate";
import Education from "../components/education/Education";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certificate />
      <Education />
      <Footer />
    </>
  );
};

export default Home;
