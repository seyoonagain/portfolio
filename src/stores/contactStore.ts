import { create } from 'zustand';

import { ContactsMethod } from '@/components/contact/types';

type ContactState = {
  selectedContactItem: ContactsMethod | null;
  isPoppedUp: boolean;
};

type ContactActions = {
  selectContactItem: (contactMethod: ContactsMethod) => void;
  setContactItem: (contactMethod: ContactsMethod | null) => void;
  unselectContactItem: () => void;
  closePopUp: () => void;
};

const useContactStore = create<ContactState & ContactActions>()(set => ({
  selectedContactItem: null,
  isPoppedUp: false,

  selectContactItem: (contactMethod: ContactsMethod) => {
    set({ selectedContactItem: contactMethod, isPoppedUp: true });
  },

  setContactItem: (contactMethod: ContactsMethod | null) => {
    set({ selectedContactItem: contactMethod, isPoppedUp: false });
  },

  unselectContactItem: () => set({ selectedContactItem: null }),

  closePopUp: () => set({ isPoppedUp: false, selectedContactItem: null }),
}));

export default useContactStore;
