import React from "react";
// components
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
};

export default Home;
