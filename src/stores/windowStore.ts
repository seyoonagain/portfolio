import { create } from 'zustand';

import { IconTitle } from '@/components/home/icon';

type WindowState = {
  windowsOpen: (IconTitle | 'Email')[];
  activeWindow: IconTitle | 'Email' | null;
  prevActiveWindows: (IconTitle | 'Email')[];
};

type WindowActions = {
  activateWindow: (title: IconTitle | 'Email') => void;
  openWindow: (title: IconTitle | 'Email') => void;
  closeWindow: (title: IconTitle | 'Email') => void;
  getWindowZIndex: (title: IconTitle | 'Email') => number;
};

const useWindowStore = create<WindowState & WindowActions>()((set, get) => ({
  windowsOpen: [],
  activeWindow: null,
  prevActiveWindows: [],

  openWindow: (title: IconTitle | 'Email') =>
    set(state => {
      if (state.windowsOpen.length > 0 && state.windowsOpen.includes(title)) {
        return { windowsOpen: [...state.windowsOpen] };
      } else {
        return { windowsOpen: [...state.windowsOpen, title] };
      }
    }),

  closeWindow: (title: IconTitle | 'Email') =>
    set(state => {
      return {
        windowsOpen: state.windowsOpen.filter(window => window !== title),
        activeWindow: state.prevActiveWindows.length > 0 ? state.prevActiveWindows.pop() : null,
      };
    }),

  activateWindow: (title: IconTitle | 'Email' | null) =>
    set(state => {
      if (state.activeWindow && state.activeWindow !== title) {
        return {
          activeWindow: title,
          prevActiveWindows: !state.prevActiveWindows.includes(state.activeWindow)
            ? [...state.prevActiveWindows.filter(window => window !== title), state.activeWindow]
            : [
                ...state.prevActiveWindows.filter(
                  window => window !== state.activeWindow || window !== title,
                ),
                state.activeWindow,
              ],
        };
      } else return { activeWindow: title };
    }),

  getWindowZIndex: (title: IconTitle | 'Email') => {
    let zIndex: number;
    const { activeWindow, prevActiveWindows } = get();

    if (activeWindow === title) {
      zIndex = 10 + get().windowsOpen.length * 10;
    } else {
      zIndex = 10 + prevActiveWindows.findIndex(window => window === title) * 10;
    }

    return zIndex;
  },
}));

export default useWindowStore;
