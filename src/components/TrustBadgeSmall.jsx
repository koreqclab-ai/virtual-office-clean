import React from 'react';

const TrustBadgeSmall = ({ icon, alt, title, description, containerClassName = "" }) => {
  return (
    <div className={`text-center p-6 bg-white rounded-lg shadow-sm ${containerClassName}`}>
      <div className="mx-auto rounded-full bg-[#F5E6D3] flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4">
        <img
          src={icon}
          alt={alt}
          width="256"
          height="256"
          decoding="async"
          loading="lazy"
          fetchpriority="low"
          className="w-12 sm:w-14 md:w-16 h-auto select-none"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TrustBadgeSmall;