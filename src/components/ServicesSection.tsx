import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/caseStudyData';
import { useNavigate } from 'react-router-dom';
import casestudy from '../assets/briefcase.png';
import bg from '../assets/tech.jpg'; // optional subtle background

export default function CaseStudiesSection() {
  const navigate = useNavigate();

  const handleNavigate = (service) => {
    navigate(`/case-studies/${service.slug}`, {
      state: service,
    });
  };

  return (
    <section
      className="min-h-[80vh] py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-16 px-4">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-xl shadow-md">
              <img src={casestudy} alt="icon" className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Businesses today cross borders and regions, so you need a service provider that can make that work.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden group flex flex-col cursor-pointer hover:shadow-2xl"
              onClick={() => handleNavigate(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute left-1/2 top-[210px] -translate-x-1/2 bg-white p-4 rounded-full shadow-md z-20">
                <img src={service.icon} alt="icon" className="w-8 h-8 object-contain" />
              </div>
              <div className="text-center px-6 pt-16 pb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <div className="w-10 h-[2px] bg-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-700 text-sm">{service.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
