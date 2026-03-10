import { Link } from "react-router-dom";
import { serifStyle, sansStyle } from "../../styles/fonts";

const projects = [
  {
    title: "Hubexo",
    description: "Digitalizing the construction industry",
    slug: "hubexo",
    image: "/images/SelectionOfWork/ProjectHubexo.png",
  },
  {
    title: "NIRA Dynamics",
    description:
      "Ensuring driver safety when interacting with in-car touch screens",
    slug: "nira",
    image: "/images/SelectionOfWork/ProjectNIRA.png",
  },
  {
    title: "Netlight BPE",
    description: "Internal tooling for a consulting firm",
    slug: "bpe",
    image: "/images/SelectionOfWork/ProjectBPE.png",
  },
];

export default function SelectionOfWork() {
  return (
    <div id="work" className="w-full flex flex-col items-center">
      <div className="w-4/5 flex flex-col mb-20 gap-12">
        <h2
          className="text-5xl uppercase"
          style={serifStyle}
        >
          Selection of work
        </h2>

        <div className="flex justify-between w-full">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/${project.slug}`}
              className="block w-[25%] no-underline text-inherit"
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
                      <h3
                        className="text-4xl"
                        style={serifStyle}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div>
                      <p
                        className="text-xl"
                        style={sansStyle}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-md font-medium no-underline hover:underline transition-colors"
                    style={sansStyle}
                  >
                    See full project →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
