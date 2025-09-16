import { Link } from 'react-router-dom';
import { useGoToPricing } from '../utils/scrollToPricing';
import { useMobileNav } from '../context/MobileNavContext';
import { useContactModal } from '../context/ContactModalContext';

export function MobileNavigation() {
  const { isNavOpen, closeNav } = useMobileNav();
  const { openContact } = useContactModal();
  const { goToPricing } = useGoToPricing();

  const handlePricingClick = (e) => {
    goToPricing(e);
    closeNav();
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

  if (!isNavOpen) return null;

  return (
    <div className="fixed inset-0 z-[8000]">
      <div className="absolute inset-0 bg-black/40" onClick={closeNav} />
      <nav className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl focus:outline-none transform transition-transform duration-300 ease-in-out">
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