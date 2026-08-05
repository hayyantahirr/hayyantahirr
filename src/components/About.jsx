import React from "react";

function About() {
  const aboutItems = [
    {
      label: "Project delivered",
      number: 30,
    },
    {
      label: "Year of experience",
      number: 1,
    },
  ];
  return (
    <>
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              Hi, I’m Hayyan Tahir—a full-stack web developer, AI automation
              specialist, and A-Level student at Alpha College. trained in
              modern JavaScript frameworks (React, Next.js) and backend
              architecture, I build end-to-end web platforms and automated
              workflows powered by AI integration. My background balances
              hands-on technical execution—from database management to
              performance optimization—with the strategic perspective gained
              from managing digital platforms. I am eager to apply my skill set
              to ambitious projects that demand performant, scalable digital
              solutions.
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
