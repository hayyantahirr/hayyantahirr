import React, { useRef } from "react";
import ProjectCards from "./ProjectCards.jsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Work() {
  const componentRef = useRef(null);
  const wrapperRefs = useRef([]);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  const works = [
    {
      imgSrc: "/images/banner10.png",
      title: "mfpackages",
      tags: ["Next.js", "TailwindCSS", "Firebase", "Redux"],
      projectLink: "https://mfpackages.com",
      projectDesc:
        "Comprehensive web packaging solution built with Next.js, Firebase backend, and Redux state management for optimal performance.",
    },
    {
      imgSrc: "/images/banner9.png",
      title: "Cybrox",
      tags: ["Next.Js", "TailwindCSS"],
      projectLink: "https://cybrox-eight.vercel.app/",
      projectDesc:
        "Sleek and responsive agency website built with Next.js and TailwindCSS featuring high-speed loading and modern dark UI.",
    },
    {
      imgSrc: "/images/banner6.png",
      title: "zDemy",
      tags: ["NextJs", "MongoDB", "Figma", "Tailwind CSS", "express.js"],
      projectLink: "https://zdemy-xi.vercel.app/",
      projectDesc:
        "Full-stack online learning platform with MongoDB database, Express API server, and customized Figma design implementations.",
    },
    {
      imgSrc: "/images/banner.png",
      title: "LumenVerse",
      tags: ["ReactJs", "FireBase", "Redux", "Material Ui", "Tailwind CSS"],
      projectLink: "https://lumen-verse.vercel.app/",
      projectDesc:
        "Interactive web application utilizing Firebase authentication, Material UI components, and real-time state synchronization.",
    },
    {
      imgSrc: "/images/banner2.png",
      title: "Pizzeria Amore",
      tags: ["NextJs", "SupaBase", "Figma", "Tailwind CSS"],
      projectLink: "https://pizzeria-amore.vercel.app/",
      projectDesc:
        "E-commerce ordering web application powered by Supabase backend, customized Tailwind styling, and smooth order handling.",
    },
    {
      imgSrc: "/images/banner3.png",
      title: " Responsive Meme Generator",
      tags: ["Next.js", "TailwindCSS"],
      projectLink: "https://meme-generator-hazel-nine.vercel.app/",
      projectDesc:
        "Fun and dynamic meme creator with real-time canvas editing, instant image downloading, and mobile-first responsiveness.",
    },
    {
      imgSrc: "/images/banner4.png",
      title: "Forged-Trivia",
      tags: ["React.Js", "Tailwind CSS"],
      projectLink: "https://forged-trivia.vercel.app/",
      projectDesc:
        "Engaging trivia quiz application built in React featuring interactive score tracking, animated questions, and clean UI.",
    },

    {
      imgSrc: "/images/banner5.png",
      title: "Grid Warriors",
      tags: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://grid-warriors.vercel.app/",
      projectDesc:
        "Interactive CSS Grid layout game built with vanilla JavaScript showcasing dynamic grid manipulations and responsive designs.",
    },
    {
      imgSrc: "/images/banner1.png",
      title: "My Portfolio",
      tags: ["React.js", "Tailwind CSS", "Lenis"],
      projectLink: "https://hayyantahirr.vercel.app/",
      projectDesc:
        "Modern developer portfolio featuring smooth Lenis scrolling, GSAP ScrollTrigger animations, and custom UI components.",
    },
  ];

  useGSAP(
    () => {
      if (!componentRef.current || leftRefs.current.length === 0) return;

      const totalProjects = works.length;
      const isMobile = window.innerWidth < 768;
      const xOffset = isMobile ? 35 : 80;
      const yOffset = isMobile ? 90 : 150;
      const rotOffset = isMobile ? 12 : 20;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "center center",
          end: () => `+=${totalProjects * 600}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      works.forEach((_, i) => {
        const left = leftRefs.current[i];
        const right = rightRefs.current[i];
        const wrapper = wrapperRefs.current[i];

        if (left && right && wrapper) {
          if (i === 0) {
            gsap.set(left, { rotation: 0, x: 0, y: 0, opacity: 1 });
            gsap.set(right, { rotation: 0, x: 0, y: 0, opacity: 1 });
            gsap.set(wrapper, { pointerEvents: "auto", zIndex: 40 });
          } else {
            gsap.set(left, { rotation: -rotOffset, x: -xOffset, y: -yOffset, opacity: 0 });
            gsap.set(right, { rotation: rotOffset, x: xOffset, y: -yOffset, opacity: 0 });
            gsap.set(wrapper, { pointerEvents: "none", zIndex: 10 });
          }
        }
      });

      works.forEach((_, i) => {
        if (i < totalProjects - 1) {
          const currentLeft = leftRefs.current[i];
          const currentRight = rightRefs.current[i];
          const currentWrapper = wrapperRefs.current[i];

          const nextLeft = leftRefs.current[i + 1];
          const nextRight = rightRefs.current[i + 1];
          const nextWrapper = wrapperRefs.current[i + 1];

          if (currentLeft && currentRight && nextLeft && nextRight && currentWrapper && nextWrapper) {
            tl.to(
              currentLeft,
              {
                rotation: rotOffset,
                x: -xOffset,
                y: yOffset,
                opacity: 0,
                duration: 1,
                ease: "none",
              },
              `step-${i}`
            );
            tl.to(
              currentRight,
              {
                rotation: -rotOffset,
                x: xOffset,
                y: yOffset,
                opacity: 0,
                duration: 1,
                ease: "none",
              },
              `step-${i}`
            );
            tl.to(
              currentWrapper,
              {
                pointerEvents: "none",
                zIndex: 10,
                duration: 0.1,
              },
              `step-${i}`
            );

            tl.to(
              nextLeft,
              {
                rotation: 0,
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "none",
              },
              `step-${i}`
            );
            tl.to(
              nextRight,
              {
                rotation: 0,
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "none",
              },
              `step-${i}`
            );
            tl.to(
              nextWrapper,
              {
                pointerEvents: "auto",
                zIndex: 40,
                duration: 0.1,
              },
              `step-${i}`
            );
          }
        }
      });
    },
    { scope: componentRef }
  );

  return (
    <>
      <section id="work" className="py-16 lg:py-24 overflow-hidden" ref={componentRef}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="headline-2 reveal-up">My portfolio highlights</h2>
              <p className="text-zinc-400 mt-2 text-sm max-w-[45ch]">
                Scroll down to experience my featured projects in synchronized curved arc motion.
              </p>
            </div>
            <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase bg-rose-400/10 border border-rose-400/20 px-3.5 py-1.5 rounded-full w-fit">
              {works.length} Featured Showcase
            </span>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[620px] sm:h-[500px] lg:h-[460px]">
            {works.map((item, index) => (
              <div
                key={index}
                ref={(el) => (wrapperRefs.current[index] = el)}
                className="absolute inset-0 w-full h-full"
                style={{
                  zIndex: index === 0 ? 40 : 10,
                  pointerEvents: index === 0 ? "auto" : "none",
                }}
              >
                <ProjectCards
                  imgSrc={item.imgSrc}
                  title={item.title}
                  tags={item.tags}
                  projectLink={item.projectLink}
                  projectDesc={item.projectDesc}
                  index={index}
                  leftRef={(el) => (leftRefs.current[index] = el)}
                  rightRef={(el) => (rightRefs.current[index] = el)}
                  classes="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
