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
    slug: "nira-dynamics",
    image: "/images/SelectionOfWork/ProjectNIRA.png",
  },
  {
    title: "Netlight BPE",
    description: "Internal tooling for a consulting firm",
    slug: "netlight-bpe",
    image: "/images/SelectionOfWork/ProjectBPE.png",
  },
];

export default function SelectionOfWork() {
  return (
    <div id="work" className="w-full flex flex-col items-center">
      <div className="w-4/5 flex flex-col mb-20 gap-12">
        <h2
          className="text-4xl uppercase"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Selection of work
        </h2>

        <div className="flex justify-between w-full">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group cursor-pointer w-[27%]"
            >
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
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <p
                      className="text-xl"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
                <a
                  href={`#${project.slug}`}
                  className="text-md font-medium no-underline hover:underline transition-colors"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  See full project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
