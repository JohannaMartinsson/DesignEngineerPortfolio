import { useEffect, useRef, useState } from "react";
import { serifStyle, sansStyle } from "../styles/fonts";
import { brown } from "../styles/colors";
import coffeeMug from "../assets/images/CoffeeMug.png";

export default function CTA() {
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
    <div
      id="cta"
      className="w-full py-8 flex flex-col items-center justify-center"
      style={{ backgroundColor: brown }}
    >
      <div ref={ref} className="w-4/5 flex items-stretch justify-between">
        <div
          className={`flex flex-col gap-8 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-xl w-full text-white" style={sansStyle}>
                Need someone to bridge the gap between
              </p>
              <div className="flex gap-3 items-end">
                <h1
                  className="uppercase text-4xl text-white min-w-fit"
                  style={serifStyle}
                >
                  designers
                </h1>
                <p className="text-xl w-full text-white" style={sansStyle}>
                  and
                </p>
                <h1
                  className="uppercase text-4xl text-white"
                  style={serifStyle}
                >
                  developers
                </h1>
              </div>

              <p className="text-xl w-full text-white" style={sansStyle}>
                in your organisation?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl w-full text-white" style={sansStyle}>
              Let's grab a coffee (maybe in a fancy handmade mug)!
            </p>
            <a
              href="https://www.linkedin.com/in/johanna-martinsson-f-d-lundin-33889514a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white underline"
              style={sansStyle}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className={`rounded-full overflow-hidden ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "150ms" }}
        >
          <img
            src={coffeeMug}
            alt="Johanna Martinsson"
            className="h-55 w-55 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
