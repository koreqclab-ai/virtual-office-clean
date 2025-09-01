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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Background (Anytime Mailbox Style) */}
      <section className="bg-gray-900 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Establish Your Business Presence with a{' '}
                <span className="text-orange-500">Premium Singapore CBD Address</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Use a real International Plaza address to register your company with ACRA, open business bank accounts, receive mail securely, and protect your privacy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => onGetStartedClick('hero-primary')}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => onGetStartedClick('hero-secondary')}
                  className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image - Professional Person with Mobile */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-3xl p-8">
                <div className="bg-gray-800 rounded-2xl p-8 text-center">
                  {/* Professional Person with Mobile Device */}
                  <div className="w-64 h-80 bg-gradient-to-b from-gray-700 to-gray-600 rounded-2xl mx-auto mb-6 flex items-center justify-center relative">
                    <div className="text-center">
                      {/* Person */}
                      <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-3xl">👤</span>
                      </div>
                      {/* Mobile Device */}
                      <div className="w-32 h-20 bg-gray-600 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-white text-2xl">📱</span>
                      </div>
                      {/* Address Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        CBD Address
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-lg font-medium">
                    Manage your business address from anywhere
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    International Plaza • 24/7 Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-2xl">🏢</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Real CBD Address</h3>
              <p className="text-gray-600 text-sm">International Plaza, Anson Road</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-2xl">✓</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ACRA Compliant</h3>
              <p className="text-gray-600 text-sm">Pre-verified business address</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-2xl">📬</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mail Forwarding</h3>
              <p className="text-gray-600 text-sm">Bi-weekly or monthly options</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-2xl">🌏</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">International</h3>
              <p className="text-gray-600 text-sm">Trusted globally</p>
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-xl">VT</span>
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-xl">S</span>
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
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ACRA Registration</h3>
              <p className="text-gray-600 text-sm">Need real Singapore address for company registration</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Home-Based Business</h3>
              <p className="text-gray-600 text-sm">Run e-commerce or online business professionally</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Protection</h3>
              <p className="text-gray-600 text-sm">Keep personal address off public records</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CBD Presence</h3>
              <p className="text-gray-600 text-sm">Appear established in Singapore's business district</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
            <div className="mt-4 inline-flex bg-orange-100 rounded-lg p-1">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium">Annual Billing (Save 20%)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Address</h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">$9.99<span className="text-lg text-gray-500">/month*</span></div>
                <p className="text-sm text-gray-500 mb-6">*billed annually $119.88</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Premium CBD business address
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    ACRA-compliant registration
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Mail receipt and storage
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Business address usage
                  </li>
                </ul>

                <button
                  onClick={() => onGetStartedClick('basic-plan')}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Monthly Forwarding - Most Popular */}
            <div className="bg-white p-8 rounded-2xl border-2 border-orange-500 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Forwarding</h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">$15.99<span className="text-lg text-gray-500">/month*</span></div>
                <p className="text-sm text-gray-500 mb-6">*billed annually $191.88</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    All Basic Address features
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Monthly mail forwarding
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Singapore-wide delivery
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Last working day schedule
                  </li>
                </ul>

                <button
                  onClick={() => onGetStartedClick('monthly-plan')}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Bi-Weekly Forwarding */}
            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bi-Weekly Forwarding</h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">$19.99<span className="text-lg text-gray-500">/month*</span></div>
                <p className="text-sm text-gray-500 mb-6">*billed annually $239.88</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    All Basic Address features
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Bi-weekly mail forwarding
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Every Friday delivery
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Priority mail handling
                  </li>
                </ul>

                <button
                  onClick={() => onGetStartedClick('biweekly-plan')}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-2xl mb-2">📄</div>
                <h4 className="font-bold text-gray-900 mb-2">Mail Scanning</h4>
                <p className="text-orange-600 font-bold">$4.99/month*</p>
                <p className="text-xs text-gray-600">15 pages included</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">Cheque Deposits</h4>
                <p className="text-orange-600 font-bold">$10/cheque</p>
                <p className="text-xs text-gray-600">1-2 day processing</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-2xl mb-2">👤</div>
                <h4 className="font-bold text-gray-900 mb-2">Personal Names</h4>
                <p className="text-orange-600 font-bold">Same pricing</p>
                <p className="text-xs text-gray-600">Individual registration</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-2xl mb-2">💼</div>
                <h4 className="font-bold text-gray-900 mb-2">Multi-Entity</h4>
                <p className="text-orange-600 font-bold">Up to 20% off</p>
                <p className="text-xs text-gray-600">2nd: 10%, 3rd: 15%, 4th+: 20%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Statistics Section - Orange Background (Anytime Mailbox Style) */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2">Prime CBD Location</h3>
              <p className="text-orange-100">International Plaza, 10 Anson Road</p>
              <p className="text-orange-100 text-sm mt-2">Grade A Building • MRT Connected</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">ACRA Registered Partner</h3>
              <p className="text-orange-100">Pre-verified business address provider</p>
              <p className="text-orange-100 text-sm mt-2">16+ Years Experience • 100% Compliant</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-4">🌏</div>
              <h3 className="text-2xl font-bold mb-2">Trusted by 500+</h3>
              <p className="text-orange-100">companies across Southeast Asia</p>
              <p className="text-orange-100 text-sm mt-2">International Businesses • Local SMEs</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => onGetStartedClick('bottom-cta')}
              className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Your CBD Address Today - From $9.99/month*
            </button>
            <p className="text-orange-100 text-sm mt-3">*Annual billing • Start immediately • No setup fees</p>
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