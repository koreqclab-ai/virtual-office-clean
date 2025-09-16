import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function ContactForm({ isOpen, onClose, selectedPlan }) {
  // Only render if we have a valid plan
  if (!selectedPlan) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    additionalMessage: '',
    optionalServices: {
      companyReg: false,
      corpSec: false,
      accounting: false,
      chequeDeposit: false,
    },
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const gotchaRef = useRef(null);

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

  // Reset form and status when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        additionalMessage: '',
        optionalServices: {
          companyReg: false,
          corpSec: false,
          accounting: false,
          chequeDeposit: false,
        },
      });
      setStatus(null);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in formData.optionalServices) {
      setFormData((prev) => ({
        ...prev,
        optionalServices: {
          ...prev.optionalServices,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Abort if honeypot filled
    if (gotchaRef.current?.value) return;

    setIsSubmitting(true);

    // Build optional services summary
    const selectedServices = Object.entries(formData.optionalServices)
      .filter(([_, checked]) => checked)
      .map(([key]) => {
        switch (key) {
          case 'companyReg':
            return 'Company Registration Services';
          case 'corpSec':
            return 'Corporate Secretarial Services';
          case 'accounting':
            return 'Annual Accounting Services';
          case 'chequeDeposit':
            return 'Cheque Deposit Services';
          default:
            return '';
        }
      })
      .filter(Boolean);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName || 'Not provided',
        phone: formData.phoneNumber || 'Not provided',
        selected_service: selectedPlan.label,
        message: formData.additionalMessage || 'No additional message',
        extra_services: selectedServices.join(', ') || 'None selected',
        _subject: 'New Enquiry – Anson & Co Virtual Address',
        _replyto: formData.email,
        _from: 'Anson & Co Enquiry Bot'
      };

      const response = await fetch('https://formspree.io/f/xwpnlagk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({
          success: true,
          selectedService: selectedPlan.label,
          optionalServices: selectedServices
        });

        // Fire success GA event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit_success', {
            event_category: 'Lead',
            event_label: selectedPlan.label,
            plan_id: selectedPlan.id,
            extra_services: selectedServices.length
          });
        }
      } else {
        throw new Error(`Formspree error: ${response.status}`);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus({
        success: false,
        message: '❌ Something went wrong. Please try again later or email us directly at hello@ansonco.sg'
      });

      // Fire error GA event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit_error', {
          event_category: 'Lead',
          event_label: selectedPlan.label,
          error_message: err.message
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStatus(null);
    onClose();
  };

  if (!isOpen) return null;

  // Success state
  if (status?.success) {
    return createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="success-title">
        <div className="fixed inset-0 bg-black/50" onClick={handleClose} />
        <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl outline-none p-8" onClick={(e) => e.stopPropagation()}>
          <div className="text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>

            <h2 id="success-title" className="text-2xl font-serif font-semibold text-[#8B7355] mb-4">
              Thank You!
            </h2>

            <div className="text-slate-600 mb-6 space-y-2">
              <p className="text-lg">✅ Thank you! We've received your request.</p>
              <p><strong>Selected service:</strong> {status.selectedService}</p>
              {status.optionalServices.length > 0 && (
                <p><strong>Optional services noted:</strong> {status.optionalServices.join(' / ')}</p>
              )}
            </div>

            <button
              onClick={handleClose}
              className="w-full rounded-full px-6 py-3 font-medium text-white bg-[#B59A7A] hover:bg-[#A88C6A] transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>,
      document.getElementById('portal-root')
    );
  }

  // Main form state
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <div className="fixed inset-0 bg-black/50" onClick={handleClose} />
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-xl outline-none max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>

        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 id="contact-title" className="text-2xl font-serif font-semibold text-[#8B7355]">Get Your Business Address</h2>
              <p className="mt-1 text-sm text-slate-600">Complete the form below to get started with your International Plaza CBD address.</p>
            </div>
            <button aria-label="Close contact form" onClick={handleClose} className="ml-4 rounded-full p-2 hover:bg-slate-100 text-2xl leading-none text-slate-400 hover:text-slate-600">
              ×
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 supports-[overflow:overlay]:overflow-overlay [-webkit-overflow-scrolling:touch]">
          <form id="contact-form" onSubmit={handleSubmit} className="grid gap-5">
            {/* Hidden fields for Formspree configuration */}
            <input
              type="text"
              name="_gotcha"
              ref={gotchaRef}
              autoComplete="off"
              tabIndex={-1}
              style={{ display: "none" }}
            />
            <input
              type="hidden"
              name="_replyto"
              value={formData.email}
            />

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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Selected Service</label>
              <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800">
                {selectedPlan.label}
              </div>
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-[#B59A7A] outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <p className="block text-sm font-medium text-slate-700 mb-3">I also need the following services:</p>
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="companyReg"
                    checked={formData.optionalServices.companyReg}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <span className="text-sm text-slate-700">Company Registration Services</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="corpSec"
                    checked={formData.optionalServices.corpSec}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <span className="text-sm text-slate-700">Corporate Secretarial Services</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="accounting"
                    checked={formData.optionalServices.accounting}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <span className="text-sm text-slate-700">Annual Accounting Services</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="chequeDeposit"
                    checked={formData.optionalServices.chequeDeposit}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 text-[#B59A7A] focus:ring-[#B59A7A] border-slate-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <span className="text-sm text-slate-700">Cheque Deposit Services</span>
                </label>
              </div>
            </div>
          </form>

          {/* Error Message */}
          {status?.success === false && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">
                {status.message}
              </p>
            </div>
          )}
        </div>

        {/* Sticky footer with Submit */}
        <div className="sticky bottom-0 z-10 bg-white/95 backdrop-blur border-t px-6 py-4">
          <button
            type="submit"
            form="contact-form"
            disabled={isSubmitting}
            className="w-full rounded-full px-5 py-3 font-medium text-white bg-[#B59A7A] hover:bg-[#A88C6A] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </div>

      </div>
    </div>,
    document.getElementById('portal-root')
  );
}