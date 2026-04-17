import { serifStyle, sansStyle } from "../../styles/fonts";
import { brown } from "../../styles/colors";
import { useInView } from "../../hooks/useInView";
import bookletCover from "../../assets/images/ProjectBPE/BookletCover.png";
import bookletContent1 from "../../assets/images/ProjectBPE/BookletContent1.png";
import bookletContent2 from "../../assets/images/ProjectBPE/BookletContent2.png";
import welcomeSign from "../../assets/images/ProjectBPE/WelcomeSign.png";
import card1 from "../../assets/images/ProjectBPE/Card1.png";
import card2 from "../../assets/images/ProjectBPE/Card2.png";
import card3 from "../../assets/images/ProjectBPE/Card3.png";
import cardBack from "../../assets/images/ProjectBPE/CardBack.png";
import islandSign from "../../assets/images/ProjectBPE/IslandSign.png";
import mentorGuide from "../../assets/images/ProjectBPE/MentorGuide.png";

const cards: Record<string, string> = {
  Card1: card1,
  Card2: card2,
  Card3: card3,
  CardBack: cardBack,
};

export default function BpeTheProcess() {
  const [headingRef, headingVisible] = useInView();
  const [step1Ref, step1Visible] = useInView();
  const [step2Ref, step2Visible] = useInView();
  const [step3Ref, step3Visible] = useInView();
  const [images1Ref, images1Visible] = useInView(0.1);
  const [images2Ref, images2Visible] = useInView(0.05);

  return (
    <div id="bpeprocess" className="w-full flex flex-col items-center">
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
              01 Understanding the theme
            </h3>
            <p className="text-xl" style={sansStyle}>
              The starting point was immersing ourselves in the thinking behind
              the business plan and its theme — the Stockholm archipelago. This
              year's plan was special in that it set a three-year direction
              rather than the usual one-year scope, which meant the designs
              needed to feel enduring and thematically coherent over time. We
              spoke with the stakeholders who had shaped the plan, listened
              carefully to their vision, and gathered input from the planning
              group responsible for organizing the event itself.
            </p>
          </div>

          <div
            ref={step2Ref}
            className={`flex flex-col gap-5 pt-10 ${step2Visible ? "animate-fade-up" : "opacity-0"}`}
          >
            <h3 className="text-3xl uppercase" style={serifStyle}>
              02 Navigating the creative brief
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xl" style={sansStyle}>
                One of the central challenges was finding the right balance
                between two distinct visual directions. The stakeholders were
                passionate about leaning into the archipelago aesthetic —
                sunset-inspired gradients, line art illustrations, and motifs
                evoking Swedish summer evenings. At the same time, all material
                needed to align with Netlight's established brand identity.
                These two directions didn't naturally complement each other, so
                a significant part of our process involved exploring how to
                honour both without compromising either.
              </p>
              <p className="text-xl" style={sansStyle}>
                We developed the visual language iteratively in Figma, testing
                how far we could push the archipelago elements while keeping the
                result clearly recognizable as Netlight. Through ongoing
                dialogue with stakeholders and the planning group, we refined
                the direction until we had a cohesive system to work from.
              </p>
            </div>
          </div>

          <div
            ref={step3Ref}
            className={`flex flex-col gap-5 pt-10 ${step3Visible ? "animate-fade-up" : "opacity-0"}`}
          >
            <h3 className="text-3xl uppercase" style={serifStyle}>
              03 Producing the material
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xl" style={sansStyle}>
                With the visual direction established, the three of us divided
                responsibility across the full scope of deliverables —
                storyboards, a card deck of discussion questions, a mentor
                facilitation guide, marketing posters, a booklet explaining the
                business plan, reflection stickers for manifestation boards,
                area signs, an office map, a welcome sign, and support for the
                PowerPoint presentation. While ownership was distributed, we
                stayed closely aligned throughout, reviewing each other's work
                and ensuring that every piece felt like part of the same family.
              </p>
              <p className="text-xl" style={sansStyle}>
                Working within a tight timeline meant that our collaboration had
                to be efficient and trust-based. We co-owned the output
                collectively rather than treating individual pieces as separate
                assignments, which kept the material cohesive and allowed us to
                move quickly.
              </p>
            </div>
          </div>

          {/* Booklet row: left from left, middle up, right from right */}
          <div ref={images1Ref} className="flex w-full gap-5 justify-between">
            <div className={images1Visible ? "animate-fade-left" : "opacity-0"}>
              <img src={bookletCover} />
            </div>
            <div
              className={images1Visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: "150ms" }}
            >
              <img src={bookletContent1} />
            </div>
            <div
              className={images1Visible ? "animate-fade-right" : "opacity-0"}
              style={{ animationDelay: "300ms" }}
            >
              <img src={bookletContent2} />
            </div>
          </div>

          {/* Complex row: welcome sign left, cards cascade up, bottom row split */}
          <div ref={images2Ref} className="flex w-full gap-10 justify-between">
            <div
              className={`w-1/3 ${images2Visible ? "animate-fade-left" : "opacity-0"}`}
            >
              <img src={welcomeSign} />
            </div>
            <div className="flex flex-col w-3/4 justify-between">
              <div className="flex w-full justify-between gap-10">
                {["Card1", "Card2", "Card3", "CardBack"].map((name, i) => (
                  <div
                    key={name}
                    className={`w-1/2 ${images2Visible ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <img src={cards[name]} />
                  </div>
                ))}
              </div>
              <div className="flex w-full gap-10 justify-between items-end">
                <div
                  className={images2Visible ? "animate-fade-left" : "opacity-0"}
                  style={{ animationDelay: "200ms" }}
                >
                  <img
                    src={islandSign}
                    className="w-630"
                  />
                </div>
                <div
                  className={images2Visible ? "animate-fade-right" : "opacity-0"}
                  style={{ animationDelay: "300ms" }}
                >
                  <img src={mentorGuide} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
