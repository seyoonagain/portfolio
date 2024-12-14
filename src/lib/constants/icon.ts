import { IconProps } from '@/types/props';
import { Title } from '@/types/type';
import aboutMe from '@public/images/aboutMe.png';
import contact from '@public/images/contact.png';
import projects from '@public/images/projects.png';

export const ICON_INFO: Array<
  { title: Title } & Omit<
    IconProps,
    'isClicked' | 'onDoubleClick' | 'onMouseDown'
  >
> = [
  {
    title: 'About me',
    file: aboutMe,
    top: 48,
    left: 20,
  },
  {
    title: 'Contact',
    file: contact,
    top: 48,
    left: 120,
  },
  {
    title: 'Projects',
    file: projects,
    top: 154,
    left: 20,
  },
] as const;
