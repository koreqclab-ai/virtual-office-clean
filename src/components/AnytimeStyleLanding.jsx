import React from 'react';

export function AnytimeStyleLanding({ onGetStartedClick }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Establish Your Business</span> Presence with a Premium Singapore CBD Address
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Use a real International Plaza address to register your company with ACRA, open business bank accounts, receive mail securely, and protect your privacy.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">🏢</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900">International Plaza CBD</div>
                  <div className="text-sm text-gray-600">Premium Location</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900">ACRA Pre-Verified</div>
                  <div className="text-sm text-gray-600">Address Provider</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">🌏</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900">Trusted by 1000+</div>
                  <div className="text-sm text-gray-600">across 40+ countries</div>
                </div>
              </div>
            </div>

            <button
              onClick={onGetStartedClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started - From $9.99/month*
            </button>
            <p className="text-sm text-gray-600 mt-2">*Annual billing for serious businesses</p>
          </div>
        </div>
      </section>

      {/* What is Virtual Office Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is a Virtual Office Address?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A virtual office address provides your business with a genuine CBD street location for company registration through ACRA, professional mail handling, and establishing corporate credibility—all without the overhead of maintaining physical premises. This solution serves international enterprises, online retailers, professional service providers, and business owners seeking to maintain personal privacy.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Manage Everything Online</h3>
              <p className="text-gray-600">Access your mail, manage forwarding, and monitor your business address from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            How Business Owners Benefit From a Virtual Office Address
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vincent Tan Story */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">VT</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vincent Tan</h3>
                  <p className="text-gray-600">Digital Products Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vincent runs a digital products business selling online courses and software globally. He uses a virtual office address at International Plaza for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Receiving payment processor documents and merchant account statements
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Processing international customer correspondence
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Establishing CBD credibility for partnership negotiations
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Maintaining professional separation from his Punggol residence
                </li>
              </ul>
            </div>

            {/* Sarah Story */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sarah</h3>
                  <p className="text-gray-600">International Consultant</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sarah is based in London and offers consulting services to Asian markets. With a virtual Singapore CBD address, she:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Opened a local business bank account (some via video conference, others with support)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Registered her Singapore entity with ACRA
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Added the prestigious address to proposals and contracts
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Boosted client trust by showing International Plaza location
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Is It Right For You Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is a <span className="text-blue-600">Virtual Office Address</span> Right for You?
            </h2>
            <p className="text-xl text-gray-600">You might benefit from a virtual office address if:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">You need a real Singapore address to register with ACRA</h3>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">You run a home-based or e-commerce business</h3>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">You want to protect your HDB/condo address from public records</h3>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">You want to appear established in Singapore's CBD</h3>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Q: Can I use this for legal documents?</h4>
                <p className="text-gray-700"><strong>A: Yes.</strong> Most users receive IRAS notices, ACRA documents, and bank statements here and can have them forwarded anywhere.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Q: Can I receive international mail and packages?</h4>
                <p className="text-gray-700"><strong>A: Absolutely.</strong> We forward them to your preferred location locally or internationally.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Q: Is a virtual office address a real street address?</h4>
                <p className="text-gray-700"><strong>A: Yes.</strong> This is a real International Plaza address, which banks and government agencies recognize.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What's Included with VirtualAddress.biz Virtual Office
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* App Mockup */}
            <div className="text-center">
              <div className="w-64 h-64 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-6xl">📱</span>
              </div>
              <p className="text-blue-100 mt-4">Manage everything from your mobile device</p>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real CBD Address</h3>
                  <p className="text-blue-100">Receive mail from banks, government agencies, and businesses — no address limitations.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">📬</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mail Forwarding</h3>
                  <p className="text-blue-100">Forward letters and packages anywhere in Singapore bi-weekly or monthly.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Privacy Protection</h3>
                  <p className="text-blue-100">Keep your home address off ACRA records and customer-facing platforms.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Multi-Entity Discounts</h3>
                  <p className="text-blue-100">Get 10-20% off when managing multiple companies from one premium address.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-100 italic">All mail handling is performed by authorized, secure facilities. We comply with Singapore's PDPA regulations.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your Virtual Office Address Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Premium International Plaza CBD location to register your business, accept mail, and build credibility.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">From $9.99/month*</div>
              <p className="text-gray-600 mb-6">*billed annually</p>
              <button
                onClick={onGetStartedClick}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                GET STARTED
              </button>
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
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">Can I switch to weekly mail forwarding later?</h3>
              <p className="text-gray-700">Yes. You can upgrade from monthly to weekly forwarding as your business grows.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">Can I use this address on my website and namecard?</h3>
              <p className="text-gray-700">Definitely. Many customers use it on their company website, Google Business Profile, and marketing materials.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">How long does setup take?</h3>
              <p className="text-gray-700">You can activate your address immediately after payment and document verification (1-2 business days for ACRA filing).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Helpful Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">How to Get a Virtual Office Address at International Plaza CBD</h3>
              <p className="text-gray-600 text-sm">Complete guide to setting up your premium CBD address</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">How a Virtual Office Helped Me Upgrade from Home-Based to Professional</h3>
              <p className="text-gray-600 text-sm">Real success stories from Singapore entrepreneurs</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❓</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">What Is a Virtual Office for Singapore Businesses?</h3>
              <p className="text-gray-600 text-sm">Everything you need to know about virtual offices in Singapore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}