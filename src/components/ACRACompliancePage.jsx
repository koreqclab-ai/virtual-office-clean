import React from 'react';

export function ACRACompliancePage({ onGetStartedClick }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ACRA Compliance Virtual Office Singapore",
            "description": "ACRA-compliant virtual office solutions at International Plaza CBD. Meet all registration requirements with professional business address services.",
            "url": "https://virtualaddress.biz/acra-compliance",
            "mainEntity": {
              "@type": "Service",
              "name": "ACRA Compliance Virtual Office",
              "provider": {
                "@type": "Organization",
                "name": "International Plaza CBD",
                "address": "10 Anson Road, Singapore"
              },
              "areaServed": "Singapore",
              "serviceType": "Virtual Office Services"
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
      <section className="pt-[100px] pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-[40px] lg:text-[60px] font-optima font-bold text-custom-gold mb-6">
              ACRA Compliance Made Simple
            </h1>
            <p className="text-xl text-gray-600 font-optima max-w-4xl mx-auto mb-8">
              Meet all ACRA requirements with International Plaza CBD's fully compliant virtual office solutions. Professional address, accessibility compliance, and documentation support for seamless business registration.
            </p>
            <button
              onClick={() => handleGetStartedClick('acra-hero')}
              className="bg-custom-gold hover:bg-custom-goldHover text-white px-8 py-4 rounded-lg font-optima font-bold text-lg transition-colors"
            >
              Get ACRA Compliant Address
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="pt-0 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-optima font-bold text-center text-gray-900 mb-12">
            Complete ACRA Compliance Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">3-Hour Daily Accessibility</h3>
              <p className="text-gray-600 font-optima">
                Exceeds ACRA's minimum requirement with 9-hour daily accessibility. Professional staff available to receive documents and handle official correspondence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">Documentation Support</h3>
              <p className="text-gray-600 font-optima">
                Address confirmation letters, ACRA filing assistance, and all required compliance documentation provided promptly for your business registration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">Secure Record Keeping</h3>
              <p className="text-gray-600 font-optima">
                Professional document storage, statutory record maintenance, and secure handling of sensitive business information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">Prime CBD Location</h3>
              <p className="text-gray-600 font-optima">
                10 Anson Road address in Singapore's Central Business District. Professional image that enhances credibility with banks, regulators, and business partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">Instant Setup</h3>
              <p className="text-gray-600 font-optima">
                Get your ACRA-compliant address within 24 hours of receipt of appropriate documentation. Fast-track your business registration with our proven compliance procedures and documentation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-custom-gold rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-4">100% Success Rate</h3>
              <p className="text-gray-600 font-optima">
                Zero ACRA compliance issues in 2024. Our proven procedures and professional handling ensure your business meets all regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACRA Requirements */}
      <section className="pt-0 pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-optima font-bold text-gray-900 mb-4">
              ACRA Virtual Office Requirements Checklist
            </h2>
            <p className="text-lg text-gray-600 font-optima max-w-3xl mx-auto">
              Ensure your virtual office meets all ACRA compliance standards with our comprehensive solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-optima font-bold text-gray-900 mb-6">ACRA Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-custom-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-optima font-bold text-gray-900">Physical Singapore Address</p>
                    <p className="text-gray-600 font-optima">Must be a physical location, not P.O. Box</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-custom-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-optima font-bold text-gray-900">Business Hours Accessibility</p>
                    <p className="text-gray-600 font-optima">3+ hours daily during 9 AM - 6 PM, Monday-Friday</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-custom-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-optima font-bold text-gray-900">Document Service Capability</p>
                    <p className="text-gray-600 font-optima">Ability to receive legal documents and correspondence</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-custom-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-optima font-bold text-gray-900">Company Records Storage</p>
                    <p className="text-gray-600 font-optima">Maintenance of statutory registers and documents</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-custom-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-optima font-bold text-gray-900">ACRA Inspection Access</p>
                    <p className="text-gray-600 font-optima">Accommodation of ACRA officers for inspections</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-optima font-bold text-gray-900 mb-6">Our Compliance Advantage</h3>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-optima text-gray-700">Required Accessibility</span>
                    <span className="font-optima font-bold text-custom-gold">3 hours daily</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-optima text-gray-700">International Plaza Provides</span>
                    <span className="font-optima font-bold text-custom-gold">9 hours daily</span>
                  </div>
                  <hr className="border-gray-200" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-optima text-gray-700">Document Response Time</span>
                    <span className="font-optima font-bold text-custom-gold">Within 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-optima text-gray-700">ACRA Success Rate</span>
                    <span className="font-optima font-bold text-custom-gold">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-optima text-gray-700">Compliance Violations</span>
                    <span className="font-optima font-bold text-custom-gold">Zero in 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-optima font-bold text-gray-900 mb-4">
              Simple ACRA Compliance Process
            </h2>
            <p className="text-lg text-gray-600 font-optima max-w-3xl mx-auto">
              Get your ACRA-compliant virtual office in just 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-optima font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 font-optima">Submit your application with required documents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-optima font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-600 font-optima">KYC verification and compliance review</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-optima font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-2">Address Confirmation</h3>
              <p className="text-gray-600 font-optima">Receive official address confirmation letter</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-optima font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-optima font-bold text-gray-900 mb-2">ACRA Filing</h3>
              <p className="text-gray-600 font-optima">Register your company or update address with ACRA</p>
            </div>
          </div>
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
              © 2025 Anson & Co. All rights reserved. | ACRA Compliance Virtual Office Services
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}