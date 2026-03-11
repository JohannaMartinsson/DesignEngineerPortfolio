import Nav from "../components/Nav";
import { serifStyle, sansStyle } from "../styles/fonts";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <div
          id="contact"
          className="w-full h-screen flex flex-col items-center"
          style={{ backgroundColor: "#241a14" }}
        >
          <div className="w-4/5 flex justify-between">
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-3 mt-48">
                <p className="text-2xl w-full text-white" style={sansStyle}>
                  Need someone to bridge the gap between
                </p>
                <div className="flex gap-3 items-end">
                  <h1
                    className="uppercase text-7xl text-white"
                    style={serifStyle}
                  >
                    designers
                  </h1>

                  <p className="text-2xl w-full text-white " style={sansStyle}>
                    and
                  </p>
                </div>

                <h1
                  className="uppercase text-7xl text-white"
                  style={serifStyle}
                >
                  developers
                </h1>

                <p className="text-2xl w-full text-white" style={sansStyle}>
                  in your organisation?
                </p>
              </div>

              <p className="text-2xl w-full text-white" style={sansStyle}>
                Let's grab a coffee (maybe in a fancy handmade mug)!
              </p>
              <div className="flex flex-col gap-1 pt-6">
                <p className="text-2xl w-full text-white" style={sansStyle}>
                  johanna.martinsson@netlight.com
                </p>
                <a
                  href="https://www.linkedin.com/in/johanna-martinsson-f-d-lundin-33889514a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white underline"
                  style={sansStyle}
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="shrink-0 self-end mr-20 mt-35">
              <div
                className="w-85 h-140 overflow-hidden rotate-18"
                style={{ borderRadius: "50% / 50%" }}
              >
                <img
                  src="/images/SelectionOfWork/Jagmedm%C3%A5stavla.jpg"
                  alt="Johanna Martinsson"
                  className="w-full h-full object-cover -rotate-18 scale-108"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
