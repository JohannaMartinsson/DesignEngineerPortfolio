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
        </div>

        <div className="pt-16 pb-14 flex justify-between gap-20">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-3xl uppercase" style={serifStyle}>
              Business value
            </h3>
            <ul
              className="text-xl flex flex-col gap-1 list-disc pl-6"
              style={sansStyle}
            >
              <li>
                Supports expansion into new markets by increasing
                competitiveness
              </li>
              <li>Increases adoption rates through improved functionalities</li>
              <li>
                Strengthens Hubexo’s brand identity with a modern design that
                boosts efficiency
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-3xl uppercase" style={serifStyle}>
              User value
            </h3>
            <ul
              className="text-xl flex flex-col gap-1 list-disc pl-6"
              style={sansStyle}
            >
              <li>
                User testing highlights the platform’s intuitive and easy-to-use
                workflows
              </li>
              <li>Combines multiple tools into one streamlined platform</li>
              <li>
                Provides clear overviews and notifications to keep users
                informed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
