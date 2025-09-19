// Google Analytics 4 and Google Ads tracking utility for Vite project

// Initialize gtag function
export const gtag = function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
};

// Initialize Google Analytics
export const initGA = () => {
  gtag('js', new Date());
  gtag('config', 'G-9QWP0849FN', {
    page_title: document.title,
    page_location: window.location.href
  });
  gtag('config', 'AW-17479879284');
};

// Track page views
export const trackPageView = (url, title) => {
  gtag('config', 'G-9QWP0849FN', {
    page_title: title,
    page_location: url,
  });
};

// Contact modal events
export const trackContactModalOpen = (planType, planPrice) => {
  gtag('event', 'contact_modal_open', {
    event_category: 'engagement',
    event_label: planType,
    value: planPrice,
    plan_type: planType,
    plan_price: planPrice
  });
};

export const trackContactModalClose = (planType) => {
  gtag('event', 'contact_modal_close', {
    event_category: 'engagement',
    event_label: planType,
    plan_type: planType
  });
};

// Form interaction events
export const trackFormStart = (planType, planPrice) => {
  gtag('event', 'begin_checkout', {
    event_category: 'ecommerce',
    event_label: planType,
    value: planPrice,
    currency: 'SGD',
    items: [{
      item_id: planType.toLowerCase().replace(/\s+/g, '_'),
      item_name: planType,
      category: 'business_address',
      price: planPrice,
      quantity: 1
    }]
  });
};

export const trackServiceSelection = (serviceName, planType) => {
  gtag('event', 'select_item', {
    event_category: 'ecommerce',
    event_label: serviceName,
    item_list_name: 'optional_services',
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      category: 'additional_service'
    }]
  });
};

export const trackFormValidationError = (fieldName, errorType, planType) => {
  gtag('event', 'form_validation_error', {
    event_category: 'form_interaction',
    event_label: `${fieldName}_${errorType}`,
    field_name: fieldName,
    error_type: errorType,
    plan_type: planType
  });
};

export const trackFormSubmission = (planType, planPrice, optionalServices) => {
  gtag('event', 'purchase', {
    event_category: 'ecommerce',
    transaction_id: `inquiry_${Date.now()}`,
    value: planPrice,
    currency: 'SGD',
    items: [{
      item_id: planType.toLowerCase().replace(/\s+/g, '_'),
      item_name: planType,
      category: 'business_address',
      price: planPrice,
      quantity: 1
    }]
  });

  // Track as Google Ads conversion
  gtag('event', 'conversion', {
    send_to: 'AW-17479879284/contact_form_submission',
    value: planPrice,
    currency: 'SGD',
    transaction_id: `inquiry_${Date.now()}`
  });
};

export const trackFormSubmissionSuccess = (planType, planPrice) => {
  gtag('event', 'contact_form_success', {
    event_category: 'conversion',
    event_label: planType,
    value: planPrice,
    plan_type: planType,
    plan_price: planPrice
  });
};