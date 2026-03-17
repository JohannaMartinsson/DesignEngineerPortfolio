import type { ReactNode } from "react";
import { serifStyle, sansStyle } from "../../styles/fonts";
import { brown } from "../../styles/colors";
import { useInView } from "../../hooks/useInView";

interface ProjectHeroProps {
  id: string;
  title: ReactNode;
  image: string;
  logo: string;
  description: string;
  backgroundText: string;
}

export default function ProjectHero({
  id,
  title,
  image,
  logo,
  description,
  backgroundText,
}: ProjectHeroProps) {
  const [infoRef, infoVisible] = useInView(0.2);
  const [bgRef, bgVisible] = useInView(0.2);

  return (
    <div
      id={id}
      className="w-full flex flex-col justify-center items-center gap-18"
    >
      <div
        className="w-full h-130 flex items-center justify-center overflow-visible"
        style={{ backgroundColor: brown }}
      >
        <div className="w-4/5 flex justify-between items-center">
          <div className="flex flex-col gap-1 animate-fade-up">
            {title}
          </div>

          <div
            className="relative z-10 mt-60 w-110 aspect-7/8 overflow-hidden rounded-t-full border-5 border-white shrink-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <img src={image} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="w-4/5 flex flex-col gap-24">
        <div
          ref={infoRef}
          className={`flex flex-col gap-8 ${infoVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="w-40">
            <img src={logo} className="w-full h-full" />
          </div>
          <p className="text-xl" style={sansStyle}>
            {description}
          </p>
        </div>

        <div
          ref={bgRef}
          className={`flex flex-col gap-5 ${bgVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h1 className="text-5xl uppercase" style={serifStyle}>
            The background
          </h1>
          <p className="text-xl" style={sansStyle}>
            {backgroundText}
          </p>
        </div>
      </div>
    </div>
  );
}
