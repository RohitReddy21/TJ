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
const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      title: 'Cognitive RPA',
      description: 'Advanced robotic process automation with AI capabilities',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'AI Solutions',
      description: 'Custom artificial intelligence solutions for your business',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services and consulting',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '100+', label: 'Projects Completed' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Target, value: '98%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <ThreeBackground />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            >
              Welcome to
              <span className="text-blue-600 block">TechJignyasa</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services/ai-ml"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Our Services</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
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