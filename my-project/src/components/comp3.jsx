import React from "react";
import vector2 from "../assets/Vector.png";

const projects = [
  {
    id: 1,
    title: "GOLDEN WOODS VILLAS",
    location: "Jumeirah Village Circle",
    image:
      "https://goldenwoodsuae.com/wp-content/uploads/2025/01/Views-V-2-1-780x780.jpeg",
  },
  {
    id: 2,
    title: "GOLDEN WOODS VILLAS",
    location: "Jumeirah Village Circle",
    image:
      "https://goldenwoodsuae.com/wp-content/uploads/2025/01/Casa-Vista-6-780x780.png",
  },
  {
    id: 3,
    title: "GOLDEN WOOD VIEWS 1",
    location: "Jumeirah Village Triangle",
    image:
      "https://goldenwoodsuae.com/wp-content/uploads/2024/12/Views-VIII-3-780x780.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full bg-[#050608] text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* TOP ROW */}
        <div className="flex flex-col items-center gap-6 mb-14">
          <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d0a56b]" />
            Our Projects
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
            <span className="text-gray-200">DISCOVER</span>{" "}
            <span className="text-[#d0a56b]">MODERN LIVING</span>{" "}
            <span className="text-gray-200">AT</span>
            <br />
            <span className="text-gray-200">GOLDEN WOODS</span>{" "}
            <span className="text-[#d0a56b]">DEVELOPMENT</span>
          </h2>

          <button className="flex items-center gap-3 rounded-full bg-[#d0a56b] hover:bg-[#e4b676] text-xs tracking-[0.2em] uppercase px-8 py-3 transition">
            View all
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <img src={vector2} alt="Arrow Icon" className="w-2 h-2" />
            </span>
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                relative overflow-hidden rounded-lg bg-black/40
                w-full mx-auto
                h-[380px] sm:h-[420px] md:h-[460px]
                group
              "
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* INFO */}
              <div className="absolute inset-x-0 bottom-6 px-5 text-center z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] mx-auto">
                  <span className="text-[#d0a56b] text-lg leading-none">⌖</span>
                  <span>{project.location}</span>
                </div>

                <p className="mt-3 text-sm font-semibold tracking-[0.18em] uppercase">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INDICATOR */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-12 bg-white/20" />
            <span className="h-[2px] w-12 bg-[#d0a56b]" />
            <span className="h-[2px] w-12 bg-white/20" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
