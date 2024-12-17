import { Title } from '@/types/type';
import { create } from 'zustand';

type WindowState = {
  windowsOpen: Title[];
  activeWindow: Title | null;
  prevActiveWindow: Title | null;
};

type WindowActions = {
  activateWindow: (title: Title) => void;
  openWindow: (title: Title) => void;
  closeWindow: (title: Title) => void;
  getWindowZIndex: (title: Title) => number;
};

const useWindowStore = create<WindowState & WindowActions>()((set, get) => ({
  windowsOpen: [],
  activeWindow: null,
  prevActiveWindow: null,

  openWindow: (title: Title) =>
    set((state) => {
      if (state.windowsOpen && state.windowsOpen.includes(title)) {
        return { windowsOpen: [...state.windowsOpen] };
      } else {
        return { windowsOpen: [...state.windowsOpen, title] };
      }
    }),

  closeWindow: (title: Title) =>
    set((state) => {
      return {
        windowsOpen: state.windowsOpen.filter((window) => window !== title),
      };
    }),

  activateWindow: (title: Title | null) =>
    set((state) => ({
      activeWindow: title,
      prevActiveWindow: state.activeWindow,
    })),

  getWindowZIndex: (title: Title) => {
    let zIndex: number;
    const { activeWindow, prevActiveWindow } = get();

    if (activeWindow === title) {
      zIndex = 50;
    } else if (prevActiveWindow === title) {
      zIndex = 30;
    } else {
      zIndex = 10;
    }
    return zIndex;
  },
}));

export default useWindowStore;
