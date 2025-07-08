import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Globe,
      title: 'Digital Solutions',
      description: 'Comprehensive digital transformation and consulting services.',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Advanced data analysis and business intelligence solutions.',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Robust security implementations and cybersecurity consulting.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-400 transition-colors duration-300"
              >
                <service.icon size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;