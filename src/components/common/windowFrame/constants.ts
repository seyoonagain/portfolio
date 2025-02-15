import { IconTitle } from '@common/icon/types';
import AboutMe from '@/components/aboutMe';
import Contact from '@/components/contacts';
import Projects from '@/components/projects';

import WindowFrameProps from './types';

export const WINDOW_CONTENT: Record<IconTitle, WindowFrameProps> = {
  'About me': {
    title: 'About me',
    width: 600,
    height: 600,
    content: AboutMe,
  },
  Contact: {
    title: 'Contact',
    width: 450,
    height: 155,
    content: Contact,
  },
  Projects: {
    title: 'Projects',
    width: 864,
    height: 712,
    content: Projects,
  },
} as const;

export const WINDOW_STYLE =
  'absolute bg-white box-content outline outline-1 outline-zinc-950 drop-shadow-frameShadow scrollable' as const;
