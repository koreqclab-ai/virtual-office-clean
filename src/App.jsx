import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { MobileLocationPanel } from './components/MobileLocationPanel';
import { MobileNavigation } from './components/MobileNavigation';
import { ChatWidget } from './components/ChatWidget';
import { ContactForm } from './components/ContactForm';
import { ThankYouPage } from './components/ThankYouPage';
import { AnytimeStyleLanding } from './components/AnytimeStyleLanding';
import { DarkStyleLanding } from './components/DarkStyleLanding';
import { ArcSpacesStyleLanding } from './components/ArcSpacesStyleLanding';
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
          <Route path="/" element={<ArcSpacesStyleLanding onGetStartedClick={handleGetStartedClick} />} />
          <Route path="/old-main" element={
            <>
              <Header 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                onGetStartedClick={handleGetStartedClick}
              />
              <Navigation />
              <MainContent onGetStartedClick={handleGetStartedClick} />
              <Footer />
            </>
          } />
          <Route path="/anytime-style" element={<AnytimeStyleLanding onGetStartedClick={handleGetStartedClick} />} />
          <Route path="/dark-style" element={<DarkStyleLanding onGetStartedClick={handleGetStartedClick} />} />
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
        <ChatWidget />
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