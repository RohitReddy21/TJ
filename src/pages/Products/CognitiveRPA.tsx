import React from 'react';
import { Bot, Brain, Zap, CheckCircle, ArrowRight, Play } from 'lucide-react';
import background from '../../assets/title_bg-2.jpg'
const CognitiveRPA = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Decision Making',
      description: 'Advanced machine learning algorithms that can make complex decisions and adapt to changing business rules.'
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Goes beyond traditional RPA by understanding context and handling unstructured data with ease.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process documents and data in real-time with cognitive capabilities for immediate business impact.'
    }
  ];

  const benefits = [
    'Reduce manual processing time by up to 90%',
    'Improve accuracy and reduce human errors',
    'Handle complex, unstructured documents',
    'Scale operations without increasing headcount',
    'Integrate seamlessly with existing systems',
    'Provide detailed analytics and insights'
  ];

  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automatically extract, validate, and process invoices from multiple formats and sources.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Customer Onboarding',
      description: 'Streamline customer onboarding with intelligent document verification and data extraction.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Claims Processing',
      description: 'Accelerate insurance claims processing with AI-powered document analysis and decision making.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Background */}
      <section
      style={{ backgroundImage: `url(${background})` }}
  className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden bg-cover bg-center"
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
      Cognitive RPA
    </h1>

    {/* Breadcrumb */}
    <div className="flex justify-center items-center space-x-2 text-gray-600 mb-8">
      <span className="hover:text-blue-600 cursor-pointer">Home</span>
      <span>›</span>
      <span className="text-gray-800">Cognitive RPA</span>
    </div>
  </div>
</section>


      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            TechJignyasa's Cognitive RPA helps our clients realize true potential of robotic process automation which mimics human actions. Domain experts and knowledge gurus at your organization have a governance and optimization role instead of a participatory line management role.
          </p>

          {/* Customer Feedback Quote */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="text-blue-500 text-3xl font-bold">"</div>
              <div>
                <p className="text-blue-700 font-medium mb-2">
                  Our typical customer feedback is along these lines...
                </p>
                <p className="text-gray-700 italic">
                  TechJignyasa has allowed me to focus more on solving pernickety problems and provide deeper services to our clientele as opposed to managing robots and their internals.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            ...or something like this:
          </p>

          {/* Second Quote */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="text-blue-500 text-3xl font-bold">"</div>
              <div>
                <p className="text-gray-700 italic">
                  Your cognitive RPA has allowed me to have a better work life balance where earlier I used to wake up to trouble shoot simple exceptions thrown out by the automation software.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700">
            As a TechJignyasa customer, you should be able to govern your processes through dashboards, metrics and KPIs where the bots don't add to your workload.
          </p>
        </div>
      </section>

      {/* Features Section
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our Cognitive RPA solution combines the power of artificial intelligence with robotic process automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Transform Your Business Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Cognitive RPA solution delivers measurable results that directly impact your bottom line.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cognitive RPA Dashboard"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our Cognitive RPA solution is transforming businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Intelligently?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how Cognitive RPA can transform your business processes and drive efficiency.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2 hover:scale-105 transform">
              <span>Schedule a Demo</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CognitiveRPA;