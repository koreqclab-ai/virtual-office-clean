import React, { useState } from 'react';

export function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    // PAA High-Priority Questions
    {
      question: "Can I use a virtual office for ACRA company registration in Singapore?",
      answer: "Yes, absolutely. International Plaza CBD is fully ACRA-compliant for company registration. We provide address confirmation letters, meet the 3-hour daily accessibility requirement, and have successfully supported thousands of ACRA incorporations. Our address is pre-verified with ACRA and we handle all compliance documentation."
    },
    {
      question: "What are ACRA requirements for virtual office accessibility?",
      answer: "ACRA requires your registered office to be accessible for at least 3 hours during business hours (9 AM - 6 PM, Monday-Friday). International Plaza CBD exceeds this with 9-hour daily accessibility, professional staff to receive documents, and secure handling of all official correspondence including ACRA inspections."
    },
    {
      question: "Can FinTech companies use virtual office for MAS licensing?",
      answer: "Yes, MAS accepts virtual offices for licensing applications when they demonstrate genuine business substance. Our CBD location is 400m from MAS headquarters, we've supported 94% successful MAS license applications, and provide the professional infrastructure needed for regulatory meetings and compliance."
    },
    {
      question: "How much does a CBD virtual office cost in Singapore?",
      answer: "Our International Plaza CBD packages range from $99/month (Basic) to $299/month (Premium). This includes business address registration, mail handling, ACRA compliance, and building access. Compared to physical CBD offices costing $8,000-$15,000/month, virtual offices offer 95% cost savings with full professional credibility."
    },
    {
      question: "Is International Plaza a good location for virtual office?",
      answer: "International Plaza is Singapore's premier virtual office location: Grade A CBD building, direct MRT connection to Tanjong Pagar station, 400m from MAS headquarters, walking distance to all major banks, 45+ year track record, and 30-40% cost savings versus Raffles Place while maintaining equal prestige."
    },
    {
      question: "What is a virtual office in Singapore?",
      answer: "A virtual office provides a professional business address and services without physical office space. In Singapore, it includes ACRA-compliant address registration, mail handling, phone answering, meeting room access, and business support services. It's ideal for startups, SMEs, and international companies establishing Singapore presence."
    },
    {
      question: "Can e-commerce businesses use virtual office for registration?",
      answer: "Yes, all major e-commerce platforms (Lazada, Shopee, Amazon Singapore, Qoo10) accept our International Plaza address for seller registration. We provide business verification documents, handle product returns and customer service correspondence, and support your e-commerce compliance needs."
    },
    {
      question: "What are the tax implications of using virtual office in Singapore?",
      answer: "Virtual offices don't change your tax obligations - you're still considered Singapore tax resident if your business is managed and controlled here. IRAS accepts virtual office addresses for GST registration and tax filings. We handle all IRAS correspondence and provide documentation for tax compliance audits."
    },
    {
      question: "How secure is mail handling at virtual offices?",
      answer: "International Plaza CBD employs professional security: 24/7 surveillance, secure document storage, trained professional staff, immediate notifications for urgent mail, photo confirmation for legal documents, and confidential handling protocols. We maintain 99.9% mail handling accuracy with zero security incidents."
    },
    {
      question: "Virtual office vs physical office: which is better for startups?",
      answer: "Virtual offices offer 95% cost savings ($3,000 vs $150,000 annually), immediate CBD credibility, flexibility to scale, no long-term lease commitments, and professional support services. Physical offices provide dedicated space but require significant capital investment. Most successful startups begin with virtual offices and upgrade as they grow."
    },
    // Original Questions
    {
      question: "How do I access International Plaza after business hours?",
      answer: "We provide Virtual Office Address and mail forwarding services only. We do not provide physical access to the building or meeting facilities. Our service is limited to providing you with a professional business address at International Plaza for company registration and mail forwarding purposes."
    },
    {
      question: "Is parking available for client meetings?",
      answer: "We provide Virtual Office Address and mail forwarding services only for ease and low costs of company incorporation. We do not have meeting rooms or facilities for client meetings - only mail receiving and forwarding services. International Plaza has parking facilities, but our service is limited to providing you with a professional business address."
    },
    {
      question: "What's special about the Tanjong Pagar MRT connection?",
      answer: "International Plaza is directly connected to Tanjong Pagar MRT (EW15) via underground walkway. This means: clients arrive without weather concerns, 3-minute train ride to Raffles Place financial district, direct line to Changi Airport (45 minutes), and no need for taxi/Grab for most CBD meetings."
    },
    {
      question: "Is this address accepted by MAS for financial services licenses?",
      answer: "Yes, 10 Anson Road is within the Central Business District as defined by MAS. We're located 400m from MAS headquarters at 10 Shenton Way. Our address has been successfully used for payment services licenses, capital markets services licenses, insurance broker registrations, and FinTech sandbox applications."
    },
    {
      question: "Can I use this address for Employment Pass applications?",
      answer: "Absolutely. MOM accepts virtual office addresses for EP applications. We provide business substance documentation, address verification letters, meeting room access for potential MOM interviews, and correspondence handling for EP-related mail."
    },
    {
      question: "Which banks accept this virtual office address for account opening?",
      answer: "All major Singapore banks accept our International Plaza address: DBS (we provide business substance documentation package), UOB (pre-approved virtual office address with our reference letter), OCBC (standard documentation plus our address verification), and Standard Chartered (accepted for most business account types)."
    },
    {
      question: "How quickly do you notify me about important mail?",
      answer: "Our notification system provides: Urgent mail (WhatsApp notification within 30 minutes), Government mail (phone call within 1 hour), Regular mail (daily summary email), Packages (immediate SMS notification), and Legal documents (priority handling with photo confirmation)."
    },
    {
      question: "Do you provide meeting rooms?",
      answer: "No, we provide Virtual Office Address and mail forwarding services only. We do not have meeting rooms or client-facing facilities. Our service is focused solely on providing you with a professional business address at International Plaza for company registration and mail handling."
    },
    {
      question: "What's included in your virtual office packages?",
      answer: "Our packages include: Professional business address at 10 Anson Road and mail receiving and forwarding services. We do not provide phone answering, meeting rooms, building access, or business registration support. We focus solely on address services and mail handling. DISCLAIMER: For business registration guidance, consult ACRA (https://www.acra.gov.sg) or qualified professionals."
    },
    {
      question: "How do your rates compare to Raffles Place virtual offices?",
      answer: "International Plaza typically offers 30-40% savings versus comparable Raffles Place services: same CBD prestige with lower costs, better transport connectivity, less crowded business environment, more diverse dining and networking options, and direct MRT access vs. street-level walking."
    },
    {
      question: "Is this location suitable for FinTech companies?",
      answer: "International Plaza is ideal for FinTech businesses because: 5-minute walk to MAS headquarters for regulatory meetings, surrounded by major banks and financial institutions, WeWork FinTech hub at 60 Anson Road (same street), regular FinTech networking events in the area, and professional address that regulators recognize."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "We provide several service guarantees: 99.9% mail handling accuracy, same-day response to urgent requests, 30-day money-back guarantee, address acceptance guarantee for bank applications, and professional correspondence handling standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[66px] sm:h-[66px]">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/logo.png"
                  alt="Anson & Co"
                  className="h-[48px] sm:h-[68px] w-auto"
                />
              </a>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="hidden md:flex items-center space-x-3 mr-3">
                <a href="/#pricing" className="font-optima font-bold text-[15px] sm:text-[17px] leading-tight text-custom-gold hover:text-custom-goldHover transition-colors capitalize">Pricing</a>
                <a href="/faq" className="font-optima font-bold text-[15px] sm:text-[17px] leading-tight text-custom-gold hover:text-custom-goldHover transition-colors capitalize">FAQ</a>
                <a href="/incorporation-guide" className="font-optima font-bold text-[15px] sm:text-[17px] leading-tight text-custom-gold hover:text-custom-goldHover transition-colors capitalize text-center">Incorporation<br/>Guide</a>
                <a href="/acra-compliance" className="font-optima font-bold text-[15px] sm:text-[17px] leading-tight text-custom-gold hover:text-custom-goldHover transition-colors capitalize text-center">ACRA<br/>Compliance</a>
              </div>
              <button className="border border-custom-gold px-[8px] py-[6px] sm:px-[9px] sm:py-[7px] bg-custom-gold hover:bg-custom-goldHover text-white font-optima font-bold text-[14px] sm:text-[17px] leading-tight transition-colors capitalize whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FAQ Content */}
      <main className="pt-[80px] sm:pt-[100px] pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-[28px] sm:text-[40px] lg:text-[60px] font-optima font-bold text-custom-gold mb-4 sm:mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-optima max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
              Everything you need to know about our International Plaza CBD virtual office services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-custom-gold focus:ring-opacity-50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-optima font-bold text-gray-900 pr-3 sm:pr-4 leading-tight">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-custom-gold transform transition-transform duration-200 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="border-t border-gray-100 pt-3 sm:pt-4">
                      <p className="text-sm sm:text-base text-gray-700 font-optima leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <button
              className="faq-cta-button"
              onClick={() => {
                window.location.href = '/#pricing';
                setTimeout(() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                    const targetPosition = pricingSection.offsetTop - headerHeight - 20;
                    window.scrollTo({
                      top: Math.max(0, targetPosition),
                      behavior: 'smooth'
                    });
                  }
                }, 100);
              }}
              aria-label="Navigate to pricing plans section"
            >
              Get Business Address Now
            </button>
          </div>
        </div>
      </main>

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
              © 2024 Anson & Co. All rights reserved. | International Plaza CBD Virtual Office Services
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}