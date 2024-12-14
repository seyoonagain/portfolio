'use client';

import { Title } from '@/types/type';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IconZIndexContextType {
  setActiveIcon: Dispatch<SetStateAction<Title | null>>;
  isIconClicked: (title: Title) => boolean;
  activateIcon: (title: Title) => void;
  getZIndex: (title: Title) => void;
}

interface IconProviderProps {
  children: ReactNode;
}

const IconZIndexContext = createContext<IconZIndexContextType | undefined>(
  undefined
);

const MAX_Z_INDEX = 5;
const MID_Z_INDEX = 3;
const MIN_Z_INDEX = 1;

const IconZIndexContextProvider: React.FC<IconProviderProps> = ({
  children,
}) => {
  const [activeIcon, setActiveIcon] = useState<Title | null>(null);
  const [prevActiveIcon, setPrevActiveIcon] = useState<Title | null>(null);

  const activateIcon = (title: Title) => {
    setActiveIcon((prev) => {
      setPrevActiveIcon(prev);
      return title;
    });
  };

  const getZIndex = (title: Title) => {
    if (activeIcon === title) {
      return MAX_Z_INDEX;
    } else if (prevActiveIcon === title) {
      return MID_Z_INDEX;
    }
    return MIN_Z_INDEX;
  };

  const isIconClicked = (title: Title) => activeIcon === title;

  return (
    <IconZIndexContext.Provider
      value={{
        setActiveIcon,
        isIconClicked,
        activateIcon,
        getZIndex,
      }}
    >
      {children}
    </IconZIndexContext.Provider>
  );
};

export default IconZIndexContextProvider;

export const useIconZIndexContext = (): IconZIndexContextType => {
  const context = useContext(IconZIndexContext);
  if (!context) {
    throw new Error(
      'useIconZIndexContext must be used within a IconZIndexContextProvider'
    );
  }
  return context;
};
