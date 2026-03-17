import { serifStyle, sansStyle } from "../../styles/fonts";
import { useInView } from "../../hooks/useInView";

export default function BpeOutcome() {
  const [textRef, textVisible] = useInView();
  const [valuesRef, valuesVisible] = useInView();

  return (
    <div id="bpeoutcome" className="w-full flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center">
        <div
          ref={textRef}
          className={`flex flex-col gap-5 ${textVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-5xl uppercase" style={serifStyle}>
            The outcome
          </h2>

          <p className="text-xl" style={sansStyle}>
            The exhibition brought together all of Netlight Stockholm's 800+
            employees for an evening of engaging with the three-year business
            plan through storyboards, group discussions, and shared reflection.
            The full suite of designed material — from the storyboards and card
            decks to the posters, signage, and booklets — came together as a
            unified visual experience that carried the archipelago theme
            throughout the space while remaining grounded in the Netlight brand.
          </p>
          <p className="text-xl" style={sansStyle}>
            The planning group responded very positively and expressed clear
            appreciation for both the quality of the material and the way we had
            worked together, noting that the collaboration had been smooth and
            the output well-aligned with their vision. During and after the
            event, attendees fed back that the material felt engaging and
            purposeful — supporting the conversations they were meant to
            facilitate while also creating a strong sense of the themes at the
            heart of the business plan.
          </p>
        </div>

        <div
          ref={valuesRef}
          className="pt-16 pb-14 flex justify-between gap-20"
        >
          <div
            className={`flex flex-col gap-2 w-full ${valuesVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <h3 className="text-3xl uppercase" style={serifStyle}>
              Design value
            </h3>
            <ul
              className="text-xl flex flex-col gap-3 list-disc pl-6"
              style={sansStyle}
            >
              <li>
                Established a cohesive visual language that balanced the
                archipelago theme with Netlight's brand identity across a broad
                range of printed and digital materials
              </li>
              <li>
                Delivered a full suite of aligned deliverables — storyboards,
                card decks, posters, signage, booklets, stickers, and
                presentation support — within a tight timeline
              </li>
              <li>
                Created designs built to feel relevant and thematically resonant
                over the three-year span of the business plan
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-col gap-2 w-full ${valuesVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
          >
            <h3 className="text-3xl uppercase" style={serifStyle}>
              Event value
            </h3>
            <ul
              className="text-xl flex flex-col gap-3 list-disc pl-6"
              style={sansStyle}
            >
              <li>
                Material was received as engaging and useful by attendees,
                actively supporting group discussions and individual reflection
                during the evening
              </li>
              <li>
                The manifestation boards and sticker activity gave employees a
                tangible, personal connection to the themes of the business plan
              </li>
              <li>
                Positive feedback from both the planning group and event
                participants confirmed that the designs contributed meaningfully
                to the overall experience of the exhibition
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
