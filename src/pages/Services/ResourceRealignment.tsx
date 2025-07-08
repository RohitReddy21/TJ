import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, TrendingUp, Target, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourceRealignment = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: 'Offshore Operations Setup',
      description: 'Establish efficient operations in India with the right resource mix.',
      features: ['Location Strategy', 'Infrastructure Setup', 'Compliance Management', 'Cultural Integration']
    },
    {
      icon: Users,
      title: 'Resource Optimization',
      description: 'Right-size your resource mix for optimal cost and performance balance.',
      features: ['Skill Assessment', 'Team Restructuring', 'Performance Metrics', 'Capacity Planning']
    },
    {
      icon: TrendingUp,
      title: 'Process Enhancement',
      description: 'Streamline operations with automation and improved workflows.',
      features: ['Process Automation', 'Workflow Optimization', 'Quality Improvement', 'Efficiency Gains']
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Enable front-line staff to be more customer-oriented while back-office tasks are automated.',
      features: ['Customer Experience', 'Staff Empowerment', 'Service Quality', 'Response Time']
    }
  ];

  const testimonials = [
    {
      quote: "My team can now ensure higher quality and rapid responses to customers. All the heavy lifting, report generation and root cause analyses are being done by their overseas counterparts.",
      author: "Operations Director",
      role: "Fortune 500 Company"
    },
    {
      quote: "Our cost of customer service has reduced by more than 50% while our customer satisfaction scores and client retention has sky rocketed.",
      author: "Customer Success Manager",
      role: "Technology Firm"
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by 50% or more',
      icon: TrendingUp
    },
    {
      title: 'Quality Improvement',
      description: 'Higher quality service delivery',
      icon: Target
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improved customer satisfaction scores',
      icon: Users
    },
    {
      title: 'Scalability',
      description: 'Rapid scaling capabilities',
      icon: Globe
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
              <span className="text-gray-800">Resource Realignment</span>
            </nav>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Resource Realignment
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
              We help organizations set up operations overseas in India and realign and right-size their resource mix. This allows companies to focus their onsite staff to be more customer oriented while back-office tasks can be managed by a healthy mix of human and bots. Customer facing front-line staff are enabled with force multipliers overseas to lift and shift heavier throughput.
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
                  className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500"
                >
                  <Quote className="text-green-500 mb-4" size={32} />
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
              As a TechJignyasa customer, you should be able to scale rapidly while ensuring seamless, engaged and empathetic customer service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Resource Realignment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to optimize your global resource strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                  className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6"
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable outcomes that drive business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                >
                  <benefit.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to resource realignment and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Analyze current resource allocation and identify optimization opportunities.' },
              { step: '02', title: 'Strategy', description: 'Develop a comprehensive realignment strategy tailored to your needs.' },
              { step: '03', title: 'Implementation', description: 'Execute the realignment plan with minimal business disruption.' },
              { step: '04', title: 'Optimization', description: 'Continuously monitor and optimize for maximum efficiency.' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Resources?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you realign your resources for maximum efficiency and cost savings.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
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

export default ResourceRealignment;