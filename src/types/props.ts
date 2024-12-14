import { StaticImageData } from 'next/image';
import { ComponentType, RefObject } from 'react';
import { Title } from './type';

export interface IconProps {
  title: Title;
  file: StaticImageData;
  top: number;
  left: number;
  onDoubleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface TitleBarProps {
  title: Title;
  width: number;
  ref: RefObject<HTMLDivElement | null>;
}

export interface WindowFrameProps {
  title: Title;
  width: number;
  height: number;
  content: ComponentType;
}
