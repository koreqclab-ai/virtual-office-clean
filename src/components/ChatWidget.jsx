import React, { useState } from 'react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-600 text-white w-16 h-16 rounded-full shadow-xl hover:bg-amber-700 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-lg">Anson & Co Support</h3>
                <p className="text-amber-100 text-sm font-light">We're here to help</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="p-6 h-80 overflow-y-auto bg-gray-50">
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
              <p className="text-sm text-gray-700 font-light">
                Hello! I'm here to help you find the perfect virtual office solution. 
                What can I assist you with today?
              </p>
            </div>
            <div className="flex justify-center space-x-2 mb-4">
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-amber-50 hover:text-amber-600 transition-colors border border-gray-200">
                Pricing Info
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-amber-50 hover:text-amber-600 transition-colors border border-gray-200">
                Book Tour
              </button>
            </div>
          </div>
          
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex space-x-3">
              <input 
                type="text" 
                placeholder="Ask us anything..." 
                className="flex-1 border border-gray-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}