import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/title_bg-2.jpg';

const processSteps = [
  {
    number: '1',
    title: 'Generate Ideas',
    description: 'We consult and advise to generate ideas for EBIDTA growth.'
  },
  {
    number: '2',
    title: 'Collect Data',
    description: 'We conduct stakeholder interviews and collect business data to drive decision making.'
  },
  {
    number: '3',
    title: 'Create Design',
    description: 'We design an end-to-end Solution blueprint and roadmap geared to leverage People, Process and Technology to accelerate your growth.'
  },
  {
    number: '✓',
    title: 'Launch Project',
    description: 'We use best-in-class program and project management practices for complete transparency while we go along the transformative journey together.'
  }
];

const ProcessSection = () => {
  return (
    <section
      className="min-h-screen bg-no-repeat bg-cover bg-center px-4 py-16 md:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="mb-12">
          <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 p-2 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">✓</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Process</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Businesses today cross borders and regions, so you need a service provider that can make that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-8 text-center">{step.title}</h3>
              <p className="text-sm text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-800 mt-16 max-w-4xl mx-auto text-lg">
          We believe that designing products and services in close partnership with our clients is the only way to
          have a real impact on their business.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
