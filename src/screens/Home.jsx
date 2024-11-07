import React from "react";
// components
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
