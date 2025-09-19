import React, { useState, useEffect } from 'react';
import {
  trackContactModalOpen,
  trackContactModalClose,
  trackFormStart,
  trackServiceSelection,
  trackFormValidationError,
  trackFormSubmission,
  trackFormSubmissionSuccess
} from '../utils/gtag';

type PlanData = {
  id: string;
  label: string;
  price: number;
  segment: string;
};

type Props = {
  onClose: () => void;
  selectedPlan?: PlanData | null;
};

export function ContactFormContent({ onClose, selectedPlan }: Props) {
  // Early return if no plan is selected
  if (!selectedPlan) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    serviceOfInterest: selectedPlan.label,
    additionalMessage: '',
    optionalServices: {
      companyReg: false,
      corpSec: false,
      accounting: false,
      chequeDeposit: false,
      mailScanning: false,
      phoneAnswering: false,
      creditChecks: false,
      gstReg: false
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [hasTrackedFormStart, setHasTrackedFormStart] = useState(false);

  // Track modal open on mount
  useEffect(() => {
    trackContactModalOpen(selectedPlan.label, selectedPlan.price);
  }, [selectedPlan]);

  // Track form start on first interaction
  useEffect(() => {
    if (selectedPlan && !hasTrackedFormStart) {
      const trackFirstInteraction = () => {
        if (!hasTrackedFormStart) {
          trackFormStart(selectedPlan.label, selectedPlan.price);
          setHasTrackedFormStart(true);
        }
      };

      // Track on first form field focus
      const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
      formInputs.forEach(input => {
        input.addEventListener('focus', trackFirstInteraction, { once: true });
      });

      return () => {
        formInputs.forEach(input => {
          input.removeEventListener('focus', trackFirstInteraction);
        });
      };
    }
  }, [selectedPlan, hasTrackedFormStart]);

  const handleClose = () => {
    // Track modal close
    if (selectedPlan) {
      trackContactModalClose(selectedPlan.label);
    }
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (serviceName: keyof typeof formData.optionalServices) => {
    const serviceLabels = {
      companyReg: 'Singapore Company Registration',
      corpSec: 'Corporate Secretarial Services',
      accounting: 'Accounting & Bookkeeping',
      chequeDeposit: 'Cheque Banking & Deposits',
      mailScanning: 'Mail Scanning Services',
      phoneAnswering: 'Phone Answering Services',
      creditChecks: 'Director/Shareholder Credit Check',
      gstReg: 'GST Registration Services'
    };

    const isCurrentlySelected = formData.optionalServices[serviceName];
    const serviceLabel = serviceLabels[serviceName];

    // Track service selection/deselection
    if (!isCurrentlySelected && serviceLabel && selectedPlan) {
      trackServiceSelection(serviceLabel, selectedPlan.label);
    }

    setFormData(prev => ({
      ...prev,
      optionalServices: {
        ...prev.optionalServices,
        [serviceName]: !prev.optionalServices[serviceName]
      }
    }));
  };

  const getSelectedOptionalServices = () => {
    const serviceLabels = {
      companyReg: 'Singapore Company Registration',
      corpSec: 'Corporate Secretarial Services',
      accounting: 'Accounting & Bookkeeping',
      chequeDeposit: 'Cheque Banking & Deposits',
      mailScanning: 'Mail Scanning Services',
      phoneAnswering: 'Phone Answering Services',
      creditChecks: 'Director/Shareholder Credit Check',
      gstReg: 'GST Registration Services'
    };

    return Object.entries(formData.optionalServices)
      .filter(([_, isSelected]) => isSelected)
      .map(([key, _]) => serviceLabels[key as keyof typeof serviceLabels])
      .join(', ');
  };

  const getFormspreeEndpoint = () => {
    if (import.meta.env.MODE === 'production' || import.meta.env.PROD) {
      return 'https://formspree.io/f/moqoygzy'; // Production endpoint
    }
    return 'https://formspree.io/f/mzzpeqza'; // Development/staging endpoint
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const selectedOptionalServices = getSelectedOptionalServices();

      const submissionData = {
        ...formData,
        selectedOptionalServices,
        planPrice: selectedPlan.price,
        planSegment: selectedPlan.segment,
        formSubmissionTime: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        currentUrl: window.location.href
      };

      const response = await fetch(getFormspreeEndpoint(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');

        // Track successful form submission
        trackFormSubmission(selectedPlan.label, selectedPlan.price, selectedOptionalServices);
        trackFormSubmissionSuccess(selectedPlan.label, selectedPlan.price);

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          phoneNumber: '',
          serviceOfInterest: selectedPlan.label,
          additionalMessage: '',
          optionalServices: {
            companyReg: false,
            corpSec: false,
            accounting: false,
            chequeDeposit: false,
            mailScanning: false,
            phoneAnswering: false,
            creditChecks: false,
            gstReg: false
          }
        });
        setHasTrackedFormStart(false);

        // Close modal after 2 seconds
        setTimeout(() => {
          handleClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');

        // Track form submission error
        if (selectedPlan) {
          trackFormValidationError('form_submission', 'server_error', selectedPlan.label);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');

      // Track network/client error
      if (selectedPlan) {
        trackFormValidationError('form_submission', 'network_error', selectedPlan.label);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col max-h-[min(92svh,92dvh,92vh)]">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-8 text-center mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h3>
          <p className="text-gray-600 mb-6">Thank you for your interest. We'll get back to you within 24 hours.</p>
          <button
            onClick={handleClose}
            className="w-full rounded-full px-6 py-3 font-medium text-white bg-[#B59A7A] hover:bg-[#A88C6A] transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-h-[min(92svh,92dvh,92vh)]">
      {/* Header */}
      <div className="px-6 pt-6 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-2xl font-semibold text-[#8B7355]">Get Your Business Address</h2>
          <button
            aria-label="Close"
            onClick={handleClose}
            className="p-2 rounded hover:bg-black/5 text-xl leading-none text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Form */}
      <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          <div className="grid gap-5">
            {/* Hidden fields for Formspree configuration */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Service of Interest (readonly) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service of Interest
              </label>
              <input
                type="text"
                name="serviceOfInterest"
                value={formData.serviceOfInterest}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-transparent"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-transparent"
                  placeholder="+65 9xxx xxxx"
                />
              </div>
            </div>

            {/* Optional Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Optional Services (check all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'companyReg', label: 'Singapore Company Registration' },
                  { key: 'corpSec', label: 'Corporate Secretarial Services' },
                  { key: 'accounting', label: 'Accounting & Bookkeeping' },
                  { key: 'chequeDeposit', label: 'Cheque Banking & Deposits' },
                  { key: 'mailScanning', label: 'Mail Scanning Services' },
                  { key: 'phoneAnswering', label: 'Phone Answering Services' },
                  { key: 'creditChecks', label: 'Director/Shareholder Credit Check' },
                  { key: 'gstReg', label: 'GST Registration Services' }
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.optionalServices[key as keyof typeof formData.optionalServices]}
                      onChange={() => handleCheckboxChange(key as keyof typeof formData.optionalServices)}
                      className="w-4 h-4 text-[#B59A7A] border-gray-300 rounded focus:ring-[#B59A7A]"
                    />
                    <span className="text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="additionalMessage" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                id="additionalMessage"
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B59A7A] focus:border-transparent resize-none"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            {/* Error State */}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">
                  There was an error submitting your request. Please try again or contact us directly.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Submit area */}
        <div className="px-6 py-4 border-t bg-white flex-shrink-0">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl py-3 font-semibold text-white hover:opacity-95 transition bg-[#B59A7A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
      </form>
    </div>
  );
}