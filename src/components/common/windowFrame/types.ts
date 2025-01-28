import { ComponentType, RefObject } from 'react';
import { IconTitle } from '@common/icon/types';

export type TitleBarProps = {
  title: IconTitle;
  width: number;
  ref: RefObject<HTMLDivElement | null>;
};

type WindowFrameProps = {
  title: IconTitle;
  width: number;
  height: number;
  content: ComponentType;
};

export default WindowFrameProps;
