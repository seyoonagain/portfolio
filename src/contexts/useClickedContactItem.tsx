'use client';

import { Contacts } from '@/types/type';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ClickedContactItemContextType {
  clickedContactItem: Contacts | null;
  setClickedContactItem: Dispatch<SetStateAction<Contacts | null>>;
}

interface ClickedContactItemProviderProps {
  children: ReactNode;
}

const ClickedContactItemContext = createContext<
  ClickedContactItemContextType | undefined
>(undefined);

const ClickedContactItemProvider: React.FC<ClickedContactItemProviderProps> = ({
  children,
}) => {
  const [clickedContactItem, setClickedContactItem] = useState<Contacts | null>(
    null
  );

  return (
    <ClickedContactItemContext.Provider
      value={{ clickedContactItem, setClickedContactItem }}
    >
      {children}
    </ClickedContactItemContext.Provider>
  );
};

export default ClickedContactItemProvider;

export const useClickedContactItemContext =
  (): ClickedContactItemContextType => {
    const context = useContext(ClickedContactItemContext);
    if (!context) {
      throw new Error(
        'useClickedContactItemContext must be used within a ClickedContactItemContextProvider'
      );
    }
    return context;
  };
