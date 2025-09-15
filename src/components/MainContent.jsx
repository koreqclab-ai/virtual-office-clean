
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="/images/vincent.png" alt="Vincent Tan" className="w-full h-full object-cover" />
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
                  <img src="/images/sarah.png" alt="Sarah" className="w-full h-full object-cover" />
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

{/* Is It Right For You Section */}
<section id="pricing" className="py-20" style={{backgroundColor: '#F5E6D3'}}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6" style={{color: '#5A4A3A'}}>Is a Virtual Office Address Right for You?</h2>
      <p className="text-2xl mb-16" style={{color: '#7A6A5A'}}>You might benefit from our CBD address if:</p>
    </div>

    {/* Benefit Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <div className="text-center p-6 bg-white rounded-lg shadow-sm">
        <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#B8A898'}}>
          <img src="/images/icons/acra_registration.png" alt="ACRA Registration" className="w-13 h-13" />
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{color: '#5A4A3A'}}>ACRA Registration</h3>
        <p className="text-sm" style={{color: '#7A6A5A'}}>Need real Singapore address for company registration</p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-sm">
        <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#B8A898'}}>
          <img src="/images/icons/home_based_business.png" alt="Home-Based Business" className="w-13 h-13" />
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{color: '#5A4A3A'}}>Home-Based Business</h3>
        <p className="text-sm" style={{color: '#7A6A5A'}}>Run e-commerce or online business professionally</p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-sm">
        <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#B8A898'}}>
          <img src="/images/icons/privacy_protection.png" alt="Privacy Protection" className="w-13 h-13" />
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{color: '#5A4A3A'}}>Privacy Protection</h3>
        <p className="text-sm" style={{color: '#7A6A5A'}}>Keep personal address off public records</p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-sm">
        <div className="w-26 h-26 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#B8A898'}}>
          <img src="/images/icons/cbd_presence.png" alt="CBD Presence" className="w-13 h-13" />
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{color: '#5A4A3A'}}>CBD Presence</h3>
        <p className="text-sm" style={{color: '#7A6A5A'}}>Appear established in Singapore's business district</p>
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