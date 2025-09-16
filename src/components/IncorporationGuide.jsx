import React from 'react';

export function IncorporationGuide() {

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Singapore Company Incorporation Guide",
            "description": "Complete guide to Singapore company incorporation using virtual office addresses with ACRA compliance.",
            "publisher": {
              "@type": "Organization",
              "name": "Anson & Co"
            }
          })
        }}
      />

      {/* Main Content */}
      <main className="pt-[80px] sm:pt-[100px] pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <h1 className="text-[28px] sm:text-[40px] lg:text-[50px] font-optima font-bold text-custom-gold mb-4 sm:mb-6 leading-tight">
              Singapore Company Incorporation Guide with Virtual Office Address
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-optima max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
              Complete information about using virtual office addresses for Singapore company incorporation with ACRA compliance
            </p>
          </header>

          {/* Content */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8 mb-8">

            {/* Introduction Section */}
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-optima font-bold text-custom-gold mb-4">Introduction</h2>
              <p className="text-base sm:text-lg text-gray-700 font-optima leading-relaxed mb-4">
                This comprehensive guide provides information about using virtual office addresses for Singapore company incorporation.
                While we provide virtual office address and mail forwarding services only, this guide offers general information about
                the incorporation process to help you understand how our address services fit into your business setup.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-sm font-optima text-yellow-800">
                  <strong>IMPORTANT DISCLAIMER:</strong> We provide virtual office address and mail forwarding services only.
                  We do not provide legal, accounting, or business registration advice. For official incorporation procedures,
                  consult qualified professionals and relevant authorities.
                </p>
              </div>
            </section>

            {/* What We Provide Section */}
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-optima font-bold text-custom-gold mb-4">What We Provide</h2>

              <h3 className="text-xl sm:text-2xl font-optima font-semibold text-gray-800 mb-3">Virtual Office Address Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <div>
                    <strong className="font-optima text-gray-800">Professional business address</strong>
                    <span className="font-optima text-gray-700"> at 10 Anson Road, International Plaza, Singapore CBD</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <div>
                    <strong className="font-optima text-gray-800">Mail receiving and forwarding</strong>
                    <span className="font-optima text-gray-700"> to your preferred address</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <div>
                    <strong className="font-optima text-gray-800">Address confirmation letters</strong>
                    <span className="font-optima text-gray-700"> for business registration purposes</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <div>
                    <strong className="font-optima text-gray-800">ACRA-compliant address</strong>
                    <span className="font-optima text-gray-700"> suitable for company registration</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* ACRA Compliance Section */}
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-optima font-bold text-custom-gold mb-4">ACRA Compliance</h2>
              <p className="text-base sm:text-lg text-gray-700 font-optima leading-relaxed mb-4">
                Our International Plaza CBD address meets all ACRA requirements for company registration:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <span className="font-optima text-gray-700">3-hour daily accessibility requirement (we exceed this)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <span className="font-optima text-gray-700">Professional document handling and storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <span className="font-optima text-gray-700">Address verification letters when required</span>
                </li>
              </ul>
            </section>

            {/* Official Resources Section */}
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-optima font-bold text-custom-gold mb-4">Official Resources</h2>
              <p className="text-base sm:text-lg text-gray-700 font-optima leading-relaxed mb-4">
                For official incorporation procedures and legal requirements, consult these authorities:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <div>
                    <strong className="font-optima text-gray-800">Business registration:</strong>
                    <a href="https://www.acra.gov.sg" target="_blank" rel="noopener noreferrer" className="font-optima text-custom-gold hover:text-custom-goldHover underline ml-1">
                      ACRA (https://www.acra.gov.sg)
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <div>
                    <strong className="font-optima text-gray-800">Legal matters:</strong>
                    <a href="https://www.mlaw.gov.sg" target="_blank" rel="noopener noreferrer" className="font-optima text-custom-gold hover:text-custom-goldHover underline ml-1">
                      Ministry of Law (https://www.mlaw.gov.sg)
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-gold mr-3 mt-1">•</span>
                  <div>
                    <strong className="font-optima text-gray-800">Tax matters:</strong>
                    <a href="https://www.iras.gov.sg" target="_blank" rel="noopener noreferrer" className="font-optima text-custom-gold hover:text-custom-goldHover underline ml-1">
                      IRAS (https://www.iras.gov.sg)
                    </a>
                  </div>
                </li>
              </ul>
            </section>

          </div>

        </div>
      </main>

    </div>
  );
}