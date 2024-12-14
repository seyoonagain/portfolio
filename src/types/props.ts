import { StaticImageData } from 'next/image';
import { ComponentType, RefObject } from 'react';
import { Title } from './type';

export interface IconProps {
  title: string;
  file: StaticImageData;
  top: number;
  left: number;
  isClicked: boolean;
  onDoubleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseDown: () => void;
}

export interface TitleBarProps {
  title: string;
  width: number;
  ref: RefObject<HTMLDivElement | null>;
}

export interface WindowFrameProps {
  title: Title;
  width: number;
  height: number;
  content: ComponentType;
}
