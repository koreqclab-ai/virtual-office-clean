import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGoToPricing } from '../utils/scrollToPricing';
import { useMobileNav } from '../context/MobileNavContext';
import { useContactModal } from '../context/ContactModalContext';
import { scrollToId } from '../utils/scrollToId';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { goToPricing } = useGoToPricing();
  const { isNavOpen, toggleNav } = useMobileNav();
  const { openContact } = useContactModal();
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

    if (location.pathname === '/') {
      // If on landing page, scroll to pricing section
      scrollToId('pricing', 72);
    } else {
      // If on other pages, navigate to landing page pricing section
      navigate('/#pricing');
      setTimeout(() => {
        scrollToId('pricing', 72);
      }, 300);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200" aria-label="Anson & Co logo">
              <div className="flex flex-col">
                <div className="font-serif text-2xl md:text-3xl font-bold text-custom-gold leading-tight">
                  ANSON & CO
                </div>
                <span className="text-sm md:text-base font-light tracking-wide text-custom-gold">
                  The Right Address Matters
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            <button
              onClick={openContact}
              className="font-medium hover:opacity-75 transition-all duration-200 text-center"
              style={{color: '#8B7355'}}
            >
              Contact Us
            </button>
            <a href="#pricing"
               className="font-medium hover:opacity-75 transition-all duration-200 text-center"
               style={{color: '#8B7355'}}
               onClick={handlePricingClick}>
              Pricing
            </a>
            <Link to="/faq" className="font-medium hover:opacity-75 transition-all duration-200 text-center" style={{color: '#8B7355'}}>
              FAQ
            </Link>
            <Link to="/incorporation-guide" className="font-medium hover:opacity-75 transition-all duration-200 text-center" style={{color: '#8B7355'}}>
              Incorporation<br/>Guide
            </Link>
            <Link to="/acra-compliance" className="font-medium hover:opacity-75 transition-all duration-200 text-center" style={{color: '#8B7355'}}>
              ACRA<br/>Compliance
            </Link>
            <button
              onClick={handlePricingClick}
              className="btn-primary"
            >
              Get Business Address Now
            </button>
          </nav>

          <button
            onClick={toggleNav}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={isNavOpen}
            aria-label="Open menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${isNavOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isNavOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${isNavOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}