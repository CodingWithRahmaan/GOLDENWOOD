// RegisterInterest.jsx
import React from "react";
import Bg7 from "../assets/BGCOMP7.jpg"; 
import vector2 from "../assets/Vector.png";
const RegisterInterest = () => {
  return (
    <section
  className="relative flex h-170 items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${Bg7})` }}
    >
      {/* Light overlay so form pop-out lage */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main card */}
      <div className="relative z-10 mx-4 w-full h-130 max-w-5xl rounded-3xl bg-white py-12 shadow-xl">
        {/* Heading */}
        <h2 className="mb-10 text-center text-2xl font-semibold tracking-[0.25em] text-black">
          REGISTER YOUR INTEREST
        </h2>

        {/* Form */}
        <form className="px-10 pb-6 space-y-6">
          {/* Name + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="h-11 rounded-md border border-transparent bg-[#f8f3eb] px-4 text-sm text-gray-700 outline-none focus:border-[#c79a63]"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-11 rounded-md border border-transparent bg-[#f8f3eb] px-4 text-sm text-gray-700 outline-none focus:border-[#c79a63]"
            />
          </div>

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone No"
            className="h-11 w-full rounded-md border border-transparent bg-[#f8f3eb] px-4 text-sm text-gray-700 outline-none focus:border-[#c79a63]"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message..."
            className="h-40 w-full resize-none rounded-md border border-transparent bg-[#f8f3eb] px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#c79a63]"
          />

          {/* Bottom row: note + submit button on right */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[11px] text-gray-500">
              We’re excited to connect with you! Required fields are marked *
            </p>

           
           <button className="w-35 flex items-center gap-1 lg:gap-2 xl:gap-3 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white font-semibold px-3 md:px-4 lg:px-5 xl:px-6 py-1 md:py-1.5 lg:py-1.5 xl:py-2 rounded-full shadow-md text-xs whitespace-nowrap hover:opacity-90 transition">
                      <span className="hidden lg:inline">SUBMIT</span>

                      <span className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <img src={vector2} alt="Arrow Icon" className="w-1.5 h-1.5 lg:w-2 lg:h-2" />
                      </span>
                    </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterInterest;
