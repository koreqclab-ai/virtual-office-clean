import React from 'react';

export function Navigation() {
  const subNavItems = [
    { href: "#virtual-address", label: "Virtual Address" },
    { href: "#mail-services", label: "Mail Services" },
    { href: "#phone-services", label: "Phone Services" },
    { href: "#meeting-rooms", label: "Meeting Rooms" },
    { href: "#company-secretary", label: "Company Secretary" }
  ];

  return (
    <nav className="bg-white border-b border-orange-100 py-3 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-8">
          {subNavItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="font-optima_medium text-[17px] leading-[22.1px] capitalize text-orange-300 hover:text-sky-600 hover:border-sky-600 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}