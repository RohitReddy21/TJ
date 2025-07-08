import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIMLSolutions = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const capabilities = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Pre-trained, niche machine learning models across multiple business process verticals.',
      features: ['Payments Processing', 'Receivables Management', 'Contract Lifecycle', 'Procurement Automation']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced algorithms that predict trends and optimize business outcomes.',
      features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior', 'Market Analysis']
    },
    {
      icon: Target,
      title: 'Process Optimization',
      description: 'AI-driven process improvements that accelerate transformation journeys.',
      features: ['Workflow Analysis', 'Bottleneck Detection', 'Resource Allocation', 'Performance Metrics']
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Smart automation that adapts and learns from your business processes.',
      features: ['Adaptive Workflows', 'Self-Learning Systems', 'Exception Handling', 'Continuous Improvement']
    }
  ];

  const testimonials = [
    {
      quote: "I did not have to explain a lot of these features to your team. It was pretty much boiler plate, and we began to realize savings inside of 3 months.",
      author: "Enterprise Client",
      role: "Finance Director"
    },
    {
      quote: "Your team was able to effectively tie the errors we catch on contractual terms with the payables due to the vendors while allowing us to provide solid reporting to our clients with proof of work.",
      author: "Technology Partner",
      role: "Operations Manager"
    }
  ];

  const businessVerticals = [
    {
      title: 'Financial Services',
      description: 'Automated payment processing, fraud detection, and risk management solutions.',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Healthcare',
      description: 'Patient data analysis, treatment optimization, and operational efficiency.',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Supply Chain',
      description: 'Procurement automation, inventory optimization, and supplier management.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Manufacturing',
      description: 'Quality control, predictive maintenance, and production optimization.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <nav className="flex justify-center items-center space-x-2 text-gray-600 mb-8">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>›</span>
              <span className="text-gray-800">AI & ML Solutions</span>
            </nav>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              AI & ML Solutions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              TechJignyasa brings several pre-trained, niche machine learning models and algorithms across multiple business process verticals including payments, receivables, contract life cycle management, and procurement. Our domain expertise in these areas adds to the speed of execution in your transformation journey.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Our typical customer feedback is along these lines...
            </p>

            {/* Testimonials */}
            <div className="space-y-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
                >
                  <Quote className="text-blue-500 mb-4" size={32} />
                  <p className="text-gray-700 text-lg italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-gray-600">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              As a TechJignyasa customer, you should be able to rapidly onboard intelligent machines working for you without reinventing the wheel.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our AI & ML Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6"
                >
                  <capability.icon size={32} className="text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {capability.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {capability.description}
                </p>
                
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Business Verticals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized AI solutions across key industry verticals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessVerticals.map((vertical, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={vertical.image}
                    alt={vertical.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {vertical.title}
                  </h3>
                  <p className="text-gray-600">
                    {vertical.description}
                  </p>
                </div>
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
              Ready to Implement AI & ML?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our pre-trained models can accelerate your transformation journey.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIMLSolutions;