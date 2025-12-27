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

      {/* BLOG SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20">
        <p className="flex items-center justify-center gap-2 text-xs tracking-[0.22em] text-[#b68a56] mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b68a56]" />
          Blogs
        </p>

        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.18em] mb-10">
          <span className="text-black">INSIGHTS</span>
          <span className="text-[#b68a56]"> & ELEGANCE</span>
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">

          {/* LEFT MAIN BLOG */}
          <div className="text-center lg:text-left">
            <img
              src={MainImg}
              alt="Main blog"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover rounded-md"
            />

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="bg-[#c79a63] text-white px-4 py-1 rounded-full">
                Lorem ipsum
              </span>
              <span className="text-gray-500">Dec 18, 2025</span>
            </div>

            <h2 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug">
              CAN FOREIGN INVESTORS <br /> BUY PROPERTY IN DUBAI
            </h2>

            <button className="mt-5 mx-auto lg:mx-0 flex items-center gap-2 bg-gradient-to-r from-[#b68a56] to-[#d5b37a] text-white px-5 py-2 rounded-full text-xs">
              READ MORE
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <img src={vector2} className="w-2 h-2" />
              </span>
            </button>
          </div>

          {/* RIGHT BLOG LIST */}
          <div className="space-y-6">
            {blogItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 shadow-sm rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 sm:w-28 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="text-[11px] text-gray-500 mb-1">{item.date}</p>
                  <h3 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">

          <div className="grid gap-10 text-center md:text-left md:grid-cols-4">

            {/* LOGO */}
            <div className="flex flex-col items-center md:items-start">
              <img src={FooterLogo} className="h-12 mb-4" />
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                Golden Woods Development offers comprehensive real estate solutions across Dubai.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <h4 className="mb-3 text-xs font-semibold tracking-widest">EXPLORE</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>About</li>
                <li>Channel Partner</li>
                <li>Blogs</li>
                <li>Pay Now</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* CONTACTS */}
            <div>
              <h4 className="mb-3 text-xs font-semibold tracking-widest">CONTACTS</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>info@goldenwoodsdubai.com</li>
                <li>+971 4 256 7466</li>
                <li>Dubai, UAE</li>
              </ul>
            </div>

            {/* PROPERTIES */}
            <div>
              <h4 className="mb-3 text-xs font-semibold tracking-widest">PROPERTIES</h4>
              <div className="grid grid-cols-3 gap-2">
                {[Prop1, Prop2, Prop3, Prop4, Prop5].map((img, i) => (
                  <img key={i} src={img} className="h-14 w-full object-cover rounded-md" />
                ))}
              </div>
              <p className="mt-3 text-[11px] text-gray-500">
                Facebook • Instagram • YouTube • Twitter
              </p>
            </div>

          </div>

          <div className="mt-10 border-t pt-4 text-center text-[11px] text-gray-500">
            © 2025 Goldenwoods Development. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
};

export default BlogsPage;
