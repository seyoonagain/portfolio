import { create } from 'zustand';

import { Contacts } from '@/components/contacts/types';

type ContactState = {
  selectedContactItem: Contacts | null;
  isPoppedUp: boolean;
};

type ContactActions = {
  selectContactItem: (contactMethod: Contacts) => void;
  setContactItem: (contactMethod: Contacts | null) => void;
  unselectContactItem: () => void;
  closePopUp: () => void;
};

const useContactStore = create<ContactState & ContactActions>()(set => ({
  selectedContactItem: null,
  isPoppedUp: false,

  selectContactItem: (contactMethod: Contacts) => {
    set({ selectedContactItem: contactMethod, isPoppedUp: true });
  },

  setContactItem: (contactMethod: Contacts | null) => {
    set({ selectedContactItem: contactMethod, isPoppedUp: false });
  },

  unselectContactItem: () => set({ selectedContactItem: null }),

  closePopUp: () => set({ isPoppedUp: false, selectedContactItem: null }),
}));

export default useContactStore;
