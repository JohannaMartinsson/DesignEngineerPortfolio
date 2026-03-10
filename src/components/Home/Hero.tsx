export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-180 w-full flex flex-col justify-center items-center gap-6"
      style={{ backgroundColor: "#241a14" }}
    >
      <div className="w-4/5 min-h-100 flex justify-between gap-5 pt-10">
        <div className="flex flex-col gap-16">
          <h1
            className="text-4xl text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hi, I'm Johanna
          </h1>
          <div className="flex flex-col gap-2">
            <p
              className="text-2xl w-full text-white"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              You'll find me where
            </p>
            <div className="flex gap-6 items-end">
              <h1
                className="uppercase text-6xl text-white min-w-fit"
                style={{ fontFamily: "Georgia, serif" }}
              >
                creative design
              </h1>
              <p
                className="text-2xl w-full text-white"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                meets
              </p>
            </div>
            <h1
              className="uppercase text-6xl text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              technical expertise
            </h1>
          </div>
        </div>

        <div className="w-70 aspect-7/8 overflow-hidden rounded-t-full h-fit self-end">
          <img
            src="/images/SelectionOfWork/Jagmedm%C3%A5stavla.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-4/5">
        <p
          className="text-2xl w-full text-end text-white"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          …or in a pottery studio, working on yet another coffee mug.
        </p>
      </div>
    </div>
  );
}
