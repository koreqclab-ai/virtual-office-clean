import React, { useState } from 'react';

export function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    serviceOfInterest: 'Self Collection ($50/month)',
    additionalMessage: '',
    needsRegistration: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `*New Business Address Inquiry*

*Contact Details:*
• Name: ${formData.fullName}
• Email: ${formData.email}
• Company: ${formData.companyName || 'Not specified'}
• Phone: ${formData.phoneNumber || 'Not provided'}

*Service Interest:*
${formData.serviceOfInterest}

*Company Registration:*
${formData.needsRegistration ? 'Yes, I need company registration services' : 'No, address service only'}

*Additional Message:*
${formData.additionalMessage || 'None'}

---
Sent from VirtualAddress.biz contact form`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6593855552?text=${encodedMessage}`;

    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');

    // Close modal and reset form
    onClose();
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      phoneNumber: '',
      serviceOfInterest: 'Self Collection ($50/month)',
      additionalMessage: '',
      needsRegistration: false
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Get Your Business Address</h2>
          <p>Complete the form below to get started with your International Plaza CBD address.</p>
          <button className="modal-close" onClick={onClose} aria-label="Close contact form">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your company name (optional)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+65 1234 5678"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="serviceOfInterest">Service of Interest</label>
            <select
              id="serviceOfInterest"
              name="serviceOfInterest"
              value={formData.serviceOfInterest}
              onChange={handleInputChange}
            >
              <option value="Self Collection ($50/month)">Self Collection ($50/month)</option>
              <option value="Mail Forwarding ($100/month)">Mail Forwarding ($100/month)</option>
              <option value="Mail Scanning ($100/month)">Mail Scanning ($100/month)</option>
              <option value="Mail Forwarding and Scanning ($150/month)">Mail Forwarding and Scanning ($150/month)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="additionalMessage">Additional Message</label>
            <textarea
              id="additionalMessage"
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleInputChange}
              placeholder="Any specific requirements or questions?"
              rows="4"
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="needsRegistration"
                checked={formData.needsRegistration}
                onChange={handleInputChange}
              />
              I need Company Registration Services
            </label>
          </div>

          <button type="submit" className="submit-button">
            Send Message via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}