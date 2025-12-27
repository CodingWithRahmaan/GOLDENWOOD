import React, { useState } from "react";
import logo from "../assets/goldenWoodLogo.png";
import vector1 from "../assets/Vector.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#4a6a85] to-[#38536d]">
      <div
        className="
          max-w-[1600px] mx-auto
          flex items-center justify-between
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16
          h-14 sm:h-16 lg:h-20 lg:justify-evenly
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-3 md:gap-6">
          <img
            src={logo}
            alt="Golden Woods Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14"
          />

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden lg:flex items-center
              gap-6 xl:gap-10
              ml-8 xl:ml-12
              text-white
              text-[11px] xl:text-sm
              font-medium
            "
          >
            <div className="relative">
              <span className="cursor-pointer hover:text-[#d5b37a]">
                Home
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#d5b37a]">
              <span>Properties</span>
              <span className="text-xs">▾</span>
            </div>

            <span className="cursor-pointer hover:text-[#d5b37a]">Communities</span>
            <span className="cursor-pointer hover:text-[#d5b37a]">Media</span>
            <span className="cursor-pointer hover:text-[#d5b37a]">Blogs</span>
            <span className="cursor-pointer hover:text-[#d5b37a]">Contact</span>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* DESKTOP */}
          <div
            className="
              hidden lg:flex items-center gap-4
              text-white text-[11px] xl:text-sm
            "
          >
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="opacity-80 hidden xl:inline">Call:</span>
              <a
                href="tel:+08412345688"
                className="relative hover:text-[#d5b37a]"
              >
                +(084) 123-456 88
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-white" />
              </a>
            </div>

            <button
              className="
                flex items-center gap-2
                bg-gradient-to-r from-[#b68a56] to-[#d5b37a]
                text-white font-semibold
                px-4 xl:px-6 py-1.5 xl:py-2
                rounded-full shadow-md
                text-[11px] xl:text-sm
                hover:opacity-90 transition
              "
            >
              <span className="hidden lg:inline">BECOME CHANNEL PARTNER</span>
              <span className="lg:hidden">PARTNER</span>

              <span className="w-4 h-4 xl:w-5 xl:h-5 bg-white rounded-full flex items-center justify-center">
                <img src={vector1} alt="" className="w-2 h-2" />
              </span>
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-2xl px-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#38536d] border-t border-[#4a6a85]">
          <nav className="flex flex-col text-white p-4 text-sm font-medium">
            {[
              "Home",
              "Properties",
              "Communities",
              "Media",
              "Blogs",
              "Contact",
            ].map((item) => (
              <span
                key={item}
                className="py-2 cursor-pointer hover:text-[#d5b37a]"
              >
                {item}
              </span>
            ))}

            <hr className="border-[#4a6a85] my-3" />

            <a
              href="tel:+08412345688"
              className="py-2 hover:text-[#d5b37a]"
            >
              Call: +(084) 123-456 88
            </a>

            <button
              className="
                mt-3 w-full
                bg-gradient-to-r from-[#b68a56] to-[#d5b37a]
                text-white font-semibold
                py-2 rounded-full text-xs
              "
            >
              BECOME PARTNER
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
