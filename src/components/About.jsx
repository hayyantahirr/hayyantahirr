import React from "react";

function About() {
  const aboutItems = [
    {
      label: "Project done",
      number: 20,
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
              Welcome! I’m Hayyan Tahir, a passionate and professional web
              developer currently studying in the Pre-Engineering field at Alpha
              High School. I specialize in building visually stunning and highly
              functional websites using modern technologies like React.js,
              Next.js, Firebase, Tailwind CSS, and DaisyUI. With a strong
              foundation in JavaScript and a creative eye for design, I
              transform ideas into digital experiences that are both beautiful
              and high-performing. I take pride in writing clean, efficient code
              and crafting responsive, user-friendly interfaces. Whether you're
              looking to collaborate on a project or need a reliable developer
              to bring your vision to life, I’m always open to new opportunities
              and challenges. Let’s build something great together!
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
