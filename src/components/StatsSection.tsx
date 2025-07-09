import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Target, Activity, Wrench, Layers, Lightbulb } from 'lucide-react';

const stats = [
  {
    icon: Target,
    value: 40,
    suffix: '%',
    label: 'Typical EBIDTA growth achieved per client',
    bg: 'bg-blue-600',
  },
  {
    icon: Activity,
    value: 32,
    suffix: '+',
    label: 'Tech accelerations completed',
    bg: 'bg-red-600',
  },
  {
    icon: Wrench,
    value: 125,
    suffix: '+',
    label: 'ML Models and Algorithms delivered',
    bg: 'bg-blue-600',
  },
  {
    icon: Layers,
    value: 5163,
    suffix: '+',
    label: 'Business Processes Automated',
    bg: 'bg-orange-600',
  },
];

const StatsSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 px-4 py-16 sm:px-10 md:px-20">
      {/* Stats Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map(({ icon: Icon, value, suffix, label, bg }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white rounded-xl border shadow hover:shadow-md transition-all p-8 text-center flex flex-col items-center"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-md mb-4 ${bg}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              <CountUp end={value} duration={2} />{suffix}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Supporting Message */}
      <motion.div
        className="w-full max-w-5xl flex flex-col md:flex-row items-start md:items-center text-gray-700 gap-4 md:gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start gap-2 text-blue-600">
          <Lightbulb className="w-6 h-6 mt-1" />
          <p className="font-semibold text-lg">
            Businesses today cross borders and regions,
            <span className="text-gray-800 font-medium">
              {' '}so you need a service provider that can make that work.
            </span>
          </p>
        </div>
        <p className="text-sm text-gray-500 md:max-w-md leading-relaxed">
          Bring together Technology accelerators, Digital transformation and Global resource realignment to boost EBIDTA in a sustainable, scalable, and predictable manner.
        </p>
      </motion.div>
    </section>
  );
};

export default StatsSection;
