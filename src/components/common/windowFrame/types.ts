import { IconTitle } from '@/components/home/icon';
import { ReactNode, RefObject } from 'react';

export type TitleBarProps = {
  title: IconTitle;
  width: number;
  ref: RefObject<HTMLDivElement | null>;
};

export type WindowData = {
  title: IconTitle;
  width: number;
  height: number;
};

type WindowFrameProps = WindowData & { content: ReactNode };

export default WindowFrameProps;
