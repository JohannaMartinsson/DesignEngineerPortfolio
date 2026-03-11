import CTA from "../components/CTA";
import Nav from "../components/Nav";
import ProjectHero from "../components/Common/ProjectHero";
import NiraOutcome from "../components/ProjectNiraPage/Outcome";
import NiraTheProcess from "../components/ProjectNiraPage/TheProcess";
import { serifStyle, sansStyle } from "../styles/fonts";

const niraTitle = (
  <>
    <p className="text-xl w-full text-white" style={sansStyle}>
      Ensuring
    </p>
    <p className="text-5xl w-180 text-white uppercase" style={serifStyle}>
      driver safety
    </p>
    <p className="text-xl w-full text-white" style={sansStyle}>
      when interacting with
    </p>
    <p className="text-5xl w-180 text-white uppercase" style={serifStyle}>
      HMI touch screens
    </p>
  </>
);

export default function ProjectNiraPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-20">
        <ProjectHero
          id="nirahero"
          title={niraTitle}
          image="/images/SelectionOfWork/ProjectNIRA.png"
          logo="/images/ProjectNIRA/Logo.svg"
          description="NIRA Dynamics develops innovative software solutions for automotive systems. The company aims to improve and modernize current technologies to fulfill today's standards for vehicle safety and performance."
          backgroundText="To increase the safety for their test drivers, NIRA was in need of investigating how their internal data acquisition tool could be improved and re-designed. This system was developed without considering safety and usability aspects, taking the engineer's perspective rather than the driver's, which was why improvements were necessary. The aim of the project was therefore to investigate how interfaces of in-car touch screens can be designed in order to ensure the safety of the driver when interacting with the system and at the same time maneuvering the car."
        />
        <NiraTheProcess />
        <NiraOutcome />
        <CTA />
      </main>
    </>
  );
}
