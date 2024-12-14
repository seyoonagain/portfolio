'use client';

import { Title } from '@/types/type';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface WindowZIndexContextType {
  activateWindow: (title: Title) => void;
  getZIndex: (title: Title) => void;
}

interface WindowProviderProps {
  children: ReactNode;
}

const WindowZIndexContext = createContext<WindowZIndexContextType | undefined>(
  undefined
);

const MAX_Z_INDEX = 50;
const MID_Z_INDEX = 30;
const MIN_Z_INDEX = 10;

const WindowZIndexContextProvider: React.FC<WindowProviderProps> = ({
  children,
}) => {
  const [activeWindow, setActiveWindow] = useState<Title | null>(null);
  const [prevActiveWindow, setPrevActiveWindow] = useState<Title | null>(null);

  const activateWindow = (title: Title) => {
    setActiveWindow((prev) => {
      setPrevActiveWindow(prev);
      return title;
    });
  };

  const getZIndex = (title: Title) => {
    if (activeWindow === title) {
      return MAX_Z_INDEX;
    } else if (prevActiveWindow === title) {
      return MID_Z_INDEX;
    }
    return MIN_Z_INDEX;
  };

  return (
    <WindowZIndexContext.Provider
      value={{
        activateWindow,
        getZIndex,
      }}
    >
      {children}
    </WindowZIndexContext.Provider>
  );
};

export default WindowZIndexContextProvider;

export const useWindowZIndexContext = (): WindowZIndexContextType => {
  const context = useContext(WindowZIndexContext);
  if (!context) {
    throw new Error(
      'useWindowZIndexContext must be used within a WindowZIndexContextProvider'
    );
  }
  return context;
};
