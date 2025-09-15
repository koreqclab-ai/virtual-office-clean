import React from 'react';

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen, onGetStartedClick }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-serif text-3xl font-bold" style={{ color: '#8B7355' }}>ANSON & CO</h1>
              <span className="text-sm text-gray-600 font-normal">The Right Address Matters</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="/faq" className="text-gray-700 hover:text-gray-900 font-medium">
              FAQ
            </a>
            <a href="/incorporation-guide" className="text-gray-700 hover:text-gray-900 font-medium">
              Incorporation Guide
            </a>
            <button
              onClick={() => onGetStartedClick('header-get-started')}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-medium"
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