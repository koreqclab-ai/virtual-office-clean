import { Link } from 'react-router-dom';
import { useGoToPricing } from '../utils/scrollToPricing';

export function Navigation() {
  const { goToPricing } = useGoToPricing();

  return (
    <nav className="hidden md:flex space-x-6 items-center">
      <Link to="/" aria-label="Anson & Co logo">
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-custom-gold leading-tight">
            ANSON & CO
          </h1>
          <span className="text-sm md:text-base font-light tracking-wide text-custom-gold">
            The Right Address Matters
          </span>
        </div>
      </Link>

      <a href="/#pricing" onClick={goToPricing} className="font-medium hover:opacity-75 transition-all duration-200" style={{color: '#8B7355'}}>
        Pricing
      </a>
      <Link to="/faq" className="font-medium hover:opacity-75 transition-all duration-200" style={{color: '#8B7355'}}>
        FAQ
      </Link>
      <Link to="/incorporation-guide" className="font-medium hover:opacity-75 transition-all duration-200" style={{color: '#8B7355'}}>
        Incorporation Guide
      </Link>
      <Link to="/acra-compliance" className="font-medium hover:opacity-75 transition-all duration-200" style={{color: '#8B7355'}}>
        ACRA Compliance
      </Link>

      <button
        className="btn-primary"
        onClick={goToPricing}
      >
        Get Business Address Now
      </button>
    </nav>
  );
}