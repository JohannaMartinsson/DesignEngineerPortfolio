import Nav from "../components/Nav";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import CTA from "../components/CTA";
import SelectionOfWork from "../components/Home/SelectionOfWork";

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
