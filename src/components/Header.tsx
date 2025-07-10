import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Facebook, Linkedin, Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo_white@2x-2.png'; // Update with your actual logo path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    {
      path: '/products/cognitive-rpa',
      label: 'Products',
      hasDropdown: true,
      dropdownItems: [
        { path: '/products/cognitive-rpa', label: 'Cognitive RPA' },
      ],
    },
    {
      path: '/services',
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { path: '/services/ai-ml', label: 'AI & ML Solutions' },
        { path: '/services/resource-realignment', label: 'Resource Realignment' },
        { path: '/services/incisive-analytics', label: 'Incisive Analytics' },
      ],
    },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="w-full z-50">
      {/* Top Info Bar */}
      <div className="hidden md:flex bg-gray-100 text-sm text-gray-700 px-6 py-1 justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="tel:+14195614770" className="flex items-center space-x-1 hover:text-blue-600">
            <Phone size={14} />
            <span>(419) 561-4770</span>
          </a>
          <a href="mailto:sales@techjignyasa.com" className="flex items-center space-x-1 hover:text-blue-600">
            <Mail size={14} />
            <span>sales@techjignyasa.com</span>
          </a>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Dallas, TX</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <Facebook size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <Twitter size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
<motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.3 }}
  className={`transition-all duration-300 ${
    scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
  }`}
>
  <div className="container mx-auto px-4 py-2 md:px-10 flex items-center justify-between">
    {/* Logo */}
    <Link to="/" className="flex items-center space-x-3">
      <img
        src={logo}
        alt="Tech Jignyasa Logo"
        className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 object-contain"
      />
    </Link>


          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => {
                      if (item.label === 'Products') setProductsOpen(true);
                      if (item.label === 'Services') setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.label === 'Products') setProductsOpen(false);
                      if (item.label === 'Services') setServicesOpen(false);
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2 ${
                        location.pathname === item.path
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} />
                    </Link>
                    <AnimatePresence>
                      {((item.label === 'Products' && productsOpen) ||
                        (item.label === 'Services' && servicesOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-blue-600 font-medium py-2 ${
                      location.pathname === item.path
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Contact Info */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <Phone className="text-blue-600" size={18} />
              </div>
              <div className="flex flex-col text-sm leading-tight">
                <span className="text-xs text-gray-500">Have Any Question?</span>
                <a href="tel:+14195614770" className="font-bold text-gray-800 hover:text-blue-600">(419) 561-4770</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
{/* Mobile Menu Button */}
<button
  className="lg:hidden text-gray-700 focus:outline-none"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label="Toggle menu"
>
  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>

{/* Mobile Navigation Drawer */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      key="mobile-nav"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed inset-0 z-50 bg-white lg:hidden shadow-lg"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
         <Link to="/" className="flex items-center space-x-3">
      <img
        src={logo}
        alt="Tech Jignyasa Logo"
        className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 object-contain"
      />
    </Link>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-gray-700 hover:text-red-500 transition"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </div>

      <div className="px-6 py-4 space-y-6">
        {navItems.map((item) => {
          const isDropdownOpen =
            (item.label === 'Products' && productsOpen) ||
            (item.label === 'Services' && servicesOpen);

          const toggleDropdown = () => {
            if (item.label === 'Products') setProductsOpen(!productsOpen);
            if (item.label === 'Services') setServicesOpen(!servicesOpen);
          };

          return (
            <div key={item.path}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="w-full flex items-center justify-between text-gray-800 font-medium text-base"
                  >
                    <span>{item.label}</span>
                    <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 pl-4 space-y-2"
                      >
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-600 hover:text-blue-600 text-sm"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-800 hover:text-blue-600 font-medium text-base"
                >
                  {item.label}
                </Link>
              )}
            </div>
            
          );
        })}
        
      </div>
      
    </motion.div>
    
  )}
  
</AnimatePresence>

        </div>
        
      </motion.div>
      
    </header>
  );
};

export default Header;
