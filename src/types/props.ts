import { StaticImageData } from 'next/image';
import { ComponentType, RefObject } from 'react';
import { Contacts, Title } from './type';

export interface IconProps {
  title: Title;
  file: StaticImageData;
  top: number;
  left: number;
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

export interface ContactItemProps {
  label: Contacts;
  value: string;
}
