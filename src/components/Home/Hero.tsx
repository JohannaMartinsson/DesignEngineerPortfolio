import type { CSSProperties } from "react";
import { useState, useEffect } from "react";
import { serifStyle, sansStyle } from "../../styles/fonts";
import { brown } from "../../styles/colors";
import potteryStudio from "../../assets/images/PotteryStudio.png";
import jagOchAbbeImg from "../../assets/images/JagOchAbbe.jpg";

const fadeUp = (delay: number): CSSProperties => ({
  animationDelay: `${delay}ms`,
});

const slides = [
  {
    image: potteryStudio,
    text: "…or in a pottery studio, working on yet another coffee mug.",
  },
  {
    image: jagOchAbbeImg,
    text: "…or out on a walk with Albert.",
  },
];

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let active = true;

    async function run() {
      // Fade in first slide
      setVisible(true);

      while (active) {
        await new Promise<void>((res) => setTimeout(res, 3000));
        if (!active) return;
        setVisible(false);
        await new Promise<void>((res) => setTimeout(res, 800));
        if (!active) return;
        setSlideIndex((i) => (i + 1) % slides.length);
        setVisible(true);
      }
    }

    run();
    return () => {
      active = false;
    };
  }, []);

  const slide = slides[slideIndex];

  return (
    <div
      id="home"
      className="min-h-180 w-full flex flex-col justify-center items-center gap-6"
      style={{ backgroundColor: brown }}
    >
      <div className="w-4/5 min-h-100 flex justify-between gap-5 pt-10">
        <div className="flex flex-col gap-16">
          <h1
            className="text-4xl text-white uppercase animate-fade-up"
            style={{ ...serifStyle, ...fadeUp(0) }}
          >
            Hi, I'm Johanna
          </h1>
          <div
            className="flex flex-col gap-2 animate-fade-up"
            style={fadeUp(150)}
          >
            <p className="text-2xl w-full text-white" style={sansStyle}>
              You'll find me where
            </p>
            <div className="flex gap-6 items-end">
              <h1
                className="uppercase text-7xl text-white min-w-fit"
                style={serifStyle}
              >
                creative design
              </h1>
              <p className="text-2xl w-full text-white" style={sansStyle}>
                meets
              </p>
            </div>
            <h1 className="uppercase text-7xl text-white" style={serifStyle}>
              technical expertise
            </h1>
          </div>
        </div>

        <div
          className="w-70 h-fit self-end animate-fade-up"
          style={fadeUp(300)}
        >
          <div
            className="w-full aspect-7/8 overflow-hidden rounded-t-full"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
          >
            <img src={slide.image} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-4/5 animate-fade-up" style={fadeUp(450)}>
        <p
          className="text-2xl w-full text-end text-white"
          style={{
            ...sansStyle,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          {slide.text}
        </p>
      </div>
    </div>
  );
}
