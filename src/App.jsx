import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { TrustIndicatorsFooter } from './components/TrustIndicatorsFooter';
import { MobileLocationPanel } from './components/MobileLocationPanel';
import { MobileNavigation } from './components/MobileNavigation';
// Removed old ChatWidget - now using AI-powered widget in HTML
import { ContactForm } from './components/ContactForm';
import { ThankYouPage } from './components/ThankYouPage';
// Moved to docs folder: AnytimeStyleLanding, DarkStyleLanding, ArcSpacesStyleLanding
import { FAQ } from './components/FAQ';
import { ACRACompliancePage } from './components/ACRACompliancePage';
import { FinTechPage } from './components/FinTechPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormSource, setContactFormSource] = useState('unknown');

  const handleGetStartedClick = (source) => {
    setContactFormSource(source);
    setIsContactFormOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-light text-gray-800 overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Header
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                onGetStartedClick={handleGetStartedClick}
              />
              <MainContent onGetStartedClick={handleGetStartedClick} />
              <TrustIndicatorsFooter />
            </>
          } />
          {/* Moved to docs folder: /old-main, /anytime-style, /dark-style routes */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/acra-compliance" element={<ACRACompliancePage onGetStartedClick={handleGetStartedClick} />} />
          <Route path="/fintech" element={<FinTechPage onGetStartedClick={handleGetStartedClick} />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        <MobileLocationPanel />
        <MobileNavigation 
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          onGetStartedClick={handleGetStartedClick}
        />
        {/* ChatWidget removed - now using AI-powered widget in HTML */}
        <ContactForm 
          isOpen={isContactFormOpen}
          onClose={() => setIsContactFormOpen(false)}
          buttonSource={contactFormSource}
        />
      </div>
    </Router>
  );
}

export default App;