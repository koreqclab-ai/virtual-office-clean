// ContactModalFS.jsx
import React, { useEffect, useRef, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwpnlagk";

export default function ContactModalFS({
  isOpen,
  onClose,
  selectedService // e.g. "Local Company - Mail Scanning S$120/year"
}) {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    // optional services
    cr: false, // Company Registration Services
    cs: false, // Corporate Secretarial Services
    aa: false, // Annual Accounting Services
    cd: false  // Cheque Deposit Services
  });

  // spam honeypot
  const gotchaRef = useRef(null);

  // close on ESC
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    if (isOpen) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // abort if honeypot filled
    if (gotchaRef.current?.value) return;

    setSubmitting(true);
    try {
      const selected = selectedService || "";
      const extras = [
        form.cr && "Company Registration Services",
        form.cs && "Corporate Secretarial Services",
        form.aa && "Annual Accounting Services",
        form.cd && "Cheque Deposit Services"
      ].filter(Boolean).join(", ");

      const payload = {
        name: form.name,
        email: form.email,
        company: form.company || "Not provided",
        phone: form.phone || "Not provided",
        selected_service: selected,
        message: form.message || "No additional message",
        extra_services: extras || "None selected",
        _subject: "New Enquiry – Anson & Co Virtual Address",
        _replyto: form.email,
        _from: "Anson & Co Enquiry Bot"
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
      setSent(true);
    } catch (err) {
      setError("❌ Something went wrong. Please try again later or email us directly at hello@ansonco.sg");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 id="contact-title" className="text-2xl font-semibold" style={{color: "#7d6a57"}}>
            Get Your Business Address
          </h2>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded p-2 hover:bg-black/5"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-600">
                Complete the form below to get started with your International Plaza CBD address.
              </p>

              {/* Name / Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Full Name<span className="text-red-500">*</span></label>
                  <input
                    className="w-full rounded-lg border px-3 py-2"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email Address<span className="text-red-500">*</span></label>
                  <input
                    className="w-full rounded-lg border px-3 py-2"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Company / Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Company Name</label>
                  <input
                    className="w-full rounded-lg border px-3 py-2"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Your company name (optional)"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone Number</label>
                  <input
                    className="w-full rounded-lg border px-3 py-2"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+65 0000 0000"
                  />
                </div>
              </div>

              {/* Selected Service (locked) */}
              <div>
                <label className="mb-1 block text-sm font-medium">Selected Service</label>
                <input
                  className="w-full cursor-not-allowed rounded-lg border bg-gray-50 px-3 py-2"
                  type="text"
                  name="selected_service_readonly"
                  value={selectedService || ""}
                  readOnly
                  aria-readonly="true"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium">Additional Message</label>
                <textarea
                  className="min-h-[110px] w-full rounded-lg border px-3 py-2"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              {/* Optional services */}
              <fieldset className="space-y-2">
                <legend className="mb-2 text-sm font-semibold">I also need the following services:</legend>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="cr" checked={form.cr} onChange={onChange} />
                  <span>Company Registration Services</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="cs" checked={form.cs} onChange={onChange} />
                  <span>Corporate Secretarial Services</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="aa" checked={form.aa} onChange={onChange} />
                  <span>Annual Accounting Services</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="cd" checked={form.cd} onChange={onChange} />
                  <span>Cheque Deposit Services</span>
                </label>
              </fieldset>

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
                value={form.email}
              />

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl px-4 py-3 font-semibold text-white disabled:opacity-70"
                  style={{ backgroundColor: "#9f8a73" }}
                >
                  {submitting ? "Submitting…" : "Submit Request"}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-lg">✅ <b>Thank you!</b> We've received your request.</p>
              <div className="rounded-lg bg-gray-50 p-4">
                <p><b>Selected service:</b> {selectedService}</p>
                {(() => {
                  const selectedOptional = [
                    form.cr && "Company Registration",
                    form.cs && "Corporate Secretarial",
                    form.aa && "Annual Accounting",
                    form.cd && "Cheque Deposit"
                  ].filter(Boolean);

                  return selectedOptional.length > 0 ? (
                    <p className="mt-2"><b>Optional services noted:</b> {selectedOptional.join(" / ")}</p>
                  ) : null;
                })()}
              </div>
              <p className="text-sm text-gray-600">We'll respond within 1 business day.</p>
              <div className="pt-1">
                <button
                  onClick={onClose}
                  className="w-full rounded-xl px-4 py-3 font-semibold text-white"
                  style={{ backgroundColor: "#9f8a73" }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}