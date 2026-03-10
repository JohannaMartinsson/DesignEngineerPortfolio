export default function NiraHero() {
  return (
    <div
      id="niraheader"
      className="w-full flex flex-col justify-center items-center gap-18"
    >
      <div
        className="w-full h-130 flex items-center justify-center overflow-visible"
        style={{ backgroundColor: "#241a14" }}
      >
        <div className="w-4/5 flex justify-between items-center">
          <h1
            className="text-7xl w-200 text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ensuring driver safety when interacting with in-car touch screens
          </h1>

          <div className="relative z-10 mt-60 w-110 aspect-7/8 overflow-hidden rounded-t-full border-5 border-white shrink-0">
            <img
              src="/images/SelectionOfWork/ProjectNIRA.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-4/5 flex flex-col gap-24">
        <div className="flex flex-col gap-8">
          <div className="w-40">
            <img
              src="/images/ProjectNIRA/Logo.svg"
              className="w-full h-full "
            />
          </div>
          <p className="text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
            NIRA Dynamics develops innovative software solutions for automotive
            systems. The company aims to improve and modernize current
            technologies to fulfill today's standards for vehicle safety and
            performance.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1
            className="text-4xl uppercase"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The background
          </h1>
          <p className="text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
            To increase the safety for their test drivers, NIRA was in need of
            investigating how their internal data acquisition tool could be
            improved and re-designed. This system was developed without
            considering safety and usability aspects, taking the engineer's
            perspective rather than the driver's, which was why improvements
            were necessary. The aim of the project was therefore to investigate
            how interfaces of in-car touch screens can be designed in order to
            ensure the safety of the driver when interacting with the system and
            at the same time maneuvering the car.
          </p>
        </div>
      </div>
    </div>
  );
}
