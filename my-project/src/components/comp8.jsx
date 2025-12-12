// BlogsPage.jsx
import React from "react";
import MainImg from "../assets/Container.png";
import Side1 from "../assets/Container2.png";
import Side2 from "../assets/Container3.png";
import Side3 from "../assets/Container4.png";
import FooterLogo from "../assets/FooterLogo.png";
import Prop1 from "../assets/prop1.jpg";
import Prop2 from "../assets/prop2.jpg";
import Prop3 from "../assets/prop3.png";
import Prop4 from "../assets/prop4.png";
import Prop5 from "../assets/prop5.png";
import vector2 from "../assets/Vector.png"; 

const blogItems = [
  {
    id: 1,
    image: Side1,
    title: "GOLDEN WOODS CHECKLIST DOCUMENTS REQUIRED TO BUY PROPERTY IN DUBAI",
    date: "Dec 18, 2025",
  },
  {
    id: 2,
    image: Side2,
    title: "CAN FOREIGN INVESTORS BUY PROPERTY IN DUBAI IN",
    date: "Dec 18, 2025",
  },
  {
    id: 3,
    image: Side3,
    title: "CAN FOREIGN INVESTORS BUY PROPERTY IN DUBAI",
    date: "Dec 18, 2025",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* top spacing */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20">
        {/* small label */}
        <p className="flex items-center justify-center gap-2 text-xs tracking-[0.22em] text-[#b68a56] mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b68a56]" />
          Blogs
        </p>

        {/* heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.18em] mb-10">
          <span className="text-black">INSIGHTS</span>
          <span className="text-[#b68a56]"> &amp; ELEGANCE</span>
        </h1>

        {/* main grid */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* left big card */}
          <div>
            <div className="overflow-hidden rounded-md">
              <img
                src={MainImg}
                alt="Main blog"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
              />
            </div>

            {/* pill + date */}
            <div className="mt-4 flex items-center justify-between">
              <button className="inline-flex items-center rounded-full bg-[#c79a63] px-4 py-1 text-[11px] font-medium text-white">
                Lorem ipsum
              </button>
              <span className="text-[11px] text-gray-500">Dec 18, 2025</span>
            </div>

            {/* title */}
            <h2 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug">
              CAN FOREIGN INVESTORS
              <br />
              BUY PROPERTY IN DUBAI
            </h2>

            {/* read more button */}
              <button className="w-35 flex items-center gap-1 lg:gap-2 xl:gap-3 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white font-semibold px-3 md:px-4 lg:px-5 xl:px-6 py-1 md:py-1.5 lg:py-1.5 xl:py-2 rounded-full shadow-md text-xs whitespace-nowrap hover:opacity-90 transition">
                      <span className="hidden lg:inline">READ MORE</span>

                      <span className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <img src={vector2} alt="Arrow Icon" className="w-1.5 h-1.5 lg:w-2 lg:h-2" />
                      </span>
                    </button>
          </div>

          {/* right side list */}
          <div className="space-y-6">
            {blogItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-md bg-white shadow-sm p-3"
              >
                <div className="w-[110px] sm:w-[130px] overflow-hidden rounded-md flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <button className="inline-flex items-center rounded-full bg-[#c79a63] px-3 py-0.5 text-[10px] font-medium text-white">
                      Lorem ipsum
                    </button>
                    <span className="h-px flex-1 mx-3 bg-gray-200" />
                    <span className="text-[11px] text-gray-500">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-[13px] sm:text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="border-t border-gray-200" />

      {/* footer */}
      <footer className="max-w-6xl mx-auto px-4 py-10 text-[13px] text-gray-600">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_1fr] mb-8">
          {/* logo + text */}
          <div>
            <img
              src={FooterLogo}
              alt="Golden Woods Development"
              className="h-12 mb-4"
            />
            <p className="text-[12px] leading-relaxed">
              Golden Woods Development offers comprehensive solutions for all
              real estate properties, conveniently located in Dubai&apos;s
              prime areas.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-black">
              EXPLORE
            </h4>
            <ul className="space-y-1 text-[12px]">
              <li>About</li>
              <li>Become a Channel Partner</li>
              <li>Blogs</li>
              <li>Pay Now</li>
              <li>Terms and Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-black">
              CONTACTS
            </h4>
            <ul className="space-y-1 text-[12px]">
              <li>info@goldenwoodsdubai.com</li>
              <li>+971 4 256 7466</li>
              <li>
                Office 3501, Control Tower, Motor
                <br />
                City, Dubai, UAE
              </li>
            </ul>
          </div>

          {/* Properties thumbnails */}
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-black">
              PROPERTIES
            </h4>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[Prop1, Prop2, Prop3, Prop4, Prop5].map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-md">
                  <img
                    src={img}
                    alt={`Property ${idx + 1}`}
                    className="h-14 w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500">
              Facebook • Instagram • Youtube • Twitter
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 text-center text-[11px] text-gray-500">
          Copyright © 2025 Goldenwoods Development.
        </div>
      </footer>
    </div>
  );
};

export default BlogsPage;
