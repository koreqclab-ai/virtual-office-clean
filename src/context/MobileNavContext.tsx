import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { lockScroll, unlockScroll } from '../utils/scrollLock';

type Ctx = {
  isNavOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  toggleNav: () => void;
};

const MobileNavContext = createContext<Ctx | null>(null);

export const MobileNavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = useCallback(() => setIsNavOpen(true), []);
  const closeNav = useCallback(() => setIsNavOpen(false), []);
  const toggleNav = useCallback(() => setIsNavOpen(v => !v), []);

  // Body scroll lock for the nav layer only
  useEffect(() => {
    if (isNavOpen) {
      lockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [isNavOpen]);

  return (
    <MobileNavContext.Provider value={{ isNavOpen, openNav, closeNav, toggleNav }}>
      {children}
    </MobileNavContext.Provider>
  );
};

export const useMobileNav = () => {
  const ctx = useContext(MobileNavContext);
  if (!ctx) throw new Error('useMobileNav must be used within MobileNavProvider');
  return ctx;
};