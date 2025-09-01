import React, { useState } from 'react';

export function ComprehensiveFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqCategories = [
    {
      category: "Pricing & Packages",
      faqs: [
        {
          question: "What are your annual pricing packages?",
          answer: "Our classy but affordable CBD packages start at $119.88/year for Basic CBD Address. Address + Local Mail Forwarding (Monthly) is $191.88/year, and Address + Weekly Forwarding is $239.88/year. All packages require annual payment and include premium International Plaza prestige."
        },
        {
          question: "How does the postage credits system work?",
          answer: "Mail forwarding service is included in our packages, with postage charged at cost using prepaid credits ($30/$50/$100 options). We provide low balance alerts at $5 (local) and $15 (international) thresholds. No hidden postage markups - complete transparency."
        },
        {
          question: "Do you offer multi-entity discounts?",
          answer: "Yes! Growing entrepreneurs get substantial discounts: 2nd entity receives 10% off, 3rd entity gets 15% off, and 4th+ entities receive 20% off. Perfect for business portfolios requiring multiple registered addresses."
        },
        {
          question: "Why choose annual payment over monthly plans?",
          answer: "Annual payment demonstrates serious business commitment and unlocks our best pricing. It's designed for established businesses and international companies who value long-term stability and professional credibility at smart pricing."
        },
        {
          question: "What's included in the mail scanning add-on?",
          answer: "Mail scanning is available for $59.88/year and includes up to 20 pages/month. Additional pages are charged at $0.50 each. Perfect for overseas business owners who need digital document management with clear, predictable costs."
        }
      ]
    },
    {
      category: "Location & Building Access",
      faqs: [
        {
          question: "Can I access International Plaza building 24/7?",
          answer: "Yes! Unlike many providers, we provide keycard access to International Plaza 24/7. Professional security desk operates round-the-clock. Perfect for after-hours mail collection or client meetings."
        },
        {
          question: "How close is Anson Road to government agencies?",
          answer: "Extremely convenient: MAS headquarters (400m, 5-min walk), URA Centre (300m), IRAS (600m), MOM (800m), Supreme Court (1km). Most government meetings reachable within 10 minutes walking."
        },
        {
          question: "Is parking available for client meetings?",
          answer: "Yes, International Plaza has multi-level parking. We can validate parking for important client meetings. Additional public parking at Anson Centre and Tanjong Pagar Centre within 200m."
        },
        {
          question: "What makes Anson Road better than other CBD locations?",
          answer: "Anson Road offers: (1) Direct MRT underground access, (2) Government agency proximity, (3) Major bank headquarters within walking distance, (4) 30-40% lower costs vs Raffles Place, (5) Less crowded than Marina Bay."
        }
      ]
    },
    {
      category: "ACRA & Government Compliance",
      faqs: [
        {
          question: "Is your virtual office address 100% ACRA compliant?",
          answer: "Absolutely. 10 Anson Road is pre-verified with ACRA database. We've handled 1000+ company registrations since 2009. ACRA, IRAS, MAS, MOM all recognize this address. Zero compliance issues guaranteed."
        },
        {
          question: "Can I use this address for ACRA company registration?",
          answer: "Yes, this is exactly what we specialize in. We provide the required registered office address and Contact Address (usually costs $200+ elsewhere, FREE for our clients). Incorporation documents handled professionally."
        },
        {
          question: "What happens if ACRA requires address verification?",
          answer: "We provide immediate address verification letters and documentation. Our building management confirms business operations. 15+ years experience handling ACRA inquiries professionally."
        },
        {
          question: "Can government agencies inspect the premises?",
          answer: "Yes, we accommodate ACRA, IRAS, MOM, and MAS inspections with advance notice. Professional meeting rooms available. Our address demonstrates genuine business substance for regulatory requirements."
        }
      ]
    },
    {
      category: "Banking & Financial Services",
      faqs: [
        {
          question: "Which Singapore banks accept your virtual office address?",
          answer: "All major banks recognize our premium International Plaza address: DBS, UOB, OCBC, Standard Chartered, and international banks. Our annual commitment customers receive comprehensive business substance documentation packages that banks trust."
        },
        {
          question: "Do you help with bank account opening for international businesses?",
          answer: "Absolutely! Our premium CBD address commands respect from financial institutions. We provide professional business substance documentation, address verification letters, and meeting room access for bank presentations."
        },
        {
          question: "Is this address suitable for international trading companies?",
          answer: "Perfect for international trade! Our International Plaza CBD location provides the professional credibility needed for Letters of Credit, trade financing, and supplier relationships. Annual commitment demonstrates business stability."
        },
        {
          question: "How does this compare to budget virtual office providers?",
          answer: "While budget providers offer basic services, our International Plaza CBD address provides genuine business credibility. Professional annual commitment vs casual monthly plans - designed for serious businesses, not price-shopping."
        }
      ]
    },
    {
      category: "Mail & Communication Services",
      faqs: [
        {
          question: "How quickly do you notify me about important mail?",
          answer: "Urgent government/legal mail: WhatsApp within 30 minutes. Banking correspondence: 1-hour notification. Regular business mail: daily email summary. Packages: immediate SMS. Court documents: priority phone call."
        },
        {
          question: "Can you scan and email my mail instead of forwarding?",
          answer: "Yes! Our $100/month package includes unlimited mail scanning to searchable PDF format. Eco-friendly option perfect for overseas business owners. Same-day scanning for urgent documents."
        },
        {
          question: "What if I receive packages or courier deliveries?",
          answer: "We accept all packages: DHL, FedEx, UPS, local couriers. Immediate SMS notification with photo confirmation. Secure storage until collection or forwarding. Experience with trade documents and time-sensitive deliveries."
        },
        {
          question: "Do you provide phone answering services?",
          answer: "Yes, professional bilingual (English/Mandarin) reception available as add-on service. Your company greeting, message taking, appointment scheduling, call forwarding to your number."
        }
      ]
    },
    {
      category: "Industry-Specific Questions",
      faqs: [
        {
          question: "Is this suitable for e-commerce businesses?",
          answer: "Perfect! Pre-approved address for Lazada, Shopee, Amazon, Qoo10 seller verification. We handle customer returns, platform correspondence, and provide professional business address for customer confidence."
        },
        {
          question: "Can law firms and professional services use this address?",
          answer: "Absolutely. Maxwell Chambers (500m away) for arbitration lawyers. We handle confidential legal documents, court correspondence, professional licensing mail. Many law firms, accountants, and consultants use our services."
        },
        {
          question: "What about international trading companies?",
          answer: "Excellent for trading! Experience with Letters of Credit, customs documentation, trade finance papers. Close to customs authorities, international courier services. Professional address for supplier/buyer communications."
        },
        {
          question: "Can management consultants use this for client meetings?",
          answer: "Yes! Professional meeting rooms with city views, high-end presentation equipment, video conferencing facilities. Impressive International Plaza location adds credibility. Nearby fine dining for client entertainment."
        }
      ]
    },
    {
      category: "Service Details & Logistics",
      faqs: [
        {
          question: "How long does it take to activate my virtual office?",
          answer: "Immediate activation after payment confirmation. You can start using the address for ACRA registration and business purposes right away. Physical keycard available same day for building access."
        },
        {
          question: "What if I need to cancel my service?",
          answer: "No long-term contracts. Cancel anytime with 30 days notice. We provide address change assistance for ACRA, IRAS, banks. Professional transition support to minimize business disruption."
        },
        {
          question: "Do you provide meeting room facilities?",
          answer: "Yes! Professional boardroom for up to 12 people, video conferencing setup, presentation equipment, city skyline views. Tea/coffee included. Book via mobile app with advance notice."
        },
        {
          question: "How do multi-entity discounts work for business portfolios?",
          answer: "Growing entrepreneurs benefit from our tiered discount system: 2nd entity gets 10% off, 3rd entity receives 15% off, and 4th+ entities get 20% off. Perfect for serious business owners with multiple companies requiring professional CBD addresses."
        },
        {
          question: "What makes your service different from premium competitors?",
          answer: "We provide the same International Plaza CBD prestige at 80% cost savings vs premium competitors. Transparent postage pricing instead of hidden markups. Multi-entity discounts for entrepreneurs. Classy but affordable - professional without the premium price tag."
        },
        {
          question: "How does international mail forwarding work?",
          answer: "International mail forwarding is available as an add-on: +$120/year for monthly delivery or +$300/year for weekly delivery. Uses the same transparent postage credits system with $15 low balance alerts. No hidden international surcharges."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Singapore's classy but affordable CBD virtual office for serious businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  return (
                    <div 
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            openFAQ === globalIndex ? 'transform rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-6 py-4 bg-white">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Our team is ready to help you choose the perfect virtual office solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              📞 Professional Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              💬 Business Address Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}