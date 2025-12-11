import React from "react";
import yourBackgroundImage from "../assets/goldenbg1.png";
import text1 from "../assets/goldentext1.png";
// import yourBuildingImage from "../assets/yourBuildingImage.png";

export default function HeroSection() {
  return (
    <section
      className="w-full h-screen relative flex items-center justify-center text-center"
    >
      {/* Background Image Placeholder */}
      <img src={yourBackgroundImage} className="absolute inset-0 w-full object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/0"></div>

      <div className="relative z-10 flex flex-col items-center gap-3">
       
       
      </div>

      {/* Building Image Placeholder */}
      <img src={text1} className="absolute w-full top-1 object-cover" />
    </section>
  );
}
