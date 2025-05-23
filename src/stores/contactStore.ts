import { create } from 'zustand';

import { ContactsMethod } from '@/components/contact/types';

type ContactState = {
  selectedContactItem: ContactsMethod | null;
};

type ContactActions = {
  selectContactItem: (contactMethod: ContactsMethod | null) => void;
  unselectContactItem: () => void;
};

const useContactStore = create<ContactState & ContactActions>()(set => ({
  selectedContactItem: null,

  selectContactItem: (contactMethod: ContactsMethod | null) => {
    set({ selectedContactItem: contactMethod });
  },

  unselectContactItem: () => set({ selectedContactItem: null }),
}));

export default useContactStore;
