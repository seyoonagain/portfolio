'use client';

import { Title } from '@/types/type';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface WindowContextType {
  windowsOpen: Title[];
  openWindow: (title: Title) => void;
  closeWindow: (title: Title) => void;
}

interface WindowProviderProps {
  children: ReactNode;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

const WindowContextProvider: React.FC<WindowProviderProps> = ({ children }) => {
  const [windowsOpen, setWindowsOpen] = useState<Title[]>([]);

  const openWindow = (title: Title) => {
    setWindowsOpen((prev) => {
      if (prev.includes(title)) {
        return [...prev];
      } else {
        return [...prev, title];
      }
    });
  };

  const closeWindow = (title: Title) => {
    setWindowsOpen((prev) => prev.filter((el) => el !== title));
  };

  return (
    <WindowContext.Provider
      value={{
        windowsOpen,
        openWindow,
        closeWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;

export const useWindowContext = (): WindowContextType => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindowContext must be used within a WindowProvider');
  }
  return context;
};
