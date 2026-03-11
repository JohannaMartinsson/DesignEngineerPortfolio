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
              01 The e-tendering MVP
            </h3>
            <p className="text-xl" style={sansStyle}>
              I initially joined the project as a Frontend Developer, playing a
              key role in building a new, modern interface for the complex
              web-based e-Tendering application. Working with aggregated
              construction sector data and tight deadlines, I focused on
              delivering a responsive, usable, and scalable frontend that
              significantly enhanced user efficiency. As the project progressed,
              I expanded my contribution to design, collaborating closely on UI
              improvements, responsive layouts, and user experience enhancements
              to ensure platform consistency.
            </p>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <h3 className="text-3xl uppercase" style={serifStyle}>
              02 Continuing the work
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xl" style={sansStyle}>
                As the team later transitioned and was downsized, I became the
                sole designer. This required me to take full responsibility for
                all design work and independently manage every aspect of the
                design process. By bridging design and development, I
                accelerated feature delivery and strengthened the product’s
                overall quality.
              </p>
              <p className="text-xl" style={sansStyle}>
                At a later stage, I also supported the Platform team, on which
                the e-tendering product had strong dependencies, helping with
                mapping out user flows for various user roles while also
                improving clarity and cohesiveness of the various user and
                company pages.
              </p>
            </div>
          </div>
          <img src="/images/ProjectHubexo/SignupFlow.png" className="w-full" />
          <img src="/images/ProjectHubexo/Ownerflow.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
