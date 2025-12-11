// ExploreSection.jsx
import React from "react";
import Note1 from "../assets/note1.png";
import Business from "../assets/businessmen1.png";
import Folder from "../assets/folder.png";
import vector2 from "../assets/Vector.png";


const ExploreSection = () => {
  const cards = [
    {
      id: 1,
      title: "REGISTER YOUR INTEREST",
      desc: "Register your interest to get early access to listings and updates.",
      icon: Note1,
      highlight: false,
    },
    {
      id: 2,
      title: "BOOK A MEETING",
      desc: "Book a meeting and get expert guidance for your next property move.",
      icon: Business,
      highlight: false,
    },
    {
      id: 3,
      title: "DOWNLOAD COMPANY PORTFOLIO",
      desc: "Download our portfolio to explore our latest projects and achievements.",
      icon: Folder,
      highlight: true,
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top row: heading + button */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-center text-xl font-bold tracking-[0.18em] text-black sm:text-2xl lg:text-[26px]">
            EXPLORE, CONNECT AND ENGAGE WITH US
          </h2>

         
           <button className="w-35 flex items-center gap-1 lg:gap-2 xl:gap-3 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white font-semibold px-3 md:px-4 lg:px-5 xl:px-6 py-1 md:py-1.5 lg:py-1.5 xl:py-2 rounded-full shadow-md text-xs whitespace-nowrap hover:opacity-90 transition">
                      <span className="hidden lg:inline">READ MORE</span>

                      <span className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <img src={vector2} alt="Arrow Icon" className="w-1.5 h-1.5 lg:w-2 lg:h-2" />
                      </span>
                    </button>
        </div>

        {/* Cards row */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative flex flex-col items-center justify-center px-10 py-14 text-center shadow-sm ${
                card.highlight
                  ? "bg-[#c79a63] text-white"
                  : "border border-gray-200 bg-white text-black"
              }`}
            >
              {/* icon */}
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${
                  card.highlight ? "bg-white/15" : "bg-[#c79a63]/10"
                }`}
              >
                <img
                  src={card.icon}
                  alt="icon"
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* title */}
              <h3
                className={`mb-3 text-2xl font-bold tracking-[0em] ${
                  card.highlight ? "text-white" : "text-black"
                }`}
              >
                {card.title}
              </h3>

              {/* description */}
              <p
                className={`text-xs leading-relaxed ${
                  card.highlight ? "text-white/90" : "text-gray-500"
                }`}
              >
                {card.desc}
              </p>

              {/* top-right round icon on highlighted card */}
              {card.highlight && (
                <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#c79a63]">
                  ×
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
