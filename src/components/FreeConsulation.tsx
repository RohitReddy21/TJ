import React from "react";
import { Brain } from "lucide-react";
import bgImage from "../assets/2zespol-zarzadzajacy-czym-jest-i-kiedy-jest-potrzebny.jpg"; // Replace with your actual image path

const FreeConsultation = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white">
          <Brain size={42} className="text-white mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Free Consultation</h2>
          <div className="h-1 w-10 bg-white mb-4 rounded-full" />
          <p className="text-base md:text-lg max-w-2xl leading-relaxed">
            From banking and insurance to sustainability <br />
            and supply chain, we have turned around Enterprises.
          </p>
        </div>
      </section>

      {/* White Curved Content Box */}
      <div className="relative z-20 -mt-12 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our repository of machine learning models and hyper automation tool kits helps us deliver
            world-class custom engineering solutions across digital transformation, process reengineering,
            and resource realignment.
          </p>
        </div>
      </div>
    </>
  );
};

export default FreeConsultation;
