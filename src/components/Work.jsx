import ProjectCards from "./ProjectCards.jsx";

function Work() {
  const works = [
    {
      imgSrc: "/images/banner6.png",
      title: "zDemy",
      tags: ["NextJs", "MongoDB", "Figma", "Tailwind CSS", "express.js"],
      projectLink: "https://zdemy-ten.vercel.app/",
    },
    {
      imgSrc: "/images/banner.png",
      title: "LumenVerse",
      tags: ["ReactJs", "FireBase", "Redux", "Material Ui", "Tailwind CSS"],
      projectLink: "https://lumen-verse.vercel.app/",
    },
    {
      imgSrc: "/images/banner2.png",
      title: "Pizzeria Amore",
      tags: ["NextJs", "SupaBase", "Figma", "Tailwind CSS"],
      projectLink: "https://pizzeria-amore.vercel.app/",
    },
    {
      imgSrc: "/images/banner3.png",
      title: " Responsive Meme Generator",
      tags: ["Next.js", "TailwindCSS"],
      projectLink: "https://meme-generator-hazel-nine.vercel.app/",
    },
    {
      imgSrc: "/images/banner4.png",
      title: "Forged-Trivia",
      tags: ["React.Js", "Tailwind CSS"],
      projectLink: "https://forged-trivia.vercel.app/",
    },

    {
      imgSrc: "/images/banner5.png",
      title: "Grid Warriors",
      tags: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://grid-warriors.vercel.app/",
    },
    {
      imgSrc: "/images/banner1.png",
      title: "My Portfolio",
      tags: ["React.js", "Tailwind CSS", "Lenis"],
      projectLink: "https://hayyantahirr.vercel.app/",
    },
    {
      imgSrc: "/images/banner7.png",
      title: "VibeNest",
      tags: ["HTML", "CSS"],
      projectLink: "https://vibe-nest-theta.vercel.app/",
    },
    {
      imgSrc: "/images/banner8.png",
      title: "InkSpire",
      tags: ["HTML", "CSS"],
      projectLink: "https://inkspire-olive.vercel.app/",
    },
  ];
  return (
    <>
      <section id="work" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
          <div className="grid gap-x-3 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map((item, key) => (
              <ProjectCards
                imgSrc={item.imgSrc}
                title={item.title}
                tags={item.tags}
                projectLink={item.projectLink}
                key={key}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
