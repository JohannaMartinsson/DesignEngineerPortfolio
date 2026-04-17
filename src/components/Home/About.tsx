import { useEffect, useRef, useState } from "react";
import { serifStyle, sansStyle } from "../../styles/fonts";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="py-30 px-12 flex flex-col items-center">
      <div
        ref={ref}
        className="w-4/5 flex flex-row justify-between items-center"
      >
        <div
          className={`shrink-0 ${
            isVisible ? "animate-fade-left" : "opacity-0"
          }`}
        >
          <div
            className="w-85 h-140 overflow-hidden rotate-18"
            style={{ borderRadius: "50% / 50%" }}
          >
            <img
              src="/images/Jagmedm%C3%A5stavla.jpg"
              alt="Johanna Martinsson"
              className="w-full h-full object-cover -rotate-18 scale-108"
            />
          </div>
        </div>

        <div className="flex flex-col w-170 pt-10">
          <p
            className={`text-xl ${
              isVisible ? "animate-fade-right" : "opacity-0"
            }`}
            style={{ ...sansStyle, animationDelay: "100ms" }}
          >
            My passion lies in building products at the intersection of design
            and development. With experience across fast-moving start-ups and
            large cross-functional teams, I've collaborated closely with
            designers, engineers, and product leaders to bring concepts from
            early sketches all the way to production (and beyond).
          </p>
          <p
            className={`pt-4 text-xl ${
              isVisible ? "animate-fade-right" : "opacity-0"
            }`}
            style={{ ...sansStyle, animationDelay: "250ms" }}
          >
            I'm driven by curiosity, craftsmanship and a love for creating
            things that people actually use — whether I'm designing a new
            feature, painting on a canvas, or shaping clay into what will
            probably become another coffee mug.
          </p>
          <div
            className={`w-full text-end pt-4 ${
              isVisible ? "animate-fade-right" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="text-2xl font-bold" style={serifStyle}>
              Johanna Martinsson
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
