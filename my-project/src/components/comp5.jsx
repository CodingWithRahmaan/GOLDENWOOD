// HeroProjects.jsx
import React from "react";
import vector2 from "../assets/Vector.png";
import Bg2 from "../assets/goldenwoodbg2.jpg";

const projects = [
  {
    id: 1,
    title: "VIEWS VII BY GOLDENWOODS",
    image:
      "https://goldenwoodsuae.com/wp-content/uploads/2025/01/Views-V-2-1-780x780.jpeg",
  },
  {
    id: 2,
    title: "GOLDEN WOOD VIEW 5",
    image:
      "https://goldenwoodsuae.com/wp-content/uploads/2025/01/Casa-Vista-6-780x780.png",
  },
  {
    id: 3,
    title: "CASA VISTA RESIDENCE BY GOLDEN WOODS",
    image:
      "https://goldenwoodsuae.com/wp-content/uploads/2024/12/Views-VIII-3-780x780.jpg",
    wide: true,
  },
];

export default function HeroProjects() {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Bg2})` }}
      />
      <div className="absolute inset-0 bg-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-14">
          
          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-300">
              Our Projects
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-wide">
              OUR STRONG FOUNDATION TO BUILD THE MOST BEAUTIFUL HOMES
            </h1>

            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center gap-3 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white font-semibold px-6 py-2 rounded-full shadow-md text-xs sm:text-sm hover:opacity-90 transition">
                <span>READ MORE</span>
                <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <img
                    src={vector2}
                    alt="Arrow Icon"
                    className="w-2 h-2"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative overflow-hidden rounded-2xl bg-black/40 shadow-xl ${
                  project.wide ? "sm:col-span-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="aspect-[4/3] lg:aspect-[3/2]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* GRADIENT */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm font-medium tracking-wide text-center lg:text-left">
                  {project.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
