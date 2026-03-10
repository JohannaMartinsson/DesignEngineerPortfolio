import { serifStyle, sansStyle } from "../../styles/fonts";

export default function HubexoHero() {
  return (
    <div
      id="hubexohero"
      className="w-full flex flex-col justify-center items-center gap-18"
    >
      <div
        className="w-full h-130 flex items-center justify-center overflow-visible"
        style={{ backgroundColor: "#241a14" }}
      >
        <div className="w-4/5 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="flex items-end gap-1">
              <p
                className="text-5xl w-180 text-white uppercase"
                style={serifStyle}
              >
                Digitalizing
              </p>
              <p className="text-xl w-full text-white" style={sansStyle}>
                the
              </p>
            </div>
            <p
              className="text-5xl w-180 text-white uppercase"
              style={serifStyle}
            >
              Construction industry
            </p>
          </div>

          <div className="relative z-10 mt-60 w-110 aspect-7/8 overflow-hidden rounded-t-full border-5 border-white shrink-0">
            <img
              src="/images/SelectionOfWork/ProjectHubexo.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-4/5 flex flex-col gap-24">
        <div className="flex flex-col gap-8">
          <div className="w-40">
            <img
              src="/images/ProjectHubexo/Logo.png"
              className="w-full h-full "
            />
          </div>
          <p className="text-xl" style={sansStyle}>
            Hubexo, formerly Byggfakta Group, delivers software solutions that
            empowers decision- making in the construction industry.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl uppercase" style={serifStyle}>
            The background
          </h1>
          <p className="text-xl" style={sansStyle}>
            Hubexo aimed to expand their presence in the e-Tendering market and
            compete with established industry leaders, with plans to launch
            their platform across Sweden, Switzerland, the UK, and Australia.
            However, the tendering landscape varied greatly across regions,
            making it fragmented and inconsistent. Existing solutions struggled
            to address user needs, and Hubexo required a platform that would not
            only scale globally but also fundamentally improve the tendering
            experience for users. This required a thorough redesign, with an MVP
            launch date set only four months ahead from the project's initial
            phase.
          </p>
        </div>
      </div>
    </div>
  );
}
