// HeroProjects.jsx
import React from "react";
import vector2 from "../assets/Vector.png";
import Bg2 from "../assets/goldenwoodbg2.jpg";

const projects = [
  {
    id: 1,
    title: "VIEWS VII BY GOLDENWOODS",
    image: "https://goldenwoodsuae.com/wp-content/uploads/2025/01/Views-V-2-1-780x780.jpeg",
  },
    {
    id: 2,
    title: "GOLDEN WOOD VIEW 5",
    image: "https://goldenwoodsuae.com/wp-content/uploads/2025/01/Casa-Vista-6-780x780.png",
  },
  {
    id: 3,
    title: "CASA VISTA RESIDENCE BY GOLDEN WOODS",
    image: "https://goldenwoodsuae.com/wp-content/uploads/2024/12/Views-VIII-3-780x780.jpg",
    wide: true,
  },
];

export default function HeroProjects() {
  return (
    <section className="relative min-h-screen text-white">
      {/* Background image */}
  <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${Bg2})` }}
/>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative ml-30 z-10 flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left side text */}
        <div className="max-w-lg space-y-10">
          <p className="text-sm font-medium tracking-[0.25em] text-gray-300">
            Our Projects
          </p>
        <h1 className="text-xl font-bold leading-snug tracking-[0.05em] sm:text-3xl">
            OUR STRONG FOUNDATION TO BUILD THE MOST BEAUTIFUL HOMES 
          
          </h1>

              <button className="w-35 flex items-center gap-1 lg:gap-2 xl:gap-3 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white font-semibold px-3 md:px-4 lg:px-5 xl:px-6 py-1 md:py-1.5 lg:py-1.5 xl:py-2 rounded-full shadow-md text-xs whitespace-nowrap hover:opacity-90 transition">
                      <span className="hidden lg:inline">READ MORE</span>

                      <span className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <img src={vector2} alt="Arrow Icon" className="w-1.5 h-1.5 lg:w-2 lg:h-2" />
                      </span>
                    </button>
        </div>

        {/* Right side cards */}
        <div className="mt-10 grid w-full gap-6 lg:mt-0 lg:w-[100%] lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-2xl bg-gray-900/40 shadow-xl ${
                project.wide ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover sm:h-64 lg:h-72"
              />
              {/* bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-sm font-medium tracking-wide">
                <p>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
