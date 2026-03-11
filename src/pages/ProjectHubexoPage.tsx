import CTA from "../components/CTA";
import Nav from "../components/Nav";
import ProjectHero from "../components/Common/ProjectHero";
import HubexoOutcome from "../components/ProjectHubexoPage/Outcome";
import HubexoTheProcess from "../components/ProjectHubexoPage/TheProcess";
import { serifStyle, sansStyle } from "../styles/fonts";

const hubexoTitle = (
  <>
    <div className="flex items-end gap-1">
      <p className="text-5xl w-180 text-white uppercase" style={serifStyle}>
        Digitalizing
      </p>
      <p className="text-xl w-full text-white" style={sansStyle}>
        the
      </p>
    </div>
    <p className="text-5xl w-180 text-white uppercase" style={serifStyle}>
      Construction industry
    </p>
  </>
);

const description =
  "Hubexo, formerly Byggfakta Group, delivers software solutions that empowers decision-making in the construction industry.";
const backgroundText =
  "Hubexo needed support to re-activate a strategic initiative that had been stalled for two years and was critical to the company’s transformation into a global SaaS provider. In parallel, the organization faced challenges related to rigid hierarchies, siloed teams, and limited collaboration and knowledge sharing. The objective was to deliver a global e-Tendering SaaS product within an ambitious timeline while modernizing ways of working and laying the foundation for a scalable and product-driven organization.";

export default function ProjectHubexoPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-20">
        <ProjectHero
          id="hubexohero"
          title={hubexoTitle}
          image="/images/SelectionOfWork/ProjectHubexo.png"
          logo="/images/ProjectHubexo/Logo.png"
          description={description}
          backgroundText={backgroundText}
        />
        <HubexoTheProcess />
        <HubexoOutcome />
        <CTA />
      </main>
    </>
  );
}
