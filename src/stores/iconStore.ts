import { IconTitle } from '@/components/home/icon';
import { create } from 'zustand';

type IconState = {
  activeIcon: IconTitle | null;
  prevActiveIcon: IconTitle | null;
};

type IconActions = {
  activateIcon: (title: IconTitle | null) => void;
  deactivateIcon: () => void;
  getIconZIndex: (title: IconTitle) => number;
  isIconSelected: (title: IconTitle) => boolean;
};

const useIconStore = create<IconState & IconActions>()((set, get) => ({
  activeIcon: null,
  prevActiveIcon: null,

  activateIcon: (title: IconTitle | null) =>
    set(state => ({
      activeIcon: title,
      prevActiveIcon: state.activeIcon,
    })),

  deactivateIcon: () => set({ activeIcon: null }),

  getIconZIndex: (title: IconTitle) => {
    let zIndex: number;
    const { activeIcon, prevActiveIcon } = get();

    if (activeIcon === title) {
      zIndex = 5;
    } else if (prevActiveIcon === title) {
      zIndex = 3;
    } else {
      zIndex = 1;
    }

    return zIndex;
  },

  isIconSelected: (title: IconTitle) => {
    const { activeIcon } = get();
    return activeIcon === title;
  },
}));

export default useIconStore;
