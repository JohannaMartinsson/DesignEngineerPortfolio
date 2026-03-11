import { serifStyle, sansStyle } from "../../styles/fonts";

export default function HubexoOutcome() {
  return (
    <div id="hubexooutcome" className="w-full flex flex-col items-center ">
      <div className="w-4/5 flex flex-col items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl uppercase" style={serifStyle}>
            The outcome
          </h2>

          <p className="text-xl" style={sansStyle}>
            The e-tendering platform was implemented with improved workflows and
            updated views to make it adaptable to different markets, providing
            an efficient solution for those planning and sourcing talent for
            their projects, as well as for subcontractors aiming to secure new
            work opportunities.
          </p>
          <p className="text-xl" style={sansStyle}>
            The mapping of platform user flows enhanced clarity for developers,
            making it easier to understand flows and user types while also
            providing material for discussing design and implementation details
            in a better way. By bridging the gap between design and frontend,
            I improved the collaboration in the team and my work provided a
            thorough basis for future development.
          </p>
        </div>

        <div className="pt-16 pb-14 flex justify-between gap-20">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-3xl uppercase" style={serifStyle}>
              Business value
            </h3>
            <ul
              className="text-xl flex flex-col gap-3 list-disc pl-6"
              style={sansStyle}
            >
              <li>
                Enhanced Hubexo’s competitive positioning through a modern,
                user-centric interface that distinguishes their solution from
                legacy platforms
              </li>
              <li>
                Improved developer clarity and team collaboration through clear
                user flow mapping and bridging design-development gaps, leading
                to faster, higher-quality execution
              </li>
              <li>
                Established a strong foundation for future platform
                enhancements, making it easier to address diverse regional
                requirements and support ongoing company growth.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-3xl uppercase" style={serifStyle}>
              User value
            </h3>
            <ul
              className="text-xl flex flex-col gap-3 list-disc pl-6"
              style={sansStyle}
            >
              <li>
                Delivered a more cohesive and intuitive tendering experience,
                addressing fragmentation and usability pain points that existing
                solutions failed to resolve.
              </li>
              <li>
                Significantly improved user efficiency by providing clear,
                responsive layouts and streamlined user flows for different
                roles within the building sector.
              </li>
              <li>
                Responded directly to user needs by quickly implementing UI
                improvements based on feedback throughout the design and
                development process.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
