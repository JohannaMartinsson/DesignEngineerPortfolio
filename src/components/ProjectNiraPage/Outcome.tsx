import { serifStyle, sansStyle } from "../../styles/fonts";

export default function NiraOutcome() {
  return (
    <div id="niraoutcome" className="w-full flex flex-col items-center ">
      <div className="w-4/5 flex flex-col items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl uppercase" style={serifStyle}>
            The outcome
          </h2>

          <p className="text-xl" style={sansStyle}>
            The results from the user tests demonstrated significant
            improvements in perceived usability and safety compared to the
            original design. Balancing technical and design aspects while
            addressing user needs was key to delivering a safer, more
            usability-focused foundation for the system's future development.
          </p>
        </div>

        <div className="pt-16 pb-14 flex justify-between gap-20">
          <div className="flex gap-3 w-full">
            <h3 className="text-9xl" style={serifStyle}>
              “
            </h3>
            <p className="text-xl pt-7 italic" style={sansStyle}>
              The new interface was much clearer than the original. The original
              felt very messy and I really appreciated that it was easy to find
              needed information in the new one.
            </p>
          </div>
          <div className="flex gap-3 w-full">
            <h3 className="text-9xl" style={serifStyle}>
              “
            </h3>
            <p className="text-xl pt-7 italic" style={sansStyle}>
              It feels like a much safer product to use in traffic. It's much
              clearer with large buttons and you can easily see information
              without having to take your eyes off the road for too long.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
