
import { useState } from 'react';
import { leftColumnFeatures, rightColumnFeatures } from '../data/features';
import { pricingPlans } from '../data/pricing';
import React, { useEffect } from 'react';
import '../styles/responsive-design-tokens.css';

export function MainContent({ onGetStartedClick }) {
  useEffect(() => {
    // Add Business Schema for Rich Snippets
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Anson & Co Virtual Office",
      "description": "Premium virtual office solutions at International Plaza CBD Singapore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Anson Road, #18-08",
        "addressLocality": "Singapore",
        "postalCode": "079903",
        "addressCountry": "SG"
      },
      "telephone": "+65-6123-4567",
      "url": "https://virtualaddress.biz",
      "priceRange": "$$$",
      "openingHours": "Mo-Fr 09:00-18:00"
    };

    // Add schema to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(businessSchema);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const [activeTab, setActiveTab] = useState('local');

  // Keyboard navigation for tab switching
  const handleTabKeyDown = (event, tabName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveTab(tabName);
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      setActiveTab(activeTab === 'local' ? 'offshore' : 'local');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Marina Bay Sands Background - Full screen height */}
      <section className="relative min-h-screen flex items-start" style={{paddingTop: '264px'}}>
        {/* Marina Bay Sands Background - Exactly like Image 2 */}
        <div
          className="absolute inset-0 bg-cover bg-gray-900"
          style={{
            backgroundImage: 'url("/images/hero/marina_bay_sands_aerial.jpg")',
            backgroundPosition: "center 20%"
          }}
        >
          {/* Dark overlay for text readability - matching Image 2 */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content - Positioned like Image 2 */}
        <div className="relative z-10 w-full">
          <div className="ml-[15%] max-w-4xl text-left">

            {/* Hero Text - Exactly matching Image 2 */}
            <h1>
              {/* Golden first line exactly like Image 2 */}
              <span
                className="block text-5xl font-bold leading-tight mb-1"
                style={{color: '#D4B896'}}
              >
                Establish Your Business
              </span>
              {/* White text lines like Image 2 */}
              <span className="block text-5xl font-bold leading-tight mb-1 text-white">
                Presence with a Premium
              </span>
              <span className="block text-5xl font-bold leading-tight mb-8 text-white">
                Singapore CBD Address
              </span>
            </h1>

            {/* Body text with proper contrast */}
            <p className="text-lg leading-relaxed max-w-2xl text-white/90">
              Use a real International Plaza address to register your company with ACRA, open business bank accounts, receive mail securely, and protect your privacy.
            </p>

          </div>
        </div>
      </section>


      {/* What is Virtual Office Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is a Virtual Office Address?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A virtual office address provides your business with a genuine CBD street location for company registration through ACRA, professional mail handling, and establishing corporate credibility—all without the overhead of maintaining physical premises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: '#F5E6D3'}}>
                <img src="/images/icons/cbd_presence.png" alt="Premium Location" className="w-13 h-13" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Location</h3>
              <p className="text-gray-600 leading-relaxed">
                International Plaza address commands respect from banks, government agencies, and business partners across Southeast Asia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: '#F5E6D3'}}>
                <img src="/images/icons/acra_registration.png" alt="ACRA Registration" className="w-13 h-13" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ACRA Registration</h3>
              <p className="text-gray-600 leading-relaxed">
                Use our pre-verified address for company registration, ensuring compliance with all Singapore business requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: '#F5E6D3'}}>
                <img src="/images/icons/privacy_protection.png" alt="Privacy Protection" className="w-13 h-13" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep your personal address private while maintaining a professional business presence in Singapore's CBD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            How Business Owners Benefit
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vincent Tan */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 overflow-hidden" style={{ backgroundColor: 'var(--light-beige)' }}>
                  <img src="/images/vincent.png" alt="Vincent Tan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vincent Tan</h3>
                  <p className="font-medium" style={{ color: 'var(--primary-beige)' }}>Digital Products Business</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Vincent runs a digital products business selling online courses and software globally. He uses International Plaza for:"
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  Payment processor documents and merchant statements
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  International customer correspondence
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  CBD credibility for partnership negotiations
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  Professional separation from home address
                </li>
              </ul>
            </div>

            {/* Sarah */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 overflow-hidden" style={{ backgroundColor: 'var(--light-beige)' }}>
                  <img src="/images/sarah.png" alt="Sarah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sarah</h3>
                  <p className="font-medium" style={{ color: 'var(--primary-beige)' }}>International Consultant</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Sarah is based in London and serves Asian markets. With Singapore CBD address:"
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  Opened local business bank account
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  Registered Singapore entity with ACRA
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  Added prestigious address to proposals
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-lg" style={{ color: 'var(--primary-beige)' }}>✓</span>
                  Boosted client trust and credibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Is It Right For You */}
      <section className="py-20 bg-gray-50" id="locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is a Virtual Office Address Right for You?
            </h2>
            <p className="text-xl text-gray-600">You might benefit from our CBD address if:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#F5E6D3'}}>
                <img src="/images/icons/acra_registration.png" alt="ACRA Registration" className="w-13 h-13" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ACRA Registration</h3>
              <p className="text-gray-600 text-sm">Need real Singapore address for company registration</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#F5E6D3'}}>
                <img src="/images/icons/home_based_business.png" alt="Home-Based Business" className="w-13 h-13" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Home-Based Business</h3>
              <p className="text-gray-600 text-sm">Run e-commerce or online business professionally</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#F5E6D3'}}>
                <img src="/images/icons/privacy_protection.png" alt="Privacy Protection" className="w-13 h-13" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Protection</h3>
              <p className="text-gray-600 text-sm">Keep personal address off public records</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#F5E6D3'}}>
                <img src="/images/icons/cbd_presence.png" alt="CBD Presence" className="w-13 h-13" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CBD Presence</h3>
              <p className="text-gray-600 text-sm">Appear established in Singapore's business district</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section - Dual Container Design */}
<section className="py-16" style={{ backgroundColor: 'var(--cream-background)' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A453F' }}>Core Features in Every Plan</h2>
      <p className="text-lg" style={{ color: 'var(--soft-gray)' }}>Essential features included with all virtual office plans</p>
    </div>

    {/* Dual Container Layout */}
    <div className="core-features-wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Left Container */}
      <div className="features-container-left p-8 rounded-xl border transition-all duration-300"
           style={{
             backgroundColor: 'var(--warm-white)',
             borderColor: '#EEEBE6',
             boxShadow: '0 2px 8px rgba(184, 168, 152, 0.08)'
           }}>
        <div className="features-list">
          {leftColumnFeatures.map((feature, index) => (
            <div key={feature.id}
                 className={`feature-item flex items-start gap-3 py-5 transition-all duration-200 rounded-lg -mx-3 px-3 ${
                   index < leftColumnFeatures.length - 1 ? 'border-b' : ''
                 }`}
                 style={{
                   borderColor: index < leftColumnFeatures.length - 1 ? '#F0EDE8' : 'transparent'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#F7F6F4';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent';
                 }}>

              {/* Feature Icon */}
              <div className="feature-icon flex-shrink-0 w-6 h-6 mt-0.5"
                   style={{ color: 'var(--primary-beige)' }}>
                <img src={feature.icon} alt="Feature icon" className="w-full h-full"
                     style={{
                       filter: 'sepia(1) saturate(0.8) hue-rotate(25deg) brightness(0.9)',
                       color: '#B8A898'
                     }} />
              </div>

              {/* Feature Content */}
              <div className="feature-content flex-1">
                <div className="feature-title font-medium mb-1" style={{ color: '#5C5651', lineHeight: '1.4' }}>
                  {feature.title}
                  {feature.linkText && feature.linkHref && (
                    <>
                      {' '}
                      {feature.linkIcon && <img src={feature.linkIcon} alt="Link icon" className="inline w-4 h-4 mx-1"
                                                 style={{
                       filter: 'sepia(1) saturate(0.8) hue-rotate(25deg) brightness(0.9)',
                       color: '#B8A898'
                     }} />}
                      <a href={feature.linkHref} className="feature-link underline transition-colors duration-200"
                         style={{
                           color: 'var(--primary-beige)',
                           textDecorationColor: 'var(--light-beige)'
                         }}
                         onMouseEnter={(e) => {
                           e.target.style.color = 'var(--primary-beige-hover)';
                         }}
                         onMouseLeave={(e) => {
                           e.target.style.color = 'var(--primary-beige)';
                         }}>
                        {feature.linkText}
                      </a>
                    </>
                  )}
                  {feature.infoLink && (
                    <a href={feature.infoLink} className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full transition-all duration-200"
                       style={{
                         color: 'var(--warm-white)',
                         backgroundColor: 'var(--primary-beige)'
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.backgroundColor = 'var(--primary-beige-hover)';
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.backgroundColor = 'var(--primary-beige)';
                       }}>
                      i
                    </a>
                  )}
                </div>
                {feature.subtitle && (
                  <div className="feature-description text-sm" style={{ color: 'var(--soft-gray)', lineHeight: '1.4' }}>
                    {feature.subtitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Container */}
      <div className="features-container-right p-8 rounded-xl border transition-all duration-300"
           style={{
             backgroundColor: 'var(--warm-white)',
             borderColor: '#EEEBE6',
             boxShadow: '0 2px 8px rgba(184, 168, 152, 0.08)'
           }}>
        <div className="features-list">
          {rightColumnFeatures.map((feature, index) => (
            <div key={feature.id}
                 className={`feature-item flex items-start gap-3 py-5 transition-all duration-200 rounded-lg -mx-3 px-3 ${
                   index < rightColumnFeatures.length - 1 ? 'border-b' : ''
                 }`}
                 style={{
                   borderColor: index < rightColumnFeatures.length - 1 ? '#F0EDE8' : 'transparent'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#F7F6F4';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent';
                 }}>

              {/* Feature Icon */}
              <div className="feature-icon flex-shrink-0 w-6 h-6 mt-0.5"
                   style={{ color: 'var(--primary-beige)' }}>
                <img src={feature.icon} alt="Feature icon" className="w-full h-full"
                     style={{
                       filter: 'sepia(1) saturate(0.8) hue-rotate(25deg) brightness(0.9)',
                       color: '#B8A898'
                     }} />
              </div>

              {/* Feature Content */}
              <div className="feature-content flex-1">
                <div className="feature-title font-medium mb-1" style={{ color: '#5C5651', lineHeight: '1.4' }}>
                  {feature.title}
                  {feature.linkText && feature.linkHref && (
                    <>
                      {' '}
                      {feature.linkIcon && <img src={feature.linkIcon} alt="Link icon" className="inline w-4 h-4 mx-1"
                                                 style={{
                       filter: 'sepia(1) saturate(0.8) hue-rotate(25deg) brightness(0.9)',
                       color: '#B8A898'
                     }} />}
                      <a href={feature.linkHref} className="feature-link underline transition-colors duration-200"
                         style={{
                           color: 'var(--primary-beige)',
                           textDecorationColor: 'var(--light-beige)'
                         }}
                         onMouseEnter={(e) => {
                           e.target.style.color = 'var(--primary-beige-hover)';
                         }}
                         onMouseLeave={(e) => {
                           e.target.style.color = 'var(--primary-beige)';
                         }}>
                        {feature.linkText}
                      </a>
                    </>
                  )}
                  {feature.infoLink && (
                    <a href={feature.infoLink} className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full transition-all duration-200"
                       style={{
                         color: 'var(--warm-white)',
                         backgroundColor: 'var(--primary-beige)'
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.backgroundColor = 'var(--primary-beige-hover)';
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.backgroundColor = 'var(--primary-beige)';
                       }}>
                      i
                    </a>
                  )}
                </div>
                {feature.subtitle && (
                  <div className="feature-description text-sm" style={{ color: 'var(--soft-gray)', lineHeight: '1.4' }}>
                    {feature.subtitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Pricing Plans Section - Neutral Color Scheme */}
<section id="pricing" className="pt-12 pb-20 pricing-section" style={{backgroundColor: 'var(--cream-background)'}}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pricing-container">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-3 main-heading" style={{color: 'var(--heading-dark)'}}>Pricing Plans</h2>
      <p className="text-xl" style={{color: 'var(--text-muted)', marginBottom: 'var(--subtitle-spacing)'}}>Flexible Virtual Office Plans to Suit Every Business Need</p>
      
      {/* Responsive Tab Selector with Keyboard Navigation - Neutral Colors */}
      <div
        className="flex flex-col sm:inline-flex sm:flex-row items-center rounded-xl p-1 mb-6 sm:mb-8 w-full sm:w-auto max-w-md sm:max-w-none mx-auto"
        style={{backgroundColor: 'var(--light-beige)'}}
        role="tablist"
        aria-label="Pricing plan categories"
      >
        <button
          id="local-tab"
          className={`w-full sm:w-auto touch-target-comfort px-4 sm:px-6 md:px-8 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 mb-1 sm:mb-0 focus:outline-none focus:ring-2 ${
            activeTab === 'local'
              ? 'shadow-md'
              : 'hover:opacity-80 active:opacity-70'
          }`}
          style={{
            backgroundColor: activeTab === 'local' ? 'var(--primary-beige)' : 'transparent',
            color: activeTab === 'local' ? 'white' : 'var(--text-muted)',
            '--tw-ring-color': 'var(--light-beige)'
          }}
          onClick={() => setActiveTab('local')}
          onKeyDown={(e) => handleTabKeyDown(e, 'local')}
          aria-selected={activeTab === 'local'}
          aria-controls="local-plans"
          role="tab"
          tabIndex={activeTab === 'local' ? 0 : -1}
        >
          <div className="text-center">
            <div className="font-bold text-sm sm:text-base">Local Company</div>
            <div className="text-xs opacity-75 hidden sm:block">registered in Singapore</div>
          </div>
        </button>
        <button
          id="offshore-tab"
          className={`w-full sm:w-auto touch-target-comfort px-4 sm:px-6 md:px-8 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
            activeTab === 'offshore'
              ? 'shadow-md'
              : 'hover:opacity-80 active:opacity-70'
          }`}
          style={{
            backgroundColor: activeTab === 'offshore' ? 'var(--primary-beige)' : 'transparent',
            color: activeTab === 'offshore' ? 'white' : 'var(--text-muted)',
            '--tw-ring-color': 'var(--light-beige)'
          }}
          onClick={() => setActiveTab('offshore')}
          onKeyDown={(e) => handleTabKeyDown(e, 'offshore')}
          aria-selected={activeTab === 'offshore'}
          aria-controls="offshore-plans"
          role="tab"
          tabIndex={activeTab === 'offshore' ? 0 : -1}
        >
          <div className="text-center">
            <div className="font-bold text-sm sm:text-base">Offshore Company</div>
            <div className="text-xs opacity-75 hidden sm:block">registered overseas</div>
          </div>
        </button>
      </div>
    </div>

    {/* Local Company Plans - Mobile-First Grid */}
    <div
      id="local-plans"
      className={`transition-all duration-300 ${activeTab === 'local' ? 'opacity-100' : 'opacity-0 hidden'}`}
      role="tabpanel"
      aria-labelledby="local-tab"
    >
      <div className="grid-responsive cols-sm-2 cols-lg-4">
        {pricingPlans.filter(plan => plan.category === 'local').map((plan) => (
          <div
            key={plan.id}
            className="card-responsive relative border transition-all duration-300"
            style={{
              backgroundColor: 'var(--warm-white)',
              borderColor: 'var(--border-subtle)'
            }}
            role="article"
            aria-labelledby={`plan-${plan.id}-title`}
          >
            {/* Plan Header - Mobile Optimized - Neutral Colors */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
              <div className="flex space-x-2 mb-2 sm:mb-0 justify-center sm:justify-start">
                {plan.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flag-icon-container"
                    style={{backgroundColor: 'var(--light-beige)'}}
                    role="img"
                    aria-label={`Plan icon ${index + 1}`}
                  >
                    <img src={icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                ))}
              </div>
              {plan.badge && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-center sm:text-left"
                      style={{backgroundColor: 'var(--light-beige)', color: 'var(--soft-gray)'}}>
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Plan Title & Price - Mobile Optimized - Neutral Colors */}
            <h3
              id={`plan-${plan.id}-title`}
              className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center sm:text-left card-title"
              style={{color: 'var(--heading-muted)'}}
            >
              {plan.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 sm:mb-6 text-center sm:text-left">
              <div className="mb-2 sm:mb-0">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold price-display" style={{color: 'var(--soft-gray)'}}>{plan.price}</span>
                <span className="text-sm sm:text-base" style={{color: 'var(--text-muted)'}}>/year</span>
              </div>
              <span className="text-xs sm:text-sm card-subtitle" style={{color: 'var(--text-very-muted)'}}>No GST</span>
            </div>

            {/* Subscribe Button - Touch Optimized - Neutral Colors */}
            <button
              onClick={() => onGetStartedClick(`${plan.id}-plan`)}
              className="btn-responsive w-full cta-button mb-4 sm:mb-6 text-sm sm:text-base focus:ring-4 focus:outline-none"
              style={{
                backgroundColor: 'var(--primary-beige)',
                color: 'white',
                '--tw-ring-color': 'var(--light-beige)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary-beige-hover)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-beige)'}
              onMouseDown={(e) => e.target.style.backgroundColor = 'var(--primary-beige-active)'}
              aria-label={`Subscribe to ${plan.title} plan`}
            >
              <span className="block sm:hidden">Get Started</span>
              <span className="hidden sm:block">Get Business Address Now</span>
            </button>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <span className="font-bold mr-2" style={{ color: 'var(--primary-beige)' }}>✓</span>
                <span>All core features</span>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What's Special</h4>
                <div className="space-y-3">
                  {plan.specialFeatures.map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-bold mr-2 mt-0.5" style={{ color: 'var(--primary-beige)' }}>✓</span>
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{feature.title}</p>
                          {feature.subtitle && (
                            <p className="text-gray-600 mt-1">{feature.subtitle}</p>
                          )}
                          {feature.details && (
                            <ul className="mt-2 space-y-1 text-gray-600">
                              {feature.details.map((detail, idx) => (
                                <li key={idx} className="text-xs">• {detail}</li>
                              ))}
                            </ul>
                          )}
                          {feature.image && (
                            <img 
                              src={feature.image.src} 
                              alt={feature.image.alt}
                              className="w-full max-w-[200px] mx-auto my-3 rounded-lg"
                            />
                          )}
                          {feature.link && (
                            <div className="mt-2">
                              <a 
                                href={feature.link.href}
                                className="text-xs underline inline-flex items-center transition-colors duration-200"
                                style={{
                                  color: 'var(--primary-beige)',
                                  textDecorationColor: 'var(--light-beige)'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.color = 'var(--primary-beige-hover)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.color = 'var(--primary-beige)';
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {feature.link.text}
                                {feature.link.image && (
                                  <img src={feature.link.image} alt="PDF" className="w-4 h-4 ml-1" />
                                )}
                              </a>
                            </div>
                          )}
                          {feature.note && (
                            <p className="text-xs text-gray-500 mt-2">{feature.note}</p>
                          )}
                          {feature.disclaimer && (
                            <p className="text-xs text-gray-500 mt-1">{feature.disclaimer}</p>
                          )}
                          {feature.additionalInfo && (
                            <p className="text-xs italic text-gray-500 mt-1">{feature.additionalInfo}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Offshore Company Plans - Mobile-First Grid */}
    <div
      id="offshore-plans"
      className={`transition-all duration-300 ${activeTab === 'offshore' ? 'opacity-100' : 'opacity-0 hidden'}`}
      role="tabpanel"
      aria-labelledby="offshore-tab"
    >
      <div className="grid-responsive cols-sm-2 cols-lg-4">
        {pricingPlans.filter(plan => plan.category === 'offshore').map((plan) => (
          <div
            key={plan.id}
            className="card-responsive relative border transition-all duration-300"
            style={{
              backgroundColor: 'var(--warm-white)',
              borderColor: 'var(--border-subtle)'
            }}
            role="article"
            aria-labelledby={`plan-offshore-${plan.id}-title`}
          >
            {/* Plan Header - Mobile Optimized - Neutral Colors */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
              <div className="flex space-x-2 mb-2 sm:mb-0 justify-center sm:justify-start">
                {plan.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flag-icon-container"
                    style={{backgroundColor: 'var(--light-beige)'}}
                    role="img"
                    aria-label={`Plan icon ${index + 1}`}
                  >
                    <img src={icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                ))}
              </div>
              {plan.badge && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-center sm:text-left"
                      style={{backgroundColor: 'var(--light-beige)', color: 'var(--soft-gray)'}}>
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Plan Title & Price - Mobile Optimized - Neutral Colors */}
            <h3
              id={`plan-offshore-${plan.id}-title`}
              className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center sm:text-left card-title"
              style={{color: 'var(--heading-muted)'}}
            >
              {plan.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 sm:mb-6 text-center sm:text-left">
              <div className="mb-2 sm:mb-0">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold price-display" style={{color: 'var(--soft-gray)'}}>{plan.price}</span>
                <span className="text-sm sm:text-base" style={{color: 'var(--text-muted)'}}>/year</span>
              </div>
              <span className="text-xs sm:text-sm card-subtitle" style={{color: 'var(--text-very-muted)'}}>No GST</span>
            </div>

            {/* Subscribe Button - Touch Optimized - Neutral Colors */}
            <button
              onClick={() => onGetStartedClick(`${plan.id}-plan`)}
              className="btn-responsive w-full cta-button mb-4 sm:mb-6 text-sm sm:text-base focus:ring-4 focus:outline-none"
              style={{
                backgroundColor: 'var(--primary-beige)',
                color: 'white',
                '--tw-ring-color': 'var(--light-beige)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary-beige-hover)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-beige)'}
              onMouseDown={(e) => e.target.style.backgroundColor = 'var(--primary-beige-active)'}
              aria-label={`Subscribe to ${plan.title} plan`}
            >
              <span className="block sm:hidden">Get Started</span>
              <span className="hidden sm:block">Get Business Address Now</span>
            </button>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <span className="font-bold mr-2" style={{ color: 'var(--primary-beige)' }}>✓</span>
                <span>All core features</span>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What's Special</h4>
                <div className="space-y-3">
                  {plan.specialFeatures.map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-bold mr-2 mt-0.5" style={{ color: 'var(--primary-beige)' }}>✓</span>
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{feature.title}</p>
                          {feature.subtitle && (
                            <p className="text-gray-600 mt-1">{feature.subtitle}</p>
                          )}
                          {feature.details && (
                            <ul className="mt-2 space-y-1 text-gray-600">
                              {feature.details.map((detail, idx) => (
                                <li key={idx} className="text-xs">• {detail}</li>
                              ))}
                            </ul>
                          )}
                          {feature.image && (
                            <img 
                              src={feature.image.src} 
                              alt={feature.image.alt}
                              className="w-full max-w-[200px] mx-auto my-3 rounded-lg"
                            />
                          )}
                          {feature.link && (
                            <div className="mt-2">
                              <a 
                                href={feature.link.href}
                                className="text-xs underline inline-flex items-center transition-colors duration-200"
                                style={{
                                  color: 'var(--primary-beige)',
                                  textDecorationColor: 'var(--light-beige)'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.color = 'var(--primary-beige-hover)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.color = 'var(--primary-beige)';
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {feature.link.text}
                                {feature.link.image && (
                                  <img src={feature.link.image} alt="PDF" className="w-4 h-4 ml-1" />
                                )}
                              </a>
                            </div>
                          )}
                          {feature.note && (
                            <p className="text-xs text-gray-500 mt-2">{feature.note}</p>
                          )}
                          {feature.disclaimer && (
                            <p className="text-xs text-gray-500 mt-1">{feature.disclaimer}</p>
                          )}
                          {feature.additionalInfo && (
                            <p className="text-xs italic text-gray-500 mt-1">{feature.additionalInfo}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
  );
}