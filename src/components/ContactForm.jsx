import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ContactForm({ isOpen, onClose, buttonSource = 'unknown' }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'self-collection',
    message: '',
    source: buttonSource
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Form submitted:', formData);
      
      // Send via Formspree
      const response = await fetch('https://formspree.io/f/xwpnlagk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          serviceInterest: formData.serviceInterest,
          message: formData.message,
          buttonSource: formData.source,
          _replyto: formData.email, // Formspree auto-response field
          _subject: 'New Virtual Office Inquiry from ' + formData.name
        })
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      setSubmitStatus('success');
      
      // Redirect to thank you page after successful submission
      setTimeout(() => {
        navigate('/thank-you');
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const getFormTitle = () => {
    switch (buttonSource) {
      case 'get-started':
        return 'Get Business Address Now with Your Virtual Office';
      case 'subscribe':
        return 'Subscribe to Virtual Office Service';
      case 'consultation':
        return 'Schedule Your Consultation';
      default:
        return 'Contact Us';
    }
  };

  const getFormDescription = () => {
    switch (buttonSource) {
      case 'get-started':
        return 'Ready to get your premium International Plaza virtual office? Let us know your requirements and we\'ll get you set up.';
      case 'subscribe':
        return 'Choose your virtual office package and we\'ll help you get your premium CBD address now.';
      case 'consultation':
        return 'Book a free consultation to discuss your virtual office needs and find the perfect solution.';
      default:
        return 'Get in touch with us for your virtual office needs.';
    }
  };

  return (
    <div className="modal-backdrop fixed inset-0 flex items-center justify-center z-50 p-4"
         style={{ backgroundColor: 'rgba(74, 69, 63, 0.6)' }}>
      <div className="contact-modal rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto"
           style={{
             backgroundColor: '#FEFDFB',
             border: '1px solid #EEEBE6',
             boxShadow: '0 8px 32px rgba(184, 168, 152, 0.15)',
             maxWidth: '600px'
           }}>
        <div className="modal-header"
             style={{
               padding: '2rem 2rem 1rem 2rem',
               borderBottom: '1px solid #F0EDE8'
             }}>
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="modal-title mb-2"
                  style={{
                    color: '#4A453F',
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    lineHeight: '1.3',
                    marginBottom: '0.5rem'
                  }}>
                {getFormTitle()}
              </h2>
              <p className="modal-subtitle"
                 style={{
                   color: '#8B8680',
                   fontSize: '1rem',
                   fontWeight: '400',
                   marginBottom: '0'
                 }}>
                {getFormDescription()}
              </p>
            </div>
            <button
              onClick={onClose}
              className="modal-close transition-colors p-2"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: '#8B8680',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.25rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#5C5651';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#8B8680';
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="modal-body"
             style={{
               padding: '1.5rem 2rem 2rem 2rem'
             }}>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-lg"
                 style={{
                   backgroundColor: '#F7F6F4',
                   border: '1px solid #B8A898'
                 }}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                     style={{ color: '#B8A898' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-medium" style={{ color: '#5C5651' }}>Thank you! We'll contact you within 24 hours. Redirecting...</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-lg"
                 style={{
                   backgroundColor: '#FEF7F7',
                   border: '1px solid #C87171'
                 }}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                     style={{ color: '#C87171' }}>
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="font-medium" style={{ color: '#C87171' }}>Something went wrong. Please try again or call us directly.</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="form-label"
                       style={{
                         color: '#5C5651',
                         fontSize: '0.875rem',
                         fontWeight: '500',
                         marginBottom: '0.5rem',
                         display: 'block'
                       }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input w-full transition-all"
                  style={{
                    backgroundColor: '#F7F6F4',
                    border: '1px solid #EEEBE6',
                    borderRadius: '8px',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    color: '#5C5651',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = '#B8A898';
                    e.target.style.backgroundColor = '#FEFDFB';
                    e.target.style.boxShadow = '0 0 0 3px rgba(184, 168, 152, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#EEEBE6';
                    e.target.style.backgroundColor = '#F7F6F4';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label"
                       style={{
                         color: '#5C5651',
                         fontSize: '0.875rem',
                         fontWeight: '500',
                         marginBottom: '0.5rem',
                         display: 'block'
                       }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full transition-all"
                  style={{
                    backgroundColor: '#F7F6F4',
                    border: '1px solid #EEEBE6',
                    borderRadius: '8px',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    color: '#5C5651',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = '#B8A898';
                    e.target.style.backgroundColor = '#FEFDFB';
                    e.target.style.boxShadow = '0 0 0 3px rgba(184, 168, 152, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#EEEBE6';
                    e.target.style.backgroundColor = '#F7F6F4';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Company & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="form-label"
                       style={{
                         color: '#5C5651',
                         fontSize: '0.875rem',
                         fontWeight: '500',
                         marginBottom: '0.5rem',
                         display: 'block'
                       }}>
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input w-full transition-all"
                  style={{
                    backgroundColor: '#F7F6F4',
                    border: '1px solid #EEEBE6',
                    borderRadius: '8px',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    color: '#5C5651',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = '#B8A898';
                    e.target.style.backgroundColor = '#FEFDFB';
                    e.target.style.boxShadow = '0 0 0 3px rgba(184, 168, 152, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#EEEBE6';
                    e.target.style.backgroundColor = '#F7F6F4';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="form-label"
                       style={{
                         color: '#5C5651',
                         fontSize: '0.875rem',
                         fontWeight: '500',
                         marginBottom: '0.5rem',
                         display: 'block'
                       }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input w-full transition-all"
                  style={{
                    backgroundColor: '#F7F6F4',
                    border: '1px solid #EEEBE6',
                    borderRadius: '8px',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    color: '#5C5651',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = '#B8A898';
                    e.target.style.backgroundColor = '#FEFDFB';
                    e.target.style.boxShadow = '0 0 0 3px rgba(184, 168, 152, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#EEEBE6';
                    e.target.style.backgroundColor = '#F7F6F4';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="+65 1234 5678"
                />
              </div>
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="serviceInterest" className="form-label"
                       style={{
                         color: '#5C5651',
                         fontSize: '0.875rem',
                         fontWeight: '500',
                         marginBottom: '0.5rem',
                         display: 'block'
                       }}>
                Service of Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className="form-input w-full transition-all"
                  style={{
                    backgroundColor: '#F7F6F4',
                    border: '1px solid #EEEBE6',
                    borderRadius: '8px',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    color: '#5C5651',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = '#B8A898';
                    e.target.style.backgroundColor = '#FEFDFB';
                    e.target.style.boxShadow = '0 0 0 3px rgba(184, 168, 152, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#EEEBE6';
                    e.target.style.backgroundColor = '#F7F6F4';
                    e.target.style.boxShadow = 'none';
                  }}
              >
                <option value="self-collection">Self Collection ($50/month)</option>
                <option value="mail-forwarding">Mail Forwarding ($100/month)</option>
                <option value="mail-scanning">Mail Scanning ($100/month)</option>
                <option value="consultation">Need consultation first</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="form-label"
                       style={{
                         color: '#5C5651',
                         fontSize: '0.875rem',
                         fontWeight: '500',
                         marginBottom: '0.5rem',
                         display: 'block'
                       }}>
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="form-textarea w-full transition-all resize-vertical"
                style={{
                  backgroundColor: '#F7F6F4',
                  border: '1px solid #EEEBE6',
                  borderRadius: '8px',
                  padding: '0.875rem 1rem',
                  fontSize: '1rem',
                  color: '#5C5651',
                  width: '100%',
                  boxSizing: 'border-box',
                  minHeight: '120px'
                }}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#B8A898';
                  e.target.style.backgroundColor = '#FEFDFB';
                  e.target.style.boxShadow = '0 0 0 3px rgba(184, 168, 152, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#EEEBE6';
                  e.target.style.backgroundColor = '#F7F6F4';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="Any specific requirements or questions?"
              />
            </div>

            {/* Submit Button */}
            <div className="modal-actions flex flex-col sm:flex-row gap-4"
                 style={{
                   justifyContent: 'flex-end',
                   marginTop: '2rem',
                   paddingTop: '1.5rem',
                   borderTop: '1px solid #F0EDE8'
                 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 transition-all duration-300"
                style={{
                  backgroundColor: isSubmitting ? '#D4CFC7' : '#B8A898',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  minWidth: '140px',
                  pointerEvents: isSubmitting ? 'none' : 'auto'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#A39086';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(184, 168, 152, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#B8A898';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Send Inquiry'
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  color: '#8B8680',
                  border: '1px solid #EEEBE6',
                  borderRadius: '50px',
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '400',
                  cursor: 'pointer',
                  minWidth: '140px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F7F6F4';
                  e.target.style.borderColor = '#B8A898';
                  e.target.style.color = '#5C5651';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = '#EEEBE6';
                  e.target.style.color = '#8B8680';
                }}
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-6 text-center"
               style={{
                 borderTop: '1px solid #F0EDE8'
               }}>
            <p className="mb-2"
               style={{
                 color: '#8B8680',
                 fontWeight: '400'
               }}>
              Prefer to talk? Call us directly:
            </p>
            <a href="tel:+6561234567" className="transition-colors"
               style={{
                 color: '#B8A898',
                 fontWeight: '500'
               }}
               onMouseEnter={(e) => {
                 e.target.style.color = '#A39086';
               }}
               onMouseLeave={(e) => {
                 e.target.style.color = '#B8A898';
               }}>
              +65 6123 4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}