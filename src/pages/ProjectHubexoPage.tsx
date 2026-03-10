import CTA from "../components/CTA";
import Nav from "../components/Nav";
import HubexoHero from "../components/ProjectHubexoPage/Hero";
import HubexoOutcome from "../components/ProjectHubexoPage/Outcome";
import HubexoTheProcess from "../components/ProjectHubexoPage/TheProcess";

export default function ProjectHubexoPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-20">
        <HubexoHero />
        <HubexoTheProcess />
        <HubexoOutcome />
        <CTA />
      </main>
    </>
  );
}
