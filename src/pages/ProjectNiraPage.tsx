import CTA from "../components/CTA";
import Nav from "../components/Nav";
import NiraHero from "../components/ProjectNiraPage/Hero";
import NiraOutcome from "../components/ProjectNiraPage/Outcome";
import NiraTheProcess from "../components/ProjectNiraPage/TheProcess";

export default function ProjectNiraPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-20">
        <NiraHero />
        <NiraTheProcess />
        <NiraOutcome />
        <CTA />
      </main>
    </>
  );
}
