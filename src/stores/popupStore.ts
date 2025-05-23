import { create } from 'zustand';

export type PopupState = {
  text: string;
  confirm: () => void;
  isPoppedUp?: boolean;
};

type PopupActions = {
  showPopup: ({ text, confirm, isPoppedUp }: PopupState) => void;
  closePopup: () => void;
};

const usePopupStore = create<PopupState & PopupActions>()(set => ({
  text: '',
  confirm: () => {},
  isPoppedUp: false,

  showPopup: ({ text, confirm, isPoppedUp = true }) =>
    set(() => ({
      text,
      confirm,
      isPoppedUp,
    })),

  closePopup: () => set(() => ({ text: '', confirm: () => {}, isPoppedUp: false })),
}));

export default usePopupStore;
