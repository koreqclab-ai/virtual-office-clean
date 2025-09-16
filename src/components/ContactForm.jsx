import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function ContactForm({ isOpen, onClose, selectedPlan }) {
  // Only render if we have a valid plan
  if (!selectedPlan) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    serviceOfInterest: selectedPlan.label,
    additionalMessage: '',
    extraServices: {
      companyRegistration: false,
      corporateSecretarial: false,
      annualAccounting: false,
      chequeDeposit: false,
    }
  });

  // Fire GA event when modal opens
  useEffect(() => {
    if (isOpen && selectedPlan && typeof gtag !== 'undefined') {
      gtag('event', 'open_contact_modal', {
        event_category: 'Lead',
        event_label: selectedPlan.label,
        plan_id: selectedPlan.id,
        price: selectedPlan.price,
        segment: selectedPlan.segment,
        value: selectedPlan.price
      });
    }
  }, [isOpen, selectedPlan]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  // Keyboard handling
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const fullNameInput = document.getElementById('fullName');
        if (fullNameInput) fullNameInput.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('extraServices.')) {
      const serviceName = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        extraServices: {
          ...prev.extraServices,
          [serviceName]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedServices = Object.entries(formData.extraServices)
      .filter(([_, selected]) => selected)
      .map(([service]) => {
        switch (service) {
          case 'companyRegistration': return 'Company Registration';
          case 'corporateSecretarial': return 'Corporate Secretarial';
          case 'annualAccounting': return 'Annual Accounting';
          case 'chequeDeposit': return 'Cheque Deposit Services';
          default: return service;
        }
      });

    const message = `
New Contact Form Submission:

Full Name: ${formData.fullName}
Email: ${formData.email}
Company Name: ${formData.companyName || 'Not provided'}
Phone Number: ${formData.phoneNumber || 'Not provided'}
Service of Interest: ${formData.serviceOfInterest}
Additional Message: ${formData.additionalMessage || 'None'}

Additional Services:
${selectedServices.length > 0 ? selectedServices.join(', ') : 'None requested'}
    `.trim();

    console.log('Form submission:', message);
    alert('Thank you for your interest! We will contact you shortly.');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      phoneNumber: '',
      serviceOfInterest: 'Self Collection ($50/month)',
      additionalMessage: '',
      extraServices: {
        companyRegistration: false,
        corporateSecretarial: false,
        annualAccounting: false,
        chequeDeposit: false,
      }
    });

    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-xl outline-none max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>

        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 id="contact-title" className="text-2xl font-serif font-semibold text-[#8B7355]">Get Your Business Address</h2>
              <p className="mt-1 text-sm text-slate-600">Complete the form below to get started with your International Plaza CBD address.</p>
            </div>
            <button aria-label="Close contact form" onClick={onClose} className="ml-4 rounded-full p-2 hover:bg-slate-100 text-2xl leading-none text-slate-400 hover:text-slate-600">
              ×
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 supports-[overflow:overlay]:overflow-overlay [-webkit-overflow-scrolling:touch]">
          <form id="contact-form" onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Your company name (optional)"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+65 0000 0000"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Selected Service</label>
              <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800">
                {selectedPlan.label}
              </div>
              <input
                type="hidden"
                name="serviceOfInterest"
                value={selectedPlan.label}
              />
            </div>

            <div>
              <label htmlFor="additionalMessage" className="block text-sm font-medium text-slate-700 mb-2">Additional Message</label>
              <textarea
                id="additionalMessage"
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
                placeholder="Any specific requirements or questions?"
                rows="4"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors resize-none"
              />
            </div>

            <div>
              <p className="block text-sm font-medium text-slate-700 mb-3">I also need the following services:</p>
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="extraServices.companyRegistration"
                    checked={formData.extraServices.companyRegistration}
                    onChange={handleInputChange}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded"
                  />
                  <span className="text-sm text-slate-700">Company Registration Services</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="extraServices.corporateSecretarial"
                    checked={formData.extraServices.corporateSecretarial}
                    onChange={handleInputChange}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded"
                  />
                  <span className="text-sm text-slate-700">Corporate Secretarial Services</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="extraServices.annualAccounting"
                    checked={formData.extraServices.annualAccounting}
                    onChange={handleInputChange}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded"
                  />
                  <span className="text-sm text-slate-700">Annual Accounting Services</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="extraServices.chequeDeposit"
                    checked={formData.extraServices.chequeDeposit}
                    onChange={handleInputChange}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded"
                  />
                  <span className="text-sm text-slate-700">Cheque Deposit Services</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Sticky footer with Submit */}
        <div className="sticky bottom-0 z-10 bg-white/95 backdrop-blur border-t px-6 py-4">
          <button type="submit" form="contact-form" className="w-full rounded-full px-5 py-3 font-medium text-white bg-[#B59A7A] hover:bg-[#A88C6A] transition-colors duration-200">
            Submit Request
          </button>
        </div>

      </div>
    </div>,
    document.getElementById('portal-root')
  );
}