import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileNavigation } from './components/MobileNavigation';

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
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

      {/* Staging Badge - only show in non-production environments */}
      {(() => {
        const isProd = import.meta.env.MODE === 'production' ||
                       import.meta.env.VITE_ENV === 'production' ||
                       import.meta.env.VERCEL_ENV === 'production';
        if (isProd) return null;

        return (
          <div style={{
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
        );
      })()}
    </div>
  );
}