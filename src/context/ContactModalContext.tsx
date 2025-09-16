import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ContactForm } from '../components/ContactForm';
import { lockScroll, unlockScroll } from '../utils/scrollLock';

type PlanData = {
  id: string;
  label: string;
  price: number;
  segment: string;
};

type ContactModalContextType = {
  openContact: (plan?: PlanData) => void;
  closeContact: () => void;
  isOpen: boolean;
};

const ContactModalContext = createContext<ContactModalContextType | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);

  const openContact = useCallback((plan?: PlanData) => {
    if (plan) {
      setSelectedPlan(plan);
      setOpen(true);
    }
  }, []);

  const closeContact = useCallback(() => {
    setOpen(false);
    setSelectedPlan(null);
  }, []);

  // Lock body scroll when modal is open to prevent background scrolling
  React.useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // Cleanup on unmount
    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  return (
    <ContactModalContext.Provider value={{ openContact, closeContact, isOpen }}>
      {children}
      {/* Mount modal at root level so it overlays across all routes */}
      <div id="contact-modal-root">
        <ContactForm isOpen={isOpen} onClose={closeContact} selectedPlan={selectedPlan} />
      </div>
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider');
  }
  return context;
}