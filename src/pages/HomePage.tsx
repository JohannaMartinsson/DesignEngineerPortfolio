import Nav from "../components/Nav";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import CTA from "../components/CTA";
import SelectionOfWork2 from "../components/Home/SelectionOfWork2";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <SelectionOfWork2 />
        <CTA />
      </main>
    </>
  );
}
