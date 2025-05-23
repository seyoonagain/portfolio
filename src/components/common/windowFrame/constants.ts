import { IconTitle } from '@/components/home/icon';
import { WindowData } from './types';

export const WINDOW_CONTENT: Record<IconTitle, WindowData> = {
  'About me': {
    title: 'About me',
    width: 600,
    height: 600,
  },
  Contact: {
    title: 'Contact',
    width: 450,
    height: 155,
  },
  Projects: {
    title: 'Projects',
    width: 864,
    height: 712,
  },
} as const;

export const WINDOW_STYLE =
  'flex flex-col absolute bg-white box-content outline outline-1 outline-zinc-950 drop-shadow-frameShadow' as const;
