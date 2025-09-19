import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileNavigation } from './components/MobileNavigation';
import AnalyticsBindings from './components/AnalyticsBindings';
import ContactFormModal from './components/ContactFormModal';
import { useContactModal } from './context/ContactModalContext';

import { MainContent } from './components/MainContent';
import { FAQ } from './components/FAQ';
import { IncorporationGuide } from './components/IncorporationGuide';
import { ACRACompliancePage } from './components/ACRACompliancePage';

function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);
}

export default function App() {
  useHashScroll();
  const { isOpen, closeContact, selectedPlan, openContact } = useContactModal();

  // Dev QA helper - only in development
  if (import.meta.env.DEV) {
    window.__openContact = (plan) => openContact(plan || null);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnalyticsBindings />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/incorporation-guide" element={<IncorporationGuide />} />
          <Route path="/acra-compliance" element={<ACRACompliancePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <MobileNavigation />

      {/* Contact Modal - Portaled to body */}
      <ContactFormModal
        isOpen={isOpen}
        onClose={closeContact}
        selectedPlan={selectedPlan}
      />

      {/* Dev Badge - only show in development */}
      {import.meta.env.MODE !== 'production' && (
        <div className="dev-badge" style={{
          position: 'fixed',
          right: 12,
          bottom: 12,
          zIndex: 9999,
          padding: '6px 10px',
          borderRadius: 8,
          fontSize: 12,
          background: '#0f172a',
          color: '#fff',
          opacity: 0.85
        }}>
          STAGING PREVIEW
        </div>
      )}
    </div>
  );
}