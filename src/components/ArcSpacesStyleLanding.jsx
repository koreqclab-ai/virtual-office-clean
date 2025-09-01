import React, { useState } from 'react';

export function ArcSpacesStyleLanding({ onGetStartedClick }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[44px] md:h-[66px]">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Anson & Co" 
                className="h-[68px] w-auto"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-3 mr-3">
                <a 
                  href="#pricing"
                  className="font-optima font-bold text-[17px] leading-[22.1px] text-custom-gold hover:text-custom-goldHover transition-colors capitalize"
                >
                  Pricing
                </a>
                <a href="/faq" className="font-optima font-bold text-[17px] leading-[22.1px] text-custom-gold hover:text-custom-goldHover transition-colors capitalize">FAQ</a>
                <a href="/acra-compliance" className="font-optima font-bold text-[17px] leading-[22.1px] text-custom-gold hover:text-custom-goldHover transition-colors capitalize text-center">Incorporation<br/>Guide</a>
              </div>
              <button 
                onClick={() => onGetStartedClick('nav-signup')}
                className="border border-custom-gold px-[9px] py-[7px] bg-custom-gold hover:bg-custom-goldHover text-white font-optima font-bold text-[17px] leading-[22.1px] transition-colors capitalize"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-neutral-800 min-h-screen flex items-center overflow-hidden pt-10 md:pt-[140px]">
        {/* Background Hero Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Hero-Image-Merlion.png')"
          }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/85 to-neutral-800/75"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl -mt-[30%] -ml-[20%]">
            <h1 className="text-[25px] lg:text-[50px] font-optima font-bold leading-10 lg:leading-[60px] mb-12">
              <span className="text-custom-gold">Establish Your Business</span><br />
              <span className="text-white">Presence with a Premium Singapore CBD Address</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-12 leading-relaxed max-w-2xl -mt-10">
              Use a real International Plaza address to register your company with ACRA, open business bank accounts, receive mail securely,<br />
              and protect your privacy.
            </p>
          </div>
        </div>
        
        {/* Trust Indicators Banner */}
        <div className="absolute bottom-0 left-0 right-0 h-[145px] bg-custom-gold z-10">
          <div className="h-full flex items-center justify-center">
            <div className="flex justify-between items-center w-full max-w-6xl px-8">
              <div className="text-center ml-[75px]">
                <img 
                  src="https://c.animaapp.com/mezrl05ySFrdKM/assets/icon-trust-signal-1.webp" 
                  alt="" 
                  sizes="(max-width: 160px) 100vw, 160px" 
                  className="aspect-[auto_160_/_160] box-border caret-transparent max-w-full break-words w-[75px] mx-auto mb-2"
                />
                <p className="text-white text-sm leading-tight">
                  International Plaza CBD<br />Premium Location
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://c.animaapp.com/mezrl05ySFrdKM/assets/icon-trust-signal-2.webp" 
                  alt="" 
                  sizes="(max-width: 160px) 100vw, 160px" 
                  className="aspect-[auto_160_/_160] box-border caret-transparent max-w-full break-words w-[75px] mx-auto mb-2"
                />
                <p className="text-white text-sm leading-tight">
                  ACRA Pre-Verified<br />Address Provider
                </p>
              </div>
              <div className="text-center mr-[75px]">
                <img 
                  src="https://c.animaapp.com/mezrl05ySFrdKM/assets/icon-trusted-users.webp" 
                  alt="" 
                  sizes="(max-width: 160px) 100vw, 160px" 
                  className="aspect-[auto_160_/_160] box-border caret-transparent max-w-full break-words w-[75px] mx-auto mb-2"
                />
                <p className="text-white text-sm leading-tight">
                  Trusted by 1000+<br />across 40+ countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-800 mb-6">
                What is a{' '}
                <span className="text-stone-400">Virtual Office Address?</span>
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                A virtual office address provides your business with a genuine CBD street location for company registration through ACRA, professional mail handling, and establishing corporate credibility—all without the overhead of maintaining physical premises.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-stone-400 text-xl mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold text-zinc-800">Real Street Address</h3>
                    <p className="text-zinc-600">Not a PO Box - genuine International Plaza location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-stone-400 text-xl mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold text-zinc-800">ACRA Compliant</h3>
                    <p className="text-zinc-600">Pre-verified for company registration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-stone-400 text-xl mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold text-zinc-800">Professional Credibility</h3>
                    <p className="text-zinc-600">CBD address commands respect from banks and partners</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-stone-400/20 to-neutral-600/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-stone-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-3xl">📍</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-800 mb-2">Your Business Address</h3>
                    <p className="text-zinc-600">10 Anson Road, #18-08</p>
                    <p className="text-zinc-600">International Plaza</p>
                    <p className="text-zinc-600 mb-4">Singapore 079903</p>
                    <div className="bg-stone-400 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                      CBD Premium Location
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20 bg-neutral-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            How Business Owners Benefit
          </h2>

          <div className="space-y-12">
            {/* Vincent Tan Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-stone-400/30 to-neutral-800/30 rounded-3xl p-8">
                  <div className="bg-stone-400 rounded-2xl p-8 text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-stone-400 font-bold text-2xl">VT</span>
                    </div>
                    <div className="text-white font-medium">Digital Products Business Owner</div>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-6">Vincent Tan</h3>
                <p className="text-xl text-neutral-300 mb-6">
                  "Vincent runs a digital products business selling online courses and software globally. He uses International Plaza for:"
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    Payment processor documents and merchant statements
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    International customer correspondence
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    CBD credibility for partnership negotiations
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    Professional separation from Punggol home address
                  </li>
                </ul>
              </div>
            </div>

            {/* Sarah Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white lg:order-2">
                <h3 className="text-3xl font-bold mb-6">Sarah</h3>
                <p className="text-xl text-neutral-300 mb-6">
                  "Sarah is based in London and serves Asian markets. With her Singapore CBD address:"
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    Opened Singapore business bank account
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    Registered Singapore entity with ACRA
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    Added prestigious address to client contracts
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3 text-lg">✓</span>
                    Boosted client trust and professional credibility
                  </li>
                </ul>
              </div>
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-stone-400/30 to-neutral-800/30 rounded-3xl p-8">
                  <div className="bg-stone-400 rounded-2xl p-8 text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-stone-400 font-bold text-2xl">S</span>
                    </div>
                    <div className="text-white font-medium">International Consultant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-800 mb-6">
              Is a Virtual Office Address Right for You?
            </h2>
            <p className="text-xl text-zinc-600">You might benefit from our CBD address if:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-neutral-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-stone-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-800 mb-3">ACRA Registration</h3>
              <p className="text-zinc-600">You need a real Singapore address to register your company</p>
            </div>
            
            <div className="text-center p-8 bg-neutral-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-stone-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-800 mb-3">Home-Based Business</h3>
              <p className="text-zinc-600">You run an e-commerce or online business professionally</p>
            </div>
            
            <div className="text-center p-8 bg-neutral-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-stone-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-800 mb-3">Privacy Protection</h3>
              <p className="text-zinc-600">You want to protect your HDB/condo address from public records</p>
            </div>
            
            <div className="text-center p-8 bg-neutral-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-stone-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-800 mb-3">CBD Presence</h3>
              <p className="text-zinc-600">You want to appear established in Singapore's business district</p>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-400 p-6 rounded-xl text-white">
              <h4 className="font-bold mb-3">Can I use this for legal documents?</h4>
              <p className="text-sm opacity-90">Yes. IRAS notices, ACRA documents, bank statements forwarded anywhere.</p>
            </div>
            <div className="bg-stone-400 p-6 rounded-xl text-white">
              <h4 className="font-bold mb-3">Can I receive international mail?</h4>
              <p className="text-sm opacity-90">Absolutely. Forward locally or internationally at transparent rates.</p>
            </div>
            <div className="bg-stone-400 p-6 rounded-xl text-white">
              <h4 className="font-bold mb-3">Is this a real street address?</h4>
              <p className="text-sm opacity-90">Yes. Real International Plaza address that banks and agencies recognize.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative text-center">
              <div className="w-38 h-67 mx-auto mb-6 relative">
                <img 
                  src="/checking-phone.jpeg" 
                  alt="Professional checking phone for mail updates" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-zinc-800 mb-8">
                What's{' '}
                <span className="text-stone-400">Included</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-stone-400 text-2xl mt-1">🏢</div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-800 mb-2">Real CBD Address</h3>
                    <p className="text-zinc-600">Use for business registration, website, name cards - no limitations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-stone-400 text-2xl mt-1">📬</div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-800 mb-2">Mail Forwarding</h3>
                    <p className="text-zinc-600">Bi-weekly or monthly Singapore delivery to your preferred address</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-stone-400 text-2xl mt-1">🔒</div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-800 mb-2">Privacy Protection</h3>
                    <p className="text-zinc-600">Keep your HDB/condo address off ACRA public records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-stone-400 text-2xl mt-1">💼</div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-800 mb-2">Multi-Entity Discounts</h3>
                    <p className="text-zinc-600">10-20% off when registering multiple companies at same address</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 bg-neutral-100" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-800 mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-zinc-600">Choose your preferred mail forwarding frequency</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Forwarding */}
            <div className="bg-white p-8 rounded-2xl border-2 border-stone-400 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-stone-400 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-zinc-800 mb-4">Monthly Forwarding</h3>
                <div className="text-4xl font-bold text-stone-400 mb-2">$15.99<span className="text-lg text-zinc-500">/month</span></div>
                <p className="text-sm text-zinc-500 mb-8">Billed annually $191.88</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    Premium CBD business address
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    Monthly mail forwarding
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    ACRA-compliant registration
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    Singapore-wide delivery
                  </li>
                </ul>

                <button
                  onClick={() => onGetStartedClick('monthly-plan')}
                  className="w-full bg-stone-400 text-white py-4 rounded-lg font-bold text-lg hover:bg-stone-500 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Bi-Weekly Forwarding */}
            <div className="bg-white p-8 rounded-2xl border-2 border-neutral-300 shadow-lg hover:border-stone-400 transition-colors">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-zinc-800 mb-4">Bi-Weekly Forwarding</h3>
                <div className="text-4xl font-bold text-stone-400 mb-2">$19.99<span className="text-lg text-zinc-500">/month</span></div>
                <p className="text-sm text-zinc-500 mb-8">Billed annually $239.88</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    Premium CBD business address
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    Bi-weekly mail forwarding
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    Every Friday delivery
                  </li>
                  <li className="flex items-center">
                    <span className="text-stone-400 mr-3">✓</span>
                    Priority mail handling
                  </li>
                </ul>

                <button
                  onClick={() => onGetStartedClick('biweekly-plan')}
                  className="w-full bg-neutral-800 text-white py-4 rounded-lg font-bold text-lg hover:bg-neutral-700 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-zinc-600">
              Need just the address without forwarding?{' '}
              <button 
                onClick={() => onGetStartedClick('basic-plan')}
                className="text-stone-400 hover:text-stone-500 font-semibold"
              >
                Basic Address Plan from $9.99/month
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "Can I switch to weekly mail forwarding later?",
                answer: "Yes, you can upgrade or downgrade your forwarding frequency at any time. Changes take effect from the next billing cycle."
              },
              {
                question: "Can I use this address on my website and name card?",
                answer: "Absolutely! You can use your International Plaza address on all business materials including website, name cards, letterheads, and official documents."
              },
              {
                question: "How long does setup take?",
                answer: "Setup is typically completed within 1-2 business days after payment and document verification. You'll receive confirmation and can start using the address immediately."
              },
              {
                question: "Do banks accept this virtual office address?",
                answer: "Yes, all major Singapore banks (DBS, UOB, OCBC, Standard Chartered) accept our International Plaza address for business account opening."
              },
              {
                question: "What about multi-entity discounts?",
                answer: "We offer progressive discounts: 2nd entity gets 10% off, 3rd entity gets 15% off, and 4th+ entities get 20% off. Perfect for business portfolios."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-zinc-800">{faq.question}</h3>
                    <div className={`text-stone-400 text-2xl transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-neutral-600" id="resources">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Helpful Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-stone-400 to-stone-500 p-8 rounded-2xl text-white hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl mb-6">📍</div>
              <h3 className="text-xl font-bold mb-4">
                How to Get a Virtual Office Address at International Plaza CBD
              </h3>
              <p className="text-sm opacity-90 mb-6">
                Step-by-step guide to setting up your premium CBD business address in Singapore's financial district.
              </p>
              <div className="text-sm font-semibold">Read Guide →</div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 p-8 rounded-2xl text-white hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4">
                How a Virtual Office Helped Me Upgrade from Home-Based to Professional
              </h3>
              <p className="text-sm opacity-90 mb-6">
                Real case study: Singapore entrepreneur transforms business credibility with CBD address.
              </p>
              <div className="text-sm font-semibold">Read Story →</div>
            </div>
            
            <div className="bg-gradient-to-br from-stone-500 to-neutral-700 p-8 rounded-2xl text-white hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl mb-6">📚</div>
              <h3 className="text-xl font-bold mb-4">
                What Is a Virtual Office for Singapore Businesses?
              </h3>
              <p className="text-sm opacity-90 mb-6">
                Complete guide to virtual offices in Singapore: ACRA compliance, banking, and business benefits.
              </p>
              <div className="text-sm font-semibold">Learn More →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-700 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                VirtualAddress.biz
              </div>
              <p className="text-neutral-300 text-sm mb-4">
                Premium Singapore CBD virtual office addresses for serious businesses.
              </p>
              <div className="flex space-x-4">
                <div className="text-stone-400 hover:text-white cursor-pointer">📘</div>
                <div className="text-stone-400 hover:text-white cursor-pointer">🐦</div>
                <div className="text-stone-400 hover:text-white cursor-pointer">💼</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li><a href="#" className="hover:text-white">Virtual Office Address</a></li>
                <li><a href="#" className="hover:text-white">Mail Forwarding</a></li>
                <li><a href="#" className="hover:text-white">ACRA Registration</a></li>
                <li><a href="#" className="hover:text-white">Multi-Entity Plans</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li><a href="#" className="hover:text-white">Setup Guide</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-neutral-300 text-sm">
                <p>10 Anson Road, #18-08</p>
                <p>International Plaza</p>
                <p>Singapore 079903</p>
                <p className="text-stone-400">hello@virtualaddress.biz</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-600 mt-8 pt-8 text-center">
            <p className="text-neutral-400 text-sm">
              © 2025 VirtualAddress.biz. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Banner */}
      <div className="h-[66px] bg-orange-300"></div>
    </div>
  );
}