export default function NiraTheProcess() {
  return (
    <div id="niraprocess" className="w-full flex flex-col items-center">
      <div
        className="w-full flex flex-col items-center"
        style={{ backgroundColor: "#241a14" }}
      >
        <div className="py-20 w-4/5 flex flex-col gap-10 text-white">
          <h2
            className="text-4xl uppercase"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The process
          </h2>

          <img src="/images/ProjectNIRA/ProcessImage.png" className="w-full" />

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl" style={{ fontFamily: "Georgia, serif" }}>
              01 Initial investigation
            </h3>
            <p className="text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
              During this project, Johanna worked broadly with both UX design
              and frontend development, owning the design process end-to-end.
              She collaborated closely with end users, i.e., the drivers, to
              identify issues with the tool, quickly familiarizing herself with
              its technical details, usage, and workflow to understand the root
              causes of their challenges. Her ability to rapidly grasp the
              system’s intricacies allowed her to draw effective conclusions
              about the key considerations for designing in-car software that
              prioritizes usability and safety.
            </p>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <h3 className="text-3xl" style={{ fontFamily: "Georgia, serif" }}>
              02 Iterative prototyping
            </h3>
            <div className="flex flex-col gap-4">
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Based on the insights from the initial investigation, Johanna
                iteratively developed a new interface design in Figma, refining
                it based on safety and usability requirements.
              </p>
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                The first iteration focused on evaluating the original interface
                through semi-structured user interviews with NIRA Dynamic’s own
                drivers to draw conclusions about usage, limitations and
                experienced issues. Based on these insights, two new design
                mock-ups were developed in Figma.
              </p>
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                The second iteration aimed to evaluate the mock-ups from the
                first iteration and create a final design suggestion. A focus
                group was gathered to discuss the two design alternatives and
                conclusions could be drawn about what to adjust in the final
                prototype, which served as a basis for look and functionality of
                the prototype implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 flex flex-col gap-10 py-20">
        <div className="flex items-center gap-5">
          <p
            className="text-md w-1/4 text-center"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Going from an original interface cramped with unnecessary
            components...
          </p>
          <img src="/images/ProjectNIRA/GdasOriginal.png" className="w-1/5" />
        </div>
        <img src="/images/ProjectNIRA/v2alt1.png" className="w-1/2 self-end" />
        <img src="/images/ProjectNIRA/v2alt2.png" className="w-3/4" />
        <img src="/images/ProjectNIRA/FinalAllFrames.png" className="w-full" />
      </div>

      <div
        className="w-full flex flex-col items-center"
        style={{ backgroundColor: "#241a14" }}
      >
        <div className="py-20 w-4/5 flex flex-col gap-10 text-white">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl" style={{ fontFamily: "Georgia, serif" }}>
              03 Implementation
            </h3>
            <p className="text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
              A frontend prototype was implemented using Vue.js with JavaScript,
              resulting in a new user interface of the product, carefully
              aligned with the findings from the design iterations and
              literature
            </p>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <h3 className="text-3xl" style={{ fontFamily: "Georgia, serif" }}>
              04 User testing & evaluation
            </h3>
            <div className="flex flex-col gap-4">
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                To evaluate the frontend prototype and compare it to the
                original design, two types ot user tests were conducted.
              </p>
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                The first test group performed driving tests where they drove
                around a pre-defined path while performing a set of tasks using
                the system - once with the original design and once with the new
                interface. At the end of each round the user filled in a SUS
                (System Usability Scale) questionnaire and at the end of the
                test, after finishing both rounds, the users also answered open
                ended questions to gather qualitative data.
              </p>
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                The second test group conducted think-aloud tests, using only
                the new interface, where they drove the same route and conducted
                the same tasks as in the regular driving tests but while also
                thinking aloud about their interactions with the system. These
                users also filled in the SUS questionnaire and answered
                corresponding open ended questions, adjusted to that they only
                tested the new interface.
              </p>
            </div>
          </div>
          <div className="pt-10 flex justify-center gap-30">
            <div className="flex flex-col items-center gap-5 ">
              <h3 className="text-7xl" style={{ fontFamily: "Georgia, serif" }}>
                52
              </h3>
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Average SUS score for original interface
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 ">
              <h3 className="text-7xl" style={{ fontFamily: "Georgia, serif" }}>
                89
              </h3>
              <p
                className="text-xl"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Average SUS score for new interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
