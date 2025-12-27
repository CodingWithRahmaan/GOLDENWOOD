import React from "react";
import yourBackgroundImage from "../assets/goldenbg1.png";
import text1 from "../assets/goldentext1.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Image */}
      <img
        src={yourBackgroundImage}
        alt="Background"
        className="absolute overflow-hidden inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay — same size as background (no separate look) */}
      <div className="absolute inset-0 bg-black/0 z-10"></div>

      {/* Empty center wrapper (future use) */}
      <div className="relative z-20 flex flex-col items-center gap-3"></div>

      {/* Text Image */}
      <img
        src={text1}
        alt="Hero Text"
       className="absolute h-full w-full top-1 object-fit min-h-screen overflow-hidden" />   
    
    </section>
  );
}
