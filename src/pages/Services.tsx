import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code, Headphones, Settings, Users, Rocket } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Lightbulb,
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your digital transformation journey.',
      features: ['Digital strategy planning', 'Technology assessment', 'ROI analysis', 'Implementation roadmap'],
      color: 'bg-blue-600'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom software development services using cutting-edge technologies and best practices.',
      features: ['Web applications', 'Mobile apps', 'API development', 'System integration'],
      color: 'bg-cyan-600'
    },
    {
      icon: Headphones,
      title: 'Support',
      description: '24/7 technical support and maintenance services to ensure your systems run smoothly.',
      features: ['24/7 monitoring', 'Bug fixes', 'Performance optimization', 'Security updates'],
      color: 'bg-indigo-600'
    },
    {
      icon: Settings,
      title: 'Implementation',
      description: 'End-to-end implementation services to deploy and configure your technology solutions.',
      features: ['System deployment', 'Configuration', 'Data migration', 'User training'],
      color: 'bg-purple-600'
    },
    {
      icon: Users,
      title: 'Training',
      description: 'Comprehensive training programs to help your team maximize the value of your technology investments.',
      features: ['User training', 'Admin training', 'Best practices', 'Certification programs'],
      color: 'bg-green-600'
    },
    {
      icon: Rocket,
      title: 'Optimization',
      description: 'Continuous optimization services to improve performance and reduce costs.',
      features: ['Performance tuning', 'Cost optimization', 'Process improvement', 'Automation'],
      color: 'bg-orange-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business needs, challenges, and goals.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed plan and strategy tailored to your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and optimization to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology services to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of services covers every aspect of your technology needs.
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with our expert services? Get in touch with us today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;