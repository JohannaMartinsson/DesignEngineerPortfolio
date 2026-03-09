export default function CTA() {
  return (
    <div
      id="contact"
      className="w-full py-8 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#241a14" }}
    >
      <div className="w-4/5 flex items-center justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p
                className="text-xl w-full text-white"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Need someone to bridge the gap between
              </p>
              <div className="flex gap-4 items-end">
                <h1
                  className="uppercase text-4xl text-white min-w-fit"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  designers
                </h1>
                <p
                  className="text-xl w-full text-white"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  and
                </p>
              </div>
              <h1
                className="uppercase text-4xl text-white"
                style={{ fontFamily: "Georgia, serif" }}
              >
                developers
              </h1>
              <p
                className="text-xl w-full text-white"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                in your organisation?
              </p>
            </div>
          </div>
          <p
            className="text-xl w-full text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Let's grab a coffee (maybe in a fancy handmade mug)!
          </p>
        </div>

        <div className="text-white">place image here</div>
      </div>
    </div>
  );
}
