import React from "react";
import vector2 from "../assets/Vector.png";

export default function ExcellenceSection() {
  return (
<section className="w-full bg-white rounded-t-4xl relative z-100">
  <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 pt-20 sm:pt-28 md:pt-36 lg:pt-50 pb-20 sm:pb-28 md:pb-36 lg:pb-50">

        {/* LEFT IMAGE AREA */}
        <div className="relative">
          {/* Big Image */}
          <img
            src="https://assets.architecturaldigest.in/photos/600845f5e6e1f64740189662/16:9/w_2560%2Cc_limit/Mumbai-2-BHK-Limehouse-Design-Studio-1366x768.jpg"
            alt="Placeholder"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />

          {/* Overlapping Image — Hide on mobile/tablet */}
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000"
            alt="Overlap"
            className="hidden lg:block absolute -bottom-7 left-28 xl:left-110 w-[180px] h-[160px] xl:w-[250px] xl:h-[230px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="pt-6 sm:pt-10 lg:pt-0 lg:pl-20 text-center lg:text-left">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 tracking-wide">
            • EXPERTISE
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            12 YEARS OF <br />
            <span className="text-[#b68a56] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
              EXCELLENCE
            </span>
          </h1>

          <p className="text-gray-600 leading-relaxed mt-4 mb-6 text-sm sm:text-base">
            Established in 2013, Golden Woods Development has the power to transform lives and redefine the essence of modern living.
            With every project, Golden Woods Development aims to deliver more than buildings—we deliver dreams, built on trust, integrity, and perfection.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="border border-gray-400 rounded-xl p-6 shadow-sm bg-white">
              <p className="text-xs font-semibold text-gray-600">GLOBAL REACH</p>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">85+</h3>
              <p className="text-sm text-gray-500 mt-1">offices worldwide</p>
            </div>

            <div className="border border-gray-400 rounded-xl p-6 shadow-sm bg-white">
              <p className="text-xs font-semibold text-gray-600">GLOBAL REACH</p>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">85+</h3>
              <p className="text-sm text-gray-500 mt-1">offices worldwide</p>
            </div>
          </div>

          {/* Button */}
          <button className="w-36 flex items-center gap-2 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white font-semibold px-4 py-2 rounded-full shadow-md text-xs sm:text-sm hover:opacity-90 transition whitespace-nowrap">
            <span className="hidden lg:inline">READ MORE</span>
            <span className="w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-full flex items-center justify-center">
              <img src={vector2} alt="Arrow Icon" className="w-2 h-2" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
