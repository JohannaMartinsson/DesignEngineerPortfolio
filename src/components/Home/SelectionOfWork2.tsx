import { Link } from "react-router-dom";
import { serifStyle, sansStyle } from "../../styles/fonts";
import { brown } from "../../styles/colors";
import { useInView } from "../../hooks/useInView";

const projects = [
  {
    title: "Netlight Business Planning Exhibition",
    description:
      "Visualizing the business plan for Netlight Stockholm's 800+ employees",
    slug: "bpe",
    image: "/images/SelectionOfWork/ProjectBPE.png",
    tags: ["Marketing Material", "Graphical Design"],
    descWidth: 455,
    imageLeft: true,
  },
  {
    title: "NIRA Dynamics HMI",
    description:
      "Ensuring driver safety when interacting with in-car touch screens",
    slug: "nira",
    image: "/images/SelectionOfWork/ProjectNIRA.png",
    tags: ["Automotive Safety", "UX", "UI", "Frontend"],
    descWidth: 380,
    imageLeft: false,
  },
  {
    title: "Hubexo E-Tendering Platform",
    description: "Digitalizing the construction industry",
    slug: "hubexo",
    image: "/images/SelectionOfWork/ProjectHubexo.png",
    tags: ["Construction Tech", "Frontend", "UI"],
    descWidth: 415,
    imageLeft: true,
  },
];

function TypeTag({ label }: { label: string }) {
  return (
    <span
      className="flex items-center justify-center h-[22px] px-[10px] text-white text-[10px] tracking-[1px] uppercase whitespace-nowrap"
      style={{ ...sansStyle, backgroundColor: brown }}
    >
      {label}
    </span>
  );
}

export default function SelectionOfWork2() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div id="work" className="w-full flex flex-col items-center">
      <div ref={ref} className="w-4/5 flex flex-col mb-20 gap-12">
        <h2
          className={`text-5xl uppercase ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={serifStyle}
        >
          Selection of work
        </h2>

        <div className="flex flex-col gap-[10px]">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/${project.slug}`}
              className={`flex gap-6 items-end no-underline text-inherit ${
                project.imageLeft ? "" : "justify-end"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${150 + index * 150}ms` }}
            >
              {project.imageLeft && (
                <div className="w-[286px] h-[290px] shrink-0 rounded-t-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div
                className={`flex flex-col gap-4 ${
                  project.imageLeft ? "items-start" : "items-end"
                }`}
              >
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <TypeTag key={tag} label={tag} />
                  ))}
                </div>

                <h3
                  className={`text-[45px] leading-none uppercase tracking-[2.5px] max-w-[563px] ${
                    project.imageLeft ? "" : "text-right"
                  }`}
                  style={serifStyle}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-[20px] leading-[20px] ${
                    project.imageLeft ? "" : "text-right"
                  }`}
                  style={{ ...sansStyle, maxWidth: project.descWidth }}
                >
                  {project.description}
                </p>
              </div>

              {!project.imageLeft && (
                <div className="w-[286px] h-[290px] shrink-0 rounded-t-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
