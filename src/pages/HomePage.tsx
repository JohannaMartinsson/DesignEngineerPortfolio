import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import CTA from "../components/CTA";
import SelectionOfWork from "../components/SelectionOfWork";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <SelectionOfWork />
        <CTA />
      </main>
    </>
  );
}
