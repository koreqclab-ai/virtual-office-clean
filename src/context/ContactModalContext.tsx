import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

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
  selectedPlan: PlanData | null;
};

const ContactModalContext = createContext<ContactModalContextType | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);

  const openContact = useCallback((plan?: PlanData | null) => {
    setSelectedPlan(plan ?? null);
    setOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setOpen(false);
    setSelectedPlan(null);
  }, []);

  return (
    <ContactModalContext.Provider value={{ openContact, closeContact, isOpen, selectedPlan }}>
      {children}
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