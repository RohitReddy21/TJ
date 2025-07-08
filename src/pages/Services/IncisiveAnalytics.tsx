import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, TrendingUp, Target, Eye, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const IncisiveAnalytics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const capabilities = [
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Transform raw data into actionable insights that drive strategic decisions.',
      features: ['Real-time Dashboards', 'Predictive Modeling', 'Trend Analysis', 'Performance Metrics']
    },
    {
      icon: TrendingUp,
      title: 'Cross-Functional Analytics',
      description: 'Comprehensive analytics across teams and departments for holistic insights.',
      features: ['Department Integration', 'Cross-team Metrics', 'Unified Reporting', 'Collaborative Insights']
    },
    {
      icon: Target,
      title: 'Problem Identification',
      description: 'Proactively identify and address issues before they impact customers.',
      features: ['Early Warning Systems', 'Root Cause Analysis', 'Issue Prediction', 'Preventive Measures']
    },
    {
      icon: Eye,
      title: 'Leadership Alignment',
      description: 'Help leadership realign staffing and focus on the right problems to solve.',
      features: ['Strategic Insights', 'Resource Optimization', 'Priority Setting', 'Executive Reporting']
    }
  ];

  const testimonials = [
    {
      quote: "Earlier we were just throwing bodies at problems. Now we can really look at the entire picture and solve them once and for all.",
      author: "VP of Operations",
      role: "Technology Company"
    },
    {
      quote: "Our resource mix was dictated by the loudest voice. Now we make data driven decisions and can plan ahead of time in line with anticipated issues and pipeline. We went from managing people to governing processes.",
      author: "Chief Technology Officer",
      role: "Financial Services"
    }
  ];

  const analyticsTypes = [
    {
      title: 'Operational Analytics',
      description: 'Monitor and optimize day-to-day operations with real-time insights.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Process Monitoring', 'Efficiency Metrics', 'Resource Utilization', 'Quality Control']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and improve satisfaction scores.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Behavior Analysis', 'Satisfaction Tracking', 'Churn Prediction', 'Engagement Metrics']
    },
    {
      title: 'Financial Analytics',
      description: 'Track financial performance and identify cost optimization opportunities.',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Cost Analysis', 'Revenue Tracking', 'Budget Optimization', 'ROI Measurement']
    },
    {
      title: 'Strategic Analytics',
      description: 'Long-term strategic insights for business planning and growth.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Market Analysis', 'Growth Planning', 'Competitive Intelligence', 'Risk Assessment']
    }
  ];

  const platforms = [
    'Desktop Dashboards',
    'Mobile Interfaces',
    'Executive Reporting',
    'Real-time Alerts',
    'Custom KPIs',
    'Automated Reports'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
  className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden bg-[url('https://techjignyasa.com/wp-content/uploads/2019/09/title_bg-2.jpg')] bg-cover bg-center"
>
  {/* Bubble Overlays */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
    <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-500 rounded-full"></div>
    <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-400 rounded-full"></div>
    <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gray-400 rounded-full"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
      Incisive Analytics    </h1>

    {/* Breadcrumb */}
    <div className="flex justify-center items-center space-x-2 text-gray-600 mb-8">
      <span className="hover:text-blue-600 cursor-pointer">Home</span>
      <span>›</span>
      <span className="text-gray-800">Incisive Analytics</span>
    </div>
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
              Our solutions have helped customer make data driven decisions and stem issues much before they begin to impact the customer. Cross functional and cross domain analytics helps leadership realign staffing across teams and focus on the right problems to solve.
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
              As a TechJignyasa customer, you govern processes through key metrics, KPIs on digital dashboards across desktop and mobile interfaces.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytics solutions that transform data into actionable insights.
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
                  className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6"
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

      {/* Analytics Types */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Types of Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytics across all business functions and departments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Platform Features */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access your analytics through multiple interfaces and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {platform}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Data-Driven Insights?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's help you transform your data into actionable insights that drive business success.
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

export default IncisiveAnalytics;