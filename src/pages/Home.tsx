import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Users, Award, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeBackground from '../components/ThreeBackground';
import background from '../assets/title_bg-2.jpg'
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import WorkflowSteps from '../components/WorkFlowSteps';
import video from '../assets/Bg-video.mp4'
import FreeConsultation from '../components/FreeConsulation';
import IndustrySection from '../components/IndustrySection';
const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen">
     <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 px-4 sm:px-6 lg:px-10">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-black/30 z-0" />

  {/* Background graphics (if any like ThreeBackground) */}
  <div className="absolute inset-0 z-0">
    <ThreeBackground />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24 md:py-32 text-center">
    <motion.div
      ref={heroRef}
      initial={{ opacity: 0, y: 50 }}
      animate={heroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
      >
        Welcome to <span className="block text-blue-300">TechJignyasa</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
      >
        We believe that designing products and services in close partnership with our clients
        is the only way to have a real impact on their business.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-48 sm:w-auto"
        >
          <Link
            to="/services/ai-ml"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 flex justify-center items-center space-x-3"
          >
            <span>Our Services</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-48 sm:w-auto"
        >
          <Link
            to="/contact"
            className="block text-center border-2 border-blue-600 text-white hover:bg-blue-600 hover:text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>


      <StatsSection />
      <ServicesSection/>
      <WorkflowSteps/>
      <FreeConsultation/>
      <IndustrySection/>
      {/* CTA Section */}
      <section
  style={{ backgroundImage: `url(${background})` }}
  className="py-20 bg-cover bg-center bg-no-repeat relative"
>
  {/* Soft Gradient Overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-30 z-0"></div>

  {/* Floating Circles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 z-0"></div>
  <div className="absolute bottom-20 left-1/2 w-24 h-24 bg-blue-100 rounded-full opacity-30 z-0"></div>
  <div className="absolute top-1/3 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 z-0"></div>

  {/* Content */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Let's discuss how our innovative solutions can help you achieve your business goals.
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/contact"
          className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition duration-200 inline-flex items-center space-x-2"
        >
          <span>Contact Us Today</span>
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>


    </div>
  );
};

export default Home;