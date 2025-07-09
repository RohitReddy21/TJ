import { motion } from "framer-motion";
import case1 from '../assets/Case1.jpg'
import case2 from '../assets/Case2.jpg'
import case3 from '../assets/Case3.jpg'
import caselogo1 from '../assets/CaseLogo1.png'
import caselogo2 from '../assets/CaseLogo2.png'
import caselogo3 from '../assets/CaseLogo3.png'
import casestudy from '../assets/briefcase.png'
const services = [
  {
    title: "Digital Transformation",
    description: "Engage us for customer experience transformation and process governance alike.",
    image: case1,
    icon: caselogo1,
  },
  {
    title: "Cognitive Automation",
    description: "Robotic Process Automation has been around for quite some time now. And fails.",
    image: case2,
    icon: caselogo2,
  },
  {
    title: "Process Realignment",
    description: "Resource Realignment, Resource Optimization and Re-engineering of the processes.",
    image: case3,
    icon: caselogo3,
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="min-h-screen bg-white py-20">
      {/* Title & Subtitle */}
      <div className="text-center mb-16 px-4">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-xl">
            <img src={casestudy} alt="icon" className="w-12 h-12" />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Businesses today cross borders and regions, so you need a service provider that can make that work.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3">
       {services.map((service, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative bg-white rounded-xl shadow-xl overflow-hidden group flex flex-col"
  >
    {/* Image */}
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-60 object-cover group-hover:scale-105 transition duration-500 ease-in-out"
    />

    {/* Floating Icon */}
    <div className="absolute left-1/2 top-[220px] -translate-x-1/2 bg-white p-4 rounded-full shadow-lg z-20">
      <img src={service.icon} alt="icon" className="w-8 h-8 object-contain" />
    </div>

    {/* Text Content */}
    <div className="text-center px-6 pt-14 pb-8"> {/* pt-14 creates space for icon */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <div className="w-10 h-[2px] bg-gray-300 mx-auto mb-4"></div>
      <p className="text-gray-600 text-sm">{service.description}</p>
      <button className="mt-4 text-blue-600 font-medium hover:underline">Read More</button>
    </div>
  </motion.div>
))}

      </div>
    </section>
  );
}
