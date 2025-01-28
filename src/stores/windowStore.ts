import { IconTitle } from '@/components/common/icon/types';
import { create } from 'zustand';

type WindowState = {
  windowsOpen: IconTitle[];
  activeWindow: IconTitle | null;
  prevActiveWindows: IconTitle[];
};

type WindowActions = {
  activateWindow: (title: IconTitle) => void;
  openWindow: (title: IconTitle) => void;
  closeWindow: (title: IconTitle) => void;
  getWindowZIndex: (title: IconTitle) => number;
};

const useWindowStore = create<WindowState & WindowActions>()((set, get) => ({
  windowsOpen: [],
  activeWindow: null,
  prevActiveWindows: [],

  openWindow: (title: IconTitle) =>
    set((state) => {
      if (state.windowsOpen.length > 0 && state.windowsOpen.includes(title)) {
        return { windowsOpen: [...state.windowsOpen] };
      } else {
        return { windowsOpen: [...state.windowsOpen, title] };
      }
    }),

  closeWindow: (title: IconTitle) =>
    set((state) => {
      return {
        windowsOpen: state.windowsOpen.filter((window) => window !== title),
        activeWindow:
          state.prevActiveWindows.length > 0
            ? state.prevActiveWindows.pop()
            : null,
      };
    }),

  activateWindow: (title: IconTitle | null) =>
    set((state) => {
      if (state.activeWindow && state.activeWindow !== title) {
        return {
          activeWindow: title,
          prevActiveWindows: !state.prevActiveWindows.includes(
            state.activeWindow
          )
            ? [
                ...state.prevActiveWindows.filter((window) => window !== title),
                state.activeWindow,
              ]
            : [
                ...state.prevActiveWindows.filter(
                  (window) => window !== state.activeWindow || window !== title
                ),
                state.activeWindow,
              ],
        };
      } else return { activeWindow: title };
    }),

  getWindowZIndex: (title: IconTitle) => {
    let zIndex: number;
    const { activeWindow, prevActiveWindows } = get();

    if (activeWindow === title) {
      zIndex = 50;
    } else if (prevActiveWindows.at(-1) === title) {
      zIndex = 30;
    } else {
      zIndex = 10;
    }
    return zIndex;
  },
}));

export default useWindowStore;
