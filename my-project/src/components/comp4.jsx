import React from "react";

const reasons = [
  {
    id: 1,
    title: "WIDE RANGE OF DELIVERABLES",
    text: "From 4-star hotels and townhouses to luxury residential buildings.",
  },
  {
    id: 2,
    title: "ATTRACTIVE PAYMENT PLAN",
    text: "65/35 payment plan over 5 years and a post-handover warranty.",
  },
  {
    id: 3,
    title: "PERFECTLY MET NEEDS",
    text: "Conveniently located properties with fully equipped facilities and semi-furnished units.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-20">
      {/* HEADING */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-14">
        <p className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#b89663]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b89663]" />
          Why Choose Us?
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[0.18em] uppercase">
          <span className="text-black">YOUR VISION, OUR </span>
          <span className="text-[#b89663]">PROMISE</span>
        </h2>

        <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-3xl mx-auto">
          We are dedicated to our clients, transforming ideas into exceptional
          realities and delivering excellence with unwavering commitment and care.
        </p>
      </div>

      {/* BACKGROUND IMAGE */}
      <div
        className="
          relative w-full
          min-h-[520px] sm:min-h-[580px] md:min-h-[420px]
          bg-center bg-cover bg-no-repeat
          flex items-end
        "
        style={{
          backgroundImage:
            "url('https://binghattiweb.imgix.net/aquarise-horizontal.webp?auto=format,compress&q=65')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CARDS */}
        <div
          className="
            relative z-10
            w-full max-w-5xl mx-auto px-4
            pb-16
            md:-translate-y-20
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="
                  w-full
                  bg-[#0a0a0a] text-white
                  rounded-md shadow-xl
                  px-6 py-7
                  min-h-[210px]
                  flex flex-col items-center text-center
                "
              >
                {/* ICON */}
                <div className="mb-5 h-9 w-9 flex items-center justify-center rounded-sm bg-[#2b2419]">
                  <span className="text-[#d3a86b] text-xl leading-none">✶</span>
                </div>

                <h3 className="text-xs tracking-[0.22em] uppercase mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
