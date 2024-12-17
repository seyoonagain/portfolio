import { Contacts } from '@/types/type';
import { create } from 'zustand';

type ContactState = {
  selectedContactItem: Contacts | null;
  isPoppedUp: boolean;
};

type ContactActions = {
  selectContactItem: (contactMethod: Contacts) => void;
  unselectContactItem: () => void;
  closePopUp: () => void;
};

const useContactStore = create<ContactState & ContactActions>()((set) => ({
  selectedContactItem: null,
  isPoppedUp: false,

  selectContactItem: (contactMethod: Contacts) => {
    set({ selectedContactItem: contactMethod, isPoppedUp: true });
  },

  unselectContactItem: () => set({ selectedContactItem: null }),

  closePopUp: () => set({ isPoppedUp: false, selectedContactItem: null }),
}));

export default useContactStore;
