import ProjectCards from "./ProjectCards.jsx";

function Work() {
  const works = [
    {
      imgSrc: "/images/React Ecommerce.jpg",
      title: "Ecommerce App with Redux",
      tags: ["React.Js", "Node.Js", "MongoDB"],
      projectLink: "https://react-ecommerce-detail.vercel.app/",
    },

    {
      imgSrc: "/images/MemeVerse.jpg",
      title: " Responsive Meme Generator",
      tags: ["Next.js", "TailwindCSS"],
      projectLink: "https://meme-generator-hazel-nine.vercel.app/",
    },
    {
      imgSrc: "/images/Portfolio.jpg",
      title: "My Portfolio",
      tags: ["React.js", "Tailwind CSS", "Lenis"],
      projectLink: "https://hayyantahirr.vercel.app/",
    },
    {
      imgSrc: "/images/Quiz App.jpg",
      title: "Forged-Trivia",
      tags: ["React.Js", "Tailwind CSS"],
      projectLink: "https://forged-trivia.vercel.app/",
    },
    {
      imgSrc: "/images/Grid Warriors.jpg",
      title: "Grid Warriors",
      tags: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://grid-warriors.vercel.app/",
    },
    {
      imgSrc: "/images/Age Calculator.jpg",
      title: "Functional Age Calculator",
      tags: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://age-calculator-virid-iota.vercel.app/",
    },
  ];
  return (
    <>
      <section id="work" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
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
