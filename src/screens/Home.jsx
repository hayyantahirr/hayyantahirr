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

import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Home = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.Out",
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
          
        },
      });
    });
  });
  return (
    <ReactLenis root options={{ autoRaf: true }}>
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
    </ReactLenis>
  );
};

export default Home;
