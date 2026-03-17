import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { serifStyle, sansStyle } from "../../styles/fonts";

const projects = [
  {
    title: "Netlight Business Planning Exhibition",
    description:
      "Visualizing the business plan for Netlight Stockholm’s 800+ employees",
    slug: "bpe",
    image: "/images/SelectionOfWork/ProjectBPE.png",
  },
  {
    title: "NIRA Dynamics",
    description:
      "Ensuring driver safety when interacting with in-car touch screens",
    slug: "nira",
    image: "/images/SelectionOfWork/ProjectNIRA.png",
  },
  {
    title: "Hubexo",
    description: "Digitalizing the construction industry",
    slug: "hubexo",
    image: "/images/SelectionOfWork/ProjectHubexo.png",
  },
];

export default function SelectionOfWork() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="work" className="w-full flex flex-col items-center">
      <div ref={ref} className="w-4/5 flex flex-col mb-20 gap-12">
        <h2
          className={`text-5xl uppercase ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={serifStyle}
        >
          Selection of work
        </h2>

        <div className="flex justify-between w-full">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/${project.slug}`}
              className={`block w-[30%] no-underline text-inherit ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${150 + index * 150}ms` }}
            >
              <article className="group cursor-pointer h-full">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-5 mb-8">
                    <div className="w-full aspect-7/8 overflow-hidden rounded-t-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-4xl" style={serifStyle}>
                        {project.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-xl" style={sansStyle}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
