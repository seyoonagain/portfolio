import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contacts/Contacts';
import Projects from '@/components/Projects/Projects';
import { WindowFrameProps } from '@/types/props';

export const WINDOW_CONTENT: Record<string, WindowFrameProps> = {
  aboutMe: {
    title: 'About me',
    width: 700,
    height: 700,
    content: AboutMe,
  },
  contact: {
    title: 'Contact',
    width: 500,
    height: 500,
    content: Contact,
  },
  projects: {
    title: 'Projects',
    width: 700,
    height: 700,
    content: Projects,
  },
} as const;

export const WINDOW_STYLE =
  'scrollable z-49 absolute box-content outline outline-zinc-950 bg-white' as const;
