import CTA from "../components/CTA";
import Nav from "../components/Nav";
import ProjectHero from "../components/Common/ProjectHero";
import BpeTheProcess from "../components/ProjectBPEPage/TheProcess";
import BpeOutcome from "../components/ProjectBPEPage/Outcome";
import { serifStyle, sansStyle } from "../styles/fonts";
import bpeHeroImg from "../assets/images/SelectionOfWork/ProjectBPE.png";
import bpeLogoImg from "../assets/images/ProjectBPE/Logo.png";

const bpeTitle = (
  <>
    <p className="text-xl w-full text-white" style={sansStyle}>
      Visualizing the
    </p>
    <p className="text-5xl w-180 text-white uppercase" style={serifStyle}>
      Business plan
    </p>
    <p className="text-xl w-full text-white" style={sansStyle}>
      for Netlight Stockholm's
    </p>
    <p className="text-5xl w-180 text-white uppercase" style={serifStyle}>
      800+ employees
    </p>
  </>
);

export default function ProjectBpePage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-20">
        <ProjectHero
          id="bpehero"
          title={bpeTitle}
          image={bpeHeroImg}
          logo={bpeLogoImg}
          description="Netlight is an international consultancy company within IT, management and design. Since 1999 Netlight have helped leaders in the digital industry to realize business critical projects at the cutting edge of digitalization."
          backgroundText="Every year, Netlight Stockholm gathers its employees for the Business Planning Exhibition (BPE) — an evening where the company's plan for the year ahead is presented and explored together. This year's edition was different: rather than planning for a single year, Netlight set a three-year business plan for the first time, with its theme drawn from the Stockholm archipelago. The task was to translate that theme into a complete visual experience — one that could carry meaning across a three-year horizon while capturing the spirit of Swedish summer at sea."
        />
        <BpeTheProcess />
        <BpeOutcome />
        <CTA />
      </main>
    </>
  );
}
