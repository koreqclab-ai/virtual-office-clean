
import { useState } from 'react';
import { coreFeatures } from '../data/features';
import { pricingPlans } from '../data/pricing';
import React, { useEffect } from 'react';

export function MainContent({ onGetStartedClick }) {
  useEffect(() => {
    // Add FAQ Schema for Rich Snippets - PAA Optimized
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a virtual office cost in Singapore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Virtual office costs in Singapore vary significantly by location and services. Budget providers in industrial areas start from $4.17/month, while premium CBD locations can cost $80+ monthly. Our International Plaza CBD address offers the perfect middle ground at $9.99/month (billed annually at $119.88), providing genuine business prestige without premium pricing. This includes ACRA-compliant registration, professional mail handling, and 24/7 building access. Annual billing demonstrates serious business commitment and unlocks substantial savings compared to monthly plans."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cheapest virtual office in Singapore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cheapest virtual offices in Singapore start around $4.17/month from providers in Paya Lebar and industrial areas. However, these budget options often lack CBD prestige and may not be accepted by all banks or government agencies. For serious businesses, our $9.99/month International Plaza CBD address (annual billing) offers exceptional value - genuine CBD location, ACRA compliance, professional credibility, and banking acceptance at just 2.5x the cheapest options. Quality matters for business registration, banking relationships, and professional credibility."
          }
        },
        {
          "@type": "Question",
          "name": "Is virtual office legal in Singapore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, virtual offices are completely legal in Singapore when used correctly. ACRA (Accounting and Corporate Regulatory Authority) explicitly allows virtual office addresses for company registration, provided the address is genuine and the business can receive mail there. Key legal requirements include: using a real Singapore address (not a PO Box), ensuring mail reception capability, and maintaining business substance. Our International Plaza address is pre-verified with ACRA, accepted by all major banks, and fully compliant with Singapore company law. We've handled 1000+ registrations since 2009 with zero compliance issues."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for virtual office in Singapore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For virtual office setup in Singapore, you typically need: (1) Valid identification (passport/NRIC), (2) Proof of business ownership or directorship, (3) Service agreement with virtual office provider, and (4) Address authorization letter for ACRA filing. For ACRA company registration specifically, you'll need: incorporation form (available online), company constitution, director/shareholder details, and registered address confirmation (which we provide). Additional documents may include business license applications, bank account opening forms, and GST registration paperwork. Our International Plaza service includes comprehensive documentation support, address verification letters, and ACRA filing assistance to ensure smooth business setup."
          }
        }
      ]
    };

    // Add schema to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Marina Bay Sands Background - Text positioned higher */}
      <section className="relative h-[75vh] flex items-start pt-20">
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
                className="block text-5xl font-bold leading-tight mb-3"
                style={{color: '#D4B896'}}
              >
                Establish Your Business
              </span>
              {/* White text lines like Image 2 */}
              <span className="block text-5xl font-bold leading-tight mb-3 text-white">
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

      {/* Trust Indicators Section - Light Beige/Cream Background */}
      <section className="py-20" style={{ backgroundColor: '#FDF6E3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#8B7355' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#8B7355' }}>International Plaza CBD</h3>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#8B7355' }}>Premium Location</h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-sm">
                Prestigious International Plaza address in Singapore's Central Business District
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#8B7355' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#8B7355' }}>ACRA Pre-Verified</h3>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#8B7355' }}>Address Provider</h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-sm">
                Pre-approved address for company registration with Singapore's ACRA
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#8B7355' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#8B7355' }}>Trusted by 1000+</h3>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#8B7355' }}>across 40+ countries</h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-sm">
                Serving businesses worldwide with reliable Singapore address solutions
              </p>
            </div>
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Location</h3>
              <p className="text-gray-600 leading-relaxed">
                International Plaza address commands respect from banks, government agencies, and business partners across Southeast Asia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ACRA Registration</h3>
              <p className="text-gray-600 leading-relaxed">
                Use our pre-verified address for company registration, ensuring compliance with all Singapore business requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">🔒</span>
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="/vincent.png" alt="Vincent Tan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vincent Tan</h3>
                  <p className="text-orange-600 font-medium">Digital Products Business</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Vincent runs a digital products business selling online courses and software globally. He uses International Plaza for:"
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
                  Payment processor documents and merchant statements
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
                  International customer correspondence
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
                  CBD credibility for partnership negotiations
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
                  Professional separation from home address
                </li>
              </ul>
            </div>

            {/* Sarah */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="/sarah.png" alt="Sarah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sarah</h3>
                  <p className="text-orange-600 font-medium">International Consultant</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Sarah is based in London and serves Asian markets. With Singapore CBD address:"
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
                  Opened local business bank account
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
                  Registered Singapore entity with ACRA
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
                  Added prestigious address to proposals
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3 text-lg">✓</span>
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
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/acra_registration.png" alt="ACRA Registration" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ACRA Registration</h3>
              <p className="text-gray-600 text-sm">Need real Singapore address for company registration</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/home_based_business.png" alt="Home-Based Business" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Home-Based Business</h3>
              <p className="text-gray-600 text-sm">Run e-commerce or online business professionally</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/privacy_protection.png" alt="Privacy Protection" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Protection</h3>
              <p className="text-gray-600 text-sm">Keep personal address off public records</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/cbd_presence.png" alt="CBD Presence" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CBD Presence</h3>
              <p className="text-gray-600 text-sm">Appear established in Singapore's business district</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Features in Every Plan</h2>
      <p className="text-lg text-gray-600">Essential features included with all virtual office plans</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {coreFeatures.map((feature) => (
        <div key={feature.id} className="flex items-start space-x-4">
          <img src={feature.icon} alt="Feature icon" className="w-6 h-6 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-900 font-medium">
              {feature.title}
              {feature.linkText && feature.linkHref && (
                <>
                  {' '}
                  {feature.linkIcon && <img src={feature.linkIcon} alt="Link icon" className="inline w-4 h-4 mx-1" />}
                  <a href={feature.linkHref} className="text-orange-500 hover:text-orange-600 underline">
                    {feature.linkText}
                  </a>
                </>
              )}
              {feature.infoLink && (
                <a href={feature.infoLink} className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-gray-400 hover:bg-gray-600 rounded-full">
                  i
                </a>
              )}
            </p>
            {feature.subtitle && (
              <p className="text-sm text-gray-600 mt-1">{feature.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Pricing Plans Section */}
<section id="pricing" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
      <p className="text-xl text-gray-600 mb-8">Flexible Virtual Office Plans to Suit Every Business Need</p>
      
      {/* Modern Tab Selector */}
      <div className="inline-flex items-center bg-gray-100 rounded-xl p-1 mb-12">
        <button 
          className={`px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
            activeTab === 'local' 
              ? 'bg-orange-500 text-white shadow-md' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveTab('local')}
        >
          <div className="text-center">
            <div className="font-bold">Local Company</div>
            <div className="text-xs opacity-75">registered in Singapore</div>
          </div>
        </button>
        <button 
          className={`px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
            activeTab === 'offshore' 
              ? 'bg-orange-500 text-white shadow-md' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveTab('offshore')}
        >
          <div className="text-center">
            <div className="font-bold">Offshore Company</div>
            <div className="text-xs opacity-75">registered overseas</div>
          </div>
        </button>
      </div>
    </div>

    {/* Local Company Plans */}
    <div className={`transition-all duration-300 ${activeTab === 'local' ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.filter(plan => plan.category === 'local').map((plan) => (
          <div key={plan.id} className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                {plan.icons.map((icon, index) => (
                  <div key={index} className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <img src={icon} alt="Plan icon" className="w-6 h-6" />
                  </div>
                ))}
              </div>
              {plan.badge && (
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Plan Title & Price */}
            <h3 className="text-lg font-bold text-gray-900 mb-4">{plan.title}</h3>
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <span className="text-3xl font-bold text-orange-500">{plan.price}</span>
                <span className="text-gray-600">/year</span>
              </div>
              <span className="text-sm text-gray-500">No GST</span>
            </div>

            {/* Subscribe Button */}
            <button
              onClick={() => onGetStartedClick(`${plan.id}-plan`)}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-6"
            >
              Get Business Address Now
            </button>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <span className="text-orange-500 font-bold mr-2">✓</span>
                <span>All core features</span>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What's Special</h4>
                <div className="space-y-3">
                  {plan.specialFeatures.map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-orange-500 font-bold mr-2 mt-0.5">✓</span>
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
                                className="text-orange-500 hover:text-orange-600 text-xs underline inline-flex items-center"
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

    {/* Offshore Company Plans */}
    <div className={`transition-all duration-300 ${activeTab === 'offshore' ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.filter(plan => plan.category === 'offshore').map((plan) => (
          <div key={plan.id} className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                {plan.icons.map((icon, index) => (
                  <div key={index} className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <img src={icon} alt="Plan icon" className="w-6 h-6" />
                  </div>
                ))}
              </div>
              {plan.badge && (
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Plan Title & Price */}
            <h3 className="text-lg font-bold text-gray-900 mb-4">{plan.title}</h3>
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <span className="text-3xl font-bold text-orange-500">{plan.price}</span>
                <span className="text-gray-600">/year</span>
              </div>
              <span className="text-sm text-gray-500">No GST</span>
            </div>

            {/* Subscribe Button */}
            <button
              onClick={() => onGetStartedClick(`${plan.id}-plan`)}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-6"
            >
              Get Business Address Now
            </button>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <span className="text-orange-500 font-bold mr-2">✓</span>
                <span>All core features</span>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What's Special</h4>
                <div className="space-y-3">
                  {plan.specialFeatures.map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-orange-500 font-bold mr-2 mt-0.5">✓</span>
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
                                className="text-orange-500 hover:text-orange-600 text-xs underline inline-flex items-center"
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


      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Can I use this for ACRA registration?</h3>
                <p className="text-gray-700 text-sm">Yes, our International Plaza address is pre-verified with ACRA and accepted by all Singapore government agencies.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">How quickly can I start?</h3>
                <p className="text-gray-700 text-sm">You can start using the address immediately after payment and document verification, typically within 1-2 business days.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Do banks accept this address?</h3>
                <p className="text-gray-700 text-sm">Yes, all major Singapore banks recognize our premium International Plaza address for business account opening.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Can I receive international mail?</h3>
                <p className="text-gray-700 text-sm">Absolutely! We forward mail and packages anywhere in Singapore and internationally at transparent postage rates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">What about multi-entity discounts?</h3>
                <p className="text-gray-700 text-sm">Yes! 2nd entity gets 10% off, 3rd entity gets 15% off, and 4th+ entities get 20% off. Perfect for growing portfolios.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Why annual billing only?</h3>
                <p className="text-gray-700 text-sm">Annual billing demonstrates business commitment and unlocks our best rates. It's designed for serious, established businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}