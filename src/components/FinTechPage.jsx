import React from 'react';

export function FinTechPage({ onGetStartedClick }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "FinTech Virtual Office MAS Licensing Singapore",
            "description": "Specialized virtual office solutions for FinTech companies. MAS licensing support, regulatory compliance, and premium CBD address at International Plaza.",
            "url": "https://virtualaddress.biz/fintech",
            "mainEntity": {
              "@type": "Service",
              "name": "FinTech Virtual Office Services",
              "provider": {
                "@type": "Organization",
                "name": "International Plaza CBD",
                "address": "10 Anson Road, Singapore"
              },
              "areaServed": "Singapore",
              "serviceType": "FinTech Virtual Office Solutions"
            }
          })
        }}
      />

      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onGetStartedClick={handleGetStartedClick}
      />

      {/* Hero Section */}
      <section className="pt-[100px] pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-custom-gold/10 text-custom-gold px-4 py-2 rounded-full text-sm font-optima font-bold mb-6">
              400m from MAS Headquarters
            </div>
            <h1 className="text-[40px] lg:text-[60px] font-optima font-bold text-custom-gold mb-6">
              FinTech Virtual Office Solutions
            </h1>
            <p className="text-xl text-gray-600 font-optima max-w-4xl mx-auto mb-8">
              Accelerate your MAS licensing success with Singapore's premier FinTech virtual office. Professional CBD address, regulatory compliance support, and strategic location advantages for innovative financial services.
            </p>
            <button 
              onClick={() => handleGetStartedClick('fintech-hero')}
              className="bg-custom-gold hover:bg-custom-goldHover text-white px-8 py-4 rounded-lg font-optima font-bold text-lg transition-colors mr-4"
            >
              Start Your MAS Application
            </button>
            <button 
              onClick={() => handleGetStartedClick('fintech-consultation')}
              className="border border-custom-gold text-custom-gold hover:bg-custom-gold hover:text-white px-8 py-4 rounded-lg font-optima font-bold text-lg transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-custom-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-optima font-bold text-white mb-2">94%</div>
              <div className="text-white/90 font-optima">MAS License Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-optima font-bold text-white mb-2">400m</div>
              <div className="text-white/90 font-optima">Distance to MAS HQ</div>
            </div>
            <div>
              <div className="text-4xl font-optima font-bold text-white mb-2">500+</div>
              <div className="text-white/90 font-optima">FinTech Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-optima font-bold text-white mb-2">15%</div>
              <div className="text-white/90 font-optima">Faster Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAS Licensing Support */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-optima font-bold text-gray-900 mb-4">
              Complete MAS Licensing Support
            </h2>
            <p className="text-lg text-gray-600 font-optima max-w-3xl mx-auto">
              From application to approval, we provide the address credibility and professional infrastructure needed for MAS licensing success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">Payment Services License (PSL)</h3>
              <ul className="text-gray-600 font-optima space-y-2">
                <li>• Category 1-3 license support</li>
                <li>• Business substance documentation</li>
                <li>• Professional meeting facilities</li>
                <li>• Regulatory correspondence handling</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">FinTech Regulatory Sandbox</h3>
              <ul className="text-gray-600 font-optima space-y-2">
                <li>• Sandbox application support</li>
                <li>• Regular MAS meeting facilitation</li>
                <li>• Progress reporting assistance</li>
                <li>• Graduation to full license</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">Digital Banking License</h3>
              <ul className="text-gray-600 font-optima space-y-2">
                <li>• Full & wholesale bank licenses</li>
                <li>• Substantial presence demonstration</li>
                <li>• Institutional client meetings</li>
                <li>• Complex due diligence support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-optima font-bold text-gray-900 mb-6">
                Strategic FinTech Ecosystem Location
              </h2>
              <p className="text-lg text-gray-600 font-optima mb-8">
                International Plaza puts you at the heart of Singapore's FinTech revolution, with unparalleled access to regulators, financial institutions, and innovation hubs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-custom-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-optima font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-optima font-bold text-gray-900 mb-1">MAS Headquarters (400m)</h4>
                    <p className="text-gray-600 font-optima">5-minute walk for regulatory meetings and consultations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-custom-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-optima font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-optima font-bold text-gray-900 mb-1">Major Banks (Walking Distance)</h4>
                    <p className="text-gray-600 font-optima">DBS, UOB, OCBC headquarters within 1km radius</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-custom-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-optima font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-optima font-bold text-gray-900 mb-1">WeWork FinTech Hub (200m)</h4>
                    <p className="text-gray-600 font-optima">Same street access to Singapore's premier FinTech community</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-custom-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-optima font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-optima font-bold text-gray-900 mb-1">Transport Excellence</h4>
                    <p className="text-gray-600 font-optima">Direct MRT connection, 45 minutes to Changi Airport</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-optima font-bold text-gray-900 mb-6 text-center">
                FinTech Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-custom-gold pl-4">
                  <h4 className="font-optima font-bold text-gray-900 mb-2">Digital Payment Platform</h4>
                  <p className="text-gray-600 font-optima text-sm mb-2">
                    "International Plaza's proximity to MAS was crucial for our Category 2 PSL application. The professional address and meeting facilities impressed regulators."
                  </p>
                  <p className="text-custom-gold font-optima font-bold text-sm">— Series A FinTech Startup</p>
                </div>

                <div className="border-l-4 border-custom-gold pl-4">
                  <h4 className="font-optima font-bold text-gray-900 mb-2">Cryptocurrency Exchange</h4>
                  <p className="text-gray-600 font-optima text-sm mb-2">
                    "The CBD address gave us instant credibility with institutional clients and streamlined our regulatory sandbox participation."
                  </p>
                  <p className="text-custom-gold font-optima font-bold text-sm">— International Crypto Platform</p>
                </div>

                <div className="border-l-4 border-custom-gold pl-4">
                  <h4 className="font-optima font-bold text-gray-900 mb-2">Robo-Advisory Service</h4>
                  <p className="text-gray-600 font-optima text-sm mb-2">
                    "Professional meeting rooms were perfect for our CMSL application presentations. We got approved in record time."
                  </p>
                  <p className="text-custom-gold font-optima font-bold text-sm">— Wealth Management FinTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-optima font-bold text-gray-900 mb-4">
              Specialized FinTech Services
            </h2>
            <p className="text-lg text-gray-600 font-optima max-w-3xl mx-auto">
              Beyond standard virtual office services, we provide specialized support tailored to FinTech regulatory and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-custom-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-optima font-bold text-gray-900 mb-2">Regulatory Documentation</h3>
              <p className="text-gray-600 font-optima">Priority handling of MAS correspondence and regulatory filings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-custom-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-optima font-bold text-gray-900 mb-2">Investor Meetings</h3>
              <p className="text-gray-600 font-optima">Premium meeting facilities for due diligence and funding presentations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-custom-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-optima font-bold text-gray-900 mb-2">Compliance Monitoring</h3>
              <p className="text-gray-600 font-optima">Ongoing compliance support and regulatory change notifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-custom-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-optima font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600 font-optima">Dedicated account manager familiar with FinTech regulatory requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-custom-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-optima font-bold text-gray-900 mb-2">Fast-Track Processing</h3>
              <p className="text-gray-600 font-optima">Expedited setup for time-sensitive license applications and compliance needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-custom-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-lg font-optima font-bold text-gray-900 mb-2">Global Connectivity</h3>
              <p className="text-gray-600 font-optima">International courier services and global communication support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-optima font-bold text-gray-900 mb-4">
              FinTech Virtual Office Packages
            </h2>
            <p className="text-lg text-gray-600 font-optima max-w-3xl mx-auto">
              Specialized packages designed for different stages of your FinTech journey, from startup to scale-up
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-optima font-bold text-gray-900 mb-2">FinTech Starter</h3>
                <div className="text-4xl font-optima font-bold text-custom-gold mb-2">$199<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 font-optima">Perfect for early-stage FinTech startups</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Premium CBD business address</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Mail handling & forwarding</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">ACRA & MAS compliance support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">2 hours meeting room/month</span>
                </li>
              </ul>
              <button 
                onClick={() => handleGetStartedClick('fintech-starter')}
                className="w-full bg-custom-gold hover:bg-custom-goldHover text-white py-3 rounded-lg font-optima font-bold transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-custom-gold p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-custom-gold text-white px-4 py-2 rounded-full text-sm font-optima font-bold">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-optima font-bold text-gray-900 mb-2">FinTech Professional</h3>
                <div className="text-4xl font-optima font-bold text-custom-gold mb-2">$399<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 font-optima">Ideal for licensing applications</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Everything in Starter package</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Dedicated phone line</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">8 hours meeting room/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Priority regulatory support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
              <button 
                onClick={() => handleGetStartedClick('fintech-professional')}
                className="w-full bg-custom-gold hover:bg-custom-goldHover text-white py-3 rounded-lg font-optima font-bold transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-optima font-bold text-gray-900 mb-2">FinTech Enterprise</h3>
                <div className="text-4xl font-optima font-bold text-custom-gold mb-2">$699<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 font-optima">For established FinTech companies</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">20 hours meeting room/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Executive assistant services</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">Custom regulatory reporting</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-custom-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-optima text-gray-700">24/7 priority support</span>
                </li>
              </ul>
              <button 
                onClick={() => handleGetStartedClick('fintech-enterprise')}
                className="w-full bg-custom-gold hover:bg-custom-goldHover text-white py-3 rounded-lg font-optima font-bold transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-optima font-bold text-white mb-6">
            Ready to Accelerate Your FinTech Success?
          </h2>
          <p className="text-xl text-white/90 font-optima mb-8">
            Join Singapore's most successful FinTech companies using International Plaza CBD. Professional address, regulatory compliance, and MAS licensing support in one comprehensive solution.
          </p>
          <button 
            onClick={() => handleGetStartedClick('fintech-cta')}
            className="bg-white text-custom-gold px-8 py-4 rounded-lg font-optima font-bold text-lg hover:bg-gray-100 transition-colors mr-4"
          >
            Start Your Application
          </button>
          <button 
            onClick={() => handleGetStartedClick('fintech-consultation')}
            className="border border-white text-white hover:bg-white hover:text-custom-gold px-8 py-4 rounded-lg font-optima font-bold text-lg transition-colors"
          >
            Book Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/logo.png" 
                alt="Anson & Co" 
                className="h-12 w-auto"
              />
            </div>
            <div className="text-sm text-gray-400 font-optima">
              © 2025 Anson & Co. All rights reserved. | FinTech Virtual Office Services
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}