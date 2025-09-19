import React from 'react';

export function Footer() {
  return (
    <footer className="bg-custom-gold text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="/" aria-label="Anson & Co logo" className="block mb-4">
                <div className="flex flex-col">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                    ANSON & CO
                  </h2>
                  <span className="text-sm md:text-base font-light tracking-wide text-white">
                    The Right Address Matters
                  </span>
                </div>
              </a>
              <p className="text-white font-light leading-relaxed max-w-md">
                Premium virtual office solutions designed to elevate your business presence
                in Singapore's most prestigious business districts.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:opacity-90 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-90 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-90 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#pricing" className="text-white hover:opacity-90 transition-all font-light">Pricing</a></li>
              <li><a href="#faq" className="text-white hover:opacity-90 transition-all font-light">FAQ</a></li>
              <li><a href="/acra-compliance" className="text-white hover:opacity-90 transition-all font-light">ACRA Compliance</a></li>
              <li><a href="/fintech" className="text-white hover:opacity-90 transition-all font-light">FinTech</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-3 text-white font-light">
              <li>
                <a
                  href="https://www.google.com/maps?q=10+Anson+Road,+International+Plaza,+Singapore+079903"
                  target="_blank"
                  rel="noopener"
                  className="text-white hover:opacity-90 transition-all inline-flex items-start"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{verticalAlign: '-2px', marginRight: '6px', marginTop: '2px', flexShrink: 0}}>
                    <path d="M12 2C8.686 2 6 4.686 6 8c0 4.28 4.93 10.12 5.15 10.39.22.28.48.61.85.61s.63-.33.85-.61C13.07 18.12 18 12.28 18 8c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5z" fill="currentColor"/>
                  </svg>
                  10 Anson Road, International Plaza, Singapore 079903
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@virtualaddress.biz"
                  data-source="footer_email"
                  className="text-white hover:opacity-90 transition-all inline-flex items-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{verticalAlign: '-2px', marginRight: '6px', flexShrink: 0}}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                  hello@virtualaddress.biz
                </a>
              </li>
              <li>
                <a
                  href="tel:+6561234567"
                  data-source="footer_phone"
                  className="text-white hover:opacity-90 transition-all inline-flex items-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{verticalAlign: '-2px', marginRight: '6px', flexShrink: 0}}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                  +65 6123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-white font-light">
            &copy; 2025 Anson & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}