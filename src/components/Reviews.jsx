import React from "react";
import ReviewCard from "./ReviewCard";

// import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Reviews() {
  const reviews = [
    {
      content:
        "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
      name: "Sophia Ramirez",
      imgSrc: "/images/people-1.jpg",
      company: "PixelForge",
    },
    {
      content:
        "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
      name: "Ethan Caldwell",
      imgSrc: "/images/people-2.jpg",
      company: "NexaWave",
    },
    {
      content:
        "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
      name: "Liam Bennett",
      imgSrc: "/images/people-3.jpg",
      company: "CodeCraft",
    },
    {
      content:
        "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
      name: "Noah Williams",
      imgSrc: "/images/people-4.jpg",
      company: "BrightWeb",
    },
    {
      content:
        "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
      name: "Ava Thompson",
      imgSrc: "/images/people-5.jpg",
      company: "TechMosaic",
    },
    {
      content:
        "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
      name: "Jonathan",
      imgSrc: "/images/people-6.jpg",
      company: "Skyline Digital",
    },
  ];
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      x: "-1000",
      scrollTrigger: {
        trigger: ".scrub-slide",
        scrub: true,
      },
    });
  });

  return (
    <>
      <section className="section overflow-hidden" id="reviews">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>
          <div className="scrub-slide flex items-stretch gap-3 w-fit">
            {reviews.map((item, key) => (
              <ReviewCard
                content={item.content}
                name={item.name}
                imgSrc={item.imgSrc}
                company={item.company}
                key={key}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
