import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contacts/Contacts';
import Projects from '@/components/Projects/Projects';
import { WindowFrameProps } from '@/types/props';
import { Title } from '@/types/type';

export const WINDOW_CONTENT: Record<Title, WindowFrameProps> = {
  'About me': {
    title: 'About me',
    width: 600,
    height: 600,
    content: AboutMe,
  },
  Contact: {
    title: 'Contact',
    width: 450,
    height: 164,
    content: Contact,
  },
  Projects: {
    title: 'Projects',
    width: 600,
    height: 600,
    content: Projects,
  },
} as const;

export const WINDOW_STYLE =
  'scrollable absolute box-content outline outline-zinc-950 bg-white' as const;
