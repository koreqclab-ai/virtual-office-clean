import React from 'react';

export function AnsonRoadVirtualOfficeLanding({ onGetStartedClick }) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏢 CBD VIRTUAL OFFICE $9.99/MONTH* • 10 ANSON ROAD • INTERNATIONAL PLAZA
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Virtual Office Singapore Anson Road
              <span className="block text-blue-600 font-bold">From $9.99/Month* • International Plaza CBD</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
              Get your business address at Singapore's most prestigious location - 10 Anson Road, International Plaza. 
              CBD prestige at classy but affordable monthly pricing from $9.99* (billed annually).
            </p>
            
            {/* Location Highlights */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Anson Road is Singapore's Premier Business Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl mb-3">🚇</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Direct MRT Connection</h4>
                  <p className="text-sm text-gray-600">Underground access to Tanjong Pagar MRT Station (EW15)</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl mb-3">🏛️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Government Proximity</h4>
                  <p className="text-sm text-gray-600">5-minute walk to MAS headquarters & government agencies</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl mb-3">🏦</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Banking District</h4>
                  <p className="text-sm text-gray-600">Walking distance to all major bank headquarters</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onGetStartedClick('anson-road-address')}
                className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                🏢 Get Your Anson Road Address - $9.99/month*
              </button>
              <button 
                onClick={() => onGetStartedClick('location-tour')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                📍 Virtual Location Tour
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              📍 *Annual billing • 10 Anson Road, #18-08, International Plaza, Singapore 079903
            </p>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Anson Road Advantage for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic location where finance, government, and business converge
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Unmatched Business Connectivity</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 text-sm">🚇</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tanjong Pagar MRT (EW15)</h4>
                    <p className="text-gray-600 text-sm">Direct underground access • 3 mins to Raffles Place • 45 mins to Changi Airport</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 text-sm">🏛️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Government Hub</h4>
                    <p className="text-gray-600 text-sm">MAS (400m) • URA Centre (300m) • CPF Building (600m) • Supreme Court (1km)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 text-sm">🏦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Financial District</h4>
                    <p className="text-gray-600 text-sm">DBS Marina Bay (1.2km) • UOB Plaza (800m) • OCBC Centre (1km)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 text-sm">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal Services</h4>
                    <p className="text-gray-600 text-sm">Maxwell Chambers (500m) • Major law firm offices • Courts nearby</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">International Plaza Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Grade A Building Status</h4>
                    <p className="text-gray-600 text-sm">50-story landmark building • Established 1976 • Premium business address</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Security & Access</h4>
                    <p className="text-gray-600 text-sm">Professional security • Keycard access • After-hours availability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm">🍽️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrated Amenities</h4>
                    <p className="text-gray-600 text-sm">3-level retail podium • Restaurants • Banking services • Parking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm">🌆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Prestige & Recognition</h4>
                    <p className="text-gray-600 text-sm">Home to Honorary Consulate of Malta • Recognized by all banks & agencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specific Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perfect for Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anson Road's strategic location benefits specific business sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FinTech & Financial Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 5-minute walk to MAS headquarters</li>
                <li>• Close to all major banks</li>
                <li>• Established financial district credibility</li>
                <li>• Easy regulatory meetings & compliance</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal & Professional Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Maxwell Chambers proximity (500m)</li>
                <li>• Close to Supreme Court complex</li>
                <li>• Professional client meeting venues</li>
                <li>• Established legal district presence</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Trading</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Close to customs & trade authorities</li>
                <li>• International courier services nearby</li>
                <li>• Professional address for L/C operations</li>
                <li>• Easy access to shipping & logistics hubs</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Management Consulting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Impressive client meeting location</li>
                <li>• Government agency accessibility</li>
                <li>• Professional business environment</li>
                <li>• High-end restaurant options for client entertainment</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Startups</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Credible address for investor meetings</li>
                <li>• Close to government tech initiatives</li>
                <li>• FinTech ecosystem proximity</li>
                <li>• Professional image for client acquisition</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce & Retail</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Professional returns & customer service address</li>
                <li>• Platform verification approved location</li>
                <li>• Central location for logistics coordination</li>
                <li>• Professional image for B2B sales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Amenities Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need Within Walking Distance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Government & Financial (0-400m)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-800">MAS Headquarters</span>
                    <span className="text-blue-600 font-semibold">400m • 5 min walk</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-800">URA Centre</span>
                    <span className="text-blue-600 font-semibold">300m • 4 min walk</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-800">Tanjong Pagar MRT</span>
                    <span className="text-blue-600 font-semibold">0m • Underground</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dining & Entertainment (0-500m)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-800">Maxwell Food Centre</span>
                    <span className="text-green-600 font-semibold">350m • 4 min walk</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-800">International Plaza Restaurants</span>
                    <span className="text-green-600 font-semibold">0m • In Building</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-800">Tanjong Pagar Centre</span>
                    <span className="text-green-600 font-semibold">200m • 3 min walk</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Services (200-800m)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-800">Maxwell Chambers</span>
                    <span className="text-purple-600 font-semibold">500m • 6 min walk</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-800">UOB Plaza</span>
                    <span className="text-purple-600 font-semibold">800m • 10 min walk</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-800">Various Law Firms</span>
                    <span className="text-purple-600 font-semibold">200-500m</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation & Logistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-800">Multi-level Car Park</span>
                    <span className="text-orange-600 font-semibold">In Building</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-800">Taxi/Grab Pickup Point</span>
                    <span className="text-orange-600 font-semibold">Building Entrance</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-800">Bus Stops (Multiple Routes)</span>
                    <span className="text-orange-600 font-semibold">100m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Your Prestigious Anson Road Address from $9.99/Month*
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join successful businesses at Singapore's premier CBD location with classy but affordable monthly pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onGetStartedClick('anson-road-signup')}
              className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              🏢 Secure Your Anson Road Address - $9.99/month*
            </button>
            <button 
              onClick={() => onGetStartedClick('building-visit')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              📍 Schedule Building Visit
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            📍 *Annual billing • 10 Anson Road, #18-08, International Plaza, Singapore 079903
          </p>
        </div>
      </section>
    </main>
  );
}