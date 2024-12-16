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

interface ConfirmPopUpContextType {
  confirmPopUp: Contacts | null;
  setConfirmPopUp: Dispatch<SetStateAction<Contacts | null>>;
  isPoppedUp: boolean;
}

interface ConfirmPopUpProviderProps {
  children: ReactNode;
}

const ConfirmPopUpContext = createContext<ConfirmPopUpContextType | undefined>(
  undefined
);

const ConfirmPopUpProvider: React.FC<ConfirmPopUpProviderProps> = ({
  children,
}) => {
  const [confirmPopUp, setConfirmPopUp] = useState<Contacts | null>(null);
  const isPoppedUp = !!confirmPopUp;

  return (
    <ConfirmPopUpContext.Provider
      value={{ confirmPopUp, setConfirmPopUp, isPoppedUp }}
    >
      {children}
    </ConfirmPopUpContext.Provider>
  );
};

export default ConfirmPopUpProvider;

export const useConfirmPopUpContext = (): ConfirmPopUpContextType => {
  const context = useContext(ConfirmPopUpContext);
  if (!context) {
    throw new Error(
      'useConfirmPopUpContext must be used within a ConfirmPopUpContextProvider'
    );
  }
  return context;
};
