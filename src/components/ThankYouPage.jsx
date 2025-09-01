import React from 'react';

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="text-5xl font-light text-gray-900 mb-6">
          Thank You!
        </h1>
        <p className="text-2xl text-gray-600 mb-8 font-light">
          Your inquiry has been received successfully
        </p>
        
        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            What happens next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-amber-600 font-medium text-sm">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Review Your Requirements</h3>
                <p className="text-gray-600 font-light">Our team will carefully review your virtual office requirements and preferred service package.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-amber-600 font-medium text-sm">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Personal Consultation</h3>
                <p className="text-gray-600 font-light">We'll contact you within 24 hours to discuss your needs and answer any questions about our International Plaza address.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-amber-600 font-medium text-sm">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Quick Setup</h3>
                <p className="text-gray-600 font-light">Once approved, your premium virtual office address will be ready for immediate use and ACRA registration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-medium mb-4">Need immediate assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+6561234567" className="text-white hover:text-amber-200 transition-colors font-medium">
                +65 6123 4567
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:hello@virtualaddress.biz" className="text-white hover:text-amber-200 transition-colors font-medium">
                hello@virtualaddress.biz
              </a>
            </div>
          </div>
        </div>

        {/* Return Home */}
        <div className="mt-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-white border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition-all duration-300"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}