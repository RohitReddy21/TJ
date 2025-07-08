import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center gap-2 mt-12"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600/50 transition-all duration-200"
      >
        <ChevronLeft size={16} />
        Previous
      </motion.button>

      <div className="flex gap-1">
        {getPageNumbers().map((page, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: page !== '...' ? 1.1 : 1 }}
            whileTap={{ scale: page !== '...' ? 0.9 : 1 }}
            onClick={() => page !== '...' && onPageChange(page)}
            disabled={page === '...'}
            className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
              page === currentPage
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                : page === '...'
                ? 'text-slate-400 cursor-default'
                : 'bg-slate-700/50 text-white hover:bg-slate-600/50'
            }`}
          >
            {page}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600/50 transition-all duration-200"
      >
        Next
        <ChevronRight size={16} />
      </motion.button>
    </motion.div>
  );
}