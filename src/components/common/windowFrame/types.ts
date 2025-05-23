import { IconTitle } from '@/components/home/icon';
import { ReactNode, RefObject } from 'react';

export type TitleBarProps = {
  title: IconTitle | 'Email';
  ref: RefObject<HTMLDivElement | null>;
};

type WindowFrameProps = {
  title: IconTitle | 'Email';
  content: ReactNode;
};

export default WindowFrameProps;
