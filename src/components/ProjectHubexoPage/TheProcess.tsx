import { serifStyle, sansStyle } from "../../styles/fonts";

export default function HubexoTheProcess() {
  return (
    <div id="hubexoprocess" className="w-full flex flex-col items-center">
      <div
        className="w-full flex flex-col items-center"
        style={{ backgroundColor: "#241a14" }}
      >
        <div className="py-20 w-4/5 flex flex-col gap-10 text-white">
          <h2 className="text-5xl uppercase" style={serifStyle}>
            The process
          </h2>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl uppercase" style={serifStyle}>
              01 The MVP
            </h3>
            <p className="text-xl" style={sansStyle}>
              Johanna originally joined the project as a Frontend developer
              where she played a key role in building a new interface for a
              complex web-based e-Tendering application based on aggregated data
              for construction projects, tenders and companies within the
              building sector. In a fast-paced environment with tight deadlines,
              her work focused on creating a modern, responsive, and scalable
              frontend, which significantly improved usability and efficiency.
              As the project evolved, Johanna also became an active contributor
              to the design process, collaborating with designers on UI
              improvements, responsive layouts, and new features. She further
              supported the backlog of UX enhancements, ensuring a consistent
              and user-friendly experience across the platform.
            </p>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <h3 className="text-3xl uppercase" style={serifStyle}>
              02 The afterlife
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xl" style={sansStyle}>
                Later in the project, the team was downsized, leaving Johanna as
                the sole designer. This required her to take full responsibility
                for all design work and independently manage every aspect of the
                design process. By bridging design and development, Johanna
                accelerated feature delivery and strengthened the product’s
                overall quality,
              </p>
              <p className="text-xl" style={sansStyle}>
                At a later stage, Johanna also supported the platform team, on
                which the e-tendering platform had strong dependencies, helping
                them map out user flows for various user roles while also
                improving clarity and cohesiveness of the various user and
                company pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
