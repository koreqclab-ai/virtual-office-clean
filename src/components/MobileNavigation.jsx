import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useGoToPricing } from '../utils/scrollToPricing';
import { useMobileNav } from '../context/MobileNavContext';
import { useContactModal } from '../context/ContactModalContext';
import { lockScroll, unlockScroll } from '../utils/scrollLock';
import { scrollToId } from '../utils/scrollToId';

export function MobileNavigation() {
  const { isNavOpen, closeNav } = useMobileNav();
  const { openContact } = useContactModal();
  const { goToPricing } = useGoToPricing();
  const firstLinkRef = useRef(null);

  // Handle scroll lock and focus management
  useEffect(() => {
    if (isNavOpen) {
      lockScroll();
      // Focus first link after transition
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 300);
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isNavOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isNavOpen) {
        closeNav();
      }
    };

    if (isNavOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isNavOpen, closeNav]);

  const handlePricingClick = (e) => {
    e.preventDefault();
    closeNav();
    // Small delay to ensure nav closes before scrolling
    setTimeout(() => {
      scrollToId('pricing', 72);
    }, 100);
  };

  const handleLinkClick = () => {
    closeNav();
  };

  const handleContactClick = () => {
    closeNav();
    openContact({
      id: 'mobile-nav-cta',
      label: 'General Inquiry',
      price: 0,
      segment: 'Mobile Navigation CTA'
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 h-[100dvh] w-full z-[65] ${isNavOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{
        visibility: isNavOpen ? 'visible' : 'hidden',
        opacity: isNavOpen ? 1 : 0,
        transition: 'opacity 300ms, visibility 300ms'
      }}
    >
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 z-[64] ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeNav}
        style={{ pointerEvents: isNavOpen ? 'auto' : 'none' }}
      />
      <nav
        className={`absolute right-0 top-0 w-[88%] max-w-[420px] bg-white shadow-xl h-[100dvh] z-[65]
                    transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
      >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Anson & Co</h2>
                <span className="text-sm text-gray-500">The Right Address Matters</span>
              </div>
              <button
                onClick={closeNav}
                className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <span className="sr-only">Close menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                <li>
                  <a href="/#pricing"
                     ref={firstLinkRef}
                     onClick={handlePricingClick}
                     className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link to="/faq" onClick={handleLinkClick} className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/incorporation-guide" onClick={handleLinkClick} className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    Incorporation Guide
                  </Link>
                </li>
                <li>
                  <Link to="/acra-compliance" onClick={handleLinkClick} className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    ACRA Compliance
                  </Link>
                </li>
                <li className="pt-4 border-t border-gray-100">
                  <button
                    onClick={handleContactClick}
                    className="btn-primary w-full"
                  >
                    Get Business Address Now
                  </button>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  );
}