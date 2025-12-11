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
    <section className="w-full h-170 bg-white">
      {/* top spacing + heading */}
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-10 text-center">
        <p className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#b89663]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b89663]" />
          Why Choose Us?
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-[0.18em] uppercase">
          <span className="text-black">YOUR VISION, OUR </span>
          <span className="text-[#b89663]">PROMISE</span>
        </h2>

        <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-3xl mx-auto">
          We are dedicated to our clients, transforming ideas into exceptional
          realities and delivering excellence with unwavering commitment and care.
        </p>
      </div>

      {/* background image + floating cards */}
      <div className="relative">
        {/* background strip with external URL */}
        <div
          className="
            h-82 w-full 
            bg-center bg-cover bg-no-repeat bg-black/800
          "
          style={{
            backgroundImage: 
              "url('https://binghattiweb.imgix.net/aquarise-horizontal.webp?auto=format,compress&q=65')",
          }}
        />

        {/* floating cards (same as Figma) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto flex flex-col md:flex-row gap-4 md:gap-6 px-4 max-w-5xl w-full justify-center">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="flex-1 bg-[#0a0a0a] text-white rounded-md shadow-xl px-6 py-6 md:py-8 translate-y-10 md:translate-y-12"
              >
                {/* small icon box */}
                <div className="mb-6 h-9 w-9 flex items-center justify-center rounded-sm bg-[#2b2419]">
                  <span className="text-[#d3a86b] text-xl leading-none">✶</span>
                </div>

                <h3 className="text-[11px] md:text-xs tracking-[0.22em] uppercase mb-4">
                  {item.title}
                </h3>

                <p className="text-xs md:text-[13px] text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* bottom spacer so cards clip na hon */}
        <div className="h-16 md:h-20" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
