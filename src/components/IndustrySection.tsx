import React from "react";
import { ArrowRight, Award, PiggyBank } from "lucide-react";
import leftImage from "../assets/img_02_c.jpg";      // Replace with actual image path
import centerImage from "../assets/img_01_c.jpg";  // Replace with actual image path

const IndustrySection = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3">
      {/* Left Image Block */}
      <div
        className="h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${leftImage})`, filter: "hue-rotate(170deg)" }}
      ></div>

      {/* Center Text Block */}
      <div className="flex flex-col items-center justify-center bg-[#edf2f7] text-center p-10">
        <Award size={40} className="text-blue-600 mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Innovation Industry</h3>
        <p className="text-gray-600 mb-6 max-w-xs">
          Businesses today cross borders and regions, so you need a service provider that can make that work
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Read More <ArrowRight className="ml-2" size={18} />
        </a>
      </div>

      {/* Right Testimonial Block */}
      <div
        className="relative h-[500px] bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-8"
        style={{ backgroundImage: `url(${centerImage})`, filter: "hue-rotate(260deg)" }}
      >
        <div className="absolute inset-0 bg-[#1b2440]/90 z-0" />
        <div className="relative z-10 max-w-md">
          <PiggyBank size={40} className="text-blue-400 mb-4 mx-auto" />
          <h3 className="text-xl md:text-2xl font-bold mb-4">EBIDTA Growth</h3>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            One of the things I like best about your company, is that there is “no box” when it comes to solving
            problems. We added 45% to our bottom line at a 22x valuation.
          </p>
          <p className="text-sm font-semibold text-gray-300">Anonymous</p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
