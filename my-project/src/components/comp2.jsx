import React from "react";
import vector2 from "../assets/Vector.png";
export default function ExcellenceSection() {
  return (
    <section className="w-full h-240 bg-white rounded-t-4xl relative z-100">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 pt-50  ">

        {/* LEFT IMAGE AREA */}
        <div className="relative">
          {/* Big Image (dummy URL) */}
          <img
            src="https://assets.architecturaldigest.in/photos/600845f5e6e1f64740189662/16:9/w_2560%2Cc_limit/Mumbai-2-BHK-Limehouse-Design-Studio-1366x768.jpg"
            alt="Placeholder"
            className="w-full h-[600px] object-cover rounded-lg"
          />

          {/* Overlapping Image Placeholder */}
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
           className="absolute -bottom-7 left-110 w-[250px] h-[230px] bg-gray-300 rounded-lg shadow-lg"></img>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="pt-10 lg:pt-0 pl-20">
          {/* Heading */}
          <h2 className="text-sm font-semibold text-gray-500 mb-2 tracking-wide">
            • EXPERTISE
          </h2>

          <h1 className="text-7xl ">
            12 YEARS OF  <br />
            <span className="text-[#b68a56] text-8xl">EXCELLENCE</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mt-4 mb-6">
           Established in 2013, Golden Woods Development has the power to transform lives and redefine the essence of modern living. Each project is not just a construction venture but a vision brought to life—an opportunity to create spaces that inspire and elevate the many communities we have worked in.   <br /><br />
            With every project, Golden Woods Development aims to deliver more than buildings—we deliver dreams, built on the foundation of trust, integrity, and a relentless pursuit of perfection.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Card 1 */}
            <div className="border border-gray-400 rounded-xl p-6 shadow-sm bg-white">
              <p className="text-xs font-semibold text-gray-600">GLOBAL REACH</p>
              <h3 className="text-3xl font-bold mt-2">85+</h3>
              <p className="text-sm text-gray-500 mt-1">offices worldwide</p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-400 rounded-xl p-6 shadow-sm bg-white">
              <p className="text-xs font-semibold text-gray-600">GLOBAL REACH</p>
              <h3 className="text-3xl font-bold mt-2">85+</h3>
              <p className="text-sm text-gray-500 mt-1">offices worldwide</p>
            </div>

          
          </div>

          {/* Button */}
         
        

           <button className="w-35 flex items-center gap-1 lg:gap-2 xl:gap-3 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white font-semibold px-3 md:px-4 lg:px-5 xl:px-6 py-1 md:py-1.5 lg:py-1.5 xl:py-2 rounded-full shadow-md text-xs whitespace-nowrap hover:opacity-90 transition">
                      <span className="hidden lg:inline">READ MORE</span>

                      <span className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <img src={vector2} alt="Arrow Icon" className="w-1.5 h-1.5 lg:w-2 lg:h-2" />
                      </span>
                    </button>
             
          
        </div>
      </div>
    </section>
  );
}
