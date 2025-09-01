import React from 'react';

export function CheapestVirtualOfficeLanding({ onGetStartedClick }) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                💰 CBD VIRTUAL OFFICE FROM $9.99/MONTH - INTERNATIONAL PLAZA!
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              CBD Virtual Office Singapore
              <span className="block text-green-600 font-bold">From $9.99/Month* at International Plaza</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
              Why pay $2500/month for physical office when you can get a prestigious International Plaza address for just $9.99/month*? 
              Classy but affordable CBD virtual office with professional mail service and annual billing for serious businesses.
            </p>
            
            {/* Price Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">See How Much You'll Save</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-700 mb-3">Traditional CBD Office</h4>
                  <div className="text-4xl font-bold text-red-600 mb-2">$2,500+</div>
                  <p className="text-red-600">per month</p>
                  <ul className="text-sm text-red-600 mt-4 space-y-1">
                    <li>❌ High rental costs</li>
                    <li>❌ Utilities & maintenance</li>
                    <li>❌ Long-term commitment</li>
                    <li>❌ Setup costs</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-300">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Our Virtual Office</h4>
                  <div className="text-4xl font-bold text-green-600 mb-2">$9.99</div>
                  <p className="text-green-600">per month*</p>
                  <ul className="text-sm text-green-600 mt-4 space-y-1">
                    <li>✅ Same prestigious address</li>
                    <li>✅ Professional mail handling</li>
                    <li>✅ No long-term contracts</li>
                    <li>✅ Instant setup</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="text-3xl font-bold text-green-600">Save $2,490/month = $29,880/year!</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onGetStartedClick('cheapest-package')}
                className="bg-green-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                🎯 Get CBD Virtual Office - $9.99/month*
              </button>
              <button 
                onClick={() => onGetStartedClick('price-match')}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300"
              >
                💬 Price Match Guarantee
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ⚡ *Annual billing • Beat any competitor price • 30-day guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Why We're The Cheapest */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why We're Singapore's Cheapest Virtual Office Provider
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We keep costs low through operational efficiency, not by cutting corners on service quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Middleman Markup</h3>
              <p className="text-gray-600">
                Direct building owner relationship since 2009. No agent commissions passed to you.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Operations</h3>
              <p className="text-gray-600">
                Streamlined processes and technology reduce overhead costs, savings passed to you.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Volume Discounts</h3>
              <p className="text-gray-600">
                1000+ clients give us negotiating power for the best building rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Compare: We're 40-60% Cheaper Than Competitors
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Provider</th>
                  <th className="px-6 py-4 text-center font-semibold">Basic Package</th>
                  <th className="px-6 py-4 text-center font-semibold">Mail Forwarding</th>
                  <th className="px-6 py-4 text-center font-semibold">Setup Fee</th>
                  <th className="px-6 py-4 text-center font-semibold">CBD Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-bold text-green-700">VirtualAddress.biz</td>
                  <td className="px-6 py-4 text-center font-bold text-green-700">$9.99/month*</td>
                  <td className="px-6 py-4 text-center font-bold text-green-700">$15.99/month*</td>
                  <td className="px-6 py-4 text-center font-bold text-green-700">FREE</td>
                  <td className="px-6 py-4 text-center text-green-700">✅ International Plaza</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Competitor A</td>
                  <td className="px-6 py-4 text-center text-red-600">$88/month</td>
                  <td className="px-6 py-4 text-center text-red-600">$158/month</td>
                  <td className="px-6 py-4 text-center text-red-600">$200</td>
                  <td className="px-6 py-4 text-center text-gray-500">❌ HDB Building</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">Competitor B</td>
                  <td className="px-6 py-4 text-center text-red-600">$120/month</td>
                  <td className="px-6 py-4 text-center text-red-600">$180/month</td>
                  <td className="px-6 py-4 text-center text-red-600">$150</td>
                  <td className="px-6 py-4 text-center text-orange-500">⚠️ Non-CBD</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Competitor C</td>
                  <td className="px-6 py-4 text-center text-red-600">$95/month</td>
                  <td className="px-6 py-4 text-center text-red-600">$165/month</td>
                  <td className="px-6 py-4 text-center text-red-600">$300</td>
                  <td className="px-6 py-4 text-center text-green-500">✅ CBD</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-green-600">
              💰 Annual Savings vs Closest Competitor: $1,020 + No Setup Fee = $1,320 Total Savings!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Your CBD Virtual Office at $9.99/Month*?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 1000+ smart business owners who chose classy but affordable CBD address in Singapore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onGetStartedClick('cheapest-signup')}
              className="bg-white text-green-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              🎯 Get Started - Just $9.99/Month*
            </button>
            <button 
              onClick={() => onGetStartedClick('call-now')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300"
            >
              📞 Call Now for Instant Setup
            </button>
          </div>
          <p className="text-green-100 text-sm mt-4">
            ⚡ *Annual billing • Price match guarantee • 30-day guarantee
          </p>
        </div>
      </section>
    </main>
  );
}