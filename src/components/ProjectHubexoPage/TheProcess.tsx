import { serifStyle, sansStyle } from "../../styles/fonts";
import { brown } from "../../styles/colors";
import { useInView } from "../../hooks/useInView";

export default function HubexoTheProcess() {
  const [headingRef, headingVisible] = useInView();
  const [step1Ref, step1Visible] = useInView();
  const [row1Ref, row1Visible] = useInView(0.1);
  const [row2Ref, row2Visible] = useInView(0.1);
  const [row3Ref, row3Visible] = useInView(0.2);
  const [step2Ref, step2Visible] = useInView();
  const [flowImage1Ref, flowImage1Visible] = useInView<HTMLImageElement>(0.1);
  const [flowImage2Ref, flowImage2Visible] = useInView<HTMLImageElement>(0.1);

  return (
    <div id="hubexoprocess" className="w-full flex flex-col items-center">
      <div
        className="w-full flex flex-col items-center"
        style={{ backgroundColor: brown }}
      >
        <div className="py-20 w-4/5 flex flex-col gap-10 text-white">
          <h2
            ref={headingRef}
            className={`text-5xl uppercase ${headingVisible ? "animate-fade-up" : "opacity-0"}`}
            style={serifStyle}
          >
            The process
          </h2>

          <div
            ref={step1Ref}
            className={`flex flex-col gap-5 ${step1Visible ? "animate-fade-up" : "opacity-0"}`}
          >
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

          <div className="flex flex-col gap-12 pt-10">
            {/* Row 1: tall card left, stacked cards right */}
            <div
              ref={row1Ref}
              className="flex w-full h-70 items-start justify-between"
            >
              <img
                src="/images/ProjectHubexo/MarketTenderCard.png"
                className={`h-full ${row1Visible ? "animate-fade-left" : "opacity-0"}`}
              />
              <div className="flex flex-col h-full justify-between w-[70%]">
                {[
                  "TenderCardDraft",
                  "TenderCardPublished",
                  "TenderCardReview",
                  "TenderCardAwarded",
                ].map((name, i) => (
                  <img
                    key={name}
                    src={`/images/ProjectHubexo/${name}.png`}
                    className={`w-full ${row1Visible ? "animate-fade-right" : "opacity-0"}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Row 2: two screenshots side by side */}
            <div
              ref={row2Ref}
              className="flex w-full items-start justify-between"
            >
              <img
                src="/images/ProjectHubexo/Dashboard.png"
                className={`w-[48%] ${row2Visible ? "animate-fade-left" : "opacity-0"}`}
              />
              <img
                src="/images/ProjectHubexo/ProjectDetailsOverview.png"
                className={`w-[48%] ${row2Visible ? "animate-fade-right" : "opacity-0"}`}
                style={{ animationDelay: "150ms" }}
              />
            </div>

            {/* Row 3: centered card */}
            <div ref={row3Ref} className="flex w-full justify-center">
              <img
                src="/images/ProjectHubexo/ProjectCard.png"
                className={row3Visible ? "animate-fade-up" : "opacity-0"}
              />
            </div>
          </div>

          <div
            ref={step2Ref}
            className={`flex flex-col gap-5 pt-10 ${step2Visible ? "animate-fade-up" : "opacity-0"}`}
          >
            <h3 className="text-3xl uppercase" style={serifStyle}>
              02 Continuing the work
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xl" style={sansStyle}>
                As the team later transitioned and was downsized, I became the
                sole designer. This required me to take full responsibility for
                all design work and independently manage every aspect of the
                design process. By bridging design and development, I
                accelerated feature delivery and strengthened the product's
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

          <img
            ref={flowImage1Ref}
            src="/images/ProjectHubexo/SignupFlow.png"
            className={`w-full ${flowImage1Visible ? "animate-fade-left" : "opacity-0"}`}
          />
          <img
            ref={flowImage2Ref}
            src="/images/ProjectHubexo/Ownerflow.png"
            className={`w-full ${flowImage2Visible ? "animate-fade-right" : "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
}
