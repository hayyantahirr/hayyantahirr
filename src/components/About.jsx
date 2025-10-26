import React from "react";

function About() {
  const aboutItems = [
    {
      label: "Project delivered",
      number: 30,
    },
    {
      label: "Months of experience",
      number: 8,
    },
  ];
  return (
    <>
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              Hello! I'm Hayyan Tahir, a driven individual with a strong
              foundation in modern web development. I'm proficient in key
              frameworks like React and Next.js, plus JavaScript, with all
              technical learning coming directly from Expertizo. I'm currently
              pursuing my O Levels at Alpha High School, focused on rigorous
              STEM disciplines that greatly sharpen my analytical and technical
              skills. My blend of development expertise and academic focus makes
              me a valuable and well-rounded contributor. I'm eager to bring my
              enthusiasm and skills to your team. Let's build something great
              together—add me to your roster!
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map((item, key) => {
                return (
                  <div key={key}>
                    <div className="flex items-center md:mb-2">
                      <span className="text-2xl font-bold md:text-4xl ">
                        {item.number}
                      </span>
                      <span className="text-red-400 font-semibold md:text-3xl">
                        +
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400">{item.label}</p>
                  </div>
                );
              })}
              <img
                src="/images/ht_white_bold.svg"
                alt="logo"
                width={60}
                height={30}
                className="ml-auto md:w-[70px] md:h-[70px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
