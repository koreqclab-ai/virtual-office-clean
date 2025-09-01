import React from 'react';

export function MobileLocationPanel() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-30 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 font-light">Office Location</p>
          <p className="font-medium text-gray-800">International Plaza • Anson Road CBD</p>
        </div>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
}