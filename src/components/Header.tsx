import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Facebook, Linkedin, Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo_white@2x-2.png"

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
        { path: '/products/cognitive-rpa', label: 'Cognitive RPA' }
      ]
    },
    {
      path: '/services/ai-ml',
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { path: '/services/ai-ml', label: 'AI & ML Solutions' },
        { path: '/services/resource-realignment', label: 'Resource Realignment' },
        { path: '/services/Incisive-Analytics', label: 'Incisive Analytics' }
      ]
    },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="w-full z-50">
      {/* Top Info Bar */}
      <div className="hidden md:flex bg-gray-200 text-sm text-gray-700 px-4 py-2 justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Mail size={14} />
            <span>sales@techjignyasa.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin size={14} />
            <span>Dallas, TX and Hyderabad, India</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-blue-600 font-semibold">
            <Phone size={14} />
            <span>(419) 561-4770</span>
          </div>
          <div className="flex space-x-2 text-gray-500">
            <Facebook className="hover:text-blue-600 cursor-pointer" size={16} />
            <Linkedin className="hover:text-blue-600 cursor-pointer" size={16} />
            <Twitter className="hover:text-blue-600 cursor-pointer" size={16} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 py-1 md:px-[150px] flex items-center justify-between">
          {/* Logo */}
         
<Link to="/" className="flex items-center space-x-2 sm:space-x-3">
  <img
    src={logo}
    alt="Tech Jignyasa Logo"
    className="w-10 h-10 sm:w-[100px] sm:h-[80px] object-contain rounded-lg"
  />
</Link>

          {/* Desktop Nav */}
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
                        location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600' : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} />
                    </Link>
                    <AnimatePresence>
                      {((item.label === 'Products' && productsOpen) || (item.label === 'Services' && servicesOpen)) && (
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
                      location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden px-4 pb-4"
    >
      <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
        {navItems.map((item) => {
          const isDropdownOpen =
            (item.label === 'Products' && productsOpen) ||
            (item.label === 'Services' && servicesOpen);

          const toggleDropdown = () => {
            if (item.label === 'Products') setProductsOpen(!productsOpen);
            if (item.label === 'Services') setServicesOpen(!servicesOpen);
          };

          return (
            <div key={item.path} className="flex flex-col">
              <button
                onClick={() => {
                  if (item.hasDropdown) toggleDropdown();
                  else setIsMenuOpen(false);
                }}
                className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <motion.span
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                )}
              </button>

              {/* Animated Submenu */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {item.dropdownItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-gray-600 text-sm hover:text-blue-600 block"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}

        <div className="flex items-center space-x-2 text-gray-600 pt-4 border-t border-gray-200">
          <Phone size={16} className="text-blue-600" />
          <span className="text-sm font-semibold">(419) 561-4770</span>
        </div>
      </nav>
    </motion.div>
  )}
</AnimatePresence>

      </motion.div>
    </header>
  );
};

export default Header;
