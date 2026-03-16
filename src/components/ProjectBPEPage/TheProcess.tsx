import { serifStyle, sansStyle } from "../../styles/fonts";

export default function BpeTheProcess() {
  return (
    <div id="bpeprocess" className="w-full flex flex-col items-center">
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

          <div className="flex flex-col gap-5 pt-10">
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

          <div className="flex flex-col gap-5 pt-10">
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
          <div className="flex w-full gap-5 justify-between">
            <div>
              <img src="/images/ProjectBPE/BookletCover.png" />
            </div>
            <div>
              <img src="/images/ProjectBPE/BookletContent1.png" />
            </div>
            <div>
              <img src="/images/ProjectBPE/BookletContent2.png" />
            </div>
          </div>
          <div className="flex w-full gap-10 justify-between">
            <div className="w-1/3">
              <img src="/images/ProjectBPE/WelcomeSign.png" />
            </div>
            <div className="flex flex-col w-3/4 justify-between ">
              <div className="flex w-full justify-between gap-10">
                <div className="w-1/2">
                  <img src="/images/ProjectBPE/Card1.png" />
                </div>
                <div className="w-1/2">
                  <img src="/images/ProjectBPE/Card2.png" />
                </div>
                <div className="w-1/2">
                  <img src="/images/ProjectBPE/Card3.png" />
                </div>
                <div className="w-1/2">
                  <img src="/images/ProjectBPE/CardBack.png" />
                </div>
              </div>
              <div className="flex w-full gap-10 justify-between items-end">
                <div className="">
                  <img
                    src="/images/ProjectBPE/IslandSign.png"
                    className="w-630"
                  />
                </div>
                <div className="">
                  <img src="/images/ProjectBPE/MentorGuide.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
