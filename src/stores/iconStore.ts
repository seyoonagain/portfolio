import { Title } from '@/types/type';
import { create } from 'zustand';

type IconState = {
  activeIcon: Title | null;
  prevActiveIcon: Title | null;
};

type IconActions = {
  activateIcon: (title: Title | null) => void;
  deactivateIcon: () => void;
  getIconZIndex: (title: Title) => number;
  isIconSelected: (title: Title) => boolean;
};

const useIconStore = create<IconState & IconActions>()((set, get) => ({
  activeIcon: null,
  prevActiveIcon: null,

  activateIcon: (title: Title | null) =>
    set((state) => ({
      activeIcon: title,
      prevActiveIcon: state.activeIcon,
    })),

  deactivateIcon: () => set({ activeIcon: null }),

  getIconZIndex: (title: Title) => {
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

  isIconSelected: (title: Title) => {
    const { activeIcon } = get();
    return activeIcon === title;
  },
}));

export default useIconStore;
