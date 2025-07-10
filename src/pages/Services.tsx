import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import background from "../assets/title_bg-2.jpg";
import AI from '../assets/Ai-ML.jpg';
import Resource from '../assets/Resource.jpg';
import Analytics from '../assets/Analytics.jpg';
import { AiOutlineArrowRight } from "react-icons/ai";

const services = [
  {
    title: "AI and ML Solutions",
    slug: "ai-ml",
    shortDescription:
      "Accelerate transformation using pre-trained ML models across payments, procurement, and more.",
    image: AI,
  },
  {
    title: "Resource Realignment",
    slug: "resource-realignment",
    shortDescription:
      "Optimize global operations with right-sized teams and high-efficiency offshore support.",
    image: Resource,
  },
  {
    title: "Incisive Analytics",
    slug: "incisive-analytics",
    shortDescription:
      "Leverage cross-domain analytics for faster, smarter business decisions.",
    image: Analytics,
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
    },
  }),
};

const ServicesPage = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Sub-banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{ backgroundImage: `url(${background})` }}
        className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden bg-cover bg-center"
      >
        {/* Bubble Overlays */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full blur-md"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-500 rounded-full blur-sm"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-400 rounded-full blur-sm"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gray-400 rounded-full blur-md"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Services
          </h1>
          <div className="flex justify-center items-center space-x-2 text-gray-600 mb-8">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span>›</span>
            <span className="text-gray-800">Services</span>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
  key={index}
  custom={index}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
>
  <div className="h-64 overflow-hidden">
    <motion.img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
    />
  </div>
  <div className="px-8 py-8 text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-3">
      {service.title}
    </h2>
    <div className="w-10 h-1 bg-blue-600 mx-auto mb-5 rounded-full"></div>
    <p className="text-gray-600 text-base mb-6">
      {service.shortDescription}
    </p>
    <Link
      to={`/services/${service.slug}`}
      className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
    >
      Read More <AiOutlineArrowRight className="text-sm mt-0.5" />
    </Link>
  </div>
</motion.div>

        ))}
      </div>
      {/* Call to Action Section */}
<section
  style={{ backgroundImage: `url(${background})` }}
  className="relative bg-cover bg-center py-20 mt-12"
>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      Ready to Transform Your Business?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-lg mb-6"
    >
      Let’s collaborate and unlock your organization’s full potential with cutting-edge tech and smart strategies.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        to="/contact"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition"
      >
        Contact Us
      </Link>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default ServicesPage;
