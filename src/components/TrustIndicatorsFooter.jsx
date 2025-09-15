import React from 'react';

export function TrustIndicatorsFooter() {
  const indicators = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l-8 4v6c0 5.25 3.75 9.5 8 10.5 4.25-1 8-5.25 8-10.5V6l-8-4zm0 2.18L18 6.82v5.68c0 3.94-2.77 7.42-6 8.26-3.23-.84-6-4.32-6-8.26V6.82l6-2.64z"/>
          <path d="M15 7h-3v2h-2v2h2v2h2v-2h2v-2h-2V7z" opacity="0.6"/>
          <path d="M10 11h2v2h2v2h-2v-2h-2v-2z" fill="white"/>
        </svg>
      ),
      title: "International Plaza CBD",
      subtitle: "Premium Location"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
          <path d="M14 2v6h6"/>
          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "ACRA Pre-Verified",
      subtitle: "Address Provider"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 11.5 5.16-.76 9-5.95 9-11.5V5l-9-4z"/>
          <path d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          <path d="M12 13c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: "Trusted by 1000+",
      subtitle: "across 40+ countries"
    }
  ];

  return (
    <section
      className="py-20 px-6 min-h-[300px]"
      style={{backgroundColor: '#F5F1EB'}}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {indicators.map((item, index) => (
            <div key={index} className="text-center">
              {/* Larger icon containers */}
              <div
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8"
                style={{backgroundColor: '#B5A593'}}
              >
                {item.icon}
              </div>
              {/* Improved text spacing */}
              <div className="text-gray-700 font-medium leading-6 space-y-1">
                <div className="text-base">{item.title}</div>
                <div className="text-base">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

