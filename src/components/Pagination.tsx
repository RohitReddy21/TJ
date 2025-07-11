import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { title: "AI + ML", description: "Accelerate transformation using ML models." },
  { title: "Analytics", description: "Smarter, faster decisions with analytics." },
  { title: "Automation", description: "Automate processes end-to-end." },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // easeOut
    },
  },
};

const AnimatedCards = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-6">
      <motion.div
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            className="bg-white rounded-2xl p-8 shadow-md transition-all"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AnimatedCards;
