import { ReactNode, RefObject } from 'react';

import { IconTitle } from '@/components/home/icon';

export type TitleBarProps = {
  title: IconTitle | 'Email';
  ref: RefObject<HTMLDivElement | null>;
};

type WindowFrameProps = {
  title: IconTitle | 'Email';
  content: ReactNode;
};

export default WindowFrameProps;
