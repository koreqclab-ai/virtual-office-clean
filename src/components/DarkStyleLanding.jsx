import React from 'react';

export function DarkStyleLanding({ onGetStartedClick }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Anson & Co
                <span className="block text-sm font-normal text-gray-600">The Right Address Matters</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
              <a href="#locations" className="text-gray-700 hover:text-gray-900 font-medium">Locations</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium">Pricing</a>
              <button
                onClick={() => onGetStartedClick('nav')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark Background */}
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
                  onClick={() => onGetStartedClick('hero')}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get Started - From $9.99/month*
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>

              <p className="text-sm text-gray-400">*Annual billing for serious businesses</p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-3xl p-8">
                <div className="bg-gray-800 rounded-2xl p-8 text-center">
                  {/* Professional Person Placeholder */}
                  <div className="w-64 h-80 bg-gradient-to-b from-gray-700 to-gray-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-3xl">👤</span>
                      </div>
                      <div className="w-32 h-20 bg-gray-600 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-white text-2xl">📱</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-lg font-medium">
                    Manage your business address from anywhere
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Virtual Office Section */}
      <section className="py-20 bg-white">
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
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real CBD Address</h3>
              <p className="text-gray-600">Use International Plaza address for all official business purposes</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">📬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mail Forwarding</h3>
              <p className="text-gray-600">Forward letters and packages anywhere in Singapore</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Protection</h3>
              <p className="text-gray-600">Keep your home address off public records</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            How Business Owners Benefit
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vincent Tan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-xl">VT</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vincent Tan</h3>
                  <p className="text-gray-600">Digital Products Business</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vincent runs a digital products business selling online courses and software globally. He uses International Plaza for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  Payment processor documents
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  International correspondence
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  CBD credibility for partnerships
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  Professional separation from home
                </li>
              </ul>
            </div>

            {/* Sarah */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sarah</h3>
                  <p className="text-gray-600">International Consultant</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sarah is based in London and serves Asian markets. With Singapore CBD address:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  Opened local business bank account
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  Registered Singapore entity with ACRA
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  Added prestigious address to contracts
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  Boosted client trust significantly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Is It Right For You */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is a Virtual Office Address Right for You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ACRA Registration</h3>
              <p className="text-gray-600 text-sm">Need real Singapore address for company registration</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Home-Based Business</h3>
              <p className="text-gray-600 text-sm">Run e-commerce or online business professionally</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Protection</h3>
              <p className="text-gray-600 text-sm">Keep personal address off public records</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
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
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
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
                </ul>

                <button
                  onClick={() => onGetStartedClick('basic-plan')}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Monthly Forwarding */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-500 relative">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
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
        </div>
      </section>

      {/* Bottom Statistics Section - Orange Background */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">🏢</div>
              <h3 className="text-2xl font-bold mb-2">Prime CBD Location</h3>
              <p className="text-orange-100">International Plaza, Anson Road</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 className="text-2xl font-bold mb-2">ACRA Registered Partner</h3>
              <p className="text-orange-100">Pre-verified business address provider</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">🌏</div>
              <h3 className="text-2xl font-bold mb-2">Trusted by 500+</h3>
              <p className="text-orange-100">companies across Southeast Asia</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => onGetStartedClick('bottom-cta')}
              className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Your CBD Address Today
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can I use this for ACRA registration?</h3>
              <p className="text-gray-700">Yes, our International Plaza address is pre-verified with ACRA and accepted by all Singapore government agencies.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly can I start using the address?</h3>
              <p className="text-gray-700">You can start using the address immediately after payment and document verification, typically within 1-2 business days.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can I receive international mail?</h3>
              <p className="text-gray-700">Absolutely! We forward mail and packages anywhere in Singapore and internationally at transparent postage rates.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do banks accept this address?</h3>
              <p className="text-gray-700">Yes, all major Singapore banks (DBS, UOB, OCBC, Standard Chartered) recognize our premium International Plaza address.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}