import linkAddresses from '@public/images/linkAddresses.svg';
import macintoshHappy from '@public/images/macintoshHappy.svg';
import save from '@public/images/save.svg';
import { IconProps } from '@/components/home/icon';

export const ICON_INFO: Array<IconProps> = [
  { title: 'About me', file: macintoshHappy, top: 48, left: 20 },
  { title: 'Contact', file: linkAddresses, top: 48, left: 120 },
  { title: 'Projects', file: save, top: 154, left: 20 },
] as const;
