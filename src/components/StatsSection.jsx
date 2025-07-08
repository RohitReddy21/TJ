import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, ShoppingBag } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '40%', label: 'EBITDA Growth', color: 'from-green-400 to-emerald-500' },
  { icon: Users, value: '32+', label: 'Tech Accelerations', color: 'from-blue-400 to-cyan-500' },
  { icon: Award, value: '125+', label: 'ML Models Delivered', color: 'from-purple-400 to-violet-500' },
  { icon: ShoppingBag, value: '5163+', label: 'Processes Automated', color: 'from-orange-400 to-red-500' }
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transforming businesses through innovative technology and digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}