import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen, onGetStartedClick }) {
  // Smooth scroll functionality
  const scrollToSection = useCallback((sectionId, offset = 20) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
    const targetPosition = element.offsetTop - headerHeight - offset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    });
  }, []);

  const handlePricingClick = (e) => {
    e.preventDefault();
    scrollToSection('pricing');
  };
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-serif text-3xl font-bold" style={{ color: '#8B7355' }}>ANSON & CO</h1>
              <span className="text-sm font-normal" style={{color: '#8B7355'}}>The Right Address Matters</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#pricing"
               className="font-medium hover:opacity-75 transition-all duration-200"
               style={{color: '#8B7355'}}
               onClick={handlePricingClick}>
              Pricing
            </a>
            <Link to="/faq" className="font-medium hover:opacity-75 transition-all duration-200" style={{color: '#8B7355'}}>
              FAQ
            </Link>
            <Link to="/incorporation-guide" className="font-medium hover:opacity-75 transition-all duration-200" style={{color: '#8B7355'}}>
              Incorporation Guide
            </Link>
            <button
              onClick={() => onGetStartedClick('header-get-started')}
              className="text-white px-6 py-2 rounded font-medium hover:opacity-90"
              style={{backgroundColor: '#D4B896'}}
            >
              Get Business Address Now
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}