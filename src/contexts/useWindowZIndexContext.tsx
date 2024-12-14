'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface WindowZIndexContextType {
  activateWindow: (title: string) => void;
  getZIndex: (title: string) => void;
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
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [prevActiveWindow, setPrevActiveWindow] = useState<string | null>(null);
  const activateWindow = (title: string) => {
    setActiveWindow((prev) => {
      setPrevActiveWindow(prev);
      return title;
    });
  };
  const getZIndex = (title: string) => {
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
      'useWindowZIndexContext must be used within a WindowProvider'
    );
  }
  return context;
};
